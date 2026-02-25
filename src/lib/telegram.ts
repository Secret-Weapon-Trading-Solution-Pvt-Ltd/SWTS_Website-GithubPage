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

// Send a contact card to a single chat (server-side version)
// This renders a native contact with a built-in Call button in Telegram
export async function sendTelegramContact(
  chatId: number,
  phone: string,
  firstName: string,
  lastName?: string
): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN;

  if (!botToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return false;
  }

  try {
    const payload: Record<string, unknown> = {
      chat_id: chatId,
      phone_number: phone,
      first_name: firstName,
    };

    if (lastName) {
      payload.last_name = lastName;
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendContact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result.ok;
  } catch (error) {
    console.error(`Failed to send contact to ${chatId}:`, error);
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
  answers?: { questionId: string; value: string | string[] }[];
  questions?: { id: string; question: string; options?: { value: string; label: string }[] }[];
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
      // Send the text notification
      const msgResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const msgResult = await msgResponse.json();
      if (msgResult.ok) successCount++;

      // Follow up with clickable phone number if available
      if (data.phone?.trim()) {
        const phone = data.phone.trim();
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: phone,
            entities: [{ type: 'phone_number', offset: 0, length: phone.length }],
          }),
        });
      }
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
  answers?: { questionId: string; value: string | string[] }[];
  questions?: { id: string; question: string; options?: { value: string; label: string }[] }[];
}): string {
  const qualityText = data.leadQuality === 'high' ? 'HIGH' : data.leadQuality === 'medium' ? 'MEDIUM' : 'LOW';

  let qaSection = '';
  if (data.answers && data.questions) {
    const qaLines = data.answers.map((answer, index) => {
      const question = data.questions?.find(q => q.id === answer.questionId);
      if (!question) return '';
      const answerValue = Array.isArray(answer.value) ? answer.value.join(', ') : answer.value;
      const selectedOption = question.options?.find(o => o.value === answerValue);
      const answerLabel = selectedOption ? selectedOption.label : answerValue;
      return `*Q${index + 1}: ${escapeMarkdown(question.question)}*\nA: ${escapeMarkdown(answerLabel)}`;
    }).filter(Boolean);
    qaSection = `\n\n--- RESPONSES ---\n\n${qaLines.join('\n\n')}`;
  }

  return `
*New Assessment Lead*

*Name:* ${escapeMarkdown(data.name)}
*Email:* ${escapeMarkdown(data.email)}
${data.phone ? `*Phone:* ${escapeMarkdown(data.phone)}` : ''}

*Score:* ${data.score}/100
*Lead Quality:* ${qualityText}

*Time:* ${new Date(data.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST${qaSection}

---
_SWTS Strategy Assessment_
  `.trim();
}

// Client-side function to send contact form data to Telegram
export async function sendContactFormToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_IDS) {
    console.warn('Telegram credentials not configured');
    return false;
  }

  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const message = `
*New Contact Form Message*

*Name:* ${escapeMarkdown(data.name)}
*Email:* ${escapeMarkdown(data.email)}
*Phone:* ${escapeMarkdown(data.phone)}
${data.service ? `*Service Interest:* ${escapeMarkdown(data.service)}` : ''}

*Message:*
${escapeMarkdown(data.message)}

*Time:* ${timestamp} IST

---
_SWTS Contact Form_
  `.trim();

  const chatIds = TELEGRAM_CHAT_IDS.split(',').map(id => id.trim()).filter(id => id);

  if (chatIds.length === 0) {
    console.warn('No Telegram chat IDs configured');
    return false;
  }

  let successCount = 0;

  for (const chatId of chatIds) {
    try {
      const msgResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      const msgResult = await msgResponse.json();
      if (msgResult.ok) successCount++;

      // Follow up with clickable phone number
      if (data.phone?.trim()) {
        const phone = data.phone.trim();
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: phone,
            entities: [{ type: 'phone_number', offset: 0, length: phone.length }],
          }),
        });
      }
    } catch (error) {
      console.error(`Failed to send contact form to ${chatId}:`, error);
    }
  }

  return successCount > 0;
}

// Escape special characters for Telegram Markdown (basic mode)
function escapeMarkdown(text: string): string {
  return text.replace(/[_*`\[\]]/g, '\\$&');
}
