import { NextRequest, NextResponse } from 'next/server';
import { generatePin, storePin, pinExists } from '@/lib/pin';

export async function POST(request: NextRequest) {
  try {
    const { visitorId } = await request.json();

    if (!visitorId) {
      return NextResponse.json(
        { error: 'Visitor ID required' },
        { status: 400 }
      );
    }

    // Generate unique PIN
    let pin = generatePin();
    let attempts = 0;

    // Ensure PIN is unique
    while (await pinExists(pin) && attempts < 10) {
      pin = generatePin();
      attempts++;
    }

    // Store PIN with visitor ID
    const stored = await storePin(pin, visitorId);

    if (!stored) {
      return NextResponse.json(
        { error: 'Failed to generate PIN' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      pin,
      expiresIn: 300, // 5 minutes in seconds
    });
  } catch (error) {
    console.error('PIN generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PIN' },
      { status: 500 }
    );
  }
}
