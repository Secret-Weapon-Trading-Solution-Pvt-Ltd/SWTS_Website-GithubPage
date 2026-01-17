import { NextRequest, NextResponse } from 'next/server';

interface AssessmentData {
  name: string;
  email: string;
  phone?: string;
  score: number;
  leadQuality: 'high' | 'medium' | 'low';
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: AssessmentData = await request.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId || chatId === 'YOUR_CHAT_ID_HERE') {
      console.error('Telegram credentials not configured');
      // Don't fail the request, just log and continue
      return NextResponse.json({ success: true, message: 'Notification skipped - not configured' });
    }

    // Format the message
    const qualityEmoji = data.leadQuality === 'high' ? '🔥' : data.leadQuality === 'medium' ? '⚡' : '📊';
    const qualityText = data.leadQuality === 'high' ? 'HIGH' : data.leadQuality === 'medium' ? 'MEDIUM' : 'LOW';

    const message = `
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

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error('Telegram API error:', result);
      return NextResponse.json({ success: false, error: result.description }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send notification' }, { status: 500 });
  }
}

// Escape special characters for Telegram Markdown
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}
