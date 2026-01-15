'use client';

import React from 'react';

const stats = [
  { value: '24+', label: 'Projects Delivered' },
  { value: '97%', label: 'Success Rate' },
  { value: '150+', label: 'Systems Deployed' },
];

// Abstract data flow visual for header
const DataFlowVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
    <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px]" viewBox="0 0 800 200" fill="none">
      {/* Flowing lines */}
      <path
        d="M0 100 Q100 60 200 100 Q300 140 400 100 Q500 60 600 100 Q700 140 800 100"
        className="stroke-teal-300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 120 Q150 80 300 120 Q450 160 600 120 Q750 80 800 120"
        className="stroke-slate-300"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Data points */}
      <circle cx="200" cy="100" r="4" className="fill-teal-400" opacity="0.6" />
      <circle cx="400" cy="100" r="5" className="fill-teal-500" opacity="0.7" />
      <circle cx="600" cy="100" r="4" className="fill-teal-400" opacity="0.6" />
    </svg>
  </div>
);

export const ProjectsHero: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with abstract visual */}
        <div className="relative text-center max-w-3xl mx-auto">
          <DataFlowVisual />
          <div className="relative z-10">
            <span className="section-label">Our Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6">
              Projects & Case Studies.
              <span className="text-slate-400"> Built to perform.</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Precision-engineered trading systems delivering measurable results with institutional-grade architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
