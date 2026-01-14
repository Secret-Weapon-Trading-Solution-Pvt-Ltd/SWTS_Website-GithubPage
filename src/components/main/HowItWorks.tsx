'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Compass,
  User,
  Target,
  GitBranch,
  Settings,
  TrendingUp,
  Check
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Understand Your Trading Style',
    description: 'Clarify your natural approach to markets and decisions.',
    icon: User,
  },
  {
    number: '02',
    title: 'Identify Execution Gaps',
    description: 'Pinpoint where discipline tends to break down.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Align Strategy with Behavior',
    description: 'Match your methods to your risk tolerance and habits.',
    icon: GitBranch,
  },
  {
    number: '04',
    title: 'Choose Your Execution Mode',
    description: 'Manual, automated, or hybrid — based on your lifestyle.',
    icon: Settings,
  },
  {
    number: '05',
    title: 'Execute with Structure',
    description: 'Operate consistently using a system built for you.',
    icon: TrendingUp,
  },
];

const benefits = [
  'Focuses on execution, not prediction',
  'Reduces emotional decision-making',
  'Aligns strategy with trader behavior',
  'Designed for consistency and risk control',
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-4">
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A structured, execution-focused approach to trading — designed to fit how you actually work.
          </p>
        </div>

        {/* Two Paths Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Choose Your Starting Point
            </h3>
            <p className="text-slate-500 mb-2">
              Two ways to begin — pick what works for you.
            </p>
            <p className="text-sm text-slate-400">
              You can switch paths or revisit anytime. No commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path A - Recommended */}
            <div className="relative bg-slate-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="absolute -top-3 left-6">
                <span className="inline-block px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                  Recommended
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <ClipboardCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Start with the Assessment
                </h4>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Answer a few questions about your trading</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>We analyze your trading profile</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Receive personalized insights</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span>Get recommended next steps tailored to you</span>
                </li>
              </ul>

              <p className="text-xs text-slate-400 mb-2">
                Recommended for clarity and personalization
              </p>
              <p className="text-xs text-slate-400 mb-6">
                Takes ~2 minutes · No spam · No sales calls
              </p>

              <Link
                href="/strategy-assessment/questionnaire"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
              >
                Take Free Trading Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Path B - Optional */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-slate-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Explore the Platform Directly
                </h4>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Browse products and services</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Learn how our systems work</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <Check className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Choose tools on your own terms</span>
                </li>
              </ul>

              <div className="mb-6 h-5" /> {/* Spacer to align with Path A */}

              <Link
                href="/#products"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Step-by-Step Flow */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              The Process
            </h3>
            <p className="text-slate-500">
              A structured path from understanding to execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="bg-slate-50 rounded-xl p-6 h-full">
                    <span className="text-xs font-bold text-teal-600 mb-3 block">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-slate-300" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why This Approach Works */}
        <div className="mb-24">
          <div className="bg-slate-900 rounded-2xl p-10 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                Why This Approach Works
              </h3>
              <p className="text-slate-400 text-center mb-8">
                Most traders fail not from bad strategies, but from inconsistent execution. We address that first.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4"
                  >
                    <div className="w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-teal-400" />
                    </div>
                    <span className="text-slate-200 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            Begin with a personalized assessment or explore the platform at your own pace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/strategy-assessment/questionnaire"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-colors"
            >
              Take Free Trading Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-4 text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              Or browse products directly
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
