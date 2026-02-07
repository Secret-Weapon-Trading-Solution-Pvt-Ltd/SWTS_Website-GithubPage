'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Zap,
  BarChart3,
  Bot,
  Bell,
  MessageSquare,
  Mail,
  Smartphone,
  CheckCircle2,
  XCircle,
  Shield,
  Send,
  Target,
  ArrowRight,
  FileText,
  AlertCircle,
  Play,
  Activity,
  TrendingUp,
  Settings,
} from 'lucide-react';

const executionModes = [
  {
    id: 'screener',
    title: 'Dashboard Screener',
    subtitle: 'Analytics Only',
    icon: BarChart3,
    description:
      'System does not place trades. Python processes data, runs indicators/strategy, and shows analytics on dashboard. You see signals, analyze them, and decide to trade manually.',
    pros: ['Signal list & alerts', 'Win-rate & PnL reports', 'Trade logs', 'Market snapshots'],
    cons: ['Manual trade execution', 'Delay in execution', 'Human error possible'],
    outcome: 'Decision Support Tool - You see, analyze, then decide to trade',
    color: 'blue',
    features: ['Real-time signals', 'PnL analytics', 'Trade history', 'Market overview'],
  },
  {
    id: 'full-auto',
    title: 'Full Auto Execution',
    subtitle: 'Automated Trading',
    icon: Bot,
    description:
      'Python places orders via broker API as soon as signal comes. Confirms fills, handles rejections, sets SL/TP automatically. Complete hands-off trading with full position management.',
    pros: ['Auto order placement', 'Fill confirmation', 'Auto SL/TP setup', 'Position management'],
    cons: ['Needs robust error handling', 'Higher complexity', 'Requires monitoring'],
    outcome: 'System executes fully - not just signals but actual trades',
    color: 'teal',
    features: ['Instant execution', 'Auto SL/TP', 'Risk management', 'Fill tracking'],
  },
];

const notificationChannels = [
  { icon: MessageSquare, label: 'Telegram', color: 'blue', desc: 'Instant bot messages' },
  { icon: Mail, label: 'Email', color: 'rose', desc: 'Detailed reports' },
  { icon: Smartphone, label: 'SMS', color: 'emerald', desc: 'Critical alerts' },
  { icon: Bell, label: 'WhatsApp', color: 'green', desc: 'Quick updates' },
  { icon: FileText, label: 'Dashboard', color: 'violet', desc: 'Visual logs' },
];

