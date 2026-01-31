'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { LayoutDashboard, CheckCircle, ArrowRight, Boxes, Link2, CircleOff, Database, Puzzle, TrendingUp, LineChart, Activity, PieChart, BarChart3, Gauge, Zap } from 'lucide-react';

interface DashboardOverviewProps {
  service: Service;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Animated background pattern
const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient orbs */}
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-slate-200 to-gray-200 rounded-full blur-3xl opacity-60"
      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-tr from-gray-200 to-slate-200 rounded-full blur-3xl opacity-50"
      animate={{ scale: [1.1, 1, 1.1], rotate: [-5, 0, -5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Grid pattern */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dashboard-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#475569" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dashboard-grid)" />
    </svg>
  </div>
);

// Dashboard Visual Illustration - Modern Multi-Widget Dashboard Interface
const DashboardIllustration = () => (
  <svg viewBox="0 0 420 310" className="w-full h-auto">
    <defs>
      {/* Modern gradients */}
      <linearGradient id="darkGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F172A" />
        <stop offset="50%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F8FAFC" />
      </linearGradient>

      {/* Glass effect filter */}
      <filter id="glassBlur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
      </filter>
      <filter id="modernShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.15"/>
      </filter>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08"/>
      </filter>
      <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="glow"/>
        <feMerge>
          <feMergeNode in="glow"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background gradient shape */}
    <rect x="5" y="5" width="410" height="300" rx="20" fill="#F1F5F9"/>

    {/* Main window frame with modern glass effect */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <rect x="15" y="15" width="390" height="280" rx="16" fill="url(#cardGrad)" filter="url(#modernShadow)" stroke="#E2E8F0" strokeWidth="1"/>

      {/* Modern dark header */}
      <rect x="15" y="15" width="390" height="40" rx="16" fill="url(#darkGlassGrad)"/>
      <rect x="15" y="40" width="390" height="15" fill="url(#darkGlassGrad)"/>

      {/* Sleek window controls */}
      <circle cx="38" cy="35" r="6" fill="#EF4444" opacity="0.9"/>
      <circle cx="58" cy="35" r="6" fill="#F59E0B" opacity="0.9"/>
      <circle cx="78" cy="35" r="6" fill="#10B981" opacity="0.9"/>

      {/* Modern URL bar */}
      <rect x="100" y="25" width="220" height="20" rx="10" fill="#475569" opacity="0.4"/>
      <circle cx="115" cy="35" r="4" fill="#10B981" opacity="0.8"/>
      <text x="128" y="39" fill="#CBD5E1" fontSize="9" fontFamily="monospace">dashboard.yourtrading.com</text>

      {/* User avatar */}
      <circle cx="370" cy="35" r="12" fill="url(#purpleGrad)"/>
      <text x="370" y="39" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">JD</text>
    </motion.g>

    {/* Top Row - 3 Modern KPI Cards */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      {/* Total Balance Card */}
      <g filter="url(#cardShadow)">
        <rect x="25" y="65" width="115" height="62" rx="12" fill="white"/>
        <rect x="25" y="65" width="115" height="62" rx="12" fill="url(#greenGrad)" opacity="0.08"/>
        <rect x="25" y="65" width="4" height="62" rx="2" fill="url(#greenGrad)"/>
      </g>
      <text x="40" y="82" fill="#64748B" fontSize="7" fontWeight="500" letterSpacing="0.5">TOTAL BALANCE</text>
      <text x="40" y="103" fill="#0F172A" fontSize="18" fontWeight="bold">$247,832</text>
      <rect x="40" y="111" width="45" height="12" rx="6" fill="#ECFDF5"/>
      <text x="48" y="120" fill="#059669" fontSize="7" fontWeight="600">▲ +12.4%</text>

      {/* Active Trades Card */}
      <g filter="url(#cardShadow)">
        <rect x="150" y="65" width="115" height="62" rx="12" fill="white"/>
        <rect x="150" y="65" width="115" height="62" rx="12" fill="url(#blueGrad)" opacity="0.08"/>
        <rect x="150" y="65" width="4" height="62" rx="2" fill="url(#blueGrad)"/>
      </g>
      <text x="165" y="82" fill="#64748B" fontSize="7" fontWeight="500" letterSpacing="0.5">ACTIVE TRADES</text>
      <text x="165" y="103" fill="#0F172A" fontSize="18" fontWeight="bold">12</text>
      <text x="193" y="103" fill="#64748B" fontSize="10">positions</text>
      <rect x="165" y="111" width="55" height="12" rx="6" fill="#EFF6FF"/>
      <text x="173" y="120" fill="#2563EB" fontSize="7" fontWeight="600">4 pending</text>

      {/* Today's P&L Card */}
      <g filter="url(#cardShadow)">
        <rect x="275" y="65" width="120" height="62" rx="12" fill="white"/>
        <rect x="275" y="65" width="120" height="62" rx="12" fill="url(#purpleGrad)" opacity="0.08"/>
        <rect x="275" y="65" width="4" height="62" rx="2" fill="url(#purpleGrad)"/>
      </g>
      <text x="290" y="82" fill="#64748B" fontSize="7" fontWeight="500" letterSpacing="0.5">TODAY'S P&L</text>
      <text x="290" y="103" fill="#059669" fontSize="18" fontWeight="bold">+$3,247</text>
      <rect x="290" y="111" width="65" height="12" rx="6" fill="#F5F3FF"/>
      <text x="298" y="120" fill="#7C3AED" fontSize="7" fontWeight="600">Best: AAPL</text>
    </motion.g>

    {/* Middle Row - Modern Watchlist & Alerts */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      {/* Watchlist Panel */}
      <g filter="url(#cardShadow)">
        <rect x="25" y="137" width="180" height="95" rx="12" fill="white"/>
      </g>
      <text x="38" y="155" fill="#0F172A" fontSize="10" fontWeight="600">Watchlist</text>
      <circle cx="185" cy="151" r="8" fill="#EFF6FF"/>
      <text x="185" y="155" fill="#3B82F6" fontSize="8" fontWeight="bold" textAnchor="middle">3</text>

      {/* Modern watchlist items */}
      <g>
        <rect x="32" y="165" width="166" height="22" rx="8" fill="#F8FAFC"/>
        <circle cx="46" cy="176" r="8" fill="#000" opacity="0.9"/>
        <text x="46" y="179" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle">A</text>
        <text x="62" y="179" fill="#0F172A" fontSize="9" fontWeight="600">AAPL</text>
        <text x="105" y="179" fill="#64748B" fontSize="8">$178.52</text>
        <rect x="145" y="170" width="45" height="14" rx="7" fill="#ECFDF5"/>
        <text x="168" y="180" fill="#059669" fontSize="8" fontWeight="bold" textAnchor="middle">+2.34%</text>
      </g>

      <g>
        <rect x="32" y="191" width="166" height="22" rx="8" fill="#F8FAFC"/>
        <circle cx="46" cy="202" r="8" fill="#EF4444" opacity="0.9"/>
        <text x="46" y="205" fill="white" fontSize="6" fontWeight="bold" textAnchor="middle">T</text>
        <text x="62" y="205" fill="#0F172A" fontSize="9" fontWeight="600">TSLA</text>
        <text x="105" y="205" fill="#64748B" fontSize="8">$245.80</text>
        <rect x="145" y="196" width="45" height="14" rx="7" fill="#FEE2E2"/>
        <text x="168" y="206" fill="#DC2626" fontSize="8" fontWeight="bold" textAnchor="middle">-1.12%</text>
      </g>

      {/* Alerts Panel */}
      <g filter="url(#cardShadow)">
        <rect x="215" y="137" width="180" height="95" rx="12" fill="white"/>
      </g>
      <text x="228" y="155" fill="#0F172A" fontSize="10" fontWeight="600">Alerts</text>
      <circle cx="375" cy="151" r="8" fill="#FEE2E2"/>
      <text x="375" y="155" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="middle">2</text>

      {/* Modern alert items */}
      <g>
        <rect x="222" y="165" width="166" height="22" rx="8" fill="#ECFDF5"/>
        <circle cx="236" cy="176" r="8" fill="url(#greenGrad)"/>
        <text x="236" y="179" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">✓</text>
        <text x="252" y="179" fill="#065F46" fontSize="8" fontWeight="500">AAPL target reached</text>
      </g>

      <g>
        <rect x="222" y="191" width="166" height="22" rx="8" fill="#EFF6FF"/>
        <circle cx="236" cy="202" r="8" fill="url(#blueGrad)"/>
        <text x="236" y="205" fill="white" fontSize="7" fontWeight="bold" textAnchor="middle">→</text>
        <text x="252" y="205" fill="#1E40AF" fontSize="8" fontWeight="500">New signal: BUY MSFT</text>
      </g>
    </motion.g>

    {/* Bottom Row - Modern Stats */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      {/* Risk Meter */}
      <g filter="url(#cardShadow)">
        <rect x="25" y="242" width="115" height="48" rx="12" fill="white"/>
      </g>
      <text x="38" y="258" fill="#64748B" fontSize="7" fontWeight="500">RISK LEVEL</text>
      <rect x="38" y="266" width="90" height="6" rx="3" fill="#E2E8F0"/>
      <rect x="38" y="266" width="40" height="6" rx="3" fill="url(#greenGrad)"/>
      <text x="38" y="282" fill="#059669" fontSize="9" fontWeight="bold">Low Risk</text>

      {/* Win Rate */}
      <g filter="url(#cardShadow)">
        <rect x="150" y="242" width="90" height="48" rx="12" fill="white"/>
      </g>
      <text x="163" y="258" fill="#64748B" fontSize="7" fontWeight="500">WIN RATE</text>
      <text x="163" y="280" fill="#0F172A" fontSize="18" fontWeight="bold">68%</text>
      <text x="200" y="280" fill="#059669" fontSize="10">↑</text>

      {/* Avg P&L */}
      <g filter="url(#cardShadow)">
        <rect x="250" y="242" width="90" height="48" rx="12" fill="white"/>
      </g>
      <text x="263" y="258" fill="#64748B" fontSize="7" fontWeight="500">AVG TRADE</text>
      <text x="263" y="280" fill="#059669" fontSize="16" fontWeight="bold">+$342</text>

      {/* Live Status */}
      <g filter="url(#cardShadow)">
        <rect x="350" y="242" width="45" height="48" rx="12" fill="#0F172A"/>
      </g>
      <circle cx="372" cy="260" r="6" fill="#10B981" filter="url(#glowGreen)"/>
      <text x="372" y="280" fill="#CBD5E1" fontSize="7" fontWeight="600" textAnchor="middle">LIVE</text>
    </motion.g>

    {/* Animated pulse on live indicator */}
    <motion.circle
      cx="372" cy="260"
      r="10"
      fill="none"
      stroke="#10B981"
      strokeWidth="2"
      initial={{ scale: 1, opacity: 0.6 }}
      animate={{ scale: 1.8, opacity: 0 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </svg>
);

// Data Integration Visual
const IntegrationIllustration = () => (
  <svg viewBox="0 0 400 280" className="w-full h-auto">
    <defs>
      <linearGradient id="intGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
      <linearGradient id="intGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      <filter id="intShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Central dashboard hub */}
    <motion.g
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <circle cx="200" cy="140" r="50" fill="white" filter="url(#intShadow)" stroke="#E2E8F0" strokeWidth="2"/>
      <circle cx="200" cy="140" r="38" fill="url(#intGrad1)"/>
      <text x="200" y="135" fill="white" fontSize="10" fontWeight="600" textAnchor="middle">YOUR</text>
      <text x="200" y="150" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">DASHBOARD</text>
    </motion.g>

    {/* Data source nodes */}
    {[
      { x: 70, y: 60, label: "Broker API", color: "#10B981", icon: "B" },
      { x: 330, y: 60, label: "Market Data", color: "#3B82F6", icon: "M" },
      { x: 70, y: 220, label: "Signals", color: "#F59E0B", icon: "S" },
      { x: 330, y: 220, label: "Analytics", color: "#8B5CF6", icon: "A" },
      { x: 50, y: 140, label: "P&L", color: "#EF4444", icon: "$" },
      { x: 350, y: 140, label: "Positions", color: "#06B6D4", icon: "P" }
    ].map((node, i) => (
      <motion.g
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
      >
        {/* Connection line */}
        <motion.line
          x1={node.x}
          y1={node.y}
          x2="200"
          y2="140"
          stroke={node.color}
          strokeWidth="2"
          strokeDasharray="6,4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
        >
          <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
        </motion.line>

        {/* Node circle */}
        <circle cx={node.x} cy={node.y} r="28" fill="white" filter="url(#intShadow)" stroke={node.color} strokeWidth="2"/>
        <circle cx={node.x} cy={node.y} r="20" fill={node.color}/>
        <text x={node.x} y={node.y + 4} fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">{node.icon}</text>
        <text x={node.x} y={node.y + 42} fill="#374151" fontSize="9" fontWeight="500" textAnchor="middle">{node.label}</text>
      </motion.g>
    ))}

    {/* Animated data flow particles */}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        r="4"
        fill="#475569"
        initial={{ cx: 70, cy: 60 }}
        animate={{
          cx: [70, 200, 330, 200, 70],
          cy: [60, 140, 220, 140, 60]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: i * 2,
          ease: "linear"
        }}
      />
    ))}
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What is a Custom Dashboard?",
    description: "A custom trading dashboard consolidates all YOUR trading data—P&L, positions, signals, risk metrics, performance analytics—into a single unified interface designed specifically around YOUR workflow. No more switching between 5 different tabs and tools.",
    highlights: [
      "Unified data view",
      "Real-time updates",
      "Custom layouts",
      "Your workflow, your way"
    ]
  },
  whyItMatters: {
    title: "Why You Need a Custom Dashboard",
    description: "Generic platforms force you to adapt to their way of working. A custom dashboard adapts to YOU—showing exactly what you need, when you need it.",
    problems: [
      {
        icon: Boxes,
        title: "Tool Overload",
        description: "Switching between broker platform, charting software, spreadsheets wastes time"
      },
      {
        icon: CircleOff,
        title: "Siloed Information",
        description: "Critical data scattered across multiple disconnected tools"
      },
      {
        icon: Puzzle,
        title: "Poor Fit",
        description: "Off-the-shelf platforms don't match your specific trading workflow"
      },
      {
        icon: Database,
        title: "Manual Aggregation",
        description: "Hours spent combining data from different sources manually"
      },
      {
        icon: Zap,
        title: "Delayed Decisions",
        description: "Missing opportunities while hunting for information"
      }
    ]
  },
  whatYouGet: {
    title: "What Your Dashboard Includes",
    metrics: [
      { value: "Live P&L", description: "Real-time profit and loss tracking" },
      { value: "Position View", description: "All open positions in one place" },
      { value: "Signal Feed", description: "Strategy alerts and signals" },
      { value: "Risk Metrics", description: "Exposure and drawdown monitoring" }
    ]
  },
  whoShouldUse: {
    title: "Who Needs a Custom Dashboard?",
    profiles: [
      {
        icon: TrendingUp,
        title: "Active Traders",
        description: "You trade multiple instruments and need a consolidated view of positions, P&L, and signals"
      },
      {
        icon: BarChart3,
        title: "Prop Firms & Teams",
        description: "You need unified dashboards for multiple traders with aggregated risk views"
      },
      {
        icon: Activity,
        title: "System Traders",
        description: "You run automated strategies and need real-time monitoring across all systems"
      }
    ]
  }
};

export default function DashboardOverview({ service }: DashboardOverviewProps) {
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full animate-pulse"></span>
            Understanding Custom Dashboards
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-slate-800 to-gray-900 bg-clip-text text-transparent">Your Data,</span>{' '}
            <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 bg-clip-text text-transparent">Unified</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            One dashboard to rule them all—designed around YOUR workflow
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-full text-slate-700 text-sm font-semibold mb-5 border border-slate-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full"></span>
              The Basics
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-slate-900 to-navy-800 bg-clip-text text-transparent mb-6">
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
                    index === 0 ? 'from-slate-500 to-gray-600 shadow-slate-500/25' :
                    index === 1 ? 'from-gray-500 to-slate-600 shadow-gray-500/25' :
                    index === 2 ? 'from-slate-600 to-gray-700 shadow-slate-500/25' :
                    'from-gray-600 to-slate-700 shadow-gray-500/25'
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
            <div className="relative w-full bg-gradient-to-br from-white via-slate-50/10 to-gray-50/20 rounded-xl p-1 border border-slate-100/30 shadow-sm overflow-hidden">
              <DashboardIllustration />
            </div>
          </motion.div>
        </div>

        {/* Why It Matters - FULL WIDTH */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-slate-50 via-gray-50/50 to-slate-50 rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dash-problem-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#475569"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dash-problem-pattern)" />
              </svg>
            </div>

            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                  Common Problems
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-slate-900 to-gray-900 bg-clip-text text-transparent mb-4">
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

        {/* What You'll Get - Text LEFT, Visual RIGHT */}
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
              Core Features
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-emerald-900 to-navy-800 bg-clip-text text-transparent mb-6">
              {overviewData.whatYouGet.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              Every dashboard we build includes the essential components you need for efficient trading operations.
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
            <div className="absolute -inset-2 bg-gradient-to-br from-slate-400/15 via-gray-400/10 to-slate-400/15 rounded-2xl blur-xl" />

            <div className="relative w-full bg-gradient-to-br from-slate-50/80 via-white to-gray-50/50 rounded-2xl p-3 border border-slate-100/50 shadow-lg overflow-hidden">
              <div className="relative">
                <IntegrationIllustration />
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
                alt="Trading dashboard interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50">
                <span className="text-sm font-semibold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">Unified Workflow</span>
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
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 bg-clip-text text-transparent mb-8">
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
                  className="flex gap-5 items-start p-4 rounded-2xl bg-gradient-to-r from-white to-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                    index === 0 ? 'from-slate-500 to-gray-600 shadow-slate-500/25' :
                    index === 1 ? 'from-gray-500 to-slate-600 shadow-gray-500/25' :
                    'from-slate-600 to-gray-700 shadow-slate-500/25'
                  }`}>
                    <profile.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-slate-700 transition-colors">{profile.title}</h4>
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 text-white font-semibold rounded-2xl shadow-xl shadow-slate-500/30 hover:shadow-2xl hover:shadow-slate-500/40 transition-all duration-300 group"
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
