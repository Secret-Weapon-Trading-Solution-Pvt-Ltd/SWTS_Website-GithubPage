'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Settings, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Target, Sliders, BarChart2, RefreshCw, Clock, LineChart, Activity } from 'lucide-react';

interface OptimizationOverviewProps {
  service: Service;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Animated background pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60"
      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-50"
      animate={{ scale: [1.1, 1, 1.1], rotate: [-5, 0, -5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="opt-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#opt-grid)" />
    </svg>
  </div>
);

// Parameter Tuning Illustration
const OptimizationIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-auto">
    <defs>
      <linearGradient id="optGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <filter id="optShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
    </defs>

    <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <rect x="30" y="30" width="340" height="200" rx="12" fill="white" filter="url(#optShadow)" stroke="#E0E7FF" strokeWidth="1"/>
      <rect x="30" y="30" width="340" height="45" rx="12" fill="url(#optGrad)"/>
      <rect x="30" y="63" width="340" height="12" fill="url(#optGrad)"/>
      <text x="50" y="58" fill="white" fontSize="14" fontWeight="600">Parameter Optimization Dashboard</text>
    </motion.g>

    {/* Sliders */}
    <g>
      <text x="50" y="100" fill="#374151" fontSize="11" fontWeight="600">Parameters</text>

      <text x="50" y="125" fill="#6B7280" fontSize="9">RSI Period</text>
      <rect x="130" y="118" width="120" height="6" rx="3" fill="#E5E7EB"/>
      <motion.rect x="130" y="118" width="80" height="6" rx="3" fill="url(#optGrad)"
        animate={{ width: [40, 80, 60, 80] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <text x="260" y="125" fill="#3B82F6" fontSize="10" fontWeight="600">14</text>

      <text x="50" y="155" fill="#6B7280" fontSize="9">MA Period</text>
      <rect x="130" y="148" width="120" height="6" rx="3" fill="#E5E7EB"/>
      <motion.rect x="130" y="148" width="100" height="6" rx="3" fill="url(#greenGrad)"
        animate={{ width: [60, 100, 80, 100] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <text x="260" y="155" fill="#10B981" fontSize="10" fontWeight="600">34</text>

      <text x="50" y="185" fill="#6B7280" fontSize="9">Stop Loss %</text>
      <rect x="130" y="178" width="120" height="6" rx="3" fill="#E5E7EB"/>
      <motion.rect x="130" y="178" width="70" height="6" rx="3" fill="#F59E0B"
        animate={{ width: [50, 70, 55, 70] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <text x="260" y="185" fill="#F59E0B" fontSize="10" fontWeight="600">2.5%</text>
    </g>

    {/* Results panel */}
    <rect x="295" y="95" width="70" height="85" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1"/>
    <text x="305" y="110" fill="#1E40AF" fontSize="9" fontWeight="600">Results</text>
    <text x="305" y="128" fill="#000000" fontSize="7">Sharpe</text>
    <text x="305" y="142" fill="#10B981" fontSize="12" fontWeight="bold">1.82</text>
    <text x="305" y="158" fill="#000000" fontSize="7">Win Rate</text>
    <text x="305" y="172" fill="#3B82F6" fontSize="12" fontWeight="bold">67%</text>

    <text x="50" y="220" fill="#10B981" fontSize="9" fontWeight="600">+35% improved</text>
  </svg>
);

// Comparison Chart - Before/After (Expanded graph without top metrics)
const ComparisonChart = () => (
  <svg viewBox="0 0 480 320" className="w-full h-auto">
    <defs>
      <linearGradient id="areaGradOpt" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="beforeAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="afterAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
      </linearGradient>
      <filter id="compShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
      </filter>
    </defs>

    <rect x="10" y="10" width="460" height="300" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#compShadow)"/>

    {/* Header */}
    <text x="30" y="40" fill="#1E3A8A" fontSize="14" fontWeight="bold">Performance Comparison</text>
    <text x="30" y="58" fill="#6B7280" fontSize="10">Before vs After Optimization</text>

    {/* Legend */}
    <rect x="320" y="30" width="14" height="14" rx="3" fill="#94A3B8"/>
    <text x="340" y="41" fill="#6B7280" fontSize="10">Before</text>
    <rect x="390" y="30" width="14" height="14" rx="3" fill="#3B82F6"/>
    <text x="410" y="41" fill="#6B7280" fontSize="10">After</text>

    {/* Chart area */}
    <rect x="30" y="70" width="420" height="180" rx="8" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="0.5"/>

    {/* Y-axis labels */}
    <text x="40" y="90" fill="#9CA3AF" fontSize="9">+80%</text>
    <text x="40" y="130" fill="#9CA3AF" fontSize="9">+40%</text>
    <text x="40" y="170" fill="#9CA3AF" fontSize="9">0%</text>
    <text x="40" y="210" fill="#9CA3AF" fontSize="9">-20%</text>
    <text x="40" y="240" fill="#9CA3AF" fontSize="9">-40%</text>

    {/* X-axis labels */}
    <text x="100" y="260" fill="#9CA3AF" fontSize="9" textAnchor="middle">Q1</text>
    <text x="190" y="260" fill="#9CA3AF" fontSize="9" textAnchor="middle">Q2</text>
    <text x="280" y="260" fill="#9CA3AF" fontSize="9" textAnchor="middle">Q3</text>
    <text x="370" y="260" fill="#9CA3AF" fontSize="9" textAnchor="middle">Q4</text>

    {/* Grid lines */}
    <g opacity="0.4">
      <line x1="70" y1="90" x2="440" y2="90" stroke="#E5E7EB" strokeDasharray="3,3"/>
      <line x1="70" y1="130" x2="440" y2="130" stroke="#E5E7EB" strokeDasharray="3,3"/>
      <line x1="70" y1="170" x2="440" y2="170" stroke="#D1D5DB"/>
      <line x1="70" y1="210" x2="440" y2="210" stroke="#E5E7EB" strokeDasharray="3,3"/>
      <line x1="70" y1="240" x2="440" y2="240" stroke="#E5E7EB" strokeDasharray="3,3"/>
    </g>

    {/* Before area fill */}
    <motion.path
      d="M70 170 Q130 175 190 185 T310 200 T430 195 L430 245 L70 245 Z"
      fill="url(#beforeAreaGrad)"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
    />

    {/* Before line (gray dashed) */}
    <motion.path
      d="M70 170 Q130 175 190 185 T310 200 T430 195"
      fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6,4"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
    />

    {/* After area fill */}
    <motion.path
      d="M70 170 Q130 150 190 125 T310 95 T430 80 L430 245 L70 245 Z"
      fill="url(#afterAreaGrad)"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
    />

    {/* After line (blue solid) */}
    <motion.path
      d="M70 170 Q130 150 190 125 T310 95 T430 80"
      fill="none" stroke="#3B82F6" strokeWidth="3"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
    />

    {/* Data points - Before */}
    <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
      <circle cx="70" cy="170" r="4" fill="#94A3B8" stroke="white" strokeWidth="2"/>
      <circle cx="190" cy="185" r="4" fill="#94A3B8" stroke="white" strokeWidth="2"/>
      <circle cx="310" cy="200" r="4" fill="#94A3B8" stroke="white" strokeWidth="2"/>
      <circle cx="430" cy="195" r="4" fill="#94A3B8" stroke="white" strokeWidth="2"/>
    </motion.g>

    {/* Data points - After */}
    <motion.g initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2 }}>
      <circle cx="70" cy="170" r="5" fill="#3B82F6" stroke="white" strokeWidth="2"/>
      <circle cx="190" cy="125" r="5" fill="#3B82F6" stroke="white" strokeWidth="2"/>
      <circle cx="310" cy="95" r="5" fill="#3B82F6" stroke="white" strokeWidth="2"/>
      <circle cx="430" cy="80" r="5" fill="#10B981" stroke="white" strokeWidth="2"/>
    </motion.g>

    {/* Improvement annotation */}
    <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2.2 }}>
      <rect x="355" y="55" width="80" height="30" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1"/>
      <text x="395" y="75" fill="#059669" fontSize="12" fontWeight="bold" textAnchor="middle">+67%</text>
    </motion.g>

    {/* Bottom stats */}
    <rect x="30" y="272" width="420" height="30" rx="6" fill="#EFF6FF"/>
    <text x="90" y="291" fill="#374151" fontSize="9" textAnchor="middle">1,200+ Tests</text>
    <line x1="160" y1="278" x2="160" y2="296" stroke="#BFDBFE" strokeWidth="1"/>
    <text x="240" y="291" fill="#10B981" fontSize="9" fontWeight="600" textAnchor="middle">Top 5 Parameter Sets</text>
    <line x1="320" y1="278" x2="320" y2="296" stroke="#BFDBFE" strokeWidth="1"/>
    <text x="390" y="291" fill="#3B82F6" fontSize="9" fontWeight="600" textAnchor="middle">Walk-Forward Validated</text>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is Strategy Optimization?",
    description: "Optimization is the systematic process of finding the best parameters for YOUR trading strategy. We don't just blindly search—we use walk-forward analysis and out-of-sample testing to ensure the optimized parameters are robust and not curve-fitted.",
    highlights: [
      "Walk-forward analysis",
      "Out-of-sample validation",
      "Robustness testing",
      "No overfitting"
    ]
  },
  whyOptimize: {
    title: "Why Optimization Matters",
    description: "Most traders use default parameters without knowing if they're optimal. Proper optimization can significantly improve performance while avoiding the trap of overfitting.",
    problems: [
      { icon: Sliders, title: "Default Parameters", description: "Using arbitrary settings that may not suit your strategy" },
      { icon: TrendingUp, title: "Missed Returns", description: "Leaving potential profits on the table with suboptimal settings" },
      { icon: Shield, title: "Excess Risk", description: "Higher drawdowns from poorly calibrated risk parameters" },
      { icon: Clock, title: "Manual Guessing", description: "Wasting time with trial-and-error instead of systematic search" },
      { icon: LineChart, title: "No Validation", description: "No way to know if parameters will work in live trading" }
    ]
  },
  whatYouGet: {
    title: "What You'll Discover",
    metrics: [
      { value: "Optimal Parameters", description: "Settings that maximize performance" },
      { value: "Performance Boost", description: "Measured improvement in key metrics" },
      { value: "Robustness Score", description: "How stable across market conditions" },
      { value: "Implementation Guide", description: "Exact settings to use in live trading" }
    ]
  },
  whoShouldUse: {
    title: "Who Should Optimize?",
    profiles: [
      { icon: Sliders, title: "Parameter Seekers", description: "You have a working strategy but use default or arbitrary parameters" },
      { icon: BarChart2, title: "Performance Improvers", description: "Your strategy is profitable but you want to maximize risk-adjusted returns" },
      { icon: Activity, title: "Strategy Adapters", description: "Your strategy worked before but needs adjustment for current market conditions" },
      { icon: Shield, title: "Risk Managers", description: "You need optimized stop-loss and position sizing for better risk control" },
      { icon: Target, title: "Multi-Asset Traders", description: "You want to optimize parameters across different instruments or markets" }
    ]
  }
};

export default function OptimizationOverview({ service }: OptimizationOverviewProps) {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <BackgroundPattern />

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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
            Understanding Strategy Optimization
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-navy-900 bg-clip-text text-transparent">Find Your</span>{' '}
            <span className="text-teal-700">Optimal Edge</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Maximize your strategy's potential with rigorous, scientifically-validated optimization
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full text-blue-700 text-sm font-semibold mb-5 border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
              The Basics
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 bg-clip-text text-transparent mb-6">
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
                    index === 0 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
                    index === 1 ? 'from-indigo-500 to-violet-600 shadow-indigo-500/25' :
                    index === 2 ? 'from-emerald-500 to-teal-600 shadow-emerald-500/25' :
                    'from-amber-500 to-orange-600 shadow-amber-500/25'
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
            <div className="relative w-full bg-gradient-to-br from-white via-blue-50/10 to-indigo-50/20 rounded-xl p-1 border border-blue-100/30 shadow-sm overflow-hidden">
              <OptimizationIllustration />
            </div>
          </motion.div>
        </div>

        {/* Why It Matters - FULL WIDTH with background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-blue-100 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="opt-problem-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#3B82F6"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#opt-problem-pattern)" />
              </svg>
            </div>

            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                  The Problems
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-blue-900 to-navy-900 bg-clip-text text-transparent mb-4">
                  {overviewData.whyOptimize.title}
                </h3>
                <p className="text-lg text-black max-w-2xl mx-auto">
                  {overviewData.whyOptimize.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                {overviewData.whyOptimize.problems.map((problem, index) => (
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
                        index === 0 ? 'from-blue-400 to-indigo-500 shadow-blue-500/25' :
                        index === 1 ? 'from-emerald-400 to-teal-500 shadow-emerald-500/25' :
                        index === 2 ? 'from-amber-400 to-orange-500 shadow-amber-500/25' :
                        index === 3 ? 'from-violet-400 to-purple-500 shadow-violet-500/25' :
                        'from-rose-400 to-red-500 shadow-rose-500/25'
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

        {/* What You'll Discover - Visual LEFT, Text RIGHT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:order-first"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/15 via-indigo-400/10 to-blue-400/15 rounded-2xl blur-xl" />
            <div className="relative w-full bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 rounded-2xl p-3 border border-blue-100/50 shadow-lg overflow-hidden">
              <ComparisonChart />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-last"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              The Solution
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-emerald-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.whatYouGet.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              Every optimization report includes the best optimum and validated combination of parameters ready for implementation.
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
        </div>

        {/* Who Should Use - 2 Left, 2 Right, 1 Center Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-blue-900 bg-clip-text text-transparent">
              {overviewData.whoShouldUse.title}
            </h3>
          </div>

          {/* Profiles Grid: 2 Left, 2 Right */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-6">
            {overviewData.whoShouldUse.profiles.slice(0, 4).map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
                  index === 1 ? 'from-emerald-500 to-teal-600 shadow-emerald-500/25' :
                  index === 2 ? 'from-violet-500 to-purple-600 shadow-violet-500/25' :
                  'from-amber-500 to-orange-600 shadow-amber-500/25'
                }`}>
                  <profile.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-blue-900 transition-colors">{profile.title}</h4>
                  <p className="text-black leading-relaxed">{profile.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Profile (5th) */}
          <div className="flex justify-center">
            {(() => {
              const FifthIcon = overviewData.whoShouldUse.profiles[4].icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default max-w-xl w-full"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25">
                    <FifthIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-blue-900 transition-colors">{overviewData.whoShouldUse.profiles[4].title}</h4>
                    <p className="text-black leading-relaxed">{overviewData.whoShouldUse.profiles[4].description}</p>
                  </div>
                </motion.div>
              );
            })()}
          </div>
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
            className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold rounded-2xl shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
