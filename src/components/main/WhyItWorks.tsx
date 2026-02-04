'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, Settings2, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: BarChart3,
    title: 'Backtesting',
    description: 'Validate your strategy against historical data. See how it would have performed before risking real capital.',
  },
  {
    icon: Settings2,
    title: 'Optimization',
    description: 'Fine-tune parameters and refine your edge. Find the optimal settings for maximum performance.',
  },
  {
    icon: Rocket,
    title: 'Live Algo Trading',
    description: 'Deploy your proven strategy with confidence. Automated execution that runs 24/7 without emotion.',
  },
];

// Pillar colors matching the visual theme
const pillarColors = [
  { gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.25)', text: 'text-violet-600' },
  { gradient: 'from-blue-500 to-cyan-500', glow: 'rgba(59, 130, 246, 0.25)', text: 'text-blue-600' },
  { gradient: 'from-teal-500 to-emerald-500', glow: 'rgba(20, 184, 166, 0.25)', text: 'text-teal-600' },
];

// Enhanced pillar with modern glassmorphism style
const PillarCard: React.FC<{
  pillar: typeof pillars[0];
  index: number;
  isVisible: boolean;
}> = ({ pillar, index, isVisible }) => {
  const Icon = pillar.icon;
  const colors = pillarColors[index];

  return (
    <div
      className={`group flex flex-col items-center text-center transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      {/* Icon container with glassmorphism */}
      <div className="relative mb-4 cursor-default">
        {/* Animated glow ring */}
        <div
          className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
          style={{ background: colors.glow }}
        />

        {/* Glass card for icon */}
        <div
          className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
          }}
        >
          {/* Gradient icon background */}
          <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

          {/* Icon with gradient */}
          <div className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
            <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Floating particles on hover */}
        <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-violet-400 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-blue-400 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Title */}
      <h4 className={`text-xl lg:text-2xl font-bold mb-3 tracking-tight ${colors.text}`}>
        {pillar.title}
      </h4>

      {/* Description */}
      <p className="text-slate-900 leading-relaxed max-w-[320px] text-base">
        {pillar.description}
      </p>
    </div>
  );
};

export const WhyItWorks: React.FC = () => {
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
      className="relative py-10 lg:py-12 mt-4 lg:mt-6 overflow-hidden"
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

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Header */}
        <div
          className={`text-center mb-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200/50 shadow-sm mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              Why It Works
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Built on{' '}
            <span className="text-teal-700">
              Three Core Pillars
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base lg:text-lg text-slate-900 max-w-xl mx-auto leading-relaxed">
            Test, refine, and deploy—the complete journey from strategy concept to live automation.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              pillar={pillar}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <div
          className={`flex justify-center mt-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-violet-300" />
            <div className="w-16 h-px bg-gradient-to-r from-violet-200 via-blue-200 to-teal-200 rounded-full" />
            <div className="w-1 h-1 rounded-full bg-teal-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
