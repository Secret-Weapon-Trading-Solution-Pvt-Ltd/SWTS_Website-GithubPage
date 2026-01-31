'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================================================
// Section Label Component
// ============================================================================
const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-3 mb-3">
    <span className="text-[11px] font-semibold text-black uppercase tracking-widest">
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
    { id: 'architecture', label: 'Architecture' },
    { id: 'data-pipeline', label: 'Data Pipeline' },
    { id: 'signal-engine', label: 'Signal Engine' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'validation', label: 'Validation' },
    { id: 'visuals', label: 'Visuals' },
    { id: 'api', label: 'API Reference' },
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
        <p className="text-[10px] font-semibold text-black uppercase tracking-wider mb-3 px-2">
          Technical Docs
        </p>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-3 py-1.5 text-xs rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-slate-900 text-white font-medium'
                    : 'text-black hover:text-slate-900 hover:bg-slate-50'
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
// Technical Overview Section
// ============================================================================
const TechnicalOverview: React.FC = () => {
  return (
    <section id="overview" className="mb-20 scroll-mt-28">
      <SectionLabel label="Technical Overview" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">System Overview</h2>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
        <p className="text-black leading-relaxed mb-6">
          The <span className="font-semibold text-slate-800">Delta Exchange Crypto Screener</span> is a
          self-hosted signal detection platform that performs continuous EMA crossover analysis on
          cryptocurrency perpetual contracts. The system operates autonomously, polling market data
          at candle close intervals and broadcasting state changes via WebSocket.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">9/20</p>
            <p className="text-xs text-black">EMA Periods</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">5</p>
            <p className="text-xs text-black">Timeframes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">600</p>
            <p className="text-xs text-black">Candle Window</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">&lt;5s</p>
            <p className="text-xs text-black">Signal Latency</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mb-4">Supported Timeframes</h3>
      <div className="grid grid-cols-5 gap-3">
        {['1m', '15m', '1h', '4h', '1d'].map((tf) => (
          <div key={tf} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
            <span className="text-sm font-semibold text-slate-900">{tf}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Architecture Section
// ============================================================================
const Architecture: React.FC = () => {
  const components = [
    {
      name: 'API Gateway',
      tech: 'FastAPI + Uvicorn',
      desc: 'ASGI server handling REST endpoints and WebSocket connections. Routes requests to appropriate handlers.',
    },
    {
      name: 'Signal Engine',
      tech: 'Python + Pandas',
      desc: 'Core calculation module. Computes EMAs using pandas.ewm() with span parameters. Detects crossover state transitions.',
    },
    {
      name: 'Data Fetcher',
      tech: 'AsyncIO + aiohttp',
      desc: 'Async HTTP client polling Delta Exchange REST API. Implements rate limiting and retry logic.',
    },
    {
      name: 'WebSocket Hub',
      tech: 'FastAPI WebSocket',
      desc: 'Manages client connections. Broadcasts signal updates to all connected sessions in real-time.',
    },
    {
      name: 'Notification Service',
      tech: 'Telegram Bot API',
      desc: 'Delivers crossover alerts to linked Telegram accounts. Filters by user activity status.',
    },
    {
      name: 'State Manager',
      tech: 'JSON File Storage',
      desc: 'Persists signal states, watchlists, and session data. No external database required.',
    },
  ];

  return (
    <section id="architecture" className="mb-20 scroll-mt-28">
      <SectionLabel label="System Architecture" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Architecture</h2>

      <div className="bg-slate-900 rounded-2xl p-6 mb-8 overflow-x-auto">
        <pre className="text-sm text-black font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────┐
│                        Client Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │  Web Browser │  │   Telegram   │  │  API Client  │           │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘           │
└─────────┼─────────────────┼─────────────────┼───────────────────┘
          │ WebSocket       │ Bot API         │ REST
          ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Application Layer                           │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                  FastAPI + Uvicorn                       │    │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │    │
│  │  │  REST API   │  │  WebSocket  │  │  Telegram   │      │    │
│  │  │  Endpoints  │  │    Hub      │  │   Handler   │      │    │
│  │  └─────────────┘  └─────────────┘  └─────────────┘      │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Core Services                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Signal Engine  │  │  Data Fetcher   │  │  State Manager  │  │
│  │  (EMA Calc)     │  │  (Delta API)    │  │  (JSON Files)   │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                      External Services                           │
│  ┌─────────────────────────┐  ┌─────────────────────────┐       │
│  │   Delta Exchange API    │  │    Telegram Bot API     │       │
│  │   (Market Data)         │  │    (Notifications)      │       │
│  └─────────────────────────┘  └─────────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mb-5">Component Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {components.map((comp, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-slate-900">{comp.name}</h4>
              <span className="text-[10px] font-mono bg-slate-100 text-black px-2 py-0.5 rounded">
                {comp.tech}
              </span>
            </div>
            <p className="text-sm text-black leading-relaxed">{comp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Data Pipeline Section
// ============================================================================
const DataPipeline: React.FC = () => {
  return (
    <section id="data-pipeline" className="mb-20 scroll-mt-28">
      <SectionLabel label="Data Pipeline" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Pipeline</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Data Source</h3>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
            <p className="text-sm text-black leading-relaxed mb-4">
              Market data is sourced from <span className="font-semibold text-slate-800">Delta Exchange India REST API</span>.
              The system fetches OHLCV (Open, High, Low, Close, Volume) candle data for each symbol/timeframe combination.
            </p>
            <div className="bg-white border border-slate-200 rounded-lg p-4 font-mono text-xs">
              <p className="text-black mb-1"># API Endpoint</p>
              <p className="text-slate-800">GET /v2/history/candles?symbol={'{symbol}'}&resolution={'{tf}'}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Polling Strategy</h3>
          <ul className="space-y-3">
            {[
              { label: 'Alignment', desc: 'Polls trigger at candle close time + 5 second grace period' },
              { label: 'Concurrency', desc: 'Maximum 5 simultaneous API requests to respect rate limits' },
              { label: 'Incremental', desc: 'After initial seed, only fetches new candles to minimize load' },
              { label: 'Retry Logic', desc: 'Exponential backoff on API failures (max 3 attempts)' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm">
                <span className="w-24 flex-shrink-0 font-semibold text-slate-800">{item.label}</span>
                <span className="text-black">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Data Quality Filters</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-800">
              Raw candle data passes through validation filters before EMA calculation to prevent
              erroneous signals from bad data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Volume Check', rule: 'volume > 0', desc: 'Excludes zero-volume candles' },
              { name: 'Price Check', rule: 'OHLC > 0', desc: 'All price values must be positive' },
              { name: 'MAD Filter', rule: '|x - median| < 10×MAD', desc: 'Removes statistical outliers' },
              { name: 'Window Limit', rule: 'max 600 candles', desc: 'Rolling window per symbol/tf' },
            ].map((filter, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900 text-sm">{filter.name}</span>
                  <code className="text-[10px] bg-slate-100 text-black px-2 py-0.5 rounded font-mono">
                    {filter.rule}
                  </code>
                </div>
                <p className="text-xs text-black">{filter.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Signal Engine Section
// ============================================================================
const SignalEngine: React.FC = () => {
  return (
    <section id="signal-engine" className="mb-20 scroll-mt-28">
      <SectionLabel label="Signal Engine" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Signal Detection Logic</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">EMA Calculation</h3>
          <div className="bg-slate-900 rounded-xl p-5 mb-4">
            <pre className="text-sm text-black font-mono overflow-x-auto">
{`# EMA Calculation (Python/Pandas)
short_ema = df['close'].ewm(span=9, adjust=False).mean()
long_ema = df['close'].ewm(span=20, adjust=False).mean()

# Crossover Detection
bullish = (short_ema > long_ema) & (short_ema.shift(1) <= long_ema.shift(1))
bearish = (short_ema < long_ema) & (short_ema.shift(1) >= long_ema.shift(1))`}
            </pre>
          </div>
          <p className="text-sm text-black">
            Uses pandas exponential weighted moving average with <code className="bg-slate-100 px-1 rounded">adjust=False</code> for
            recursive calculation matching traditional EMA formula.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Signal States</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <h4 className="font-semibold text-emerald-900 mb-1">Bullish</h4>
              <p className="text-xs text-emerald-700">9 EMA crossed above 20 EMA</p>
              <p className="text-xs text-emerald-600 mt-2">Condition: short &gt; long</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h4 className="font-semibold text-red-900 mb-1">Bearish</h4>
              <p className="text-xs text-red-700">9 EMA crossed below 20 EMA</p>
              <p className="text-xs text-red-600 mt-2">Condition: short &lt; long</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">Bars Since</h4>
              <p className="text-xs text-black">Candles since last crossover</p>
              <p className="text-xs text-black mt-2">Counter: 0, 1, 2, 3...</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">State Transition Flow</h3>
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="flex items-center justify-between text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-black font-mono text-xs">POLL</span>
                </div>
                <span className="text-xs text-black">Candle Close</span>
              </div>
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-black font-mono text-xs">CALC</span>
                </div>
                <span className="text-xs text-black">EMA Update</span>
              </div>
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-black font-mono text-xs">CMP</span>
                </div>
                <span className="text-xs text-black">Compare</span>
              </div>
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-teal-600 font-mono text-xs">EMIT</span>
                </div>
                <span className="text-xs text-black">Broadcast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Infrastructure Section
// ============================================================================
const Infrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="mb-20 scroll-mt-28">
      <SectionLabel label="Infrastructure" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Deployment & Infrastructure</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Container Configuration</h3>
          <div className="bg-slate-900 rounded-xl p-5">
            <pre className="text-sm text-black font-mono overflow-x-auto">
{`# Dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Docker Compose Stack</h3>
          <div className="bg-slate-900 rounded-xl p-5">
            <pre className="text-sm text-black font-mono overflow-x-auto">
{`# docker-compose.yml
version: '3.8'
services:
  screener:
    build: .
    restart: unless-stopped
    ports:
      - "8000:8000"
    volumes:
      - ./data:/app/data
    environment:
      - TELEGRAM_BOT_TOKEN=\${TELEGRAM_BOT_TOKEN}

  nginx:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./certbot/conf:/etc/letsencrypt`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Tech Stack Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: 'Python', version: '3.11' },
              { name: 'FastAPI', version: '0.100+' },
              { name: 'Uvicorn', version: 'ASGI' },
              { name: 'Pandas', version: '2.0+' },
              { name: 'NumPy', version: '1.24+' },
              { name: 'Docker', version: 'Latest' },
              { name: 'Nginx', version: 'Alpine' },
              { name: 'Let\'s Encrypt', version: 'Certbot' },
              { name: 'GitHub Actions', version: 'CI/CD' },
            ].map((tech, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-900">{tech.name}</span>
                <span className="text-xs text-black font-mono">{tech.version}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">CI/CD Pipeline</h3>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
            <ol className="space-y-3">
              {[
                'Push to main branch triggers GitHub Actions workflow',
                'Build Docker image and run test suite',
                'Push image to container registry',
                'SSH deploy to production server',
                'Docker Compose pull and restart services',
                'Health check verification',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-black">
                  <span className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-semibold text-slate-700">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Validation Section
// ============================================================================
const Validation: React.FC = () => {
  return (
    <section id="validation" className="mb-20 scroll-mt-28">
      <SectionLabel label="Validation & Reliability" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">System Validation</h2>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-amber-800">
          <span className="font-semibold">Important:</span> This system detects and alerts on EMA crossover events.
          It does not execute trades or provide performance guarantees. Signal accuracy depends on data quality from Delta Exchange API.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Reliability Metrics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { metric: '99.9%', label: 'Uptime Target' },
              { metric: '<5s', label: 'Alert Latency' },
              { metric: '600', label: 'Candle Buffer' },
              { metric: '10×MAD', label: 'Outlier Threshold' },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-slate-900 mb-1">{item.metric}</p>
                <p className="text-xs text-black">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Session Management</h3>
          <ul className="space-y-3">
            {[
              'Sessions expire after 30 minutes of inactivity',
              'Maximum 10 concurrent sessions per deployment',
              'Telegram alerts only sent to active users',
              'Watchlist state persisted across browser sessions',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-black">
                <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Error Handling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { scenario: 'API Timeout', response: 'Exponential backoff, max 3 retries' },
              { scenario: 'Invalid Data', response: 'Skip candle, log warning' },
              { scenario: 'WebSocket Drop', response: 'Auto-reconnect with state sync' },
              { scenario: 'Telegram Failure', response: 'Queue and retry, silent fallback' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">{item.scenario}</p>
                <p className="text-xs text-black">{item.response}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// Visuals Section
// ============================================================================
const Visuals: React.FC = () => {
  const screenshots = [
    { id: 'dashboard', title: 'Signal Dashboard', desc: 'Matrix view showing all symbols × timeframes with live signal states' },
    { id: 'watchlist', title: 'Watchlist Manager', desc: 'Add/remove symbols with searchable dropdown' },
    { id: 'telegram', title: 'Telegram Alerts', desc: 'Mobile notification with symbol, timeframe, direction' },
    { id: 'linking', title: 'Account Linking', desc: 'PIN-based Telegram account connection flow' },
  ];

  return (
    <section id="visuals" className="mb-20 scroll-mt-28">
      <SectionLabel label="Visual Documentation" />
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Interface Screenshots</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {screenshots.map((item) => (
          <figure key={item.id} className="group">
            <div className="relative bg-slate-100 border border-slate-200 rounded-xl overflow-hidden mb-3">
              <div className="aspect-video flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <svg className="w-8 h-8 text-black mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium text-black">{item.title}</span>
                </div>
              </div>
            </div>
            <figcaption>
              <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
              <p className="text-xs text-black">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// API Reference Section
// ============================================================================
const APIReference: React.FC = () => {
  const endpoints = [
    { method: 'GET', path: '/api/signals', desc: 'Current signal states for all watchlist symbols' },
    { method: 'GET', path: '/api/watchlist', desc: 'User watchlist symbols' },
    { method: 'POST', path: '/api/watchlist', desc: 'Add symbol to watchlist' },
    { method: 'DELETE', path: '/api/watchlist/{symbol}', desc: 'Remove symbol from watchlist' },
    { method: 'GET', path: '/api/historical-crossovers', desc: 'Past crossover events for backtesting' },
    { method: 'WS', path: '/ws', desc: 'WebSocket connection for real-time updates' },
  ];

  return (
    <section id="api" className="mb-20 scroll-mt-28">
      <SectionLabel label="API Reference" />
      <h2 className="text-2xl font-bold text-slate-900 mb-6">API Endpoints</h2>

      <div className="space-y-3">
        {endpoints.map((ep, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4">
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              ep.method === 'GET' ? 'bg-emerald-100 text-emerald-700' :
              ep.method === 'POST' ? 'bg-blue-100 text-blue-700' :
              ep.method === 'DELETE' ? 'bg-red-100 text-red-700' :
              'bg-violet-100 text-violet-700'
            }`}>
              {ep.method}
            </span>
            <code className="text-sm font-mono text-slate-800 flex-1">{ep.path}</code>
            <span className="text-sm text-black hidden sm:block">{ep.desc}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-teal-50 border border-teal-100 rounded-xl p-5">
        <p className="text-sm text-teal-800">
          Full API documentation with request/response schemas available at <code className="bg-teal-100 px-1 rounded">/docs</code> (Swagger UI)
          or <code className="bg-teal-100 px-1 rounded">/redoc</code> (ReDoc).
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// Main Component
// ============================================================================
export default function CaseStudyEMACrossoverFull() {
  return (
    <>
      <TableOfContents />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Header */}
        <header className="text-center mb-12 pb-8 border-b border-slate-100">
          {/* Back to Summary Link */}
          <Link
            href="/projects/delta-screener"
            className="inline-flex items-center gap-2 text-sm text-black hover:text-slate-900 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Executive Summary
          </Link>

          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="inline-flex px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-black uppercase tracking-wide">
              Technical Documentation
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Delta Exchange Crypto Screener
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto mb-6">
            Full technical specification for engineers and technical buyers
          </p>
          <a
            href="https://delta.secretweapon.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Live System
          </a>
        </header>

        {/* Sections */}
        <TechnicalOverview />
        <Architecture />
        <DataPipeline />
        <SignalEngine />
        <Infrastructure />
        <Validation />
        <Visuals />
        <APIReference />

        {/* Footer CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Need a Custom Implementation?
          </h2>
          <p className="text-black text-sm mb-6 max-w-md mx-auto">
            This architecture can be adapted for different indicators, exchanges, or asset classes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-xl hover:bg-slate-100 transition-colors"
          >
            Discuss Requirements
          </Link>
        </section>
      </article>
    </>
  );
}
