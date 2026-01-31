'use client';

import React from 'react';

const stats = [
  { value: '1000+', label: 'projects Completed' },
  { value: '7+', label: 'years of experience' },
  { value: '10+', label: 'technologies' },
];

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 grid grid-cols-3 gap-2 sm:gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center sm:gap-3 text-center">
              <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900">{stat.value}</span>
              <span className="text-sm sm:text-base lg:text-lg text-slate-800 font-medium leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
