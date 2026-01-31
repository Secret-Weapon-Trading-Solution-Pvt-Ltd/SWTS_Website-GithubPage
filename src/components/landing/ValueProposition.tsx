'use client';

import React from 'react';
import { Target, BarChart3, Lightbulb } from 'lucide-react';

const valuePoints = [
  {
    icon: Target,
    title: 'Strategy Readiness Score',
    description:
      'Assess whether your current trading approach has the structure and rules needed for successful automation.',
  },
  {
    icon: BarChart3,
    title: 'Risk Management Analysis',
    description:
      'Evaluate your position sizing, stop-loss discipline, and overall risk framework against automation requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Personalized Recommendations',
    description:
      'Receive tailored suggestions to strengthen your trading foundation and maximize automation potential.',
  },
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Your Assessment Will Reveal
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Our comprehensive assessment evaluates three critical dimensions of your trading
            to determine automation readiness
          </p>
        </div>

        {/* Value Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {valuePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-accent-50 border border-accent-200 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-accent-700 font-medium">
              15 questions designed by algo trading experts
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
