'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { FlaskConical, Shield, CheckCircle, ArrowRight, TrendingUp, AlertCircle, Eye, Play, BarChart3, Clock } from 'lucide-react';

interface PaperTradingOverviewProps {
  service: Service;
}

// Simulation Lab Illustration - Different from other services
const SimulationLabIllustration = () => (
  <svg viewBox="0 0 480 320" className="w-full h-auto">
    <defs>
      <linearGradient id="labGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="labShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Background grid pattern */}
    <pattern id="labGrid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.5" opacity="0.4"/>
    </pattern>
    <rect x="0" y="0" width="480" height="320" fill="url(#labGrid)" opacity="0.3"/>

    {/* Main Monitor Frame */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      {/* Monitor body */}
      <rect x="60" y="30" width="360" height="220" rx="12" fill="#374151" filter="url(#labShadow)"/>
      <rect x="70" y="40" width="340" height="195" rx="8" fill="url(#screenGrad)"/>

      {/* Monitor stand */}
      <rect x="200" y="250" width="80" height="15" rx="2" fill="#4B5563"/>
      <rect x="180" y="265" width="120" height="8" rx="4" fill="#6B7280"/>

      {/* Screen header */}
      <rect x="70" y="40" width="340" height="35" rx="8" fill="#1E293B"/>
      <circle cx="90" cy="57" r="6" fill="#EF4444"/>
      <circle cx="110" cy="57" r="6" fill="#F59E0B"/>
      <circle cx="130" cy="57" r="6" fill="#22C55E"/>
      <text x="210" y="62" fill="#94A3B8" fontSize="11" fontWeight="600" textAnchor="middle">PAPER TRADING</text>

      {/* Simulation badge */}
      <rect x="320" y="47" width="80" height="20" rx="10" fill="#10B981" opacity="0.2"/>
      <circle cx="332" cy="57" r="4" fill="#10B981">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="365" y="61" fill="#10B981" fontSize="9" fontWeight="600" textAnchor="middle">SIMULATED</text>
    </motion.g>

    {/* Chart area */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      {/* Mini chart */}
      <rect x="85" y="85" width="200" height="100" rx="6" fill="#0F172A"/>
      <text x="95" y="100" fill="#64748B" fontSize="8">NIFTY 50</text>
      <text x="95" y="115" fill="#22C55E" fontSize="12" fontWeight="700">22,547.50</text>
      <text x="175" y="115" fill="#22C55E" fontSize="8">+1.2%</text>

      {/* Price line */}
      <motion.path
        d="M95 165 Q120 155 140 160 T180 145 T220 150 T260 135 T275 140"
        fill="none"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Entry marker */}
      <circle cx="180" cy="145" r="5" fill="#3B82F6" stroke="white" strokeWidth="2"/>
      <text x="180" y="138" fill="#3B82F6" fontSize="7" textAnchor="middle">BUY</text>

      {/* Grid lines */}
      <line x1="95" y1="130" x2="275" y2="130" stroke="#334155" strokeDasharray="3,3" opacity="0.5"/>
      <line x1="95" y1="150" x2="275" y2="150" stroke="#334155" strokeDasharray="3,3" opacity="0.5"/>
      <line x1="95" y1="170" x2="275" y2="170" stroke="#334155" strokeDasharray="3,3" opacity="0.5"/>
    </motion.g>

    {/* Trade panel */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <rect x="295" y="85" width="105" height="140" rx="6" fill="#1E293B"/>
      <text x="348" y="103" fill="#94A3B8" fontSize="9" fontWeight="600" textAnchor="middle">PAPER TRADES</text>

      {/* Trade 1 */}
      <rect x="302" y="112" width="91" height="35" rx="4" fill="#064E3B"/>
      <text x="310" y="127" fill="#6EE7B7" fontSize="8" fontWeight="500">NIFTY BUY</text>
      <text x="310" y="140" fill="#22C55E" fontSize="10" fontWeight="700">+₹2,450</text>
      <text x="365" y="140" fill="#22C55E" fontSize="8">+1.2%</text>

      {/* Trade 2 */}
      <rect x="302" y="152" width="91" height="35" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="1"/>
      <text x="310" y="167" fill="#94A3B8" fontSize="8" fontWeight="500">RELIANCE</text>
      <text x="310" y="180" fill="#F59E0B" fontSize="10" fontWeight="700">OPEN</text>
      <text x="360" y="180" fill="#94A3B8" fontSize="8">@ 2,845</text>

      {/* Trade 3 */}
      <rect x="302" y="192" width="91" height="28" rx="4" fill="#7F1D1D"/>
      <text x="310" y="207" fill="#FCA5A5" fontSize="8" fontWeight="500">HDFC SELL</text>
      <text x="365" y="207" fill="#EF4444" fontSize="8">-0.3%</text>
    </motion.g>

    {/* Stats bar */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <rect x="85" y="195" width="200" height="35" rx="6" fill="#1E293B"/>

      <text x="105" y="210" fill="#64748B" fontSize="7">P&L</text>
      <text x="105" y="222" fill="#22C55E" fontSize="10" fontWeight="700">+₹12,850</text>

      <line x1="160" y1="200" x2="160" y2="225" stroke="#334155" strokeWidth="1"/>

      <text x="175" y="210" fill="#64748B" fontSize="7">WIN RATE</text>
      <text x="175" y="222" fill="#10B981" fontSize="10" fontWeight="700">68%</text>

      <line x1="225" y1="200" x2="225" y2="225" stroke="#334155" strokeWidth="1"/>

      <text x="240" y="210" fill="#64748B" fontSize="7">TRADES</text>
      <text x="240" y="222" fill="#94A3B8" fontSize="10" fontWeight="700">47</text>
    </motion.g>

    {/* Zero Risk Badge - Floating */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    >
      <rect x="350" y="245" width="100" height="35" rx="17" fill="white" filter="url(#labShadow)" stroke="#D1FAE5" strokeWidth="2"/>
      <circle cx="372" cy="262" r="10" fill="#D1FAE5"/>
      <path d="M368 262l3 3 6-6" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="390" y="258" fill="#059669" fontSize="8" fontWeight="600">ZERO</text>
      <text x="390" y="270" fill="#059669" fontSize="8" fontWeight="600">RISK</text>
    </motion.g>

    {/* Flask icon - Lab theme */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <circle cx="45" cy="55" r="25" fill="#D1FAE5"/>
      <path d="M40 42 L40 52 L32 68 L32 72 C32 75 35 78 45 78 C55 78 58 75 58 72 L58 68 L50 52 L50 42" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 42 L50 42" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="45" cy="70" rx="10" ry="4" fill="#10B981" opacity="0.5"/>
    </motion.g>
  </svg>
);

// Performance Tracking Illustration
const PerformanceTrackingIllustration = () => (
  <svg viewBox="0 0 480 280" className="w-full h-auto">
    <defs>
      <filter id="trackShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Background */}
    <rect x="0" y="0" width="480" height="280" fill="#F8FAFC" rx="16"/>

    {/* Metrics Dashboard */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Card 1 - Total P&L */}
      <rect x="20" y="20" width="140" height="80" rx="12" fill="white" filter="url(#trackShadow)"/>
      <circle cx="45" cy="50" r="15" fill="#D1FAE5"/>
      <path d="M40 50 L45 45 L50 50 M45 45 L45 55" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="70" y="45" fill="#64748B" fontSize="9">Total P&L</text>
      <text x="70" y="65" fill="#059669" fontSize="16" fontWeight="700">+₹52,400</text>
      <text x="70" y="82" fill="#22C55E" fontSize="9">↑ 12.4%</text>

      {/* Card 2 - Win Rate */}
      <rect x="170" y="20" width="140" height="80" rx="12" fill="white" filter="url(#trackShadow)"/>
      <circle cx="195" cy="50" r="15" fill="#DBEAFE"/>
      <text x="195" y="55" fill="#3B82F6" fontSize="11" fontWeight="700" textAnchor="middle">%</text>
      <text x="220" y="45" fill="#64748B" fontSize="9">Win Rate</text>
      <text x="220" y="65" fill="#3B82F6" fontSize="16" fontWeight="700">72.5%</text>
      <text x="220" y="82" fill="#64748B" fontSize="9">109/150 trades</text>

      {/* Card 3 - Max Drawdown */}
      <rect x="320" y="20" width="140" height="80" rx="12" fill="white" filter="url(#trackShadow)"/>
      <circle cx="345" cy="50" r="15" fill="#FEE2E2"/>
      <path d="M340 45 L345 55 L350 45" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="370" y="45" fill="#64748B" fontSize="9">Max Drawdown</text>
      <text x="370" y="65" fill="#EF4444" fontSize="16" fontWeight="700">-8.2%</text>
      <text x="370" y="82" fill="#64748B" fontSize="9">Within limits</text>
    </motion.g>

    {/* Equity Curve */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <rect x="20" y="115" width="290" height="145" rx="12" fill="white" filter="url(#trackShadow)"/>
      <text x="35" y="138" fill="#1E293B" fontSize="11" fontWeight="600">Equity Curve (Paper)</text>
      <text x="250" y="138" fill="#22C55E" fontSize="9" fontWeight="500">30 Days</text>

      {/* Chart area */}
      <rect x="35" y="148" width="260" height="95" rx="4" fill="#F8FAFC"/>

      {/* Grid */}
      <line x1="35" y1="175" x2="295" y2="175" stroke="#E2E8F0" strokeDasharray="3,3"/>
      <line x1="35" y1="200" x2="295" y2="200" stroke="#E2E8F0" strokeDasharray="3,3"/>
      <line x1="35" y1="225" x2="295" y2="225" stroke="#E2E8F0" strokeDasharray="3,3"/>

      {/* Equity line */}
      <motion.path
        d="M45 230 Q70 225 90 220 T130 210 T170 195 T210 185 T250 175 T285 165"
        fill="none"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Area fill */}
      <path
        d="M45 230 Q70 225 90 220 T130 210 T170 195 T210 185 T250 175 T285 165 L285 240 L45 240 Z"
        fill="url(#equityFill)"
        opacity="0.2"
      />
      <linearGradient id="equityFill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#10B981" stopOpacity="0"/>
      </linearGradient>

      {/* Current point */}
      <circle cx="285" cy="165" r="5" fill="#10B981" stroke="white" strokeWidth="2"/>
    </motion.g>

    {/* Trade Log */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <rect x="320" y="115" width="140" height="145" rx="12" fill="white" filter="url(#trackShadow)"/>
      <text x="335" y="138" fill="#1E293B" fontSize="11" fontWeight="600">Recent Trades</text>

      {/* Trade entries */}
      <rect x="330" y="148" width="120" height="28" rx="4" fill="#F0FDF4"/>
      <circle cx="345" cy="162" r="8" fill="#22C55E"/>
      <path d="M342 162l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none"/>
      <text x="360" y="158" fill="#1E293B" fontSize="8" fontWeight="500">TCS Long</text>
      <text x="360" y="170" fill="#22C55E" fontSize="9" fontWeight="600">+₹1,240</text>

      <rect x="330" y="182" width="120" height="28" rx="4" fill="#FEF2F2"/>
      <circle cx="345" cy="196" r="8" fill="#EF4444"/>
      <path d="M342 193l6 6 M348 193l-6 6" stroke="white" strokeWidth="1.5" fill="none"/>
      <text x="360" y="192" fill="#1E293B" fontSize="8" fontWeight="500">INFY Short</text>
      <text x="360" y="204" fill="#EF4444" fontSize="9" fontWeight="600">-₹380</text>

      <rect x="330" y="216" width="120" height="28" rx="4" fill="#F0FDF4"/>
      <circle cx="345" cy="230" r="8" fill="#22C55E"/>
      <path d="M342 230l2 2 4-4" stroke="white" strokeWidth="1.5" fill="none"/>
      <text x="360" y="226" fill="#1E293B" fontSize="8" fontWeight="500">HDFC Long</text>
      <text x="360" y="238" fill="#22C55E" fontSize="9" fontWeight="600">+₹890</text>
    </motion.g>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is Paper Trading?",
    description: "Paper trading runs your automated strategy against LIVE market data with simulated execution. Every signal, every trade, every metric—tracked and recorded—without risking a single rupee. It's your strategy's dress rehearsal before the real performance.",
    highlights: [
      "Live market data",
      "Simulated execution",
      "Real-time tracking",
      "Zero capital risk"
    ]
  },
  whyPaperTrade: {
    title: "Why Paper Trade First?",
    description: "Backtests show what WOULD have happened. Paper trading shows what IS happening. It's the bridge between theory and live trading.",
    reasons: [
      { icon: Shield, title: "Validate Before Risk", description: "See your strategy perform in real conditions before committing capital" },
      { icon: Eye, title: "Catch Edge Cases", description: "Live markets reveal issues that backtests miss—data gaps, execution quirks" },
      { icon: TrendingUp, title: "Build Confidence", description: "Watch your strategy execute correctly builds trust to go live" },
      { icon: AlertCircle, title: "Find & Fix Bugs", description: "Better to find issues with fake money than real money" }
    ]
  },
  whatYouGet: {
    title: "What You'll Track",
    description: "Complete visibility into your strategy's live performance",
    metrics: [
      { label: "Every Trade", description: "Entry, exit, P&L logged" },
      { label: "Win Rate", description: "Real-time accuracy" },
      { label: "Drawdown", description: "Risk monitoring" },
      { label: "Equity Curve", description: "Growth tracking" }
    ]
  }
};

export default function PaperTradingOverview({ service }: PaperTradingOverviewProps) {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200"
          >
            <FlaskConical className="w-4 h-4" />
            Understanding Paper Trading
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900">
            Test Without Risk
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Run your strategy on live markets with simulated money. Prove it works before you trade it.
          </p>
        </motion.div>

        {/* What It Is - Content LEFT, Visual RIGHT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200">
              <Play className="w-4 h-4" />
              The Basics
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.whatItIs.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatItIs.highlights.map((highlight, index) => {
                const iconColors = ['bg-emerald-500', 'bg-blue-500', 'bg-violet-500', 'bg-amber-500'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${iconColors[index]}`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-navy-800">{highlight}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <SimulationLabIllustration />
          </motion.div>
        </div>

        {/* Why Paper Trade - FULL WIDTH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-emerald-50 via-green-50/50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-emerald-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-emerald-700 text-sm font-semibold mb-4 border border-emerald-200">
                <Shield className="w-4 h-4" />
                The Problems
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                {overviewData.whyPaperTrade.title}
              </h3>
              <p className="text-lg text-black max-w-2xl mx-auto">
                {overviewData.whyPaperTrade.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {overviewData.whyPaperTrade.reasons.map((reason, index) => {
                const iconColors = ['bg-emerald-500', 'bg-blue-500', 'bg-violet-500', 'bg-amber-500'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-5 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${iconColors[index]}`}>
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">{reason.title}</h4>
                    <p className="text-base text-black leading-relaxed">{reason.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Performance Tracking - Visual LEFT, Text RIGHT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full bg-white rounded-2xl p-3 border border-slate-200 shadow-sm overflow-hidden">
              <PerformanceTrackingIllustration />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-5 border border-blue-200">
              <BarChart3 className="w-4 h-4" />
              The Solution
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {overviewData.whatYouGet.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.whatYouGet.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatYouGet.metrics.map((metric, index) => {
                const iconColors = ['bg-emerald-500', 'bg-blue-500', 'bg-red-500', 'bg-violet-500'];
                const icons = [Play, CheckCircle, AlertCircle, TrendingUp];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md border border-slate-100"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-3 ${iconColors[index]}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-base font-bold text-navy-900">{metric.label}</div>
                    <div className="text-sm text-black">{metric.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 group"
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
