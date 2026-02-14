'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Target,
  LogOut,
  Brain,
  CheckCircle2,
  Clock,
  Zap,
  Activity,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const signalOptions = [
  {
    id: 'candle',
    title: 'Candle Close',
    icon: Clock,
    speed: 'Speed: Moderate',
    accuracy: 'High',
    desc: 'Wait for candle to close before confirming signal. More reliable, fewer false signals.',
    color: 'teal',
    bullets: [
      'Signal confirms only after the candle fully closes',
      'Most reliable — avoids false signals from wicks',
      'Best for swing trading & positional strategies',
    ],
  },
  {
    id: 'live',
    title: 'Live / Intrabar',
    icon: Zap,
    speed: 'Speed: Fast',
    accuracy: 'Medium',
    desc: 'Signal triggers as soon as price touches level. Quick entry but may repaint.',
    color: 'blue',
    bullets: [
      'Signal fires mid-candle when condition is met',
      'Faster entry but signal may repaint before candle closes',
      'Good for intraday scalping & momentum strategies',
    ],
  },
  {
    id: 'tick',
    title: 'Tick-based',
    icon: Activity,
    speed: 'Speed: Ultra Fast',
    accuracy: 'Variable',
    desc: 'Tick-by-tick price movement triggers. HFT style, needs robust infrastructure.',
    color: 'violet',
    bullets: [
      'Every single trade/tick is analyzed in real-time',
      'Needs low-latency infrastructure & co-location',
      'Used in HFT — not practical for retail traders',
    ],
  },
];

