'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Target, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface StrategyOverviewProps {
  service: Service;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Animated background pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient orbs */}
    <motion.div
      className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60"
      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50"
      animate={{ scale: [1.1, 1, 1.1], rotate: [5, 0, 5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Grid pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="overview-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e3a8a" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#overview-grid)" />
    </svg>
  </div>
);

// Decorative SVG illustration for the section - Automation Flow Diagram
const StrategyIllustration = () => (
  <svg viewBox="0 0 400 320" className="w-full h-full">
    <defs>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge>
          <feMergeNode in="blur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background decorative elements */}
    <circle cx="200" cy="160" r="140" fill="none" stroke="#E0E7FF" strokeWidth="1" strokeDasharray="4,6" opacity="0.5"/>
    <circle cx="200" cy="160" r="100" fill="none" stroke="#E0E7FF" strokeWidth="1" opacity="0.3"/>

    {/* Step 1: Your Rules - Left Card */}
    <motion.g
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <rect x="20" y="70" width="100" height="120" rx="12" fill="white" filter="url(#cardShadow)" stroke="#E0E7FF" strokeWidth="1"/>
      <rect x="20" y="70" width="100" height="40" rx="12" fill="url(#cyanGrad)"/>
      <rect x="20" y="98" width="100" height="12" fill="url(#cyanGrad)"/>

      {/* Icon - Document */}
      <rect x="58" y="80" width="24" height="20" rx="2" fill="white" opacity="0.9"/>
      <path d="M62 86 L78 86 M62 90 L74 90 M62 94 L78 94" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Text lines representing rules */}
      <rect x="32" y="125" width="50" height="6" rx="3" fill="#E0E7FF"/>
      <rect x="32" y="137" width="70" height="6" rx="3" fill="#E0E7FF"/>
      <rect x="32" y="149" width="40" height="6" rx="3" fill="#E0E7FF"/>
      <rect x="32" y="161" width="60" height="6" rx="3" fill="#E0E7FF"/>

      {/* Label */}
      <text x="70" y="205" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">Your Rules</text>
    </motion.g>

    {/* Animated Arrow 1 */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.path
        d="M125 130 L155 130"
        stroke="url(#blueGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6,4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.polygon
        points="155,125 165,130 155,135"
        fill="#3B82F6"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1 }}
      />
    </motion.g>

    {/* Step 2: SWTS Process - Center (Main Hub) */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Outer glow ring */}
      <circle cx="200" cy="130" r="52" fill="none" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.3"/>
      <circle cx="200" cy="130" r="45" fill="url(#blueGrad)" filter="url(#glow)"/>

      {/* Gear/Cog icon */}
      <g fill="white">
        <circle cx="200" cy="130" r="12" fill="none" stroke="white" strokeWidth="3"/>
        <circle cx="200" cy="130" r="5" fill="white"/>
        {/* Gear teeth */}
        <rect x="197" y="108" width="6" height="10" rx="2"/>
        <rect x="197" y="142" width="6" height="10" rx="2"/>
        <rect x="175" y="127" width="10" height="6" rx="2"/>
        <rect x="215" y="127" width="10" height="6" rx="2"/>
        <rect x="180" y="112" width="8" height="6" rx="2" transform="rotate(-45 184 115)"/>
        <rect x="212" y="112" width="8" height="6" rx="2" transform="rotate(45 216 115)"/>
        <rect x="180" y="142" width="8" height="6" rx="2" transform="rotate(45 184 145)"/>
        <rect x="212" y="142" width="8" height="6" rx="2" transform="rotate(-45 216 145)"/>
      </g>

      {/* Orbiting dot animation */}
      <motion.circle
        r="4"
        fill="#06B6D4"
        animate={{
          cx: [200, 252, 200, 148, 200],
          cy: [78, 130, 182, 130, 78]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Label */}
      <text x="200" y="200" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="700">SWTS</text>
      <text x="200" y="214" textAnchor="middle" fill="#64748B" fontSize="10">Automation</text>
    </motion.g>

    {/* Animated Arrow 2 */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.path
        d="M235 130 L265 130"
        stroke="url(#greenGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6,4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.polygon
        points="265,125 275,130 265,135"
        fill="#10B981"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.2 }}
      />
    </motion.g>

    {/* Step 3: Automated System - Right Card */}
    <motion.g
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <rect x="280" y="70" width="100" height="120" rx="12" fill="white" filter="url(#cardShadow)" stroke="#D1FAE5" strokeWidth="1"/>
      <rect x="280" y="70" width="100" height="40" rx="12" fill="url(#greenGrad)"/>
      <rect x="280" y="98" width="100" height="12" fill="url(#greenGrad)"/>

      {/* Icon - Play/Running */}
      <circle cx="330" cy="90" r="12" fill="white" opacity="0.9"/>
      <polygon points="326,84 326,96 338,90" fill="#10B981"/>

      {/* Status indicators */}
      <g>
        <circle cx="300" cy="128" r="4" fill="#10B981"/>
        <text x="310" y="131" fill="#374151" fontSize="9">Running</text>
      </g>
      <g>
        <rect x="292" y="142" width="76" height="8" rx="4" fill="#E5E7EB"/>
        <motion.rect
          x="292" y="142" width="60" height="8" rx="4" fill="url(#greenGrad)"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </g>
      <g>
        <rect x="292" y="156" width="76" height="8" rx="4" fill="#E5E7EB"/>
        <motion.rect
          x="292" y="156" width="50" height="8" rx="4" fill="#06B6D4"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </g>
      <g>
        <rect x="292" y="170" width="76" height="8" rx="4" fill="#E5E7EB"/>
        <motion.rect
          x="292" y="170" width="68" height="8" rx="4" fill="#8B5CF6"
          initial={{ width: 0 }}
          whileInView={{ width: 68 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 1.4 }}
        />
      </g>

      {/* Label */}
      <text x="330" y="205" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="600">24/7 System</text>
    </motion.g>

    {/* Bottom Stats Row */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Stat 1 */}
      <g>
        <circle cx="80" cy="270" r="20" fill="#EFF6FF"/>
        <text x="80" y="267" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="bold">100%</text>
        <text x="80" y="279" textAnchor="middle" fill="#3B82F6" fontSize="7">Accurate</text>
        <text x="80" y="300" textAnchor="middle" fill="#64748B" fontSize="9">Rule Execution</text>
      </g>

      {/* Stat 2 */}
      <g>
        <circle cx="200" cy="270" r="20" fill="#ECFDF5"/>
        <text x="200" y="267" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">24/7</text>
        <text x="200" y="279" textAnchor="middle" fill="#10B981" fontSize="7">Active</text>
        <text x="200" y="300" textAnchor="middle" fill="#64748B" fontSize="9">Market Coverage</text>
      </g>

      {/* Stat 3 */}
      <g>
        <circle cx="320" cy="270" r="20" fill="#F5F3FF"/>
        <text x="320" y="267" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">&lt;1s</text>
        <text x="320" y="279" textAnchor="middle" fill="#8B5CF6" fontSize="7">Speed</text>
        <text x="320" y="300" textAnchor="middle" fill="#64748B" fontSize="9">Order Execution</text>
      </g>
    </motion.g>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is Strategy Automation?",
    description: "Strategy Automation transforms your proven trading rules into fully automated execution systems. We take your manual trading logic—the entries, exits, position sizing, and risk rules you've developed—and convert them into code that executes 24/7 without human intervention.",
    highlights: [
      "Your rules, precisely coded",
      "No programming knowledge required",
      "Full backtesting included",
      "Production-ready systems"
    ]
  },
  whyItMatters: {
    title: "Why It Matters",
    description: "Manual trading has inherent limitations—emotional interference, execution delays, and the impossibility of monitoring markets around the clock. Automation eliminates these barriers, letting your strategy perform exactly as designed, every time.",
    stats: [
      { value: "0", label: "Emotional Errors" },
      { value: "24/7", label: "Market Coverage" },
      { value: "<100ms", label: "Execution Speed" }
    ]
  },
  whoShouldUse: {
    title: "Who Should Use This?",
    profiles: [
      {
        icon: Target,
        title: "Systematic Traders",
        description: "You have clear, rule-based strategies but lack the technical skills to automate them"
      },
      {
        icon: TrendingUp,
        title: "Active Traders",
        description: "You're profitable but manual execution is limiting your scale and consistency"
      },
      {
        icon: Users,
        title: "Trading Teams",
        description: "You need to standardize and scale proven strategies across your operation"
      }
    ]
  },
  benefits: [
    {
      icon: Zap,
      title: "Lightning-Fast Execution",
      description: "Execute trades in milliseconds, not minutes. Never miss an entry due to slow manual input."
    },
    {
      icon: Target,
      title: "Perfect Consistency",
      description: "Your rules execute exactly as designed, every single time. No deviation, no exceptions."
    },
    {
      icon: CheckCircle,
      title: "Validated Performance",
      description: "Every strategy is backtested against historical data before going live. Know your edge."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Monitor 50+ symbols as easily as 5. Scale your strategy without scaling your screen time."
    }
  ]
};

