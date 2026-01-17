import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/lib/telegram';
import { addSubscriber, removeSubscriber, isSubscribed } from '@/lib/subscribers';
import { verifyPin } from '@/lib/pin';

export async function POST(request: NextRequest) {
  try {
    const update = await request.json();

    // Handle message updates
    if (update.message) {
      const chatId = update.message.chat.id;
      const text = (update.message.text || '').trim();
      const firstName = update.message.from?.first_name || 'there';

      // Handle /start command
      if (text === '/start') {
        const subscribed = await isSubscribed(chatId);

        if (subscribed) {
          await sendTelegramMessage(chatId, `
👋 Welcome back, ${firstName}!

✅ You are already subscribed to lead notifications.

You will receive instant alerts when new clients complete the trading assessment.

Commands:
/status - Check subscription status
/unsubscribe - Stop notifications
          `.trim());
        } else {
          await sendTelegramMessage(chatId, `
👋 Welcome ${firstName}!

🔐 To subscribe to lead notifications:

1. Go to the SWTS subscription page
2. Click "Generate PIN"
3. Send the 6-digit PIN here

Commands:
/status - Check subscription status
          `.trim());
        }
      }

      // Handle /status command
      else if (text === '/status') {
        const subscribed = await isSubscribed(chatId);
        await sendTelegramMessage(chatId, `
📊 *Subscription Status*

${subscribed ? '✅ You ARE subscribed to lead notifications.' : '❌ You are NOT subscribed.'}

${subscribed
  ? 'You will receive notifications when new leads complete the assessment.\n\nSend /unsubscribe to stop.'
  : 'Generate a PIN from the SWTS subscription page and send it here to subscribe.'}
        `.trim());
      }

      // Handle /unsubscribe command
      else if (text === '/unsubscribe') {
        const wasSubscribed = await isSubscribed(chatId);

        if (wasSubscribed) {
          await removeSubscriber(chatId);
          await sendTelegramMessage(chatId, `
👋 You have been unsubscribed.

You will no longer receive lead notifications.

To subscribe again, generate a new PIN from the SWTS subscription page.
          `.trim());
        } else {
          await sendTelegramMessage(chatId, `
❌ You are not currently subscribed.

Generate a PIN from the SWTS subscription page to subscribe.
          `.trim());
        }
      }

      // Check if it's a 6-digit PIN
      else if (/^\d{6}$/.test(text)) {
        const alreadySubscribed = await isSubscribed(chatId);

        if (alreadySubscribed) {
          await sendTelegramMessage(chatId, `
✅ You are already subscribed!

No need to enter a PIN. You will receive notifications when new leads complete the assessment.

Send /unsubscribe if you want to stop receiving notifications.
          `.trim());
          return NextResponse.json({ ok: true });
        }

        // Verify the PIN
        const visitorId = await verifyPin(text);

        if (visitorId) {
          // Valid PIN - subscribe user
          const success = await addSubscriber(chatId, firstName);

          if (success) {
            await sendTelegramMessage(chatId, `
🎉 *Successfully Linked!*

Welcome ${firstName}! Your Telegram is now linked.

📊 You will receive instant notifications when new clients complete the trading assessment, including:
• Client name & contact info
• Assessment score
• Lead quality rating

Commands:
/status - Check subscription status
/unsubscribe - Stop notifications
            `.trim());
          } else {
            await sendTelegramMessage(chatId, `
❌ Something went wrong while linking your account.

Please try generating a new PIN and try again.
            `.trim());
          }
        } else {
          // Invalid or expired PIN
          await sendTelegramMessage(chatId, `
❌ Invalid or expired PIN.

PINs expire after 5 minutes. Please generate a new PIN from the SWTS subscription page and try again.
          `.trim());
        }
      }

      // Unknown message (not a command, not a PIN)
      else if (text && !text.startsWith('/')) {
        await sendTelegramMessage(chatId, `
❓ I didn't understand that.

To subscribe to notifications:
1. Go to the SWTS subscription page
2. Generate a 6-digit PIN
3. Send the PIN here

Commands:
/start - Get started
/status - Check subscription status
/unsubscribe - Stop notifications
        `.trim());
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: 'Telegram webhook active' });
}
