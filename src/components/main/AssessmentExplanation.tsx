'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// SVG Icons for each insight card
const TradingDNAIcon = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Brain-chart fusion illustration */}
    <circle cx="40" cy="40" r="32" className="stroke-teal-200" strokeWidth="2" fill="none" />
    <path
      d="M28 50 L28 38 L36 42 L44 32 L52 36 L52 50"
      className="stroke-teal-500"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="28" cy="38" r="3" className="fill-teal-400" />
    <circle cx="36" cy="42" r="3" className="fill-teal-500" />
    <circle cx="44" cy="32" r="3" className="fill-teal-600" />
    <circle cx="52" cy="36" r="3" className="fill-teal-500" />
    {/* Brain curves */}
    <path
      d="M32 24 Q40 18 48 24"
      className="stroke-slate-300"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M30 28 Q40 22 50 28"
      className="stroke-slate-200"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const AutomationScoreIcon = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circular gauge / score arc */}
    <circle cx="40" cy="40" r="32" className="stroke-slate-100" strokeWidth="6" fill="none" />
    <path
      d="M40 8 A32 32 0 1 1 12.5 56"
      className="stroke-teal-500"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    {/* Center score indicator */}
    <circle cx="40" cy="40" r="18" className="fill-white stroke-slate-200" strokeWidth="1" />
    <text x="40" y="44" textAnchor="middle" className="fill-slate-700 text-sm font-bold" fontSize="14">
      85
    </text>
    {/* Tick marks */}
    <line x1="40" y1="12" x2="40" y2="16" className="stroke-teal-400" strokeWidth="2" strokeLinecap="round" />
    <line x1="64" y1="40" x2="68" y2="40" className="stroke-teal-400" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="40" x2="16" y2="40" className="stroke-slate-300" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RoadmapIcon = () => (
  <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract roadmap / node path */}
    {/* Path lines */}
    <path
      d="M16 60 Q28 50 28 40 Q28 30 40 24 Q52 18 52 30 Q52 42 64 36"
      className="stroke-teal-300"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
      fill="none"
    />
    {/* Nodes */}
    <circle cx="16" cy="60" r="6" className="fill-slate-200 stroke-slate-300" strokeWidth="2" />
    <circle cx="28" cy="40" r="6" className="fill-teal-100 stroke-teal-400" strokeWidth="2" />
    <circle cx="40" cy="24" r="6" className="fill-teal-200 stroke-teal-500" strokeWidth="2" />
    <circle cx="52" cy="30" r="6" className="fill-teal-300 stroke-teal-500" strokeWidth="2" />
    <circle cx="64" cy="36" r="8" className="fill-teal-500 stroke-teal-600" strokeWidth="2" />
    {/* Checkmark in final node */}
    <path
      d="M60 36 L63 39 L68 33"
      className="stroke-white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const insights = [
  {
    number: '01',
    title: 'Your Trading DNA',
    description: 'Understand your natural trading style and where it clashes with consistent execution.',
    icon: TradingDNAIcon,
  },
  {
    number: '02',
    title: 'Automation Fit Score',
    description: 'Get a 0-100 score measuring how ready your strategy is for systematic execution.',
    icon: AutomationScoreIcon,
  },
  {
    number: '03',
    title: 'Personalized Roadmap',
    description: 'Receive specific next steps tailored to your trading profile and goals.',
    icon: RoadmapIcon,
  },
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

// Abstract pattern for CTA background
const CTABackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Gradient base */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />

    {/* Abstract geometric shapes */}
    <svg className="absolute right-0 top-0 w-64 h-64 opacity-20" viewBox="0 0 200 200" fill="none">
      <circle cx="150" cy="50" r="80" className="stroke-teal-300" strokeWidth="1" fill="none" />
      <circle cx="150" cy="50" r="60" className="stroke-teal-200" strokeWidth="1" fill="none" />
      <circle cx="150" cy="50" r="40" className="stroke-teal-100" strokeWidth="1" fill="none" />
    </svg>

    <svg className="absolute left-0 bottom-0 w-48 h-48 opacity-15" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="100" width="40" height="40" rx="8" className="stroke-slate-300" strokeWidth="1" fill="none" transform="rotate(-15 40 120)" />
      <rect x="60" y="80" width="30" height="30" rx="6" className="stroke-slate-200" strokeWidth="1" fill="none" transform="rotate(10 75 95)" />
    </svg>

    {/* Subtle grid dots */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
      backgroundSize: '40px 40px',
      opacity: 0.1
    }} />
  </div>
);

export const AssessmentExplanation: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative" id="assessment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with abstract visual */}
        <div className="relative text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <DataFlowVisual />
          <div className="relative z-10">
            <span className="section-label">Free Assessment</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6">
              Find out where you stand.
              <span className="text-black"> In 3 minutes.</span>
            </h2>
            <p className="text-xl text-black leading-relaxed">
              Our assessment identifies your specific execution gaps and shows you exactly how to close them.
            </p>
          </div>
        </div>

        {/* Insight Cards with Icons - Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {insights.map((insight, i) => {
            const IconComponent = insight.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 lg:p-10
                         shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number accent */}
                <span className="text-5xl font-bold text-slate-100 absolute top-6 right-6 select-none">
                  {insight.number}
                </span>

                {/* Icon */}
                <div className="mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {insight.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

        {/* CTA Card - Premium glassmorphism with pattern background */}
        <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-soft-lg">
          <CTABackgroundPattern />

          <div className="relative px-8 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Ready to close the gap?
              </h3>
              <p className="text-black max-w-md">
                No signup required. No sales pitch. Just honest insights about your trading execution.
              </p>
            </div>
            <Link
              href="/strategy-assessment/questionnaire"
              className="group inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold
                       hover:bg-slate-800 transition-all shadow-button hover:shadow-soft-lg whitespace-nowrap"
            >
              Start Free Assessment
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentExplanation;
