'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Crosshair, Shield, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Crosshair,
    title: 'Precision Execution',
    description: 'Trades fire exactly as designed. No hesitation, no emotion, no missed signals.',
  },
  {
    icon: Shield,
    title: 'Adaptive Risk Control',
    description: 'Dynamic sizing and stops that respond to volatility in real-time.',
  },
  {
    icon: Zap,
    title: 'Scalable Automation',
    description: 'From one strategy to a full portfolio—systems that grow with you.',
  },
];

/**
 * CenterVisualWithConnections
 *
 * Central image with connecting lines to the three pillars below.
 * Shows correlation between the system concept and each capability.
 */
const CenterVisualWithConnections: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Center image with subtle animation */}
      <div className="relative">
        {/* Soft glow behind image */}
        <div
          className="absolute inset-0 -m-4 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
            animation: 'glowPulse 8s ease-in-out infinite',
          }}
        />

        {/* Main image */}
        <img
          src="/time_1636946.png"
          alt="Continuous execution cycle"
          className="relative w-24 h-24 md:w-28 md:h-28 object-contain"
          style={{ animation: 'subtleFloat 20s ease-in-out infinite' }}
        />
      </div>

      {/* Clean connection lines to pillars */}
      <div className="relative w-full max-w-3xl mx-auto h-12 md:h-14 mt-4">
        {/* Three vertical lines with dots */}
        <svg
          className="w-full h-full"
          viewBox="0 0 600 60"
          fill="none"
          preserveAspectRatio="xMidYMin meet"
        >
          {/* Left line - to Precision Execution */}
          <line
            x1="300" y1="0"
            x2="100" y2="55"
            stroke="url(#lineGrad1)"
            strokeWidth="2"
            strokeDasharray="8 4"
            className="animate-dash"
          />
          <circle cx="100" cy="55" r="6" fill="#8B5CF6" fillOpacity="0.15" />
          <circle cx="100" cy="55" r="3" fill="#8B5CF6" />

          {/* Center line - to Adaptive Risk */}
          <line
            x1="300" y1="0"
            x2="300" y2="55"
            stroke="url(#lineGrad2)"
            strokeWidth="2"
            strokeDasharray="8 4"
            className="animate-dash"
            style={{ animationDelay: '0.2s' }}
          />
          <circle cx="300" cy="55" r="6" fill="#3B82F6" fillOpacity="0.15" />
          <circle cx="300" cy="55" r="3" fill="#3B82F6" />

          {/* Right line - to Scalable Automation */}
          <line
            x1="300" y1="0"
            x2="500" y2="55"
            stroke="url(#lineGrad3)"
            strokeWidth="2"
            strokeDasharray="8 4"
            className="animate-dash"
            style={{ animationDelay: '0.4s' }}
          />
          <circle cx="500" cy="55" r="6" fill="#14B8A6" fillOpacity="0.15" />
          <circle cx="500" cy="55" r="3" fill="#14B8A6" />

          <defs>
            <linearGradient id="lineGrad1" x1="300" y1="0" x2="100" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="300" y1="0" x2="300" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="lineGrad3" x1="300" y1="0" x2="500" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes dash {
          to { stroke-dashoffset: -24; }
        }

        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

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
          className="relative w-20 h-20 rounded-2xl backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
          }}
        >
          {/* Gradient icon background */}
          <div className={`absolute inset-2 rounded-xl bg-gradient-to-br ${colors.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

          {/* Icon with gradient */}
          <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Floating particles on hover */}
        <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-violet-400 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-blue-400 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>
      </div>

      {/* Title */}
      <h4 className={`text-xl font-bold mb-2 tracking-tight ${colors.text}`}>
        {pillar.title}
      </h4>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed max-w-[260px] text-[15px]">
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
      className="relative py-16 lg:py-20 mt-12 lg:mt-16 overflow-hidden"
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

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-violet-200/50 shadow-sm mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Why It Works
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 tracking-tight">
            Built on{' '}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
              Three Core Pillars
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Precision, risk control, and scalability—the foundation of every successful trading system.
          </p>
        </div>

        {/* Center visual with connection lines to pillars */}
        <div
          className={`mb-4 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <CenterVisualWithConnections />
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
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
          className={`flex justify-center mt-10 transition-all duration-700 ease-out ${
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