const StrategySignalSection: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState(signalOptions[0]);

  return (
    <section id="strategy-signal" className="relative pt-8 pb-6 lg:pt-12 lg:pb-10 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              2
            </div>
            <div>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">Step 02</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Strategy</span> & Signal
              </h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-300 to-transparent ml-6" />
        </motion.div>

        {/* PART 1: Introduction - Left Right Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
              Your Trading Rules in Code
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-5 leading-tight">
              Clear Rules = Clean Signals
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              A strategy defines exactly when to buy, when to sell, and when to stay out.
              No random trades - only rule-based, disciplined execution. Your emotions stay out.
            </p>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Your strategy is the brain of your algo system. It analyzes incoming data, applies your trading logic,
              and generates clear signals when conditions match. No guessing, no hesitation - just systematic execution.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: 'Define entry conditions', desc: 'Precise buy triggers', icon: Target, gradient: 'from-emerald-500 to-teal-500', bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200' },
                { text: 'Set exit & protection', desc: 'SL, targets, limits', icon: LogOut, gradient: 'from-rose-500 to-pink-500', bg: 'from-rose-50 to-pink-50', border: 'border-rose-200' },
                { text: 'Auto signal generation', desc: 'Real-time triggers', icon: Zap, gradient: 'from-blue-500 to-indigo-500', bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200' },
                { text: 'Emotion-free trading', desc: 'Disciplined execution', icon: Brain, gradient: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50', border: 'border-violet-200' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 p-4 bg-gradient-to-br ${item.bg} rounded-xl border ${item.border} shadow-sm`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">{item.text}</h4>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={getAssetPath('/strategy-signal.jpg')}
              alt="Strategy and Signal Generation"
              width={600}
              height={600}
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* PART 2: Entry & Exit Rules */}
        <div className="mb-20">
          {/* Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-4">
              <CheckCircle2 className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">Trading Rules</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Entry & Exit Rules
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Define when to enter and when to exit - the two most critical decisions in trading</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Entry Rule - Corner Ribbon Design */}
            <div className="relative cursor-pointer hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 rounded-3xl">
              <div className="relative bg-white border-2 border-emerald-200 rounded-3xl overflow-hidden shadow-lg h-full transition-all duration-500">
                {/* Corner ribbon fold effect */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500 to-teal-500 transform origin-top-right" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="absolute top-3 right-3 text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                {/* Decorative dots pattern */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-300" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300" />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-black">Entry Rule</h4>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">When to BUY? Define exact conditions that must be met before entering a trade.</p>

                  {/* Items */}
                  <div className="space-y-3">
                    {[
                      { text: 'Buy condition logic', icon: CheckCircle2 },
                      { text: 'Indicator crossovers', icon: Activity },
                      { text: 'Price action patterns', icon: TrendingUp },
                      { text: 'Volume confirmation', icon: Zap }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md border border-slate-200">
                          <item.icon className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-black font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Exit Rule - Corner Ribbon Design */}
            <div className="relative cursor-pointer hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 rounded-3xl">
              <div className="relative bg-white border-2 border-rose-200 rounded-3xl overflow-hidden shadow-lg h-full transition-all duration-500">
                {/* Corner ribbon fold effect */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-rose-500 to-pink-500 transform origin-top-right" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  <div className="absolute top-3 right-3 text-white">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                </div>
                {/* Decorative dots pattern */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-300" />
                  <div className="w-2 h-2 rounded-full bg-rose-400" />
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                </div>
                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300" />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200/50">
                        <LogOut className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-black">Exit Rule</h4>
                    </div>
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed">When to EXIT? Define stop loss, target, and limits to protect your capital.</p>

                  {/* Items */}
                  <div className="space-y-3">
                    {[
                      { text: 'Stop Loss (SL)', icon: Target },
                      { text: 'Trailing Stoploss', icon: Activity },
                      { text: 'Target / Take Profit', icon: Zap },
                      { text: 'Daily loss limit', icon: Clock }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md border border-slate-200">
                          <item.icon className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-black font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* PART 3: Signal Generation - Left Right Layout */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-full mb-6">
                <Zap className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-700">Signal Pipeline</span>
              </div>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                What is Signal Generation?
              </h3>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Signal generation is the core process where your strategy analyzes incoming market data and decides whether to take action or wait.
              </p>

              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                When new data arrives, your predefined rules are checked. If conditions match, a signal is generated - either BUY or SELL. This happens automatically, without emotion or hesitation.
              </p>

              {/* Key Points - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { text: 'Automated decision', desc: 'No manual intervention', color: 'teal', icon: Brain },
                  { text: 'Rule-based triggers', desc: 'Acts when conditions match', color: 'blue', icon: Target },
                  { text: 'Instant execution', desc: 'Millisecond response', color: 'violet', icon: Zap },
                  { text: 'Emotion-free', desc: 'Disciplined trading', color: 'emerald', icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white border-2 border-slate-200 rounded-xl">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ${
                      item.color === 'teal' ? 'bg-teal-500' :
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'
                    }`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-base">{item.text}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Signal Flow Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl border-2 border-slate-200 shadow-xl p-6 lg:p-8 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100/50 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100/50 rounded-full blur-2xl" />

                {/* Header */}
                <div className="relative text-center mb-6">
                  <h4 className="text-lg font-bold text-black">Signal Generation Pipeline</h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-2 rounded-full" />
                </div>

                {/* Flow Steps */}
                <div className="relative space-y-3">
                  {[
                    { icon: Activity, title: 'Data Arrives', sub: 'New candle/tick received', color: 'teal' },
                    { icon: Brain, title: 'Strategy Checks', sub: 'Check your trading rules', color: 'blue' },
                    { icon: Target, title: 'Condition Match?', sub: 'Evaluate: Yes or No', color: 'violet' },
                    { icon: Zap, title: 'Signal Output', sub: 'BUY / SELL / WAIT', color: 'emerald' },
                  ].map((step, idx, arr) => (
                    <div key={idx} className="relative">
                      {/* Connection line */}
                      {idx < arr.length - 1 && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-3 bg-gradient-to-b from-slate-300 to-slate-200 z-0" />
                      )}

                      <div className={`relative p-4 rounded-xl border-2 ${
                        step.color === 'teal' ? 'bg-teal-50 border-teal-200' :
                        step.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                        step.color === 'violet' ? 'bg-violet-50 border-violet-200' :
                        'bg-emerald-50 border-emerald-200'
                      }`}>
                        {/* Top row: Logo - Title */}
                        <div className="flex items-center justify-center gap-3 mb-2">
                          {/* Icon */}
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md bg-white border border-slate-200">
                            <step.icon className="w-6 h-6 text-black" />
                          </div>

                          {/* Title - larger font */}
                          <h4 className="font-bold text-black text-base">{step.title}</h4>
                        </div>

                        {/* Explanation below - centered */}
                        <p className="text-sm font-medium text-center text-black">{step.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PART 3B: Signal Types - Flowchart Style */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Flowchart Container */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl border-2 border-slate-200 shadow-xl p-6 lg:p-8">
            {/* Main Heading - Center Top */}
            <div className="text-center mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                Signal Types
              </h3>
              <p className="text-base text-slate-600">Two possible outcomes from your strategy</p>
            </div>

            {/* Flowchart with SVG lines */}
            <div className="relative">
              {/* SVG Connection Lines */}
              <svg className="hidden md:block absolute top-0 left-0 w-full h-16 overflow-visible" preserveAspectRatio="none">
                {/* Center vertical line from heading */}
                <line x1="50%" y1="0" x2="50%" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                {/* Horizontal line */}
                <line x1="25%" y1="20" x2="75%" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                {/* Left vertical line to Entry */}
                <line x1="25%" y1="20" x2="25%" y2="40" stroke="#cbd5e1" strokeWidth="2" />
                {/* Right vertical line to Exit */}
                <line x1="75%" y1="20" x2="75%" y2="40" stroke="#cbd5e1" strokeWidth="2" />
              </svg>

              {/* Signal Type Cards */}
              <div className="grid md:grid-cols-2 gap-6 pt-10 md:pt-12">
                {/* Entry */}
                <div className="flex flex-col p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-emerald-800">ENTRY Signal</h4>
                      <p className="text-sm text-emerald-600 font-medium">Open a new position</p>
                    </div>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    When all your predefined conditions are satisfied simultaneously — indicators match, risk checks pass — the strategy generates an <span className="font-semibold text-emerald-700">Entry signal</span> to open a trade via broker API with calculated quantity and price.
                  </p>
                  <div className="mt-4 pt-3 border-t border-emerald-200">
                    <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Result: BUY / SELL order sent to broker</p>
                  </div>
                </div>

                {/* Exit */}
                <div className="flex flex-col p-6 rounded-2xl bg-rose-50 border-2 border-rose-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center shadow-md">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-rose-800">EXIT Signal</h4>
                      <p className="text-sm text-rose-600 font-medium">Close an existing position</p>
                    </div>
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    When your exit conditions trigger — stop-loss hit, target/take-profit reached, daily limit, time cutoff, or reversal signal — the strategy generates an <span className="font-semibold text-rose-700">Exit signal</span> to close the trade and protect your capital.
                  </p>
                  <div className="mt-4 pt-3 border-t border-rose-200">
                    <p className="text-xs text-rose-600 font-medium uppercase tracking-wide">Result: Position closed, PnL calculated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PART 3C: Signal Timing - Interactive */}
        <div className="mb-20">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-4">
              <Clock className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">Timing Decision</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Signal Timing</h3>
            <p className="text-lg text-black max-w-2xl mx-auto">When should the signal generate? Choose your approach based on speed vs accuracy trade-off.</p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-5 gap-6 items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Timing Options - Left */}
            <div className="lg:col-span-2 space-y-4">
              {signalOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveSignal(option)}
                  className={`group relative w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all overflow-hidden ${
                    activeSignal.id === option.id
                      ? option.color === 'teal'
                        ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg'
                        : option.color === 'blue'
                          ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg'
                          : 'border-violet-400 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Diagonal accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 transition-all duration-300 ${
                    activeSignal.id === option.id
                      ? option.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-500'
                        : option.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500'
                        : 'bg-gradient-to-br from-violet-400 to-violet-500'
                      : 'bg-slate-100 group-hover:bg-slate-200'
                  }`} />

                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    activeSignal.id === option.id
                      ? option.color === 'teal' ? 'bg-teal-500'
                        : option.color === 'blue' ? 'bg-blue-500'
                        : 'bg-violet-500'
                      : 'bg-transparent group-hover:bg-slate-300'
                  }`} />

                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${
                    activeSignal.id === option.id
                      ? option.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' : option.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-violet-500 to-violet-600'
                      : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                    <option.icon className={`w-7 h-7 ${activeSignal.id === option.id ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div className="relative flex-1">
                    <h4 className="font-bold text-black text-lg">{option.title}</h4>
                    <div className="flex gap-2 mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        option.speed === 'Speed: Moderate' ? 'bg-amber-100 text-amber-700' :
                        option.speed === 'Speed: Fast' ? 'bg-blue-100 text-blue-700' :
                        'bg-violet-100 text-violet-700'
                      }`}>{option.speed}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        option.accuracy === 'High' ? 'bg-emerald-100 text-emerald-700' :
                        option.accuracy === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>{option.accuracy} Accuracy</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Details - Right */}
            <div className="lg:col-span-3">
              <div className={`relative rounded-3xl p-8 h-full border-2 shadow-lg overflow-hidden ${
                activeSignal.color === 'teal' ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200' :
                activeSignal.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200' :
                'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200'
              }`}>
                {/* Diagonal accent - top right */}
                <div className={`absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rotate-45 ${
                  activeSignal.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-500' :
                  activeSignal.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                  'bg-gradient-to-br from-violet-400 to-violet-500'
                }`} />

                {/* Diagonal accent - bottom left */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 rotate-45 opacity-50 ${
                  activeSignal.color === 'teal' ? 'bg-gradient-to-br from-cyan-300 to-teal-400' :
                  activeSignal.color === 'blue' ? 'bg-gradient-to-br from-indigo-300 to-blue-400' :
                  'bg-gradient-to-br from-purple-300 to-violet-400'
                }`} />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  activeSignal.color === 'teal' ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500' :
                  activeSignal.color === 'blue' ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500' :
                  'bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500'
                }`} />

                <div className="relative flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                    activeSignal.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
                    activeSignal.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-violet-500 to-violet-600'
                  }`}>
                    <activeSignal.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-black">{activeSignal.title}</h4>
                    <div className="flex gap-2 mt-2">
                      <span className={`text-sm px-3 py-1 rounded-full font-semibold ${
                        activeSignal.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                        activeSignal.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                      }`}>{activeSignal.speed}</span>
                      <span className={`text-sm px-3 py-1 rounded-full font-semibold ${
                        activeSignal.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                        activeSignal.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-violet-100 text-violet-700'
                      }`}>{activeSignal.accuracy} Accuracy</span>
                    </div>
                  </div>
                </div>
                <p className="relative text-lg text-black mb-6">{activeSignal.desc}</p>

                {/* Key Points */}
                <div className="relative bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                  <div className="space-y-3">
                    {activeSignal.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          activeSignal.color === 'teal' ? 'bg-teal-500' :
                          activeSignal.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                        }`} />
                        <p className="text-base text-slate-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default StrategySignalSection;
