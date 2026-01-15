'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================================================
// Section Label Component
// ============================================================================
const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
      {label}
    </span>
    <span className="flex-1 h-px bg-slate-100" />
  </div>
);

// ============================================================================
// Table of Contents Component (Desktop Only)
// ============================================================================
const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'context', label: 'Context' },
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'features', label: 'Features' },
    { id: 'performance', label: 'Performance' },
    { id: 'visuals', label: 'Visuals' },
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
    <nav className="hidden xl:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
          Contents
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// ============================================================================
// Project Overview Section
// ============================================================================
const ProjectOverview: React.FC = () => {
  return (
    <section id="overview" className="mb-20 scroll-mt-28">
      <SectionLabel label="Project Overview" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Project Name</dt>
          <dd className="text-base font-medium text-slate-900">Delta Exchange Crypto Screener</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Category</dt>
          <dd className="text-base font-medium text-slate-900">Algo Trading / Real-Time Analytics</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Market Type</dt>
          <dd className="text-base font-medium text-slate-900">Cryptocurrency Perpetuals (Digital Assets)</dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Execution Type</dt>
          <dd className="text-base font-medium text-slate-900">Signal Generation & Alert System</dd>
        </div>
      </dl>

      <p className="text-slate-600 leading-relaxed">
        A <span className="font-semibold text-slate-800">real-time multi-timeframe EMA crossover detection system</span> built for cryptocurrency markets.
        The platform continuously monitors user-defined watchlists across <span className="font-semibold text-slate-800">five timeframes</span>,
        broadcasting live signal updates via WebSocket and delivering <span className="font-semibold text-slate-800">instant Telegram alerts</span> when crossover events are confirmed.
      </p>
    </section>
  );
};

