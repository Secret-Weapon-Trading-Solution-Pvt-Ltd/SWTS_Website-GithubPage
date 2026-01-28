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

// Decorative SVG illustration for the section
const StrategyIllustration = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6366F1" />
      </linearGradient>
    </defs>

    {/* Central brain/strategy icon */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <circle cx="200" cy="150" r="60" fill="url(#blueGrad)" opacity="0.1"/>
      <circle cx="200" cy="150" r="45" fill="url(#blueGrad)" opacity="0.2"/>
      <circle cx="200" cy="150" r="30" fill="url(#blueGrad)"/>

      {/* Brain pattern inside */}
      <path
        d="M185 145 Q190 135, 200 138 Q210 135, 215 145 M185 155 Q190 165, 200 162 Q210 165, 215 155"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="200" cy="150" r="3" fill="white"/>
    </motion.g>

    {/* Connecting nodes - Input */}
    <motion.g
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <circle cx="80" cy="100" r="25" fill="url(#cyanGrad)" opacity="0.2"/>
      <circle cx="80" cy="100" r="18" fill="url(#cyanGrad)"/>
      <text x="80" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>

      {/* Connection line */}
      <motion.path
        d="M105 100 Q140 100, 155 130"
        stroke="url(#cyanGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.g>

    {/* Connecting nodes - Rules */}
    <motion.g
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <circle cx="120" cy="220" r="25" fill="url(#purpleGrad)" opacity="0.2"/>
      <circle cx="120" cy="220" r="18" fill="url(#purpleGrad)"/>
      <path d="M112 215 L128 215 M112 220 L125 220 M112 225 L128 225" stroke="white" strokeWidth="2" strokeLinecap="round"/>

      <motion.path
        d="M145 210 Q165 190, 175 170"
        stroke="url(#purpleGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </motion.g>

    {/* Output - Automation */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <circle cx="320" cy="120" r="25" fill="url(#blueGrad)" opacity="0.2"/>
      <circle cx="320" cy="120" r="18" fill="url(#blueGrad)"/>
      <path d="M312 120 L320 115 L328 120 L320 125 Z" fill="white"/>

      <motion.path
        d="M245 135 Q280 120, 295 120"
        stroke="url(#blueGrad)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.g>

    {/* Output - Results */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <circle cx="300" cy="200" r="25" fill="#10B981" opacity="0.2"/>
      <circle cx="300" cy="200" r="18" fill="#10B981"/>
      <path d="M292 200 L298 206 L310 194" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

      <motion.path
        d="M230 165 Q260 180, 275 190"
        stroke="#10B981"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.g>

    {/* Floating particles */}
    {[...Array(8)].map((_, i) => (
      <motion.circle
        key={i}
        cx={50 + Math.random() * 300}
        cy={50 + Math.random() * 200}
        r={2 + Math.random() * 3}
        fill="#3B82F6"
        opacity={0.3}
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
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
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <BackgroundPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
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
          className="relative mb-24"
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
          className="grid lg:grid-cols-2 gap-16 items-center mb-24"
        >
          {/* Left Side - Content */}
          <div>
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
                  initial={{ opacity: 0, x: -20 }}
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
          </div>

          {/* Right Side - Full Diagram */}
          <div className="relative w-full h-[480px]">
            <svg viewBox="0 0 520 480" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="diagramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background decorative circles */}
              <circle cx="260" cy="240" r="200" fill="none" stroke="#E0E7FF" strokeWidth="1" opacity="0.5" />
              <circle cx="260" cy="240" r="155" fill="none" stroke="#E0E7FF" strokeWidth="1" opacity="0.3" />
              <circle cx="260" cy="240" r="110" fill="none" stroke="#E0E7FF" strokeWidth="1" opacity="0.2" />

              {/* Extra decorative elements to fill space */}
              <motion.circle cx="480" cy="80" r="25" fill="#EEF2FF" opacity="0.6"
                animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.circle cx="40" cy="120" r="20" fill="#EFF6FF" opacity="0.5"
                animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 5, repeat: Infinity }} />
              <motion.circle cx="500" cy="380" r="18" fill="#F5F3FF" opacity="0.5"
                animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4.5, repeat: Infinity }} />
              <motion.circle cx="30" cy="400" r="22" fill="#ECFDF5" opacity="0.4"
                animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 5.5, repeat: Infinity }} />

              {/* Dotted orbit paths */}
              <circle cx="260" cy="240" r="200" fill="none" stroke="#C7D2FE" strokeWidth="1" strokeDasharray="6,8" opacity="0.4" />

              {/* Main connection lines */}
              <motion.path
                d="M260 55 L260 185"
                stroke="url(#diagramGrad)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.path
                d="M210 270 L80 380"
                stroke="url(#diagramGrad)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.path
                d="M310 270 L440 380"
                stroke="url(#diagramGrad)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* Center Hub - "Your Strategy" */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <circle cx="260" cy="240" r="60" fill="url(#diagramGrad)" filter="url(#softGlow)" />
                <circle cx="260" cy="240" r="60" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
                <text x="260" y="233" textAnchor="middle" fill="white" fontSize="15" fontWeight="600">Your</text>
                <text x="260" y="253" textAnchor="middle" fill="white" fontSize="15" fontWeight="600">Strategy</text>
              </motion.g>

              {/* Node 1: Systematic Traders - Top */}
              <motion.g
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <circle cx="260" cy="55" r="50" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
                {/* Target icon inside */}
                <circle cx="260" cy="55" r="30" fill="none" stroke="#6366F1" strokeWidth="1.5" opacity="0.5" />
                <circle cx="260" cy="55" r="18" fill="none" stroke="#6366F1" strokeWidth="2" />
                <circle cx="260" cy="55" r="6" fill="#6366F1" />
                <line x1="260" y1="25" x2="260" y2="37" stroke="#6366F1" strokeWidth="2" />
                <line x1="260" y1="73" x2="260" y2="85" stroke="#6366F1" strokeWidth="2" />
                <line x1="230" y1="55" x2="242" y2="55" stroke="#6366F1" strokeWidth="2" />
                <line x1="278" y1="55" x2="290" y2="55" stroke="#6366F1" strokeWidth="2" />
                {/* Label */}
                <rect x="330" y="25" width="160" height="60" rx="10" fill="white" stroke="#E0E7FF" strokeWidth="1.5" />
                <text x="410" y="50" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="700">Systematic</text>
                <text x="410" y="70" textAnchor="middle" fill="#4F46E5" fontSize="14" fontWeight="700">Traders</text>
                <line x1="310" y1="55" x2="330" y2="55" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4,3" />
              </motion.g>

              {/* Node 2: Active Traders - Bottom Left */}
              <motion.g
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <circle cx="80" cy="380" r="50" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5" />
                {/* Chart icon inside */}
                <path d="M50 405 L65 385 L80 395 L100 365 L110 355" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="65" cy="385" r="4" fill="#3B82F6" />
                <circle cx="80" cy="395" r="4" fill="#3B82F6" />
                <circle cx="100" cy="365" r="4" fill="#06B6D4" />
                <circle cx="110" cy="355" r="5" fill="#06B6D4" />
                {/* Label */}
                <rect x="10" y="440" width="140" height="35" rx="8" fill="white" stroke="#DBEAFE" strokeWidth="1.5" />
                <text x="80" y="463" textAnchor="middle" fill="#2563EB" fontSize="14" fontWeight="700">Active Traders</text>
              </motion.g>

              {/* Node 3: Trading Teams - Bottom Right */}
              <motion.g
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <circle cx="440" cy="380" r="50" fill="#F5F3FF" stroke="#8B5CF6" strokeWidth="2.5" />
                {/* Team nodes icon inside */}
                <line x1="415" y1="368" x2="465" y2="368" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="415" y1="368" x2="440" y2="400" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="465" y1="368" x2="440" y2="400" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="415" cy="368" r="12" fill="white" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="415" cy="368" r="5" fill="#8B5CF6" />
                <circle cx="465" cy="368" r="12" fill="white" stroke="#8B5CF6" strokeWidth="2" />
                <circle cx="465" cy="368" r="5" fill="#8B5CF6" />
                <circle cx="440" cy="400" r="14" fill="white" stroke="#6366F1" strokeWidth="2" />
                <circle cx="440" cy="400" r="6" fill="#6366F1" />
                {/* Label */}
                <rect x="370" y="440" width="140" height="35" rx="8" fill="white" stroke="#EDE9FE" strokeWidth="1.5" />
                <text x="440" y="463" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="700">Trading Teams</text>
              </motion.g>

              {/* Small floating dots for visual interest */}
              <motion.circle cx="150" cy="150" r="4" fill="#6366F1" opacity="0.4"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.circle cx="400" cy="180" r="3" fill="#3B82F6" opacity="0.4"
                animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }} />
              <motion.circle cx="180" cy="350" r="3.5" fill="#8B5CF6" opacity="0.4"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} />
              <motion.circle cx="350" cy="320" r="3" fill="#06B6D4" opacity="0.4"
                animate={{ y: [0, 10, 0] }} transition={{ duration: 3.2, repeat: Infinity }} />

              {/* Animated dots on paths */}
              <motion.circle
                r="5"
                fill="#6366F1"
                animate={{
                  cx: [260, 260, 80],
                  cy: [55, 240, 380],
                  opacity: [1, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                r="5"
                fill="#8B5CF6"
                animate={{
                  cx: [260, 260, 440],
                  cy: [55, 240, 380],
                  opacity: [1, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
              />
            </svg>
          </div>
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