const ExecutionSection: React.FC = () => {

  return (
    <section id="execution" className="relative pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white overflow-hidden">

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Step 03</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Order Execution</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 to-transparent ml-6" />
        </motion.div>

        {/* Part 1: Introduction - Left Image, Right Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-lg lg:max-w-xl overflow-hidden rounded-2xl" style={{ margin: '0 auto' }}>
              <Image
                src={getAssetPath('/order-execution.jpg')}
                alt="Order Execution Trading"
                width={700}
                height={580}
                className="w-[140%] h-auto max-w-none -ml-[20%]"
                priority
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
              <Play className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Signal to Trade</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Signal Generated. <span className="text-emerald-600">Now What?</span>
            </h3>

            <p className="text-black text-lg leading-relaxed mb-6">
              Order execution in Python is not just pressing buy/sell. It&apos;s a complete engine that receives signal,
              validates it, places order via broker API, confirms the fill, and sets up protection (SL/TP).
            </p>

            <p className="text-black leading-relaxed mb-8">
              You have two choices: either show the signal on dashboard for manual trading, or let the system
              execute trades automatically. Both approaches have their place depending on your needs.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <BarChart3 className="w-6 h-6 text-blue-600 mb-2" />
                <p className="font-semibold text-black">Screener Mode</p>
                <p className="text-sm text-slate-500">Show signals, manual trade</p>
              </div>
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <Bot className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-black">Auto Mode</p>
                <p className="text-sm text-slate-500">System trades for you</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part 2: Execution Engine Flow - Proven Process Style */}
        <div className="mb-20 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-violet-500/10 text-teal-700 rounded-full text-sm font-semibold mb-6 border border-teal-200/50 shadow-sm"
            >
              <Zap className="w-4 h-4" />
              Execution Pipeline
            </motion.span>
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              What is an Execution Engine?
            </h2>
            <p className="text-base text-black max-w-3xl mx-auto leading-relaxed">
              A complete pipeline that handles everything from signal to confirmed trade with protection
            </p>
          </motion.div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative mb-10">
            {/* Progress line */}
            <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-teal-300 via-blue-300 via-violet-300 via-emerald-300 to-amber-300 rounded-full" />

            {/* Animated pulse */}
            <motion.div
              className="absolute top-[120px] left-[8%] w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
              animate={{ x: [0, 1200, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />

            {/* Steps */}
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: Bell, label: 'Signal Received', desc: 'Strategy generates a buy/sell signal based on your rules', color: { from: 'from-teal-500', to: 'to-cyan-500', text: 'text-teal-600', bg: 'bg-teal-50' } },
                { icon: Shield, label: 'Validation Check', desc: 'Risk checks, position limits, and duplicate order prevention', color: { from: 'from-blue-500', to: 'to-indigo-500', text: 'text-blue-600', bg: 'bg-blue-50' } },
                { icon: Send, label: 'Order Sent', desc: 'Places order via broker API with correct qty, price, and type', color: { from: 'from-violet-500', to: 'to-purple-500', text: 'text-violet-600', bg: 'bg-violet-50' } },
                { icon: CheckCircle2, label: 'Fill Confirmed', desc: 'Confirms execution, logs fill price, and updates positions', color: { from: 'from-emerald-500', to: 'to-teal-500', text: 'text-emerald-600', bg: 'bg-emerald-50' } },
                { icon: Target, label: 'SL/TP Set', desc: 'Automatically places stop-loss and take-profit protection orders', color: { from: 'from-amber-500', to: 'to-orange-500', text: 'text-amber-600', bg: 'bg-amber-50' } },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="relative flex flex-col items-center"
                >
                  {/* SVG Illustration */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 mb-4"
                  >
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <defs>
                        <linearGradient id={`execGrad${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={
                            idx === 0 ? '#14B8A6' : idx === 1 ? '#3B82F6' : idx === 2 ? '#8B5CF6' : idx === 3 ? '#10B981' : '#F59E0B'
                          }/>
                          <stop offset="100%" stopColor={
                            idx === 0 ? '#06B6D4' : idx === 1 ? '#6366F1' : idx === 2 ? '#A855F7' : idx === 3 ? '#14B8A6' : '#F97316'
                          }/>
                        </linearGradient>
                      </defs>
                      <circle cx="60" cy="60" r="50" fill={`url(#execGrad${idx})`} opacity="0.1"/>
                      <circle cx="60" cy="60" r="35" fill="white" stroke={`url(#execGrad${idx})`} strokeWidth="2"/>
                      <circle cx="60" cy="60" r="28" fill={`url(#execGrad${idx})`} opacity="0.1"/>
                    </svg>
                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <step.icon className={`w-10 h-10 ${step.color.text}`} />
                    </div>
                    {/* Step number badge */}
                    <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${step.color.from} ${step.color.to} flex items-center justify-center shadow-md`}>
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                  </motion.div>

                  {/* Node on timeline */}
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color.from} ${step.color.to} shadow-sm mb-4`} />

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-base font-bold text-black mb-2">{step.label}</h3>
                    <p className="text-sm text-black leading-snug line-clamp-2">{step.desc}</p>
                  </div>

                  {/* Arrow connector */}
                  {idx < 4 && (
                    <div className="absolute top-[112px] right-0 translate-x-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet - Vertical Cards */}
          <div className="lg:hidden space-y-3">
            {[
              { icon: Bell, label: 'Signal Received', desc: 'Strategy generates a buy/sell signal', color: { from: 'from-teal-500', to: 'to-cyan-500', text: 'text-teal-600', border: 'border-teal-200' } },
              { icon: Shield, label: 'Validation Check', desc: 'Risk checks and duplicate prevention', color: { from: 'from-blue-500', to: 'to-indigo-500', text: 'text-blue-600', border: 'border-blue-200' } },
              { icon: Send, label: 'Order Sent', desc: 'Places order via broker API', color: { from: 'from-violet-500', to: 'to-purple-500', text: 'text-violet-600', border: 'border-violet-200' } },
              { icon: CheckCircle2, label: 'Fill Confirmed', desc: 'Confirms execution and logs fill', color: { from: 'from-emerald-500', to: 'to-teal-500', text: 'text-emerald-600', border: 'border-emerald-200' } },
              { icon: Target, label: 'SL/TP Set', desc: 'Auto places stop-loss and take-profit', color: { from: 'from-amber-500', to: 'to-orange-500', text: 'text-amber-600', border: 'border-amber-200' } },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative bg-white rounded-xl p-4 shadow-md border ${step.color.border}`}
              >
                <div className="flex gap-3 items-center">
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color.from} ${step.color.to} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-black">{step.label}</h3>
                    <p className="text-sm text-black line-clamp-2">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: Side-by-Side Comparison */}
        <motion.div
          className="mb-20 bg-white rounded-3xl p-6 lg:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="relative text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-4 shadow-sm">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Side-by-Side Comparison</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">
              Choose Your Execution Mode
            </h3>
            <p className="text-black max-w-2xl mx-auto">Understanding both approaches helps you pick the right one for your trading</p>
          </div>

          {/* Comparison Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-6">

            {/* Left Section - Dashboard Screener */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <BarChart3 className="w-5 h-5 inline-block mr-2 -mt-1" />
                Dashboard Screener
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-4 border border-blue-200 shadow-sm mb-4">
                <p className="text-black text-sm leading-relaxed">{executionModes[0].description}</p>
              </div>

              {/* Column Headers */}
              <div className="flex gap-3 mb-3">
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Features</span>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Limitations</span>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                {/* Features Column */}
                <div className="flex-1 space-y-2">
                  {executionModes[0].pros.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Limitations Column */}
                <div className="flex-1 space-y-2">
                  {executionModes[0].cons.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                <p className="text-center text-black text-sm font-medium">{executionModes[0].outcome}</p>
              </div>
            </div>

            {/* Center - Person Image */}
            <div className="hidden lg:flex flex-col justify-center items-center px-2 self-stretch">
              <div className="relative flex-1 flex items-center">
                <Image
                  src={getAssetPath('/person.jpg')}
                  alt="Decision Maker"
                  width={280}
                  height={500}
                  className="relative h-full max-h-[500px] w-auto object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-slate-500 text-sm font-medium mt-4 text-center">Which mode fits<br/>your needs?</p>
            </div>

            {/* Right Section - Full Auto Execution */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <Bot className="w-5 h-5 inline-block mr-2 -mt-1" />
                Full Auto Execution
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl p-4 border border-teal-200 shadow-sm mb-4">
                <p className="text-black text-sm leading-relaxed">{executionModes[1].description}</p>
              </div>

              {/* Column Headers */}
              <div className="flex gap-3 mb-3">
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Features</span>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Limitations</span>
                </div>
              </div>

              <div className="flex gap-3 mb-4">
                {/* Features Column */}
                <div className="flex-1 space-y-2">
                  {executionModes[1].pros.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Limitations Column */}
                <div className="flex-1 space-y-2">
                  {executionModes[1].cons.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-3">
                <p className="text-center text-black text-sm font-medium">{executionModes[1].outcome}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 4: Notifications Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full mb-4 shadow-sm">
                <Bell className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-700">Stay Updated</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">Real-Time Notifications</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">Never miss a trade event — get instant alerts on every channel</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left - SVG Notification Flow Visual */}
            <motion.div
              className="relative w-full bg-white rounded-2xl p-3 border border-slate-200 shadow-sm overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 520 400" className="w-full h-auto">
                <defs>
                  <filter id="notifShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.08"/>
                  </filter>
                  <linearGradient id="notifGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14B8A6"/>
                    <stop offset="100%" stopColor="#10B981"/>
                  </linearGradient>
                  <linearGradient id="notifGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="100%" stopColor="#6366F1"/>
                  </linearGradient>
                  <linearGradient id="notifGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6"/>
                    <stop offset="100%" stopColor="#A855F7"/>
                  </linearGradient>
                  <linearGradient id="notifGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B"/>
                    <stop offset="100%" stopColor="#F97316"/>
                  </linearGradient>
                  <linearGradient id="notifGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444"/>
                    <stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect x="0" y="0" width="520" height="400" fill="#F8FAFC" rx="16"/>

                {/* Left column — Trade Events */}
                <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <rect x="18" y="30" width="120" height="60" rx="12" fill="white" filter="url(#notifShadow)"/>
                  <circle cx="48" cy="55" r="14" fill="url(#notifGrad1)"/>
                  <path d="M43 55l3 3 7-7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <text x="68" y="52" fill="#0F172A" fontSize="9" fontWeight="700">Signal</text>
                  <text x="68" y="64" fill="#64748B" fontSize="7">BUY NIFTY</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  <rect x="18" y="105" width="120" height="60" rx="12" fill="white" filter="url(#notifShadow)"/>
                  <circle cx="48" cy="130" r="14" fill="url(#notifGrad2)"/>
                  <path d="M42 130h12m-3-3l3 3-3 3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <text x="68" y="127" fill="#0F172A" fontSize="9" fontWeight="700">Order Sent</text>
                  <text x="68" y="139" fill="#64748B" fontSize="7">Via Broker API</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  <rect x="18" y="180" width="120" height="60" rx="12" fill="white" filter="url(#notifShadow)"/>
                  <circle cx="48" cy="205" r="14" fill="url(#notifGrad3)"/>
                  <circle cx="48" cy="205" r="6" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="48" cy="205" r="2" fill="white"/>
                  <text x="68" y="202" fill="#0F172A" fontSize="9" fontWeight="700">SL/TP Set</text>
                  <text x="68" y="214" fill="#64748B" fontSize="7">Protection Active</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <rect x="18" y="255" width="120" height="60" rx="12" fill="white" filter="url(#notifShadow)"/>
                  <circle cx="48" cy="280" r="14" fill="url(#notifGrad4)"/>
                  <path d="M42 280h12M48 274v12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <text x="68" y="277" fill="#0F172A" fontSize="9" fontWeight="700">Closed</text>
                  <text x="68" y="289" fill="#64748B" fontSize="7">+₹2,340 PnL</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                  <rect x="18" y="330" width="120" height="50" rx="12" fill="white" filter="url(#notifShadow)"/>
                  <circle cx="48" cy="352" r="14" fill="url(#notifGrad5)"/>
                  <path d="M43 349l10 0m-10 6l7 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <text x="68" y="349" fill="#0F172A" fontSize="9" fontWeight="700">Rejected</text>
                  <text x="68" y="361" fill="#64748B" fontSize="7">With Reason</text>
                </motion.g>

                {/* Dashed connecting lines — left to center phone */}
                <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                  <path d="M142 60 L180 95" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M142 135 L180 145" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M142 210 L180 200" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M142 285 L180 260" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M142 355 L180 310" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                </motion.g>

                {/* Center — Phone mockup */}
                <motion.g initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  {/* Phone body */}
                  <rect x="185" y="25" width="150" height="350" rx="22" fill="#1E293B" filter="url(#notifShadow)"/>
                  <rect x="194" y="42" width="132" height="318" rx="14" fill="#0F172A"/>
                  {/* Notch */}
                  <rect x="230" y="30" width="60" height="10" rx="5" fill="#0F172A"/>
                  {/* Status bar */}
                  <text x="206" y="60" fill="#94A3B8" fontSize="8">9:41</text>
                  <rect x="295" y="52" width="22" height="10" rx="3" fill="#22C55E"/>
                  {/* Screen title */}
                  <text x="260" y="82" fill="white" fontSize="10" fontWeight="700" textAnchor="middle">Trade Alerts</text>
                  <rect x="220" y="87" width="80" height="1" fill="#334155"/>

                  {/* Notification cards on screen */}
                  <rect x="202" y="96" width="116" height="48" rx="8" fill="#0D9488" opacity="0.15"/>
                  <rect x="202" y="96" width="3" height="48" rx="1.5" fill="#14B8A6"/>
                  <text x="214" y="114" fill="#F0FDFA" fontSize="8" fontWeight="600">BUY NIFTY @ 21,450</text>
                  <text x="214" y="128" fill="#5EEAD4" fontSize="7">Just now • Signal</text>

                  <rect x="202" y="152" width="116" height="48" rx="8" fill="#3B82F6" opacity="0.15"/>
                  <rect x="202" y="152" width="3" height="48" rx="1.5" fill="#3B82F6"/>
                  <text x="214" y="170" fill="#EFF6FF" fontSize="8" fontWeight="600">Filled @ ₹21,452</text>
                  <text x="214" y="184" fill="#93C5FD" fontSize="7">2s ago • Order</text>

                  <rect x="202" y="208" width="116" height="48" rx="8" fill="#8B5CF6" opacity="0.15"/>
                  <rect x="202" y="208" width="3" height="48" rx="1.5" fill="#8B5CF6"/>
                  <text x="214" y="226" fill="#F5F3FF" fontSize="8" fontWeight="600">SL: 21,380 TP: 21,580</text>
                  <text x="214" y="240" fill="#C4B5FD" fontSize="7">3s ago • Protection</text>

                  <rect x="202" y="264" width="116" height="48" rx="8" fill="#10B981" opacity="0.15"/>
                  <rect x="202" y="264" width="3" height="48" rx="1.5" fill="#10B981"/>
                  <text x="214" y="282" fill="#ECFDF5" fontSize="8" fontWeight="600">PnL: +₹2,340</text>
                  <text x="214" y="296" fill="#6EE7B7" fontSize="7">1m ago • Closed</text>

                  <rect x="202" y="320" width="116" height="34" rx="8" fill="#EF4444" opacity="0.12"/>
                  <rect x="202" y="320" width="3" height="34" rx="1.5" fill="#EF4444"/>
                  <text x="214" y="338" fill="#FEE2E2" fontSize="8" fontWeight="600">Rejected — Margin</text>
                  <text x="214" y="349" fill="#FCA5A5" fontSize="7">5m ago • Alert</text>
                </motion.g>

                {/* Dashed lines — phone to right delivery */}
                <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
                  <path d="M340 100 L375 80" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M340 175 L375 160" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M340 240 L375 245" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                  <path d="M340 310 L375 325" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4,3"/>
                </motion.g>

                {/* Right column — Delivery channels */}
                <motion.g initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                  <rect x="380" y="50" width="122" height="60" rx="12" fill="#EFF6FF" filter="url(#notifShadow)"/>
                  <circle cx="406" cy="75" r="13" fill="#0088CC"/>
                  <path d="M406 69l-6 3 1.5 1.5-0.5 3 2.5-2 3 2.5 5-8z" fill="white"/>
                  <text x="424" y="72" fill="#1E40AF" fontSize="9" fontWeight="700">Telegram</text>
                  <text x="424" y="84" fill="#64748B" fontSize="7">Instant delivery</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.55 }}>
                  <rect x="380" y="125" width="122" height="60" rx="12" fill="#ECFDF5" filter="url(#notifShadow)"/>
                  <circle cx="406" cy="150" r="13" fill="#25D366"/>
                  <path d="M406 142c-4 0-7 3-7 7 0 1.2.3 2.4.9 3.4l-.9 3.4 3.5-.9c1 .5 2.1.8 3.3.8 4 0 7-3 7-7s-3-6.7-6.8-6.7z" fill="white" opacity="0.9"/>
                  <text x="424" y="147" fill="#166534" fontSize="9" fontWeight="700">WhatsApp</text>
                  <text x="424" y="159" fill="#64748B" fontSize="7">Quick updates</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
                  <rect x="380" y="200" width="122" height="60" rx="12" fill="#FEF3C7" filter="url(#notifShadow)"/>
                  <circle cx="406" cy="225" r="13" fill="#F59E0B"/>
                  <rect x="399" y="221" width="14" height="9" rx="1.5" fill="none" stroke="white" strokeWidth="1.5"/>
                  <path d="M399 221l7 5 7-5" fill="none" stroke="white" strokeWidth="1.5"/>
                  <text x="424" y="222" fill="#B45309" fontSize="9" fontWeight="700">Email</text>
                  <text x="424" y="234" fill="#64748B" fontSize="7">Detailed reports</text>
                </motion.g>

                <motion.g initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.85 }}>
                  <rect x="380" y="275" width="122" height="60" rx="12" fill="#F0FDF4" filter="url(#notifShadow)"/>
                  <circle cx="406" cy="300" r="13" fill="#10B981"/>
                  <path d="M400 300h12M406 294v12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <text x="424" y="297" fill="#065F46" fontSize="9" fontWeight="700">SMS</text>
                  <text x="424" y="309" fill="#64748B" fontSize="7">Critical alerts</text>
                </motion.g>

                {/* Live badge top-right */}
                <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>
                  <rect x="380" y="350" width="122" height="35" rx="10" fill="#F5F3FF" filter="url(#notifShadow)"/>
                  <circle cx="400" cy="367" r="8" fill="#8B5CF6"/>
                  <rect x="396" y="364" width="8" height="6" rx="1" fill="white"/>
                  <text x="414" y="370" fill="#6D28D9" fontSize="8" fontWeight="700">Dashboard</text>
                </motion.g>
              </svg>
            </motion.div>

            {/* Right - Textual Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200/50 shadow-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></span>
                Always Connected
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Every Trade Event, <span className="text-emerald-600">Instantly Delivered</span>
              </h3>

              <p className="text-black text-lg leading-relaxed mb-6">
                Your system monitors every step of the execution pipeline and sends you real-time notifications — from the moment a signal triggers to the final PnL calculation. You stay informed without watching the screen.
              </p>

              <p className="text-slate-600 leading-relaxed mb-8">
                Each notification includes full context: instrument name, entry/exit price, quantity, order status, and protection levels. Whether a trade is filled, rejected, or closed — you know exactly what happened and why, delivered to your preferred channel within seconds.
              </p>

              {/* Delivery channels - 2x2 grid + 1 centered */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, name: 'Telegram', desc: 'Instant bot messages with trade details & charts', iconBg: 'bg-blue-500', borderColor: 'border-blue-200', bgColor: 'bg-blue-50' },
                  { icon: Bell, name: 'WhatsApp', desc: 'Quick alerts to your most-used messaging app', iconBg: 'bg-green-500', borderColor: 'border-green-200', bgColor: 'bg-green-50' },
                  { icon: Mail, name: 'Email', desc: 'Detailed reports with full trade summaries attached', iconBg: 'bg-amber-500', borderColor: 'border-amber-200', bgColor: 'bg-amber-50' },
                  { icon: Smartphone, name: 'SMS', desc: 'Critical alerts for urgent events like rejections', iconBg: 'bg-rose-500', borderColor: 'border-rose-200', bgColor: 'bg-rose-50' },
                ].map((channel, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-xl border ${channel.borderColor} ${channel.bgColor}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${channel.iconBg} flex-shrink-0`}>
                      <channel.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-slate-800">{channel.name}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{channel.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* 5th channel centered */}
              <div className="flex justify-center mt-4">
                <motion.div
                  className="flex items-start gap-3 p-4 rounded-xl border border-violet-200 bg-violet-50 w-full max-w-[calc(50%-0.5rem)]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-violet-500 flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-800">Dashboard</div>
                    <div className="text-xs text-slate-600 leading-relaxed">Visual logs with complete trade history & analytics</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExecutionSection;
