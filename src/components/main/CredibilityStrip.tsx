'use client';

import React from 'react';

const stats = [
  { value: '12,400+', label: 'Assessments Completed' },
  { value: '150+', label: 'Systems Deployed' },
  { value: '99.9%', label: 'System Uptime' },
];

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-8 grid grid-cols-3 gap-2 sm:gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center sm:gap-3 text-center">
              <span className="text-lg sm:text-2xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-xs sm:text-sm text-slate-400 leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
