'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  Zap,
  Bell,
  Database,
  Shield,
  Clock,
  TrendingUp,
  Users,
  Server,
  Code,
  Cpu,
  Wifi,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

// ============================================================================
// Table of Contents Component (Desktop Only)
// ============================================================================
const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('architecture');

  const sections = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'data-flow', label: 'Data Flow' },
    { id: 'features', label: 'Features' },
    { id: 'performance', label: 'Performance' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'users', label: 'Ideal Users' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.el && section.el.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200/60">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 py-2.5 flex items-center gap-2 overflow-x-auto">
        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider whitespace-nowrap mr-2">
          On This Page
        </span>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

// ============================================================================
// Section Header Component
// ============================================================================
const SectionHeader: React.FC<{ label: string; title: string; subtitle?: string }> = ({ label, title, subtitle }) => (
  <div className="mb-10">
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">
      {label}
    </span>
    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
    {subtitle && <p className="text-black text-base max-w-2xl">{subtitle}</p>}
  </div>
);

// ============================================================================
// Architecture Section with Visual Diagram
// ============================================================================
const Architecture: React.FC = () => {
  const stacks = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: ['Vanilla JavaScript', 'WebSocket Client', 'Responsive UI', 'Real-time Updates'],
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-200',
      items: ['Python 3.11 + FastAPI', 'Uvicorn ASGI', 'AsyncIO Concurrency', 'Pandas/NumPy'],
    },
    {
      icon: Database,
      title: 'Data Layer',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      items: ['Delta Exchange API', '600-bar Window', 'JSON File Storage', 'State Persistence'],
    },
    {
      icon: Bell,
      title: 'Notifications',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      items: ['Telegram Bot API', 'PIN-based Linking', 'Activity Filtering', 'Instant Delivery'],
    },
    {
      icon: Shield,
      title: 'Infrastructure',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      items: ['Docker Container', 'Nginx + SSL/TLS', 'GitHub Actions CI', 'Auto Certificates'],
    },
    {
      icon: Cpu,
      title: 'Processing',
      color: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
      items: ['9/20 EMA Engine', 'Outlier Detection', 'Multi-TF Analysis', 'Signal Validation'],
    },
  ];

  return (
    <section id="architecture" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="Technical Architecture"
        title="System Architecture"
        subtitle="A modular, high-performance stack designed for real-time signal processing"
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {stacks.map((stack, i) => {
          const Icon = stack.icon;
          return (
            <div
              key={i}
              className={`relative ${stack.bgColor} ${stack.borderColor} border rounded-2xl p-5 lg:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-3">{stack.title}</h3>

              <ul className="space-y-1.5">
                {stack.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-black">
                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${stack.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// Data Flow Section with Flowchart
// ============================================================================
const DataFlow: React.FC = () => {
  return (
    <section id="data-flow" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="System Flow"
        title="How Data Flows"
        subtitle="From market data ingestion to mobile alert delivery"
      />

      {/* Flowchart */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 border border-slate-200/60 rounded-3xl p-8 lg:p-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          {/* Desktop Flowchart */}
          <div className="hidden lg:block">
            <svg className="w-full h-auto" viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0 0L10 5L0 10L3 5Z" fill="#0D9488" />
                </marker>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Connection lines */}
              <path d="M155 100 L215 100" stroke="url(#lineGradient)" strokeWidth="3" markerEnd="url(#arrow)" />
              <path d="M365 100 L425 100" stroke="url(#lineGradient)" strokeWidth="3" markerEnd="url(#arrow)" />
              <path d="M575 100 L635 100" stroke="url(#lineGradient)" strokeWidth="3" markerEnd="url(#arrow)" />
              <path d="M785 100 L845 100" stroke="url(#lineGradient)" strokeWidth="3" markerEnd="url(#arrow)" />

              {/* Node 1 - Data Source */}
              <g filter="url(#shadow)">
                <rect x="15" y="45" width="135" height="110" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="15" y="45" width="135" height="8" rx="4" fill="#3B82F6" />
              </g>
              <text x="82" y="85" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700">Delta API</text>
              <text x="82" y="108" textAnchor="middle" fill="#64748B" fontSize="11">OHLCV Data</text>
              <text x="82" y="125" textAnchor="middle" fill="#64748B" fontSize="11">5 Timeframes</text>

              {/* Node 2 - Processing */}
              <g filter="url(#shadow)">
                <rect x="225" y="45" width="135" height="110" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="225" y="45" width="135" height="8" rx="4" fill="#8B5CF6" />
              </g>
              <text x="292" y="85" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700">EMA Engine</text>
              <text x="292" y="108" textAnchor="middle" fill="#64748B" fontSize="11">9/20 Calculation</text>
              <text x="292" y="125" textAnchor="middle" fill="#64748B" fontSize="11">Outlier Filter</text>

              {/* Node 3 - Detection (Diamond shape effect) */}
              <g filter="url(#shadow)">
                <rect x="435" y="45" width="135" height="110" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="435" y="45" width="135" height="8" rx="4" fill="#F59E0B" />
              </g>
              <text x="502" y="85" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700">Crossover?</text>
              <text x="502" y="108" textAnchor="middle" fill="#64748B" fontSize="11">Compare EMAs</text>
              <text x="502" y="125" textAnchor="middle" fill="#64748B" fontSize="11">Detect Signal</text>

              {/* Node 4 - Broadcast */}
              <g filter="url(#shadow)">
                <rect x="645" y="45" width="135" height="110" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="645" y="45" width="135" height="8" rx="4" fill="#10B981" />
              </g>
              <text x="712" y="85" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="700">Broadcast</text>
              <text x="712" y="108" textAnchor="middle" fill="#64748B" fontSize="11">WebSocket Push</text>
              <text x="712" y="125" textAnchor="middle" fill="#64748B" fontSize="11">Update UI</text>

              {/* Node 5 - Alert */}
              <g filter="url(#shadow)">
                <rect x="855" y="55" width="30" height="90" rx="15" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="855" y="55" width="30" height="8" rx="4" fill="#EC4899" />
              </g>
              <text x="870" y="105" textAnchor="middle" fill="#1E293B" fontSize="20">📱</text>
            </svg>
          </div>

          {/* Mobile Flowchart - Vertical */}
          <div className="lg:hidden space-y-4">
            {[
              { title: 'Delta API', desc: 'OHLCV Data · 5 Timeframes', color: 'bg-blue-500', icon: Database },
              { title: 'EMA Engine', desc: '9/20 Calculation · Outlier Filter', color: 'bg-violet-500', icon: Cpu },
              { title: 'Crossover Detection', desc: 'Compare EMAs · Signal Logic', color: 'bg-amber-500', icon: Zap },
              { title: 'Broadcast', desc: 'WebSocket Push · UI Update', color: 'bg-emerald-500', icon: Wifi },
              { title: 'Alert', desc: 'Telegram Notification', color: 'bg-pink-500', icon: Bell },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{step.title}</h4>
                      <p className="text-sm text-black">{step.desc}</p>
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="w-0.5 h-4 bg-gradient-to-b from-teal-400 to-cyan-400 ml-6 my-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span className="text-black">Bullish Signal (9 &gt; 20)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-black">Bearish Signal (9 &lt; 20)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-slate-400 rounded-full" />
            <span className="text-black">Bars Since Crossover</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Key Features Section
// ============================================================================
const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: Layers,
      title: 'Multi-Timeframe Screening',
      desc: '1m, 15m, 1h, 4h, and 1d timeframes monitored simultaneously for each symbol',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Wifi,
      title: 'Real-Time WebSocket',
      desc: 'Signal changes broadcast instantly to all connected clients without refresh',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Bell,
      title: 'Telegram Integration',
      desc: 'Mobile alerts with symbol, timeframe, direction, and IST timestamp',
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Personal Watchlists',
      desc: 'Each user session maintains an independent, customizable watchlist',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Clock,
      title: 'Signal Freshness',
      desc: '"Bars Since" counter shows candles elapsed since last crossover',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Data Quality Filter',
      desc: 'MAD-based outlier detection removes suspicious candles',
      color: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section id="features" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="Capabilities"
        title="Key Features"
        subtitle="Purpose-built functionality for systematic crossover detection"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={i}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-md`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-black leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// Performance Section
// ============================================================================
const Performance: React.FC = () => {
  const metrics = [
    {
      category: 'Data Quality',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
      items: [
        { label: 'Volume Validation', value: 'Zero-volume excluded' },
        { label: 'Price Validation', value: 'OHLC > 0 required' },
        { label: 'Outlier Removal', value: '10× MAD filter' },
        { label: 'Rolling Window', value: '600 candles/pair' },
      ],
    },
    {
      category: 'Reliability',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      items: [
        { label: 'Poll Alignment', value: 'Candle close + 5s' },
        { label: 'API Concurrency', value: '5 simultaneous' },
        { label: 'Update Mode', value: 'Incremental' },
        { label: 'State Recovery', value: 'Disk persistence' },
      ],
    },
    {
      category: 'Sessions',
      icon: Users,
      color: 'from-violet-500 to-purple-600',
      items: [
        { label: 'Expiration', value: '30 min auto-refresh' },
        { label: 'Max Sessions', value: '10 per deploy' },
        { label: 'Alert Filter', value: 'Active users only' },
        { label: 'Linking', value: '6-digit PIN' },
      ],
    },
  ];

  return (
    <section id="performance" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="Performance"
        title="System Specifications"
        subtitle="Operational characteristics and quality measures"
      />

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 mb-8 flex items-start gap-4">
        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-amber-600" />
        </div>
        <p className="text-sm text-amber-800 leading-relaxed">
          This system is a <span className="font-semibold">signal detection and alert platform</span>. It does not execute trades. The following describes operational performance characteristics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${metric.color} px-5 py-4 flex items-center gap-3`}>
                <Icon className="w-5 h-5 text-white" />
                <h3 className="font-bold text-white">{metric.category}</h3>
              </div>

              {/* Items */}
              <div className="p-5 space-y-3">
                {metric.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-between text-sm">
                    <span className="text-black">{item.label}</span>
                    <span className="font-semibold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg text-xs">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* API Note */}
      <div className="mt-6 bg-teal-50 border border-teal-200 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Code className="w-5 h-5 text-teal-600" />
        </div>
        <p className="text-sm text-teal-800 leading-relaxed">
          Historical crossover data is available via the <code className="font-mono bg-teal-100 px-1.5 py-0.5 rounded">/historical-crossovers</code> endpoint for custom backtesting analysis.
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// Outcomes Section
// ============================================================================
const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: Zap,
      title: 'Instant Detection',
      desc: 'Crossovers detected within seconds of candle close',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: TrendingUp,
      title: 'Reduced Load',
      desc: 'Automated scanning eliminates chart switching',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Consistent Logic',
      desc: 'Same 9/20 calculation applied systematically',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Server,
      title: 'Self-Hosted',
      desc: 'No subscriptions or third-party dependencies',
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
  ];

  return (
    <section id="outcomes" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="Results"
        title="Outcomes & Impact"
        subtitle="Measurable improvements in signal detection workflow"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {outcomes.map((outcome, i) => {
          const Icon = outcome.icon;
          return (
            <div
              key={i}
              className={`${outcome.bg} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
            >
              <div className={`w-12 h-12 ${outcome.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-6 h-6 ${outcome.color}`} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{outcome.title}</h4>
              <p className="text-xs text-black leading-relaxed">{outcome.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// Ideal Users Section
// ============================================================================
const IdealUsers: React.FC = () => {
  const profiles = [
    { title: 'Swing Traders', desc: '1h/4h/Daily EMA crossovers for multi-day positions' },
    { title: 'Day Traders', desc: '1m/15m timeframes for intraday setups' },
    { title: 'Portfolio Managers', desc: 'Multi-asset monitoring from single dashboard' },
    { title: 'Technical Analysts', desc: 'EMA crossovers as part of broader strategy' },
    { title: 'Algo-Curious', desc: 'Systematic detection without custom infrastructure' },
  ];

  return (
    <section id="users" className="mb-24 scroll-mt-28">
      <SectionHeader
        label="Target Audience"
        title="Ideal Users"
        subtitle="Designed for traders who value systematic signal detection"
      />

      <div className="flex flex-wrap gap-3">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-3 hover:border-teal-300 hover:shadow-md transition-all duration-300"
          >
            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
            <div>
              <span className="font-semibold text-slate-900">{profile.title}</span>
              <span className="text-black mx-2">—</span>
              <span className="text-sm text-black">{profile.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Call to Action Section
// ============================================================================
const CallToAction: React.FC = () => {
  return (
    <section className="relative bg-slate-50 border border-slate-200 rounded-2xl px-8 py-6 text-center overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Interested in a Similar System?
          </h2>
          <p className="text-black text-sm">
            Custom signal detection systems can be built for different indicators, asset classes, or alert mechanisms.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917083718306"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-slate-700 font-semibold border border-slate-300 rounded-xl hover:bg-slate-100 transition-all whitespace-nowrap"
          >
            View Other Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Main Case Study Component
// ============================================================================
export default function CaseStudyEMACrossoverTechnical() {
  return (
    <>
      {/* Sticky Table of Contents */}
      <TableOfContents />

      <article className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Header */}
        <header className="relative text-center mb-20 pb-14 border-b border-slate-100">
          {/* Back Link */}
          <Link
            href="/projects/ema-crossover-screener"
            className="inline-flex items-center gap-2 text-sm text-black hover:text-teal-600 mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Overview
          </Link>

          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200/60 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wider">
              <Code className="w-3.5 h-3.5" />
              Technical Documentation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            <span className="text-slate-900">Delta Exchange</span>
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> Crypto Screener</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-black max-w-2xl mx-auto mb-10">
            In-depth technical architecture, data flow, and implementation details
          </p>

          {/* CTA Button */}
          <a
            href="https://delta.secretweapon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg shadow-teal-500/25 group"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </header>

        {/* Sections */}
        <Architecture />
        <DataFlow />
        <KeyFeatures />
        <Performance />
        <Outcomes />
        <IdealUsers />
        <CallToAction />
      </article>
    </>
  );
}
