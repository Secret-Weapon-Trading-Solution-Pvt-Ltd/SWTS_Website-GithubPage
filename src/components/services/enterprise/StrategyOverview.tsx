'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Target, Users, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface StrategyOverviewProps {
  service: Service;
}

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
      { value: "<1s", label: "Execution Speed" }
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Understanding Strategy Automation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Transform Your Trading
          </h2>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Everything you need to know about automating your trading strategy
          </p>
        </motion.div>

        {/* What It Is + Illustration */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              What It Is
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-navy-600 leading-relaxed mb-8">
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
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-navy-800">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <StrategyIllustration />
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
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Why It Matters
                </div>
                <h3 className="text-3xl font-bold text-navy-900 mb-6">
                  {overviewData.whyItMatters.title}
                </h3>
                <p className="text-lg text-navy-600 leading-relaxed">
                  {overviewData.whyItMatters.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {overviewData.whyItMatters.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="text-center p-4 bg-slate-50 rounded-2xl"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-navy-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who Should Use - Left-Right Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-14"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/11652.jpg"
                alt="Trading team analyzing market data"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl -z-10 opacity-20" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl -z-10 opacity-20" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Who Should Use This
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              {overviewData.whoShouldUse.title}
            </h3>
            <div className="space-y-6">
              {overviewData.whoShouldUse.profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <profile.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1">{profile.title}</h4>
                    <p className="text-navy-600">{profile.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Why Traders Choose - Right-Left Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Visual with benefit bars */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
              <div className="space-y-6">
                {overviewData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                        index === 0 ? 'from-emerald-400 to-teal-500' :
                        index === 1 ? 'from-teal-400 to-cyan-500' :
                        index === 2 ? 'from-cyan-400 to-blue-500' :
                        'from-blue-400 to-indigo-500'
                      }`}>
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-navy-800">{benefit.title}</span>
                    </div>
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${
                        index === 0 ? 'from-emerald-400 to-teal-400' :
                        index === 1 ? 'from-teal-400 to-cyan-400' :
                        index === 2 ? 'from-cyan-400 to-blue-400' :
                        'from-blue-400 to-indigo-400'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + index * 5}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Key Benefits
            </div>
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Why Traders Choose Automation
            </h3>
            <div className="space-y-5">
              {overviewData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-gradient-to-br ${
                    index === 0 ? 'from-emerald-400 to-teal-500' :
                    index === 1 ? 'from-teal-400 to-cyan-500' :
                    index === 2 ? 'from-cyan-400 to-blue-500' :
                    'from-blue-400 to-indigo-500'
                  }`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1">{benefit.title}</h4>
                    <p className="text-navy-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            See How It Works
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
