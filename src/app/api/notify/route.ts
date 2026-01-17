import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramMessage, formatLeadNotification } from '@/lib/telegram';
import { getSubscribers } from '@/lib/subscribers';

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

    // Get all subscribers
    const subscribers = await getSubscribers();

    if (subscribers.length === 0) {
      console.warn('No Telegram subscribers configured');
      return NextResponse.json({
        success: true,
        message: 'No subscribers configured',
        subscribers: 0
      });
    }

    // Format the notification message
    const message = formatLeadNotification(data);

    // Send to all subscribers
    let sent = 0;
    let failed = 0;

    for (const chatId of subscribers) {
      const success = await sendTelegramMessage(chatId, message);
      if (success) sent++;
      else failed++;
    }

    console.log(`Notification sent: ${sent} success, ${failed} failed`);

    return NextResponse.json({
      success: true,
      sent,
      failed,
      total: subscribers.length
    });
  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to send notification'
    }, { status: 500 });
  }
}
