'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Bot, Target, Shield, TrendingUp, Clock, Eye } from 'lucide-react';

const features = [
  { icon: Bot, text: 'Fully automated trade execution' },
  { icon: Target, text: 'Precise entries, exits & stop losses' },
  { icon: Shield, text: 'Eliminates emotional decisions' },
  { icon: TrendingUp, text: 'Consistent rule-based trading' },
  { icon: Clock, text: 'Real-time monitoring' },
  { icon: Eye, text: 'Full control of strategy logic' },
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
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #faf5ff 0%, #f0f9ff 25%, #f8fafc 50%, #faf5ff 75%, #eff6ff 100%)',
      }}
    >
      {/* Top separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-200/60 to-transparent" />
      </div>

      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          animation: 'float-orb 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          animation: 'float-orb 25s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 60%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <style jsx>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
      `}</style>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20">
        {/* Title Section */}
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200/50 shadow-sm mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              What We Do
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            End-to-End{' '}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Trading Automation
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
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
          {/* Text Content */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-lg p-6 sm:p-8 lg:p-10 mb-10">
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed sm:leading-loose lg:leading-loose text-justify">
              We help traders automate their trading strategies from start to end. You may already have a strategy or an idea, and we convert it into a fully automated system. The system watches the market continuously and places trades automatically when your conditions are met. You do not need to press buy or sell buttons. Entries, exits, targets, and stop losses work exactly as per your rules. This removes manual mistakes and execution delays. Automation helps maintain discipline in trading. It also reduces emotional decisions like fear and greed. The same rules are followed for every trade without change. You can monitor all trades in real time. You stay in full control of the strategy logic. We take care of the automation and trade execution for you.
            </p>
          </div>

          {/* Feature Pills */}
          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* Transition Line */}
          <div
            className={`flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="h-[2px] w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-transparent via-teal-500 to-teal-500 rounded-full" />
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 text-center">
              Now let's understand what is the exact process
            </p>
            <span className="h-[2px] w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-transparent via-teal-500 to-teal-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" />
      </div>
    </section>
  );
};

export default PlatformIntro;
