// Telegram Bot Utilities

// Credentials injected at build time from GitHub variables
const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '';
// Comma-separated chat IDs for multiple recipients
const TELEGRAM_CHAT_IDS = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_IDS || '';

// Send message to a single chat (server-side version)
export async function sendTelegramMessage(
  chatId: number,
  text: string,
  parseMode: 'Markdown' | 'HTML' = 'Markdown'
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN;

  if (!botToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: parseMode,
      }),
    });

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error(`Failed to send message to ${chatId}:`, error);
    return false;
  }
}

// Client-side function to send notification directly to Telegram
export async function sendTelegramNotificationClient(data: {
  name: string;
  email: string;
  phone?: string;
  score: number;
  leadQuality: 'high' | 'medium' | 'low';
  timestamp: string;
}): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_IDS) {
    console.warn('Telegram credentials not configured');
    return false;
  }

  const message = formatLeadNotification(data);

  // Parse comma-separated chat IDs
  const chatIds = TELEGRAM_CHAT_IDS.split(',').map(id => id.trim()).filter(id => id);

  if (chatIds.length === 0) {
    console.warn('No Telegram chat IDs configured');
    return false;
  }

  let successCount = 0;

  // Send to all chat IDs
  for (const chatId of chatIds) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const result = await response.json();
      if (result.ok) successCount++;
    } catch (error) {
      console.error(`Failed to send Telegram notification to ${chatId}:`, error);
    }
  }

  return successCount > 0;
}

// Format lead notification message
export function formatLeadNotification(data: {
  name: string;
  email: string;
  phone?: string;
  score: number;
  leadQuality: 'high' | 'medium' | 'low';
  timestamp: string;
}): string {
  const qualityEmoji = data.leadQuality === 'high' ? '🔥' : data.leadQuality === 'medium' ? '⚡' : '📊';
  const qualityText = data.leadQuality === 'high' ? 'HIGH' : data.leadQuality === 'medium' ? 'MEDIUM' : 'LOW';

  return `
${qualityEmoji} *New Assessment Lead* ${qualityEmoji}

👤 *Name:* ${escapeMarkdown(data.name)}
📧 *Email:* ${escapeMarkdown(data.email)}
${data.phone ? `📱 *Phone:* ${escapeMarkdown(data.phone)}` : ''}

📊 *Score:* ${data.score}/100
🎯 *Lead Quality:* ${qualityText}

🕐 *Time:* ${new Date(data.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

---
_SWTS Strategy Assessment_
  `.trim();
}

// Escape special characters for Telegram Markdown
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}
