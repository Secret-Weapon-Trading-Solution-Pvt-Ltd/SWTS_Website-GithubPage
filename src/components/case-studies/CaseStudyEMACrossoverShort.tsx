'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';

// ============================================================================
// Section Label Component
// ============================================================================
const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-4 mb-4">
    <span className="text-xs font-semibold text-black uppercase tracking-widest">
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
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Project Name</dt>
          <dd className="text-base font-semibold text-slate-900">Delta Exchange Crypto Screener</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Category</dt>
          <dd className="text-base font-semibold text-slate-900">Algo Trading / Real-Time Analytics</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Market Type</dt>
          <dd className="text-base font-semibold text-slate-900">Cryptocurrency Perpetuals</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-black uppercase tracking-wider mb-1.5">Execution Type</dt>
          <dd className="text-base font-semibold text-slate-900">Signal Generation & Alert System</dd>
        </div>
      </dl>

      <p className="text-lg text-black leading-relaxed">
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

      <p className="text-lg text-black leading-relaxed mb-10">
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
  const challenges = [
    { title: 'Missed Opportunities', desc: 'signals at unpredictable times' },
    { title: 'Information Overload', desc: '5 timeframes × multiple symbols' },
    { title: 'Inconsistent Execution', desc: 'manual bias & fatigue' },
    { title: 'No Signal Freshness', desc: 'manual candle counting' },
  ];

  return (
    <section className="mb-20">
      <SectionLabel label="The Problem" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Challenges We Solved</h2>

      <div className="grid grid-cols-2 gap-3">
        {challenges.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm"
          >
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
            <span className="font-semibold text-red-900">{item.title}</span>
            <span className="text-red-600 truncate">— {item.desc}</span>
          </span>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Solution Section - Flowchart Style
// ============================================================================
const Solution: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="The Solution" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h2>

      <p className="text-base text-black leading-relaxed mb-8">
        A <span className="font-semibold text-slate-800">self-hosted signal detection platform</span> that
        monitors your selected pairs, calculating <span className="font-semibold text-slate-800">9/20 EMAs</span> and
        detecting crossovers in real-time.
      </p>

      {/* Flowchart */}
      <div className="relative py-4 mb-8 overflow-x-auto">
        {/* SVG Flowchart */}
        <svg className="w-full h-auto min-w-[600px]" viewBox="0 0 800 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection Lines with Arrows */}
          <defs>
            <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#0D9488" />
            </marker>
          </defs>

          {/* Line 1-2 */}
          <line x1="165" y1="70" x2="220" y2="70" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowhead)" />
          {/* Line 2-3 */}
          <line x1="365" y1="70" x2="420" y2="70" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowhead)" />
          {/* Line 3-4 */}
          <line x1="580" y1="70" x2="620" y2="70" stroke="#0D9488" strokeWidth="3" markerEnd="url(#arrowhead)" />

          {/* Node 1 - Rounded Rectangle */}
          <rect x="15" y="30" width="145" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="87" y="62" textAnchor="middle" fill="#134E4A" fontSize="16" fontWeight="700">Configure</text>
          <text x="87" y="85" textAnchor="middle" fill="#0D9488" fontSize="13" fontWeight="500">Watchlist</text>

          {/* Node 2 - Rounded Rectangle */}
          <rect x="225" y="30" width="145" height="80" rx="12" fill="#F0FDFA" stroke="#0D9488" strokeWidth="2.5" />
          <text x="297" y="62" textAnchor="middle" fill="#134E4A" fontSize="16" fontWeight="700">Monitor</text>
          <text x="297" y="85" textAnchor="middle" fill="#0D9488" fontSize="13" fontWeight="500">5 Timeframes</text>

          {/* Node 3 - Diamond (Decision) */}
          <polygon points="500,10 580,70 500,130 420,70" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
          <text x="500" y="65" textAnchor="middle" fill="#92400E" fontSize="15" fontWeight="700">Detect</text>
          <text x="500" y="85" textAnchor="middle" fill="#B45309" fontSize="11" fontWeight="500">Crossover?</text>

          {/* Node 4 - Pill Shape (Output) */}
          <rect x="625" y="30" width="155" height="80" rx="40" fill="#ECFDF5" stroke="#059669" strokeWidth="2.5" />
          <text x="702" y="62" textAnchor="middle" fill="#064E3B" fontSize="16" fontWeight="700">Alert</text>
          <text x="702" y="85" textAnchor="middle" fill="#059669" fontSize="13" fontWeight="500">Telegram</text>
        </svg>
      </div>

      {/* Signal Types - Inline */}
      <div className="flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
          <span className="text-black">Bullish (9 EMA &gt; 20)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="text-black">Bearish (9 EMA &lt; 20)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-slate-400 rounded-full"></span>
          <span className="text-black">Bars since signal</span>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// System Preview Section
// ============================================================================
const SystemPreview: React.FC = () => {
  return (
    <section className="mb-20">
      <SectionLabel label="System Preview" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Platform Interface</h2>

      <div className="space-y-4">
        {/* Main Screenshot */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 shadow-sm">
          <StaticImage
            src="/Screenshot1.png"
            alt="Signal Dashboard"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-sm text-black">Signal Dashboard — Real-time crossover matrix</p>

        {/* Secondary Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/Screenshot 3.png"
                alt="Watchlist Management"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">Watchlist Management</p>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl bg-slate-100 border border-slate-200/60 shadow-sm">
              <StaticImage
                src="/Screenshot 2.png"
                alt="App Settings"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-sm text-black mt-2">App Settings</p>
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
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
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
        <p className="text-black mb-8 max-w-md mx-auto">
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
      <article className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-32 pb-20 lg:pt-40 lg:pb-28">
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
          <p className="text-xl text-black max-w-2xl mx-auto mb-10">
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
