'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    number: '01',
    title: 'Your Trading DNA',
    description: 'Understand your natural trading style and where it clashes with consistent execution.',
  },
  {
    number: '02',
    title: 'Automation Fit Score',
    description: 'Get a 0-100 score measuring how ready your strategy is for systematic execution.',
  },
  {
    number: '03',
    title: 'Personalized Roadmap',
    description: 'Receive specific next steps tailored to your trading profile and goals.',
  },
];

export const AssessmentExplanation: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50" id="assessment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-label">Free Assessment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6">
            Find out where you stand.
            <span className="text-slate-400"> In 3 minutes.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Our assessment identifies your specific execution gaps and shows you exactly how to close them.
          </p>
        </div>

        {/* Insight Cards - Glassmorphism */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 lg:p-10
                       shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number accent */}
              <span className="text-5xl font-bold text-slate-100 absolute top-6 right-6 select-none">
                {insight.number}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {insight.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full
                            opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA Card - Premium glassmorphism */}
        <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-soft-lg">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />

          <div className="relative px-8 py-12 lg:px-16 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                Ready to close the gap?
              </h3>
              <p className="text-slate-500 max-w-md">
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