export default function StrategyOverview({ service }: StrategyOverviewProps) {
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
            Understanding Strategy Automation
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">Transform Your</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Trading</span>
          </h2>
          <p className="text-xl text-navy-600/90 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about automating your trading strategy
          </p>
        </motion.div>

        {/* What It Is + Illustration */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full text-blue-700 text-sm font-semibold mb-5 border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
              What It Is
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-blue-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-navy-600/90 leading-relaxed mb-8">
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-default group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
                    index === 1 ? 'from-indigo-500 to-purple-600 shadow-indigo-500/25' :
                    index === 2 ? 'from-cyan-500 to-blue-600 shadow-cyan-500/25' :
                    'from-emerald-500 to-teal-600 shadow-emerald-500/25'
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
            className="relative flex justify-center"
          >
            {/* Decorative glow behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-purple-400/20 rounded-[2rem] blur-2xl" />

            <div className="relative aspect-[3/2] w-full max-w-2xl bg-gradient-to-br from-white via-blue-50/50 to-indigo-50 rounded-3xl pt-4 pb-6 px-6 lg:pt-5 lg:pb-8 lg:px-8 border border-white/80 shadow-xl shadow-blue-900/10 overflow-hidden">
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-2xl" />
              </div>
              <div className="relative h-full">
                <StrategyIllustration />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why It Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-14"
        >
          <div className="relative bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl p-6 lg:p-8 shadow-lg shadow-blue-900/5 border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className="relative text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full text-blue-700 text-xs font-semibold mb-3 border border-blue-200/50">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Why It Matters
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">
                {overviewData.whyItMatters.title}
              </h3>
              <p className="text-sm text-navy-600 max-w-2xl mx-auto">
                Automation eliminates emotional interference, execution delays, and enables 24/7 market monitoring.
              </p>
            </div>

            {/* Stats + Benefits Combined Row */}
            <div className="grid grid-cols-3 lg:grid-cols-7 gap-3">
              {/* Stats */}
              {overviewData.whyItMatters.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className={`text-2xl font-bold bg-gradient-to-br ${
                    index === 0 ? 'from-blue-600 to-indigo-600' :
                    index === 1 ? 'from-indigo-600 to-purple-600' :
                    'from-cyan-600 to-blue-600'
                  } bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-xs text-navy-600">{stat.label}</div>
                </motion.div>
              ))}

              {/* Benefits */}
              {overviewData.benefits.map((benefit, index) => (
                <motion.div
                  key={`benefit-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="hidden lg:flex flex-col items-center text-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-indigo-600' :
                    index === 1 ? 'from-indigo-500 to-purple-600' :
                    index === 2 ? 'from-cyan-500 to-blue-600' :
                    'from-emerald-500 to-teal-600'
                  }`}>
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-navy-800 leading-tight">{benefit.title}</div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 mt-3 lg:hidden">
              {overviewData.benefits.map((benefit, index) => (
                <motion.div
                  key={`benefit-mobile-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-indigo-600' :
                    index === 1 ? 'from-indigo-500 to-purple-600' :
                    index === 2 ? 'from-cyan-500 to-blue-600' :
                    'from-emerald-500 to-teal-600'
                  }`}>
                    <benefit.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-navy-800">{benefit.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Who Should Use - Left-Right Split Layout */}
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
            className="relative"
          >
            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20 ring-1 ring-white/50">
              <img
                src={`${basePath}/11652.jpg`}
                alt="Trading team analyzing market data"
                className="w-full h-auto object-cover"
              />
              {/* Elegant overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-blue-900/10" />

              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
                <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Professional Trading</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl -z-10 opacity-20 blur-sm" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl -z-10 opacity-20 blur-sm" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full text-indigo-700 text-sm font-semibold mb-5 border border-indigo-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
              Who Should Use This
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-indigo-900 bg-clip-text text-transparent mb-8">
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
                  className="flex gap-5 items-start p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                    index === 0 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
                    index === 1 ? 'from-indigo-500 to-purple-600 shadow-indigo-500/25' :
                    'from-purple-500 to-pink-600 shadow-purple-500/25'
                  }`}>
                    <profile.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-indigo-900 transition-colors">{profile.title}</h4>
                    <p className="text-navy-600 leading-relaxed">{profile.description}</p>
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 group"
          >
            See How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
