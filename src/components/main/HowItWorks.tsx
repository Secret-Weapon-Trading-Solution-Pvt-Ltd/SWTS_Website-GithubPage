'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Check,
} from 'lucide-react';
import { ProcessFlowHorizontal } from './ProcessFlowHorizontal';
import { WhyItWorks } from './WhyItWorks';
import { ServicesScroller } from '@/components/home/ServicesScroller';

// ============================================================================
// Main Component
// ============================================================================
export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-10 lg:py-12 overflow-hidden">
      {/* Background - subtle gradient bands */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white pointer-events-none" />

      {/* Radial glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Header Container */}
      <div className="relative max-w-[1400px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* ================================================================ */}
        {/* Page Header - Modern Enterprise Style */}
        {/* ================================================================ */}
        <div className="text-center mb-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              Our Process
            </span>
          </div>

          {/* Heading with gradient accent */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-slate-800">From Idea to </span>
            <span className="text-teal-700">Execution</span>
          </h2>

          {/* Subheading */}
          <p className="text-base lg:text-lg text-slate-900 max-w-xl mx-auto leading-relaxed">
            Six steps to transform your trading strategy into a live automated system
          </p>
        </div>
      </div>

      {/* ================================================================ */}
      {/* PRIMARY: Horizontal Process Flow - Full Width */}
      {/* ================================================================ */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 mb-16 lg:mb-20 xl:mb-24">
        <ProcessFlowHorizontal />
      </div>

      {/* ================================================================ */}
      {/* WHY IT WORKS - Enterprise Style Section */}
      {/* ================================================================ */}
      <WhyItWorks />

      {/* ================================================================ */}
      {/* OUR SERVICES - Auto-scrolling Services */}
      {/* ================================================================ */}
      <ServicesScroller />

      {/* ================================================================ */}
      {/* SECONDARY: Choose Your Starting Point - Full Width */}
      {/* ================================================================ */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="mb-6 pt-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-5">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                Get Started
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Ready to Begin?
            </h3>
            <p className="text-slate-900 text-base lg:text-lg max-w-md mx-auto">
              Pick the option that works best for you
            </p>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 xl:gap-12 max-w-lg md:max-w-none mx-auto">

            {/* Path A - Recommended */}
            <div className="group relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }} />
              <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl opacity-70" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }} />

              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full">
                {/* Recommended badge */}
                <div className="absolute -top-4 left-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg shadow-teal-500/25" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Recommended</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mb-6 mt-4 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}>
                  <ClipboardCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                  Start with Assessment
                </h4>
                <p className="text-slate-900 mb-6 leading-relaxed">
                  Get personalized recommendations based on your trading profile and goals.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Personalized strategy insights',
                    'Risk profile analysis',
                    'Custom recommendations',
                    'Tailored next steps',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}>
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-900 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-6 text-xs text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    100% Free
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/strategy-assessment"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
                >
                  Take Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Path B - Explore */}
            <div className="group relative">
              {/* Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl sm:rounded-3xl group-hover:from-slate-300 group-hover:to-slate-400 transition-colors duration-300" />

              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 mt-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl shadow-slate-500/10 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h4 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
                  Explore Platform
                </h4>
                <p className="text-slate-900 mb-6 leading-relaxed">
                  Browse our tools and services at your own pace. No commitment required.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Browse all products',
                    'View live demos',
                    'Read documentation',
                    'Compare services',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-slate-900" strokeWidth={3} />
                      </div>
                      <span className="text-slate-900 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-6 text-xs text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Self-guided
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    No signup
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href="/projects/"
                  className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-500/15 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
