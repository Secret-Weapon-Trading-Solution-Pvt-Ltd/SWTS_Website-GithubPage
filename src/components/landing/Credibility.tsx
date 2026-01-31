'use client';

import React from 'react';
import { Code2, Monitor, Cpu, Shield } from 'lucide-react';

const platforms = [
  {
    name: 'TradingView',
    description: 'Pine Script Strategies',
    icon: Monitor,
  },
  {
    name: 'AmiBroker',
    description: 'AFL Development',
    icon: BarChart,
  },
  {
    name: 'Python',
    description: 'Custom Algorithms',
    icon: Code2,
  },
  {
    name: 'MetaTrader',
    description: 'MT4/MT5 EAs',
    icon: Cpu,
  },
];

// Simple bar chart icon component
function BarChart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

const credibilityPoints = [
  {
    metric: '50+',
    label: 'Strategies Developed',
  },
  {
    metric: '4+',
    label: 'Platform Expertise',
  },
  {
    metric: '100%',
    label: 'Custom Solutions',
  },
];

export const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 text-sm font-medium">
              Built by Traders, for Traders
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Trust Secret Weapon Trading Solution?
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            We specialize in translating profitable manual strategies into reliable
            automated systems across multiple platforms
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {credibilityPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                {point.metric}
              </div>
              <div className="text-black font-medium">{point.label}</div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Platforms We Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{platform.name}</h4>
                  <p className="text-sm text-black">{platform.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* No Profit Guarantee Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm text-black max-w-2xl mx-auto">
            <strong>Important:</strong> We help automate and systematize your trading
            strategies. Past performance does not guarantee future results. All trading
            involves risk. We do not make profit guarantees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
