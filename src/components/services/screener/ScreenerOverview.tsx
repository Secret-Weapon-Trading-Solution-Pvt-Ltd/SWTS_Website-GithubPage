'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Search, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Target, Bell, BarChart2, Clock, Eye, Filter, Smartphone, Mail, MessageSquare, Send } from 'lucide-react';

interface ScreenerOverviewProps {
  service: Service;
}

// Animated background pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-60"
      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"
      animate={{ scale: [1.1, 1, 1.1], rotate: [-5, 0, -5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="screener-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0891B2" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#screener-grid)" />
    </svg>
  </div>
);

// Market Scanner Illustration
const ScannerIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-auto">
    <defs>
      <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0891B2" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="greenScan" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#34D399" />
      </linearGradient>
      <filter id="scanShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
      </filter>
    </defs>

    <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <rect x="30" y="30" width="340" height="200" rx="12" fill="white" filter="url(#scanShadow)" stroke="#E0E7FF" strokeWidth="1"/>
      <rect x="30" y="30" width="340" height="45" rx="12" fill="url(#scanGrad)"/>
      <rect x="30" y="63" width="340" height="12" fill="url(#scanGrad)"/>
      <text x="50" y="58" fill="white" fontSize="14" fontWeight="600">Market Scanner - Live</text>
      <circle cx="340" cy="52" r="6" fill="#10B981">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </motion.g>

    {/* Stock rows */}
    <g>
      <rect x="45" y="90" width="310" height="30" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1"/>
      <text x="60" y="110" fill="#059669" fontSize="11" fontWeight="600">RELIANCE</text>
      <text x="140" y="110" fill="#6B7280" fontSize="10">Breakout Alert</text>
      <rect x="260" y="98" width="80" height="16" rx="4" fill="#10B981"/>
      <text x="280" y="110" fill="white" fontSize="9" fontWeight="600">MATCHED</text>
    </g>

    <g>
      <rect x="45" y="125" width="310" height="30" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
      <text x="60" y="145" fill="#D97706" fontSize="11" fontWeight="600">INFY</text>
      <text x="140" y="145" fill="#6B7280" fontSize="10">RSI Oversold</text>
      <rect x="260" y="133" width="80" height="16" rx="4" fill="#F59E0B"/>
      <text x="275" y="145" fill="white" fontSize="9" fontWeight="600">SCANNING</text>
    </g>

    <g>
      <rect x="45" y="160" width="310" height="30" rx="6" fill="#ECFDF5" stroke="#10B981" strokeWidth="1"/>
      <text x="60" y="180" fill="#059669" fontSize="11" fontWeight="600">TCS</text>
      <text x="140" y="180" fill="#6B7280" fontSize="10">Volume Spike</text>
      <rect x="260" y="168" width="80" height="16" rx="4" fill="#10B981"/>
      <text x="280" y="180" fill="white" fontSize="9" fontWeight="600">MATCHED</text>
    </g>

    {/* Stats footer */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <text x="50" y="215" fill="#0891B2" fontSize="10" fontWeight="600">500+ symbols scanned</text>
      <text x="200" y="215" fill="#10B981" fontSize="10" fontWeight="600">12 matches found</text>
    </motion.g>
  </svg>
);

// Alert Delivery Channels Illustration
const AlertChannelsIllustration = () => (
  <svg viewBox="0 0 480 320" className="w-full h-auto">
    <defs>
      <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0891B2" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <filter id="channelShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
      </filter>
    </defs>

    <rect x="10" y="10" width="460" height="300" rx="16" fill="white" stroke="#E5E7EB" strokeWidth="1" filter="url(#channelShadow)"/>

    {/* Title */}
    <text x="30" y="40" fill="#0891B2" fontSize="14" fontWeight="bold">Alert Delivery Channels</text>
    <text x="30" y="58" fill="#6B7280" fontSize="10">Get notified instantly, your way</text>

    {/* Center Hub */}
    <motion.g
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="240" cy="160" r="45" fill="url(#centerGrad)"/>
      <text x="240" y="155" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">YOUR</text>
      <text x="240" y="170" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">SCREENER</text>
    </motion.g>

    {/* WhatsApp */}
    <motion.g
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <rect x="40" y="80" width="100" height="70" rx="12" fill="#ECFDF5" stroke="#25D366" strokeWidth="2"/>
      <circle cx="90" cy="105" r="16" fill="#25D366"/>
      <text x="84" y="110" fill="white" fontSize="12" fontWeight="bold">W</text>
      <text x="90" y="138" fill="#059669" fontSize="10" fontWeight="600" textAnchor="middle">WhatsApp</text>
      <line x1="140" y1="115" x2="195" y2="145" stroke="#25D366" strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
      </line>
    </motion.g>

    {/* Telegram */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <rect x="340" y="80" width="100" height="70" rx="12" fill="#EFF6FF" stroke="#0088CC" strokeWidth="2"/>
      <circle cx="390" cy="105" r="16" fill="#0088CC"/>
      <text x="384" y="110" fill="white" fontSize="12" fontWeight="bold">T</text>
      <text x="390" y="138" fill="#1D4ED8" fontSize="10" fontWeight="600" textAnchor="middle">Telegram</text>
      <line x1="340" y1="115" x2="285" y2="145" stroke="#0088CC" strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
      </line>
    </motion.g>

    {/* Email */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <rect x="40" y="180" width="100" height="70" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2"/>
      <circle cx="90" cy="205" r="16" fill="#F59E0B"/>
      <text x="84" y="210" fill="white" fontSize="12" fontWeight="bold">@</text>
      <text x="90" y="238" fill="#D97706" fontSize="10" fontWeight="600" textAnchor="middle">Email</text>
      <line x1="140" y1="205" x2="195" y2="175" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
      </line>
    </motion.g>

    {/* SMS */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <rect x="340" y="180" width="100" height="70" rx="12" fill="#F3E8FF" stroke="#A855F7" strokeWidth="2"/>
      <circle cx="390" cy="205" r="16" fill="#A855F7"/>
      <text x="381" y="210" fill="white" fontSize="10" fontWeight="bold">SMS</text>
      <text x="390" y="238" fill="#7C3AED" fontSize="10" fontWeight="600" textAnchor="middle">Text Message</text>
      <line x1="340" y1="205" x2="285" y2="175" stroke="#A855F7" strokeWidth="2" strokeDasharray="4,4">
        <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
      </line>
    </motion.g>

    {/* Bottom stats */}
    <rect x="30" y="272" width="420" height="30" rx="6" fill="#F0FDFA"/>
    <text x="130" y="291" fill="#0891B2" fontSize="9" fontWeight="600" textAnchor="middle">Real-time Delivery</text>
    <line x1="220" y1="278" x2="220" y2="296" stroke="#99F6E4" strokeWidth="1"/>
    <text x="310" y="291" fill="#059669" fontSize="9" fontWeight="600" textAnchor="middle">24/7 Monitoring</text>
    <line x1="400" y1="278" x2="400" y2="296" stroke="#99F6E4" strokeWidth="1"/>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is a Custom Screener?",
    description: "A custom screener is an automated market scanning system built specifically for YOUR trading criteria. It continuously monitors hundreds or thousands of symbols, checking for YOUR exact setup conditions, and instantly alerts you when opportunities arise—no more manual chart checking.",
    highlights: [
      "Scan 500+ symbols instantly",
      "Your exact criteria",
      "Real-time monitoring",
      "Instant notifications"
    ]
  },
  whyScreen: {
    title: "Why You Need a Custom Screener",
    description: "Manual chart checking is inefficient and causes you to miss opportunities. A custom screener works 24/7, never misses a setup, and frees you to focus on decision-making rather than searching.",
    problems: [
      { icon: Clock, title: "Hours Wasted Daily", description: "Manually scrolling through watchlists looking for setups that may not even be there" },
      { icon: Eye, title: "Missed Opportunities", description: "While analyzing one chart, your setups are triggering on other symbols unnoticed" },
      { icon: Filter, title: "Generic Tools Fail", description: "Standard screeners can't capture YOUR specific multi-condition setup logic" },
      { icon: TrendingUp, title: "Delayed Entries", description: "By the time you find a setup manually, the best entry point has often passed" },
      { icon: Target, title: "Limited Coverage", description: "You can only watch 10-20 charts manually, missing opportunities in wider markets" }
    ]
  },
  alertDelivery: {
    title: "How Alerts Reach You",
    description: "Your screener alerts are delivered instantly through multiple channels—choose what works best for your trading style.",
    channels: [
      { icon: MessageSquare, name: "WhatsApp", description: "Instant alerts to your phone via WhatsApp Business API", color: "from-green-500 to-emerald-500" },
      { icon: Send, name: "Telegram", description: "Fast, reliable delivery through Telegram bot integration", color: "from-blue-500 to-cyan-500" },
      { icon: Mail, name: "Email", description: "Detailed alerts with charts and analysis to your inbox", color: "from-amber-500 to-orange-500" },
      { icon: Smartphone, name: "SMS", description: "Text message alerts for critical high-priority signals", color: "from-violet-500 to-purple-500" }
    ]
  },
  whoShouldUse: {
    title: "Who Should Use a Custom Screener?",
    profiles: [
      { icon: Eye, title: "Active Traders", description: "You trade regularly but waste hours scanning charts for setups manually" },
      { icon: BarChart2, title: "Multi-Symbol Traders", description: "You want to trade opportunities across 50+ stocks, crypto, or forex pairs" },
      { icon: Clock, title: "Part-Time Traders", description: "You have a job but want to catch setups during market hours without constant monitoring" },
      { icon: Filter, title: "Technical Traders", description: "You have specific technical criteria that generic screeners can't handle" },
      { icon: Zap, title: "Speed-Sensitive Traders", description: "Your edge depends on catching setups early before the crowd notices" }
    ]
  }
};

export default function ScreenerOverview({ service }: ScreenerOverviewProps) {
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 text-cyan-700 rounded-full text-sm font-semibold mb-6 border border-cyan-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></span>
            Understanding Custom Screeners
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-cyan-800 to-navy-900 bg-clip-text text-transparent">Find Setups</span>{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Automatically</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Stop wasting hours checking charts. Let your screener find opportunities while you focus on trading.
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full text-cyan-700 text-sm font-semibold mb-5 border border-cyan-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
              What It Is
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-cyan-900 to-navy-800 bg-clip-text text-transparent mb-6">
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:border-cyan-100 transition-all duration-300 cursor-default group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110 bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-500 to-blue-600 shadow-cyan-500/25' :
                    index === 1 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
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
            <div className="relative w-full bg-gradient-to-br from-white via-cyan-50/10 to-blue-50/20 rounded-xl p-1 border border-cyan-100/30 shadow-sm overflow-hidden">
              <ScannerIllustration />
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
          <div className="relative bg-gradient-to-br from-cyan-50 via-blue-50/50 to-cyan-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-cyan-100 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="screener-problem-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#0891B2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#screener-problem-pattern)" />
              </svg>
            </div>

            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                  The Problem
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-cyan-900 to-navy-900 bg-clip-text text-transparent mb-4">
                  {overviewData.whyScreen.title}
                </h3>
                <p className="text-lg text-black max-w-2xl mx-auto">
                  {overviewData.whyScreen.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                {overviewData.whyScreen.problems.map((problem, index) => (
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
                        index === 0 ? 'from-cyan-400 to-blue-500 shadow-cyan-500/25' :
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

        {/* Alert Delivery - Visual LEFT, Text RIGHT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:order-first"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/15 via-blue-400/10 to-cyan-400/15 rounded-2xl blur-xl" />
            <div className="relative w-full bg-gradient-to-br from-cyan-50/80 via-white to-blue-50/50 rounded-2xl p-3 border border-cyan-100/50 shadow-lg overflow-hidden">
              <AlertChannelsIllustration />
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
              Alert Delivery
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-emerald-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.alertDelivery.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.alertDelivery.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.alertDelivery.channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-white to-slate-50/50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br ${channel.color} shadow-md group-hover:scale-110 transition-transform`}>
                    <channel.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-navy-900 mb-1">{channel.name}</div>
                  <div className="text-sm text-black">{channel.description}</div>
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
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-cyan-900 bg-clip-text text-transparent">
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
                className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-cyan-200 transition-all duration-300 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                  index === 0 ? 'from-cyan-500 to-blue-600 shadow-cyan-500/25' :
                  index === 1 ? 'from-emerald-500 to-teal-600 shadow-emerald-500/25' :
                  index === 2 ? 'from-violet-500 to-purple-600 shadow-violet-500/25' :
                  'from-amber-500 to-orange-600 shadow-amber-500/25'
                }`}>
                  <profile.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-cyan-900 transition-colors">{profile.title}</h4>
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
                  className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-cyan-200 transition-all duration-300 group cursor-default max-w-xl w-full"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br from-rose-500 to-pink-600 shadow-rose-500/25">
                    <FifthIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-cyan-900 transition-colors">{overviewData.whoShouldUse.profiles[4].title}</h4>
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 group"
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
