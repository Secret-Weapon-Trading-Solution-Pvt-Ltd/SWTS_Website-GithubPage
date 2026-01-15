'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ============================================================================
// Section Label Component
// ============================================================================
const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4 mb-4">
    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
      {label}
    </span>
    <span className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
  </div>
);

// ============================================================================
// Project Overview Section
// ============================================================================
const ProjectOverview: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="Project Overview" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Overview</h2>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 rounded-2xl p-8 mb-10">
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Project Name</dt>
          <dd className="text-base font-semibold text-slate-900">Delta Exchange Crypto Screener</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Category</dt>
          <dd className="text-base font-semibold text-slate-900">Algo Trading / Real-Time Analytics</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Market Type</dt>
          <dd className="text-base font-semibold text-slate-900">Cryptocurrency Perpetuals</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Execution Type</dt>
          <dd className="text-base font-semibold text-slate-900">Signal Generation & Alert System</dd>
        </div>
      </dl>

      <p className="text-lg text-slate-600 leading-relaxed">
        A <span className="font-semibold text-slate-800">real-time EMA crossover detection system</span> that
        monitors cryptocurrency markets across <span className="font-semibold text-slate-800">five timeframes</span> simultaneously,
        delivering <span className="font-semibold text-slate-800">instant Telegram alerts</span> when trading signals are confirmed.
      </p>
    </section>
  );
};

// ============================================================================
// Client Context Section
// ============================================================================
const ClientContext: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="Client Context" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Who Is This For?</h2>

      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        Built for <span className="font-semibold text-slate-800">active cryptocurrency traders</span> who use
        moving average crossovers as part of their trading strategy. The system serves both individual traders
        and <span className="font-semibold text-slate-800">small trading desks</span> who need centralized signal monitoring.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: '🕐', title: '24/7 Markets' },
          { icon: '📊', title: 'Multi-Timeframe' },
          { icon: '📱', title: 'Mobile Alerts' },
          { icon: '🔗', title: 'Delta Exchange' },
        ].map((item, i) => (
          <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Problem Statement Section
// ============================================================================
const ProblemStatement: React.FC = () => {
  const problems = [
    'Missed trading opportunities — signals occur at unpredictable times',
    'Information overload — monitoring 5 timeframes across multiple symbols',
    'Inconsistent execution — manual bias and attention fatigue',
    'No signal freshness — requires manual candle counting',
  ];

  return (
    <section className="mb-20">
      <SectionLabel label="The Problem" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Challenges We Solved</h2>

      <div className="bg-gradient-to-br from-red-50 to-rose-50/50 border border-red-100 rounded-2xl p-8">
        <ul className="space-y-4">
          {problems.map((problem, i) => (
            <li key={i} className="flex items-start gap-4 text-red-800">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01" />
                </svg>
              </div>
              <span className="text-[15px] leading-relaxed">{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ============================================================================
// Solution Section
// ============================================================================
const Solution: React.FC = () => {
  const steps = [
    { step: '1', title: 'Configure Watchlist', desc: 'Add symbols via web interface' },
    { step: '2', title: 'Automatic Monitoring', desc: 'System scans 1m, 15m, 1h, 4h, 1d' },
    { step: '3', title: 'Signal Detection', desc: '9/20 EMA crossover detection' },
    { step: '4', title: 'Instant Alert', desc: 'Telegram notification in seconds' },
  ];

  return (
    <section className="mb-20">
      <SectionLabel label="The Solution" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>

      <p className="text-lg text-slate-600 leading-relaxed mb-10">
        A <span className="font-semibold text-slate-800">self-hosted signal detection platform</span> that
        runs continuous analysis on your selected cryptocurrency pairs, calculating
        <span className="font-semibold text-slate-800"> 9-period and 20-period EMAs</span> and
        detecting crossover events in real-time.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {steps.map((item, i) => (
          <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100 rounded-xl p-5">
            <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-emerald-600/20">
              {item.step}
            </div>
            <p className="font-semibold text-slate-900 mb-1">{item.title}</p>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Signal Types */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 rounded-xl p-5 text-center">
          <div className="w-12 h-12 bg-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg shadow-emerald-500/25">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <p className="font-bold text-emerald-900">Bullish</p>
          <p className="text-sm text-emerald-600">9 EMA above 20</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200/60 rounded-xl p-5 text-center">
          <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg shadow-red-500/25">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <p className="font-bold text-red-900">Bearish</p>
          <p className="text-sm text-red-600">9 EMA below 20</p>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200/60 rounded-xl p-5 text-center">
          <div className="w-12 h-12 bg-slate-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg shadow-slate-500/25">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-bold text-slate-900">Bars Since</p>
          <p className="text-sm text-slate-500">Signal freshness</p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// System Preview Section
// ============================================================================
const SystemPreview: React.FC = () => {
  const screenshots = [
    { src: '/Screenshot1.png', caption: 'Signal Dashboard' },
    { src: '/Screenshot 3.png', caption: 'Watchlist Management' },
    { src: '/Screenshot 2.png', caption: 'App Settings' },
  ];

  return (
    <section className="mb-20">
      <SectionLabel label="System Preview" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Platform Interface</h2>

      <div className="space-y-4">
        {/* Main Screenshot */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
          <Image
            src="/Screenshot1.png"
            alt="Signal Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-sm text-slate-400">Signal Dashboard — Real-time crossover matrix</p>

        {/* Secondary Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <Image
                src="/Screenshot 3.png"
                alt="Watchlist Management"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-slate-400 mt-2">Watchlist Management</p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <Image
                src="/Screenshot 2.png"
                alt="App Settings"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-slate-400 mt-2">App Settings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CTA Section
// ============================================================================
const CTASection: React.FC = () => {
  return (
    <section className="space-y-6">
      {/* Read In-Depth CTA */}
      <div className="relative bg-slate-900 rounded-3xl p-10 text-center overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to See the Technical Details?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Explore architecture, infrastructure, performance metrics, and full visual documentation.
          </p>
          <Link
            href="/projects/ema-crossover-screener/technical"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-xl"
          >
            Read In-Depth Documentation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-100 rounded-3xl p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">
          Interested in a Similar System?
        </h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We can build custom signal detection systems for different indicators, exchanges, or asset classes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            Discuss Your Requirements
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            View Other Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Main Component
// ============================================================================
export default function CaseStudyEMACrossoverShort() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Hero Header */}
        <header className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Algo Trading
            </span>
            <span className="inline-flex px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Real-Time Analytics
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Delta Exchange Crypto Screener
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
            Multi-timeframe EMA crossover detection with instant mobile alerts
          </p>
          <a
            href="https://delta.secretweapon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors shadow-xl shadow-teal-600/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live Demo
          </a>
        </header>

        {/* Sections */}
        <ProjectOverview />
        <ClientContext />
        <ProblemStatement />
        <Solution />
        <SystemPreview />
        <CTASection />
      </article>
    </div>
  );
}
