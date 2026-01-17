'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  Check,
  Workflow
} from 'lucide-react';
import { ProcessFlowRedesign } from './ProcessFlowRedesign';
import { DetailedStepsRedesign } from './DetailedStepsRedesign';

const benefits = [
  'Focuses on execution, not prediction',
  'Reduces emotional decision-making',
  'Aligns strategy with trader behavior',
  'Designed for consistency and risk control',
];

// ============================================================================
// Main Component
// ============================================================================
export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background - subtle gradient bands */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50" />

      {/* Radial glow behind header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* ================================================================ */}
        {/* Page Header - Enhanced */}
        {/* ================================================================ */}
        <div className="text-center mb-14">
          {/* Accent icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-50 border border-teal-200/50 mb-5 shadow-sm">
            <Workflow className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
          </div>

          <span className="block text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-4">
            Process
          </span>

          {/* Heading with gradient accent */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-slate-900">How It Works.</span>
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Simple and clear.</span>
          </h2>

          {/* Subheading */}
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A structured, execution-focused approach designed to fit how you actually work.
          </p>
        </div>

        {/* ================================================================ */}
        {/* PRIMARY: Visual Process Flow - Redesigned */}
        {/* ================================================================ */}
        <ProcessFlowRedesign />

        {/* ================================================================ */}
        {/* SECONDARY: Choose Your Starting Point */}
        {/* ================================================================ */}
        <div className="mb-12">
          {/* Section background band */}
          <div className="relative -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12 py-10 bg-gradient-to-b from-slate-50/90 via-slate-50/50 to-transparent rounded-3xl">
            <div className="text-center mb-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
                Getting Started
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                Choose Your Starting Point
              </h3>
              <p className="text-slate-500 text-base">
                Two ways to begin — pick what works for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {/* Path A - Recommended */}
              <div className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-b-full" />

                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-1 bg-teal-500 text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Recommended
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-5 mt-2">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-md">
                    <ClipboardCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Start with the Assessment
                  </h4>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    'Answer a few questions about your trading',
                    'We analyze your trading profile',
                    'Receive personalized insights',
                    'Get recommended next steps tailored to you',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-teal-600" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-400 mb-5">
                  Takes ~2 minutes · No spam · No sales calls
                </p>

                <Link
                  href="/strategy-assessment"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg text-sm font-semibold hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Take Free Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Path B - Explore */}
              <div className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-slate-400 to-slate-300 rounded-b-full" />

                <div className="flex items-center gap-4 mb-5 mt-2">
                  <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center shadow-md">
                    <Compass className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Explore the Platform Directly
                  </h4>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {[
                    'Browse products and services',
                    'Learn how our systems work',
                    'Choose tools on your own terms',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-slate-500" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-slate-400 mb-5">
                  Browse freely · No account required
                </p>

                <Link
                  href="/#products"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SECONDARY: The Process (Detailed Steps) - Redesigned */}
        {/* ================================================================ */}
        <div className="mb-12">
          <DetailedStepsRedesign />
        </div>

        {/* ================================================================ */}
        {/* SUPPORTING: Why This Approach Works */}
        {/* ================================================================ */}
        <div className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30 border border-slate-200/60 rounded-2xl p-8 lg:p-10">
            {/* Subtle decorative blur */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-2">
                  Why It Matters
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                  Why This Approach Works
                </h3>
                <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
                  Most traders fail not from bad strategies, but from inconsistent execution. We address that first.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-teal-600" strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 text-[15px] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
