'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Bot, Target, Shield, TrendingUp } from 'lucide-react';

const features = [
  { icon: Bot, text: 'Fully automated trade execution' },
  { icon: Target, text: 'Precise entries, exits & stop losses' },
  { icon: Shield, text: 'Eliminates emotional decisions' },
  { icon: TrendingUp, text: 'Consistent rule-based trading' },
];

export const PlatformIntro: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white"
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Title Section */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 shadow-sm mb-5">
            <div className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
              What We Do
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
            End-to-End{' '}
            <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)', WebkitBackgroundClip: 'text' }}>Trading Automation</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto">
            Transform your trading strategy into a hands-free automated system
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Full width content card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 lg:p-10">
            {/* Text Content */}
            <p className="text-base sm:text-lg text-black leading-relaxed mb-8">
                We help traders automate their trading strategies from start to end. You may already have a strategy or an idea, and we convert it into a fully automated system. The system watches the market continuously and places trades automatically when your conditions are met. You do not need to press buy or sell buttons. Entries, exits, targets, and stop losses work exactly as per your rules. This removes manual mistakes and execution delays. Automation helps maintain discipline in trading. It also reduces emotional decisions like fear and greed. The same rules are followed for every trade without change. You can monitor all trades in real time. You stay in full control of the strategy logic. We take care of the automation and trade execution for you.
              </p>

            {/* Features Grid - Toolkit Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" strokeWidth={1.75} />
                    </div>
                    <span className="text-base font-semibold text-black">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transition Line */}
          <div
            className={`flex items-center justify-center gap-4 mt-12 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="h-[2px] w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-transparent to-teal-500 rounded-full" />
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-black text-center">
              Now let's understand the exact process
            </p>
            <span className="h-[2px] w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-transparent to-teal-500 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformIntro;
