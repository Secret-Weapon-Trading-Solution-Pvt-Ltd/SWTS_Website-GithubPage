'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, BarChart3, Cpu, Shield, Zap, CheckCircle, Play } from 'lucide-react';

const features = [
  'Precision Execution',
  'Zero Emotional Trading',
  '24/7 Automation',
  'Custom Built Systems',
];

export const MainHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/bg2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#060610]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Left Content Only - Right side is background image */}
        <div className="max-w-xl lg:max-w-2xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6 hover:bg-amber-500/20 transition-all cursor-default group">
              <Zap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-amber-300 text-sm font-medium">
                Algorithmic Trading Solutions
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 animate-gradient">
                Trading Strategy
              </span>
              Into Code
            </h1>

            {/* Description */}
            <p className="text-xl text-black mb-8 leading-relaxed">
              We build custom algorithmic trading systems that execute your strategy
              with precision, consistency, and zero emotional interference.
            </p>

            {/* Animated Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-500 ${
                    activeFeature === index
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 scale-105'
                      : 'bg-white/5 border border-white/10 text-black'
                  }`}
                >
                  <CheckCircle className={`w-3.5 h-3.5 ${activeFeature === index ? 'text-amber-400' : 'text-black'}`} />
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/strategy-assessment"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center">
                  Free Strategy Assessment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/#services"
                className="group inline-flex items-center px-8 py-4 bg-white/5 border border-amber-500/30 text-white rounded-full font-semibold hover:bg-amber-500/10 hover:border-amber-500/50 hover:scale-105 transition-all"
              >
                <Play className="mr-2 w-4 h-4 text-amber-400" />
                View Services
              </Link>
            </div>

            {/* Platform Icons */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-black mb-4 uppercase tracking-wider font-medium">Platforms We Work With</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Code2, name: 'TradingView' },
                  { icon: BarChart3, name: 'AmiBroker' },
                  { icon: Cpu, name: 'Python' },
                  { icon: Shield, name: 'MetaTrader' },
                ].map((platform, index) => (
                  <div
                    key={platform.name}
                    className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-black text-sm hover:border-amber-500/30 hover:text-amber-300 hover:bg-amber-500/5 transition-all cursor-pointer hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <platform.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-black text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
