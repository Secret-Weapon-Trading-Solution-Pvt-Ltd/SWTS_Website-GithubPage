'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, AlertTriangle, ArrowRight } from 'lucide-react';

const frustrationMessages = [
  "Still executing trades manually?",
  "How many perfect entries did you miss today?",
  "Your strategy is only as good as your execution",
  "Emotions cost traders 68% of their potential profits",
];

export const StickyAttentionBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Show bar after scrolling 300px
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  useEffect(() => {
    // Rotate messages
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % frustrationMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <AlertTriangle className="w-5 h-5 text-red-200 flex-shrink-0 animate-pulse" />
            <p className="text-sm sm:text-base font-medium">
              {frustrationMessages[messageIndex]}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/strategy-assessment"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 rounded-lg font-semibold text-sm hover:bg-red-50 transition-all whitespace-nowrap"
            >
              Fix This Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 hover:bg-red-500 rounded-lg transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyAttentionBar;
