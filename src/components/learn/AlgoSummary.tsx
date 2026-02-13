'use client';

import React from 'react';
import Link from 'next/link';
import {
  Database,
  Brain,
  Zap,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Monitor,
  Server,
  Bell,
  Target,
  Activity,
  Clock,
  Laptop,
  BarChart3,
  Eye,
  Send,
} from 'lucide-react';

const flowSteps = [
  {
    step: 1,
    title: 'Data Import',
    icon: Database,
    gradient: 'from-teal-500 to-cyan-600',
    badge: 'bg-teal-700',
    subColor: { line: 'bg-teal-300', box: 'bg-teal-50 border-teal-200', icon: 'text-teal-600', text: 'text-teal-600' },
    subs: [
      { icon: Activity, label: 'Real-Time' },
      { icon: Clock, label: 'Historical' },
      { icon: Database, label: 'Source' },
    ],
  },
  {
    step: 2,
    title: 'Strategy & Signal',
    icon: Brain,
    gradient: 'from-blue-500 to-indigo-600',
    badge: 'bg-blue-700',
    subColor: { line: 'bg-blue-300', box: 'bg-blue-50 border-blue-200', icon: 'text-blue-600', text: 'text-blue-600' },
    subs: [
      { icon: Target, label: 'Rules' },
      { icon: Zap, label: 'Signal' },
      { icon: BarChart3, label: 'Types' },
      { icon: Clock, label: 'Timing' },
    ],
  },
  {
    step: 3,
    title: 'UI Decision',
    icon: Monitor,
    gradient: 'from-violet-500 to-purple-600',
    badge: 'bg-violet-700',
    subColor: { line: 'bg-violet-300', box: 'bg-violet-50 border-violet-200', icon: 'text-violet-600', text: 'text-violet-600' },
    subs: [
      { icon: Monitor, label: 'With UI' },
      { icon: Laptop, label: 'Without UI' },
      { icon: Eye, label: 'Dashboard' },
    ],
  },
  {
    step: 4,
    title: 'Deployment',
    icon: Server,
    gradient: 'from-amber-500 to-orange-600',
    badge: 'bg-amber-700',
    subColor: { line: 'bg-amber-300', box: 'bg-amber-50 border-amber-200', icon: 'text-amber-600', text: 'text-amber-600' },
    subs: [
      { icon: Laptop, label: 'Local PC' },
      { icon: Server, label: 'Cloud / VPS' },
    ],
  },
  {
    step: 5,
    title: 'Execution',
    icon: Zap,
    gradient: 'from-emerald-500 to-green-600',
    badge: 'bg-emerald-700',
    subColor: { line: 'bg-emerald-300', box: 'bg-emerald-50 border-emerald-200', icon: 'text-emerald-600', text: 'text-emerald-600' },
    subs: [
      { icon: Eye, label: 'Screener' },
      { icon: Send, label: 'Auto Trade' },
      { icon: Bell, label: 'Alerts' },
    ],
  },
];

const AlgoSummary: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border-2 border-teal-200 mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              Summary
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Complete Algo Trading{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Flow
            </span>
          </h2>
        </div>

        {/* Horizontal Flow - Desktop / Vertical Flow - Mobile */}
        <div className="mb-16 overflow-x-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 min-w-0 lg:min-w-[1050px] mx-auto">
            {flowSteps.map((step, idx) => (
              <React.Fragment key={step.step}>
                {/* Step Node */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Main icon */}
                  <div className="relative mt-3">
                    <div className={`w-20 h-20 lg:w-[88px] lg:h-[88px] rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-10 h-10 lg:w-11 lg:h-11 text-white" />
                    </div>
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${step.badge} text-white text-sm font-bold flex items-center justify-center shadow-md border-2 border-white`}>
                      {step.step}
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="mt-3 text-base lg:text-lg font-bold text-slate-800 text-center whitespace-nowrap">{step.title}</h3>
                  {/* Sub branches with tree connector */}
                  <div className="flex flex-col items-center mt-3">
                    {/* Vertical stem from title down to horizontal bar */}
                    <div className={`w-0.5 h-5 ${step.subColor.line}`} />
                    {/* Horizontal bar + vertical drops to each sub */}
                    <div className="relative">
                      {/* Horizontal connector line from first sub center to last sub center */}
                      {step.subs.length > 1 && (
                        <div className={`absolute top-0 h-0.5 ${step.subColor.line}`}
                          style={{
                            left: 24,
                            right: 24,
                          }}
                        />
                      )}
                      <div className="flex items-start gap-5">
                        {step.subs.map((sub, i) => (
                          <div key={i} className="flex flex-col items-center w-12">
                            <div className={`w-0.5 h-4 ${step.subColor.line}`} />
                            <div className={`w-12 h-12 rounded-xl ${step.subColor.box} border-2 flex items-center justify-center`}>
                              <sub.icon className={`w-6 h-6 ${step.subColor.icon}`} />
                            </div>
                            <p className={`text-sm ${step.subColor.text} font-bold mt-1.5 whitespace-nowrap`}>{sub.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps */}
                {idx < flowSteps.length - 1 && (
                  <div className="flex items-center justify-center flex-shrink-0 lg:mt-10">
                    <ArrowRight className="w-7 h-7 text-slate-300 hidden lg:block mx-2" />
                    <ArrowDown className="w-7 h-7 text-slate-300 lg:hidden my-2" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            Ready to automate your trading strategy?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/strategy-assessment"
              className="group flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 px-8 py-4 bg-slate-100 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgoSummary;
