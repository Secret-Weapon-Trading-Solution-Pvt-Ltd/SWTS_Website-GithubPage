'use client';

import React from 'react';

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
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(20,184,166,0.06),transparent)]" />

      {/* Soft corner accents */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-slate-200/50 to-transparent rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Header with abstract visual */}
        <div className="relative text-center max-w-3xl mx-auto">
          <DataFlowVisual />
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">Our Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 mb-6">
              <span className="text-slate-900">Projects & Case Studies.</span>
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Built to perform.</span>
            </h2>
            <p className="text-lg lg:text-xl text-black leading-relaxed">
              Precision-engineered trading systems delivering measurable results with institutional-grade architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
