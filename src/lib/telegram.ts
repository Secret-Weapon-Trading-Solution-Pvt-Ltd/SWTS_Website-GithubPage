// Telegram Bot Utilities

// Send message to a single chat
export async function sendTelegramMessage(
  chatId: number,
  text: string,
  parseMode: 'Markdown' | 'HTML' = 'Markdown'
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

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