// ============================================================================
// Client Context Section
// ============================================================================
const ClientContext: React.FC = () => {
  return (
    <section id="context" className="mb-20 scroll-mt-28">
      <SectionLabel label="Client Context" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Context</h2>

      <p className="text-slate-600 leading-relaxed mb-8">
        Built for <span className="font-semibold text-slate-800">active cryptocurrency traders</span> who rely on exponential moving average crossovers
        as a core component of their technical analysis workflow. The target environment includes
        individual traders monitoring multiple assets simultaneously, as well as <span className="font-semibold text-slate-800">small trading
        desks</span> requiring centralized signal distribution.
      </p>

      <h3 className="text-lg font-semibold text-slate-800 mb-4">Trading Environment</h3>
      <ul className="space-y-4">
        {[
          '24/7 cryptocurrency markets with continuous price action',
          'Need for real-time monitoring without constant screen attention',
          'Multi-timeframe analysis from 1-minute scalping to daily position trading',
          'Requirement for mobile-accessible alerts during off-desk hours',
          'Integration with Delta Exchange India for perpetual contract data',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-slate-600">
            <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// ============================================================================
// Problem Statement Section
// ============================================================================
const ProblemStatement: React.FC = () => {
  const problems = [
    {
      title: 'Missed Opportunities',
      desc: 'Crossover signals occur at unpredictable times. Traders cannot watch every chart continuously, leading to delayed entries or missed setups entirely.',
    },
    {
      title: 'Information Overload',
      desc: 'Monitoring five timeframes across multiple symbols requires constant chart switching, creating cognitive fatigue and increasing error rates.',
    },
    {
      title: 'Inconsistent Execution',
      desc: 'Without systematic alerts, traders often second-guess signals or apply inconsistent criteria depending on attention levels.',
    },
    {
      title: 'No Historical Context',
      desc: 'Understanding how recently a crossover occurred requires manual candle counting, making it difficult to assess signal freshness.',
    },
    {
      title: 'Platform Dependency',
      desc: 'Existing exchange platforms lack customizable crossover alerts, forcing traders to rely on third-party tools with subscription costs and data latency.',
    },
  ];

  return (
    <section id="problem" className="mb-20 scroll-mt-28">
      <SectionLabel label="The Problem" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Problem</h2>

      <p className="text-slate-600 leading-relaxed mb-8">
        <span className="font-semibold text-slate-800">Manual EMA crossover monitoring</span> across multiple assets and timeframes presents
        significant challenges for active traders:
      </p>

      <div className="space-y-4">
        {problems.map((problem, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-2">{problem.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Solution Section
// ============================================================================
const Solution: React.FC = () => {
  const steps = [
    {
      title: 'Watchlist Configuration',
      desc: 'Users add symbols to their personal watchlist through a web interface. Each user maintains an independent symbol set.',
    },
    {
      title: 'Continuous Polling',
      desc: 'Background services monitor each symbol/timeframe combination, polling for new candle data aligned to close times.',
    },
    {
      title: 'Signal Detection',
      desc: 'When a candle closes, the system recalculates EMAs and checks for crossover conditions (short EMA crossing above or below long EMA).',
    },
    {
      title: 'Instant Broadcast',
      desc: 'Detected signals are immediately pushed to all connected browsers via WebSocket and sent to linked Telegram accounts.',
    },
    {
      title: 'State Persistence',
      desc: 'Signal states are cached locally, allowing the dashboard to display current status (Bullish/Bearish) and bars elapsed since confirmation.',
    },
  ];

  return (
    <section id="solution" className="mb-20 scroll-mt-28">
      <SectionLabel label="The Solution" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Solution</h2>

      <h3 className="text-lg font-semibold text-slate-800 mb-4">System Design</h3>
      <p className="text-slate-600 leading-relaxed mb-10">
        A <span className="font-semibold text-slate-800">self-hosted signal detection platform</span> that runs continuous background analysis
        on user-selected cryptocurrency pairs. The system fetches OHLCV data from Delta Exchange,
        calculates <span className="font-semibold text-slate-800">9-period and 20-period EMAs</span> across all monitored timeframes, and detects
        crossover events in real-time.
      </p>

      <h3 className="text-lg font-semibold text-slate-800 mb-5">How It Works</h3>
      <div className="space-y-5 mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-5">
            <div className="w-9 h-9 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0">
              {i + 1}
            </div>
            <div className="pt-1">
              <h4 className="font-semibold text-slate-900 mb-1">{step.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mb-4">Signal Logic</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-5 py-4">
          <span className="text-sm font-semibold text-emerald-700">Bullish Signal</span>
          <p className="text-xs text-emerald-600 mt-1">9 EMA crosses above 20 EMA</p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl px-5 py-4">
          <span className="text-sm font-semibold text-red-700">Bearish Signal</span>
          <p className="text-xs text-red-600 mt-1">9 EMA crosses below 20 EMA</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
          <span className="text-sm font-semibold text-slate-700">Bars Since</span>
          <p className="text-xs text-slate-600 mt-1">Candle count since crossover</p>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Architecture Section
// ============================================================================
const Architecture: React.FC = () => {
  const stacks = [
    {
      title: 'Frontend',
      items: [
        'Vanilla JavaScript (no framework dependencies)',
        'HTML5 / CSS3 with responsive design',
        'WebSocket client for real-time updates',
        'Dynamic color-coded signal visualization',
      ],
    },
    {
      title: 'Backend',
      items: [
        'Python 3.11 with FastAPI framework',
        'Uvicorn ASGI server',
        'AsyncIO for concurrent operations',
        'Pandas / NumPy for EMA calculations',
      ],
    },
    {
      title: 'Data Sources',
      items: [
        'Delta Exchange India REST API',
        'OHLCV candle data (600-bar rolling window)',
        'Product listing endpoint for symbol discovery',
      ],
    },
    {
      title: 'Notification Layer',
      items: [
        'Telegram Bot API for mobile alerts',
        'PIN-based account linking',
        'Activity-filtered delivery (active users only)',
      ],
    },
    {
      title: 'Infrastructure',
      items: [
        'Docker containerization (Python 3.11-slim)',
        'Docker Compose orchestration',
        'Nginx reverse proxy with SSL/TLS',
        'GitHub Actions CI/CD pipeline',
        'Let\'s Encrypt certificate automation',
      ],
    },
    {
      title: 'Data Persistence',
      items: [
        'JSON file-based caching (no database required)',
        'Per-user watchlist storage',
        'Signal state persistence across restarts',
      ],
    },
  ];

  return (
    <section id="architecture" className="mb-20 scroll-mt-28">
      <SectionLabel label="Technical Architecture" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Architecture & Tech Stack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stacks.map((stack, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors">
            <h3 className="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-100">
              {stack.title}
            </h3>
            <ul className="space-y-2.5">
              {stack.items.map((item, j) => (
                <li key={j} className="text-xs text-slate-600 leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
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
      title: 'Multi-Timeframe Screening',
      desc: 'Simultaneous monitoring across 1m, 15m, 1h, 4h, and 1d timeframes for each symbol in the watchlist.',
    },
    {
      title: 'Real-Time WebSocket Updates',
      desc: 'Signal changes broadcast instantly to all connected clients without page refresh.',
    },
    {
      title: 'Telegram Alert Integration',
      desc: 'Crossover notifications delivered to mobile devices with symbol, timeframe, signal direction, and IST timestamp.',
    },
    {
      title: 'Personal Watchlist Management',
      desc: 'Add or remove symbols dynamically; each user session maintains an independent watchlist.',
    },
    {
      title: 'Signal Freshness Indicator',
      desc: '"Bars Since" counter shows how many candles have closed since the last crossover confirmation.',
    },
    {
      title: 'Data Quality Filtering',
      desc: 'Outlier detection using Median Absolute Deviation removes suspicious candles before EMA calculation.',
    },
    {
      title: 'Zero Database Dependency',
      desc: 'File-based persistence enables simple deployment without external database infrastructure.',
    },
  ];

  return (
    <section id="features" className="mb-20 scroll-mt-28">
      <SectionLabel label="Key Features" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>

      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Performance Section
// ============================================================================
const Performance: React.FC = () => {
  return (
    <section id="performance" className="mb-20 scroll-mt-28">
      <SectionLabel label="Performance & Validation" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Performance</h2>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
        <p className="text-sm text-amber-800 leading-relaxed">
          This system is a <span className="font-semibold">signal detection and alert platform</span>. It does not execute trades or
          generate return metrics. The following describes operational performance characteristics.
        </p>
      </div>

      <div className="space-y-10">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-5">Data Quality Measures</h3>
          <ul className="space-y-4">
            {[
              { label: 'Volume validation', desc: 'candles with zero volume excluded' },
              { label: 'Price validation', desc: 'OHLC values must be greater than zero' },
              { label: 'Outlier removal', desc: '10× MAD (Median Absolute Deviation) filter applied' },
              { label: 'Rolling window', desc: '600 candles maintained per symbol/timeframe' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-slate-600">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span><span className="font-semibold text-slate-800">{item.label}</span> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-5">System Reliability</h3>
          <ul className="space-y-4">
            {[
              { label: 'Polling alignment', desc: 'candle close time + 5-second grace period' },
              { label: 'API concurrency', desc: 'limited to 5 simultaneous requests' },
              { label: 'Incremental updates', desc: 'minimize API load after initial seeding' },
              { label: 'State persistence', desc: 'signal state persisted to disk for recovery after restarts' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-slate-600">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span><span className="font-semibold text-slate-800">{item.label}</span> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-5">Session Management</h3>
          <ul className="space-y-4">
            {[
              { label: '30-minute expiration', desc: 'with automatic refresh' },
              { label: 'Maximum 10 sessions', desc: 'per deployment' },
              { label: 'Activity-based filtering', desc: 'reduces Telegram notification noise' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-slate-600">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span><span className="font-semibold text-slate-800">{item.label}</span> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-5 mt-10">
        <p className="text-sm text-teal-800 leading-relaxed">
          Historical crossover data is available via the <span className="font-semibold">/historical-crossovers</span> endpoint
          for users who wish to conduct their own backtesting analysis.
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// Visuals Section
// ============================================================================
const Visuals: React.FC = () => {
  const screenshots = [
    {
      id: 'dashboard',
      title: 'Dashboard Overview',
      caption: 'The main screener interface displays a matrix view of all watchlist symbols across five timeframes. Each cell shows the current signal state (Bullish/Bearish) with color coding — green for bullish conditions, red for bearish. The "Bars Since" value appears below each signal, indicating candles elapsed since confirmation.',
    },
    {
      id: 'watchlist',
      title: 'Watchlist Management Panel',
      caption: 'The symbol management tab shows the current watchlist with add/remove controls. Available symbols are fetched from Delta Exchange and presented in a searchable dropdown. Changes take effect immediately without page reload.',
    },
    {
      id: 'telegram-alert',
      title: 'Telegram Alert Example',
      caption: 'Screenshot of a mobile Telegram notification showing a crossover alert. The message includes symbol name, timeframe, signal direction (Bullish/Bearish), and timestamp in IST format. Alerts are delivered within seconds of signal confirmation.',
    },
    {
      id: 'linking-flow',
      title: 'Telegram Account Linking Flow',
      caption: 'Step-by-step screenshots showing the PIN-based linking process: generating a 6-digit PIN from the web interface, sending it to the Telegram bot, and confirmation of successful account linkage.',
    },
  ];

  return (
    <section id="visuals" className="mb-20 scroll-mt-28">
      <SectionLabel label="Visual Documentation" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Visuals</h2>

      {/* Video Section */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Real-Time Update Demonstration</h3>
        <div className="relative bg-slate-100 border border-slate-200 rounded-2xl overflow-hidden">
          <div className="aspect-video flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              poster=""
              controls
              preload="metadata"
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Placeholder overlay - remove when video is added */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/5">
              <div className="w-16 h-16 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center mb-3 shadow-sm">
                <svg className="w-6 h-6 text-slate-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-500">Video Placeholder</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500 leading-relaxed">
          A walkthrough video demonstrates the system detecting a live crossover event. The sequence shows: initial dashboard state, candle close triggering recalculation, WebSocket update pushing new signal to browser, and corresponding Telegram notification arriving on a mobile device — all within a 10-second window.
        </p>
      </div>

      {/* Screenshots Grid */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-5">Screenshots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((item) => (
            <figure key={item.id} className="group">
              {/* Image Container */}
              <div className="relative bg-slate-100 border border-slate-200 rounded-xl overflow-hidden mb-4">
                <div className="aspect-[4/3]">
                  <img
                    src=""
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Placeholder overlay - remove when images are added */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50">
                    <svg className="w-10 h-10 text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-medium text-slate-400">Screenshot</span>
                  </div>
                </div>
              </div>
              {/* Caption */}
              <figcaption>
                <h4 className="text-sm font-semibold text-slate-900 mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
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
      title: 'Signal Detection Speed',
      desc: 'Crossover events are detected and broadcast within seconds of candle close. Traders receive alerts on mobile devices without monitoring screens, enabling timely response to setups across any timeframe.',
    },
    {
      title: 'Reduced Cognitive Load',
      desc: 'Automated multi-timeframe scanning eliminates manual chart switching. A single dashboard provides complete visibility into signal states across the entire watchlist, replacing fragmented monitoring workflows.',
    },
    {
      title: 'Consistent Signal Application',
      desc: 'Systematic EMA calculation with fixed parameters (9/20) ensures identical signal logic is applied to every symbol and timeframe. Human bias and attention variability are removed from the detection process.',
    },
    {
      title: 'Operational Independence',
      desc: 'Self-hosted deployment with file-based storage eliminates ongoing subscription costs and third-party dependencies. The system runs on standard cloud infrastructure with minimal resource requirements.',
    },
  ];

  return (
    <section id="outcomes" className="mb-20 scroll-mt-28">
      <SectionLabel label="Outcome & Impact" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Outcomes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {outcomes.map((outcome, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 transition-colors">
            <h4 className="font-semibold text-slate-900 mb-2">{outcome.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{outcome.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Ideal Users Section
// ============================================================================
const IdealUsers: React.FC = () => {
  const profiles = [
    {
      title: 'Swing Traders',
      desc: 'Using 1h, 4h, and daily EMA crossovers as entry/exit signals for multi-day positions in cryptocurrency markets.',
    },
    {
      title: 'Active Day Traders',
      desc: 'Monitoring 1m and 15m timeframes for intraday setups while managing other responsibilities.',
    },
    {
      title: 'Multi-Asset Managers',
      desc: 'Tracking crossover conditions across a diversified cryptocurrency portfolio from a single interface.',
    },
    {
      title: 'Technical Analysis Practitioners',
      desc: 'Traders who incorporate EMA crossovers as one component of a broader technical strategy.',
    },
    {
      title: 'Algo-Curious Traders',
      desc: 'Individuals seeking to systematize their signal detection without building custom infrastructure.',
    },
  ];

  return (
    <section id="users" className="mb-20 scroll-mt-28">
      <SectionLabel label="Ideal User Profiles" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Ideal Users</h2>

      <div className="space-y-4">
        {profiles.map((profile, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
            <h4 className="font-semibold text-slate-900 mb-2">{profile.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{profile.desc}</p>
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
    <section className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Interested in a Similar System?</h2>

      <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
        This screener was designed to address specific workflow challenges in cryptocurrency
        technical analysis. Similar systems can be built for different indicators, asset classes,
        or alert mechanisms based on your trading requirements.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors"
        >
          Discuss Your Requirements
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 text-sm font-medium border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
        >
          View Other Projects
        </Link>
      </div>
    </section>
  );
};

// ============================================================================
// Main Case Study Component
// ============================================================================
export default function CaseStudyEMACrossover() {
  return (
    <>
      {/* Sticky Table of Contents - Desktop Only */}
      <TableOfContents />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Header */}
        <header className="text-center mb-16 pb-12 border-b border-slate-100">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="inline-flex px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Algo Trading
            </span>
            <span className="inline-flex px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-xs font-semibold text-teal-700 uppercase tracking-wide">
              Real-Time Analytics
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Delta Exchange Crypto Screener
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Multi-timeframe cryptocurrency signal detection with real-time alerts
          </p>
          <a
            href="https://delta.secretweapon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <Architecture />
        <KeyFeatures />
        <Performance />
        <Visuals />
        <Outcomes />
        <IdealUsers />
        <CallToAction />
      </article>
    </>
  );
}
