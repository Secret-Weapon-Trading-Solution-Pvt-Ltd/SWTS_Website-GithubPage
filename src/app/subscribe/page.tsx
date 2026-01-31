'use client';

import React, { useState, useEffect } from 'react';
import { Send, Bell, Copy, Check, RefreshCw, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SubscribePage() {
  const [pin, setPin] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [visitorId, setVisitorId] = useState<string>('');

  // Generate visitor ID on mount
  useEffect(() => {
    const id = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setVisitorId(id);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!pin || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setPin(null);
          return 300;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [pin, timeLeft]);

  const generatePin = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/telegram/generate-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      });

      const data = await response.json();

      if (data.success) {
        setPin(data.pin);
        setTimeLeft(data.expiresIn);
      } else {
        alert('Failed to generate PIN. Please try again.');
      }
    } catch (error) {
      console.error('Error generating PIN:', error);
      alert('Failed to generate PIN. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (pin) {
      navigator.clipboard.writeText(pin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Get Lead Notifications
          </h1>
          <p className="text-black">
            Receive instant Telegram alerts when new clients complete the assessment
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 mb-6">

          {!pin ? (
            /* Step 1: Generate PIN */
            <>
              <h2 className="font-semibold text-slate-900 mb-4">Link Your Telegram</h2>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-black">Generate a one-time PIN code</p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <p className="text-black">Send the PIN to our Telegram bot</p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <p className="text-black">Done! Receive all lead notifications</p>
                </div>
              </div>

              <button
                onClick={generatePin}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    Generate PIN
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </>
          ) : (
            /* Step 2: Show PIN */
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-slate-900">Your PIN Code</h2>
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* PIN Display */}
              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center gap-3">
                  <code className="text-4xl font-mono font-bold tracking-widest text-slate-900">
                    {pin}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-slate-200 rounded-lg transition-colors"
                    title="Copy PIN"
                  >
                    {copied ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <Copy className="w-6 h-6 text-black" />
                    )}
                  </button>
                </div>
                <p className="text-center text-sm text-black mt-3">
                  PIN expires in {formatTime(timeLeft)}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3 mb-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-black text-sm">PIN generated successfully</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 font-bold text-xs">2</span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium">
                    Open Telegram and send this PIN to the bot
                  </p>
                </div>
              </div>

              {/* Telegram Button */}
              <a
                href="https://t.me/swts_client_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl font-semibold transition-colors"
              >
                <Send className="w-5 h-5" />
                Open Telegram Bot
              </a>

              {/* Regenerate */}
              <button
                onClick={generatePin}
                className="w-full mt-3 text-sm text-black hover:text-slate-700 transition-colors"
              >
                Generate new PIN
              </button>
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl">
          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-teal-800 font-medium">What you'll receive:</p>
              <p className="text-sm text-teal-700 mt-1">
                Instant notifications with lead name, email, phone, assessment score, and quality rating.
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-black hover:text-black transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
