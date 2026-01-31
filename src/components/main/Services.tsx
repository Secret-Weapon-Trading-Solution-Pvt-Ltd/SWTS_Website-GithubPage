'use client';

import React from 'react';
import { Code, LineChart, Bot, Wrench, TestTube, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Code,
    title: 'Pine Script Development',
    description: 'Custom TradingView indicators and strategies. From simple alerts to complex multi-timeframe systems.',
    features: ['Custom Indicators', 'Alert Systems', 'Strategy Scripts', 'Backtesting'],
    gradient: 'from-amber-500 to-orange-500',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: LineChart,
    title: 'AmiBroker AFL',
    description: 'Professional AFL code for scanning, exploration, and automated trading with Indian brokers.',
    features: ['Scanners', 'Explorations', 'Trading Systems', 'Broker Integration'],
    gradient: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
  },
  {
    icon: Bot,
    title: 'Python Algo Trading',
    description: 'Fully automated trading bots with API integration, machine learning, and custom logic.',
    features: ['API Integration', 'ML Models', 'Backtesting Engine', 'Live Trading'],
    gradient: 'from-sky-500 to-blue-500',
    glow: 'shadow-sky-500/20',
  },
  {
    icon: Wrench,
    title: 'MetaTrader EA',
    description: 'Expert Advisors for MT4/MT5. Forex and crypto automation with advanced money management.',
    features: ['Expert Advisors', 'Custom Indicators', 'Risk Management', 'Multi-pair'],
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/20',
  },
  {
    icon: TestTube,
    title: 'Strategy Optimization',
    description: 'Backtest analysis, parameter optimization, and walk-forward testing to validate your edge.',
    features: ['Walk-forward', 'Monte Carlo', 'Parameter Sweep', 'Report Analysis'],
    gradient: 'from-rose-500 to-pink-500',
    glow: 'shadow-rose-500/20',
  },
  {
    icon: BookOpen,
    title: 'Consultation & Training',
    description: 'One-on-one guidance on strategy development, coding, and systematic trading principles.',
    features: ['1:1 Sessions', 'Code Review', 'Strategy Design', 'Best Practices'],
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/20',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#060610]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            End-to-End Trading Automation
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            From strategy conceptualization to live deployment, we handle every aspect
            of your algorithmic trading journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/[0.02] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg ${service.glow} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-black text-sm mb-4">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-black rounded-full text-xs border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-black">
              Not sure which service you need?
            </p>
            <Link
              href="/strategy-assessment"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Take Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
