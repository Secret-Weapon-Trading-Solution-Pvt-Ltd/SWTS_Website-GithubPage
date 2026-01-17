import { Redis } from '@upstash/redis';

const PIN_EXPIRY_SECONDS = 300; // 5 minutes
const PIN_PREFIX = 'telegram_pin:';

// Generate a random 6-digit PIN
export function generatePin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Get Redis client
const getRedis = () => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
};

// In-memory fallback for development (PINs stored with expiry time)
const memoryPins: Map<string, { visitorId: string; createdAt: number }> = new Map();

// Clean expired PINs from memory
function cleanExpiredPins() {
  const now = Date.now();
  for (const [pin, data] of memoryPins.entries()) {
    if (now - data.createdAt > PIN_EXPIRY_SECONDS * 1000) {
      memoryPins.delete(pin);
    }
  }
}

// Store a PIN for a visitor
export async function storePin(pin: string, visitorId: string): Promise<boolean> {
  const redis = getRedis();

  if (redis) {
    try {
      // Store PIN with expiry
      await redis.setex(`${PIN_PREFIX}${pin}`, PIN_EXPIRY_SECONDS, visitorId);
      return true;
    } catch (error) {
      console.error('Failed to store PIN in Redis:', error);
    }
  }

  // Fallback to memory
  cleanExpiredPins();
  memoryPins.set(pin, { visitorId, createdAt: Date.now() });
  return true;
}

// Verify and consume a PIN (returns visitorId if valid)
export async function verifyPin(pin: string): Promise<string | null> {
  const redis = getRedis();

  if (redis) {
    try {
      const visitorId = await redis.get<string>(`${PIN_PREFIX}${pin}`);
      if (visitorId) {
        // Delete PIN after use (one-time)
        await redis.del(`${PIN_PREFIX}${pin}`);
        return visitorId;
      }
      return null;
    } catch (error) {
      console.error('Failed to verify PIN in Redis:', error);
    }
  }

  // Fallback to memory
  cleanExpiredPins();
  const data = memoryPins.get(pin);
  if (data) {
    memoryPins.delete(pin); // One-time use
    return data.visitorId;
  }

  return null;
}

// Check if PIN exists (without consuming)
export async function pinExists(pin: string): Promise<boolean> {
  const redis = getRedis();

  if (redis) {
    try {
      const exists = await redis.exists(`${PIN_PREFIX}${pin}`);
      return exists === 1;
    } catch (error) {
      console.error('Failed to check PIN in Redis:', error);
    }
  }

  // Fallback to memory
  cleanExpiredPins();
  return memoryPins.has(pin);
}
