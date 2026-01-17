import { Redis } from '@upstash/redis';

// Initialize Redis client
const getRedis = () => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.warn('Upstash Redis not configured, using fallback');
    return null;
  }

  return new Redis({ url, token });
};

const SUBSCRIBERS_KEY = 'telegram_subscribers';
const SECRET_CODE = process.env.TELEGRAM_SECRET_CODE || 'SWTS2024';

// Verify secret code
export function verifySecretCode(code: string): boolean {
  return code.trim().toUpperCase() === SECRET_CODE.toUpperCase();
}

// Add subscriber
export async function addSubscriber(chatId: number, name: string): Promise<boolean> {
  const redis = getRedis();

  if (!redis) {
    // Fallback: just log it
    console.log(`New subscriber (no Redis): ${chatId} - ${name}`);
    return true;
  }

  try {
    // Store subscriber with name
    await redis.hset(SUBSCRIBERS_KEY, { [chatId.toString()]: name });
    return true;
  } catch (error) {
    console.error('Failed to add subscriber:', error);
    return false;
  }
}

// Remove subscriber
export async function removeSubscriber(chatId: number): Promise<boolean> {
  const redis = getRedis();

  if (!redis) {
    return true;
  }

  try {
    await redis.hdel(SUBSCRIBERS_KEY, chatId.toString());
    return true;
  } catch (error) {
    console.error('Failed to remove subscriber:', error);
    return false;
  }
}

// Get all subscribers
export async function getSubscribers(): Promise<number[]> {
  const redis = getRedis();

  // First check environment variable for fallback subscribers
  const envSubscribers = process.env.TELEGRAM_SUBSCRIBER_IDS || '';
  const fallbackIds = envSubscribers
    .split(',')
    .map(id => parseInt(id.trim()))
    .filter(id => !isNaN(id) && id > 0);

  if (!redis) {
    return fallbackIds;
  }

  try {
    const subscribers = await redis.hgetall(SUBSCRIBERS_KEY);
    const redisIds = Object.keys(subscribers || {}).map(id => parseInt(id));

    // Combine Redis subscribers with fallback
    const allIds = [...new Set([...redisIds, ...fallbackIds])];
    return allIds;
  } catch (error) {
    console.error('Failed to get subscribers:', error);
    return fallbackIds;
  }
}

// Check if subscribed
export async function isSubscribed(chatId: number): Promise<boolean> {
  const subscribers = await getSubscribers();
  return subscribers.includes(chatId);
}
