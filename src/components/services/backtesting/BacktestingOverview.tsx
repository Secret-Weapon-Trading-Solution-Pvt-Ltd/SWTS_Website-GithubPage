'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { BarChart3, TrendingDown, CheckCircle, Target, Clock, FileBarChart, ArrowRight, LineChart, Activity, PieChart, CircleHelp, EyeOff, Gauge, Hourglass, ScatterChart } from 'lucide-react';

interface BacktestingOverviewProps {
  service: Service;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Animated background pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient orbs */}
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60"
      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50"
      animate={{ scale: [1.1, 1, 1.1], rotate: [-5, 0, -5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Grid pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="backtest-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4338ca" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#backtest-grid)" />
    </svg>
  </div>
);

// SVG Chart Illustration for Backtesting
const BacktestingIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-auto">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="greenLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <linearGradient id="redLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#F87171" />
      </linearGradient>
      <filter id="chartShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Main chart area */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <rect x="30" y="30" width="340" height="200" rx="12" fill="white" filter="url(#chartShadow)" stroke="#E0E7FF" strokeWidth="1"/>

      {/* Chart header */}
      <rect x="30" y="30" width="340" height="45" rx="12" fill="url(#chartGrad)"/>
      <rect x="30" y="63" width="340" height="12" fill="url(#chartGrad)"/>

      {/* Header content */}
      <text x="50" y="58" fill="white" fontSize="14" fontWeight="600">Strategy Performance Analysis</text>
      <circle cx="340" cy="52" r="8" fill="white" opacity="0.3"/>
      <circle cx="320" cy="52" r="8" fill="white" opacity="0.3"/>
    </motion.g>

    {/* Grid lines */}
    <g opacity="0.2">
      <line x1="50" y1="100" x2="350" y2="100" stroke="#6366F1" strokeDasharray="4,4"/>
      <line x1="50" y1="140" x2="350" y2="140" stroke="#6366F1" strokeDasharray="4,4"/>
      <line x1="50" y1="180" x2="350" y2="180" stroke="#6366F1" strokeDasharray="4,4"/>
    </g>

    {/* Equity curve - animated */}
    <motion.path
      d="M50 180 Q80 175 100 160 T150 140 T200 130 T250 100 T300 90 T350 85"
      fill="none"
      stroke="url(#greenLineGrad)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    />

    {/* Drawdown visualization */}
    <motion.path
      d="M150 140 L150 165 M250 100 L250 130"
      stroke="url(#redLineGrad)"
      strokeWidth="2"
      strokeDasharray="4,2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.5 }}
    />

    {/* Data points */}
    {[
      { x: 100, y: 160 },
      { x: 150, y: 140 },
      { x: 200, y: 130 },
      { x: 250, y: 100 },
      { x: 300, y: 90 },
      { x: 350, y: 85 }
    ].map((point, i) => (
      <motion.circle
        key={i}
        cx={point.x}
        cy={point.y}
        r="5"
        fill="white"
        stroke="url(#greenLineGrad)"
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + i * 0.1 }}
      />
    ))}

    {/* Stats panel - bottom right */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <rect x="270" y="120" width="95" height="75" rx="6" fill="white" stroke="#E0E7FF" strokeWidth="1"/>
      <text x="280" y="134" fill="#6366F1" fontSize="9" fontWeight="600">Performance</text>

      <text x="280" y="150" fill="#000000" fontSize="8">Win Rate:</text>
      <text x="345" y="150" fill="#10B981" fontSize="8" fontWeight="600">68%</text>

      <text x="280" y="165" fill="#000000" fontSize="8">Profit Factor:</text>
      <text x="345" y="165" fill="#10B981" fontSize="8" fontWeight="600">2.4</text>

      <text x="280" y="180" fill="#000000" fontSize="8">Max DD:</text>
      <text x="338" y="180" fill="#EF4444" fontSize="8" fontWeight="600">-12%</text>
    </motion.g>

    {/* Time axis labels */}
    <text x="50" y="210" fill="#9CA3AF" fontSize="9">2020</text>
    <text x="150" y="210" fill="#9CA3AF" fontSize="9">2021</text>
    <text x="250" y="210" fill="#9CA3AF" fontSize="9">2022</text>
    <text x="340" y="210" fill="#9CA3AF" fontSize="9">2024</text>

    {/* Animated scanning line */}
    <motion.line
      x1="50"
      y1="85"
      x2="50"
      y2="200"
      stroke="url(#chartGrad)"
      strokeWidth="2"
      opacity="0.5"
      animate={{ x1: [50, 350, 50], x2: [50, 350, 50] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// Metrics Illustration - Enhanced with more visual content
const MetricsIllustration = () => (
  <svg viewBox="0 0 480 340" className="w-full h-auto">
    <defs>
      <linearGradient id="metric1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="metric2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <linearGradient id="metric3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
      <linearGradient id="metric4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#F87171" />
      </linearGradient>
      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </linearGradient>
      <filter id="metricShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
      </filter>
    </defs>

    {/* Main dashboard background */}
    <rect x="10" y="10" width="460" height="320" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#metricShadow)"/>

    {/* Top row - 4 metric cards */}
    <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      {/* Card 1 - Win Rate */}
      <rect x="25" y="25" width="100" height="75" rx="10" fill="#EEF2FF"/>
      <circle cx="45" cy="52" r="11" fill="url(#metric1Grad)"/>
      <text x="45" y="52" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" dominantBaseline="central">%</text>
      <text x="62" y="48" fill="#4F46E5" fontSize="9" fontWeight="600">Win Rate</text>
      <text x="62" y="65" fill="#1E1B4B" fontSize="16" fontWeight="bold">68%</text>
      <text x="62" y="80" fill="#000000" fontSize="7">Above avg</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
      {/* Card 2 - Profit Factor */}
      <rect x="135" y="25" width="100" height="75" rx="10" fill="#ECFDF5"/>
      <circle cx="155" cy="52" r="11" fill="url(#metric2Grad)"/>
      <text x="155" y="52" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" dominantBaseline="central">PF</text>
      <text x="172" y="48" fill="#059669" fontSize="9" fontWeight="600">Profit Factor</text>
      <text x="172" y="65" fill="#064E3B" fontSize="16" fontWeight="bold">2.4x</text>
      <text x="172" y="80" fill="#000000" fontSize="7">Excellent</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
      {/* Card 3 - Sharpe Ratio */}
      <rect x="245" y="25" width="100" height="75" rx="10" fill="#FEF3C7"/>
      <circle cx="265" cy="52" r="11" fill="url(#metric3Grad)"/>
      <text x="265" y="52" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" dominantBaseline="central">SR</text>
      <text x="282" y="48" fill="#D97706" fontSize="9" fontWeight="600">Sharpe</text>
      <text x="282" y="65" fill="#78350F" fontSize="16" fontWeight="bold">1.8</text>
      <text x="282" y="80" fill="#000000" fontSize="7">Risk-adjusted</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
      {/* Card 4 - Max Drawdown */}
      <rect x="355" y="25" width="100" height="75" rx="10" fill="#FEE2E2"/>
      <circle cx="375" cy="52" r="11" fill="url(#metric4Grad)"/>
      <text x="375" y="52" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle" dominantBaseline="central">DD</text>
      <text x="392" y="48" fill="#DC2626" fontSize="9" fontWeight="600">Max DD</text>
      <text x="392" y="65" fill="#7F1D1D" fontSize="16" fontWeight="bold">-12%</text>
      <text x="392" y="80" fill="#000000" fontSize="7">Controlled</text>
    </motion.g>

    {/* Equity curve section */}
    <rect x="25" y="115" width="280" height="130" rx="10" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="0.5"/>
    <text x="38" y="135" fill="#374151" fontSize="10" fontWeight="600">Equity Curve</text>
    <text x="250" y="135" fill="#6B7280" fontSize="8">3 Years</text>

    {/* Grid lines */}
    <g opacity="0.3">
      <line x1="40" y1="160" x2="290" y2="160" stroke="#D1D5DB" strokeDasharray="3,3"/>
      <line x1="40" y1="190" x2="290" y2="190" stroke="#D1D5DB" strokeDasharray="3,3"/>
      <line x1="40" y1="220" x2="290" y2="220" stroke="#D1D5DB" strokeDasharray="3,3"/>
    </g>

    {/* Area fill under curve */}
    <motion.path
      d="M40 230 Q70 225 100 210 T160 185 T220 165 T260 150 T290 145 L290 230 Z"
      fill="url(#areaGrad)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />

    {/* Equity line */}
    <motion.path
      d="M40 230 Q70 225 100 210 T160 185 T220 165 T260 150 T290 145"
      fill="none"
      stroke="#10B981"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />

    {/* Data points on curve */}
    {[
      { x: 100, y: 210 },
      { x: 160, y: 185 },
      { x: 220, y: 165 },
      { x: 290, y: 145 }
    ].map((point, i) => (
      <motion.circle
        key={i}
        cx={point.x}
        cy={point.y}
        r="4"
        fill="white"
        stroke="#10B981"
        strokeWidth="2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 + i * 0.1 }}
      />
    ))}

    {/* Monthly returns bar chart */}
    <rect x="320" y="115" width="135" height="130" rx="10" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="0.5"/>
    <text x="333" y="135" fill="#374151" fontSize="10" fontWeight="600">Monthly Returns</text>

    {/* Baseline */}
    <line x1="330" y1="220" x2="450" y2="220" stroke="#E5E7EB" strokeWidth="1"/>

    {/* Bar chart with labels */}
    <motion.g>
      {[
        { x: 345, h: 50, color: "#10B981", label: "Jan", value: "+3%" },
        { x: 380, h: 38, color: "#10B981", label: "Feb", value: "+2%" },
        { x: 415, h: 55, color: "#10B981", label: "Mar", value: "+4%" },
      ].map((bar, i) => (
        <g key={i}>
          <motion.rect
            x={bar.x}
            y={215 - bar.h}
            width="18"
            height={bar.h}
            rx="2"
            fill={bar.color}
            opacity={0.9}
            initial={{ height: 0, y: 215 }}
            whileInView={{ height: bar.h, y: 215 - bar.h }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
          />
          <text x={bar.x + 9} y="228" fill="#000000" fontSize="8" textAnchor="middle" fontWeight="500">{bar.label}</text>
          <text x={bar.x + 9} y={215 - bar.h - 5} fill={bar.color} fontSize="8" textAnchor="middle" fontWeight="bold">{bar.value}</text>
        </g>
      ))}
    </motion.g>

    {/* Bottom stats row */}
    <rect x="25" y="260" width="430" height="55" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="0.5"/>

    {/* Stats items */}
    <g>
      <text x="50" y="282" fill="#374151" fontSize="9">Total Trades</text>
      <text x="50" y="300" fill="#065F46" fontSize="14" fontWeight="bold">847</text>

      <line x1="130" y1="270" x2="130" y2="305" stroke="#D1FAE5" strokeWidth="1"/>

      <text x="155" y="282" fill="#374151" fontSize="9">Avg Win</text>
      <text x="155" y="300" fill="#10B981" fontSize="14" fontWeight="bold">+2.3%</text>

      <line x1="230" y1="270" x2="230" y2="305" stroke="#D1FAE5" strokeWidth="1"/>

      <text x="255" y="282" fill="#374151" fontSize="9">Avg Loss</text>
      <text x="255" y="300" fill="#EF4444" fontSize="14" fontWeight="bold">-1.1%</text>

      <line x1="330" y1="270" x2="330" y2="305" stroke="#D1FAE5" strokeWidth="1"/>

      <text x="355" y="282" fill="#374151" fontSize="9">Expectancy</text>
      <text x="355" y="300" fill="#059669" fontSize="14" fontWeight="bold">+0.85R</text>
    </g>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is Strategy Backtesting?",
    description: "Backtesting is the process of testing YOUR trading rules against historical market data to see how they would have performed. We don't just run a quick test—we apply realistic assumptions including slippage, transaction costs, and proper position sizing to give you an honest picture of your strategy's potential.",
    highlights: [
      "Multi-year historical testing",
      "Realistic cost modeling",
      "Detailed performance metrics",
      "Risk analysis included"
    ]
  },
  whyItMatters: {
    title: "Why Backtesting Matters",
    description: "Trading without backtesting is like flying blind. You might have a profitable strategy, or you might be risking your capital on an unproven idea. Proper backtesting reveals the truth.",
    problems: [
      {
        icon: CircleHelp,
        title: "Unvalidated Assumptions",
        description: "You believe your strategy works based on gut feeling, not data"
      },
      {
        icon: EyeOff,
        title: "Hidden Risks",
        description: "You don't know your maximum drawdown or worst losing streak"
      },
      {
        icon: ScatterChart,
        title: "Unrealistic Expectations",
        description: "Without real numbers, you can't set proper risk parameters"
      },
      {
        icon: Hourglass,
        title: "Wasted Time & Capital",
        description: "Months of live trading to discover flaws that backtesting reveals in days"
      },
      {
        icon: Gauge,
        title: "No Performance Baseline",
        description: "You can't improve what you haven't measured objectively"
      }
    ]
  },
  whatYouGet: {
    title: "What You'll Discover",
    metrics: [
      { value: "Win Rate", description: "Percentage of profitable trades" },
      { value: "Profit Factor", description: "Gross profit / gross loss ratio" },
      { value: "Max Drawdown", description: "Largest peak-to-trough decline" }
    ]
  },
  whoShouldUse: {
    title: "Who Should Backtest?",
    profiles: [
      {
        icon: Target,
        title: "Discretionary Traders",
        description: "You have rules you follow but have never tested them systematically against historical data"
      },
      {
        icon: Activity,
        title: "Underperforming Traders",
        description: "Your live results don't match expectations—find out if the strategy itself is the problem"
      },
      {
        icon: BarChart3,
        title: "Expert Traders",
        description: "You want to validate and optimize your proven strategies with rigorous historical analysis"
      }
    ]
  }
};

export default function BacktestingOverview({ service }: BacktestingOverviewProps) {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <BackgroundPattern />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section Header - Centered */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
            Understanding Strategy Backtesting
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">Validate Before</span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">You Trade</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Know your strategy's true potential with rigorous historical testing
          </p>
        </motion.div>

        {/* What It Is - Image RIGHT, Content LEFT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full text-indigo-700 text-sm font-semibold mb-5 border border-indigo-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
              The Basics
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-indigo-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.whatItIs.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatItIs.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br ${
                    index === 0 ? 'from-indigo-500 to-purple-600 shadow-indigo-500/25' :
                    index === 1 ? 'from-purple-500 to-violet-600 shadow-purple-500/25' :
                    index === 2 ? 'from-violet-500 to-indigo-600 shadow-violet-500/25' :
                    'from-blue-500 to-indigo-600 shadow-blue-500/25'
                  }`}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-navy-800">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:order-last"
          >
            <div className="relative w-full bg-gradient-to-br from-white via-indigo-50/10 to-purple-50/20 rounded-xl p-1 border border-indigo-100/30 shadow-sm overflow-hidden">
              <BacktestingIllustration />
            </div>
          </motion.div>
        </div>

        {/* Why It Matters - FULL WIDTH with light professional styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50/50 to-violet-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-indigo-100 overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="problem-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#6366F1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#problem-pattern)" />
              </svg>
            </div>

            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                  The Problems
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-4">
                  {overviewData.whyItMatters.title}
                </h3>
                <p className="text-lg text-black max-w-2xl mx-auto">
                  {overviewData.whyItMatters.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                {overviewData.whyItMatters.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${
                        index === 0 ? 'from-amber-400 to-orange-500 shadow-amber-500/25' :
                        index === 1 ? 'from-red-400 to-rose-500 shadow-red-500/25' :
                        index === 2 ? 'from-violet-400 to-purple-500 shadow-violet-500/25' :
                        index === 3 ? 'from-blue-400 to-indigo-500 shadow-blue-500/25' :
                        'from-emerald-400 to-teal-500 shadow-emerald-500/25'
                      }`}>
                        <problem.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-2">{problem.title}</h4>
                    <p className="text-base text-black leading-relaxed">{problem.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What You'll Discover - Text LEFT, Visual RIGHT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-first"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              The Solution
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-emerald-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.whatYouGet.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              Every backtest report includes comprehensive metrics that tell you exactly how your strategy performed historically.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatYouGet.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-white to-emerald-50/50 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-lg font-bold text-black mb-1">{metric.value}</div>
                  <div className="text-sm text-black font-medium">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:order-last"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400/15 via-teal-400/10 to-cyan-400/15 rounded-2xl blur-xl" />

            <div className="relative w-full bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 rounded-2xl p-3 border border-emerald-100/50 shadow-lg overflow-hidden">
              <div className="relative">
                <MetricsIllustration />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Who Should Use - Image LEFT, Content RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative aspect-[3/2] w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${basePath}/17106898_1019Z_beverages_online_2.jpg`}
                alt="Trading chart analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Data-Driven Decisions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-purple-900 bg-clip-text text-transparent mb-8">
              {overviewData.whoShouldUse.title}
            </h3>
            <div className="space-y-5">
              {overviewData.whoShouldUse.profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex gap-5 items-start p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-100 transition-all duration-300 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md bg-white border border-slate-200">
                    <profile.icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-purple-900 transition-colors">{profile.title}</h4>
                    <p className="text-black leading-relaxed">{profile.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

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
            className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white font-semibold rounded-2xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 group"
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
