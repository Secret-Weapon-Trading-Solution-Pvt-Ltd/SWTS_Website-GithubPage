'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Database,
  Fuel,
  Wifi,
  History,
  Server,
  Building2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Zap,
  Radio,
  TrendingUp,
  Infinity,
  RefreshCw,
  BarChart3,
  Clock,
  LineChart,
  Search,
} from 'lucide-react';

const DataImportSection: React.FC = () => {

  return (
    <section id="data-import" className="relative pt-8 pb-8 lg:pt-12 lg:pb-12 bg-white overflow-hidden">

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
              1
            </div>
            <div>
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">Step 01</p>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Data</span> Import
              </h2>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-teal-300 to-transparent ml-6" />
        </motion.div>

        {/* PART 1: Introduction - Left Right Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center mb-12">
          {/* Left - Image */}
          <motion.div
            className="w-full lg:w-[50%] flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={getAssetPath('/data-import.jpg')}
              alt="Data Import Illustration"
              width={750}
              height={750}
              className="w-full max-w-2xl lg:max-w-3xl h-auto"
              priority
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="w-full lg:w-[50%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
              <Database className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold text-teal-800">The Foundation of Algo Trading</span>
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Without Quality Data,<br />Strategy Fails
            </h3>
            <p className="text-lg text-slate-900 mb-6 leading-relaxed">
              The first step of algo trading is getting market data to your strategy on time,
              in the right format, without gaps. If data is weak, everything else fails.
            </p>

            {/* Data = Fuel analogy */}
            <div className="bg-gradient-to-r from-amber-50 via-white to-teal-50 border border-slate-200 rounded-2xl p-5 mb-6">
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md">
                    <Fuel className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-slate-900">Data = Fuel</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-md">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-slate-900">Strategy = Engine</span>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-900 font-medium">
                  Late or dirty fuel = Poor output, even with the best engine
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { text: 'Clean data = Reliable signals', color: 'teal' },
                { text: 'Timely data = No missed opportunities', color: 'blue' },
                { text: 'Consistent format = No processing errors', color: 'emerald' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                    item.color === 'teal' ? 'text-teal-500' :
                    item.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'
                  }`} />
                  <span className="text-slate-900 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* PART 2: Types of Data */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-4">
              <Database className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">Data Classification</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Market Data Comes in <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Two Types</span>
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">One shows what's happening now, the other shows what happened before — both are essential for algo trading</p>
          </div>

          {/* Data Type Cards - Elegant Design */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Real-time Data */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-teal-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl p-8 hover:border-teal-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Header */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Wifi className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold text-slate-900">Real-Time Data</h4>
                      <p className="text-sm text-teal-600 font-medium">Live market feed</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping absolute" />
                    <div className="w-3 h-3 bg-teal-500 rounded-full relative" />
                  </div>
                </div>

                {/* Description */}
                <div className="relative mb-6">
                  <p className="text-slate-800 leading-relaxed mb-3">
                    <span className="font-semibold text-teal-700">What is it?</span> The current price of a stock at this very moment. It keeps updating every second as trades happen.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Just one number (LTP - Last Traded Price) that changes instantly whenever someone buys or sells.
                  </p>
                </div>

                {/* Features with dark teal icons */}
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-teal-100 rounded-xl">
                    <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-md">
                      <Radio className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Live updates</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-teal-100 rounded-xl">
                    <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-md">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Single value</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-teal-100 rounded-xl">
                    <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-md">
                      <Infinity className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">No timeframe</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-teal-100 rounded-xl">
                    <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center shadow-md">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Continuous</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-teal-500 text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* Historical Data */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-blue-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative h-full bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Header */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <History className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold text-slate-900">Historical Data</h4>
                      <p className="text-sm text-blue-600 font-medium">Past market records</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-4 bg-blue-300 rounded-sm" />
                    <div className="w-2 h-6 bg-blue-400 rounded-sm" />
                    <div className="w-2 h-5 bg-blue-500 rounded-sm" />
                    <div className="w-2 h-7 bg-blue-600 rounded-sm" />
                  </div>
                </div>

                {/* Description */}
                <div className="relative mb-6">
                  <p className="text-slate-800 leading-relaxed mb-3">
                    <span className="font-semibold text-blue-700">What is it?</span> Past price data stored for a specific time period — 1 minute, 5 minutes, 1 day, etc.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Contains 4 values: Open, High, Low, Close (OHLC) + Volume. Used to analyze patterns and backtest strategies.
                  </p>
                </div>

                {/* Features with dark blue icons */}
                <div className="relative grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-blue-100 rounded-xl">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">OHLC values</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-blue-100 rounded-xl">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Timeframe-based</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-blue-100 rounded-xl">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <LineChart className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Volume data</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white border border-blue-100 rounded-xl">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">Backtesting</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 bg-blue-500 text-white rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                    Past
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Data Sources - Connected Cards */}
        <div className="mb-20">
          {/* Header with connecting line */}
          <div className="relative text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Where Does <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Data</span> Come From?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Different sources provide data with varying quality, speed, and cost</p>
          </div>

          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Broker API */}
            <div className="group relative">
              {/* Top highlight bar - shows on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-all duration-300 z-20 bg-transparent group-hover:bg-sky-600" />

              <div className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 rounded-3xl border-2 border-sky-200 p-6 lg:p-8 shadow-lg transition-all duration-300 overflow-hidden h-full group-hover:border-sky-500 group-hover:shadow-xl group-hover:shadow-sky-200/50">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-400 to-sky-500 transform translate-x-12 -translate-y-12 rotate-45 transition-all duration-300 opacity-80 group-hover:opacity-100" />

                {/* Cost badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Cost: Free/Low</span>
                </div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center shadow-lg mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-slate-900 mb-1">Broker API</h4>
                <p className="text-sm font-medium text-sky-600 mb-3">Zerodha, Upstox, Tradovate</p>

                {/* Detailed description */}
                <p className="text-sm text-slate-800 mb-4 leading-relaxed">
                  Get data directly from your trading broker. Most brokers provide free API access with your trading account.
                </p>

                {/* Best For */}
                <div className="bg-sky-100/50 rounded-xl p-3 mb-4">
                  <p className="text-xs font-semibold text-sky-700 uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-sm text-slate-900">Beginners & cost-conscious traders</p>
                </div>

                {/* Pros */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Advantages</p>
                  {['Single source for data & orders', 'Usually free with account', 'Easy integration', 'No extra vendor needed'].map((pro, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-900">{pro}</span>
                    </div>
                  ))}
                </div>

                {/* Cons */}
                <div className="space-y-2 pt-4 border-t border-sky-100">
                  <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Limitations</p>
                  {['Limited historical data', 'API rate limits apply', 'Data gaps possible'].map((con, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span className="text-sm text-slate-800">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 - Data Vendors - Dark Blue Theme */}
            <div className="group relative">
              {/* Top highlight bar - shows on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-all duration-300 z-20 bg-transparent group-hover:bg-blue-900" />

              <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl border-2 border-blue-200 p-6 lg:p-8 shadow-lg transition-all duration-300 overflow-hidden h-full group-hover:border-blue-600 group-hover:shadow-xl group-hover:shadow-blue-200/50">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 transform translate-x-12 -translate-y-12 rotate-45 transition-all duration-300 opacity-80 group-hover:opacity-100" />

                {/* Cost badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">Cost: Medium</span>
                </div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-slate-900 mb-1">Data Vendors</h4>
                <p className="text-sm font-medium text-blue-700 mb-3">TrueData, GDFL, Global Datafeeds</p>

                {/* Detailed description */}
                <p className="text-sm text-slate-800 mb-4 leading-relaxed">
                  Professional data providers specializing in market data. Clean, reliable feeds with extensive historical archives.
                </p>

                {/* Best For */}
                <div className="bg-blue-100/50 rounded-xl p-3 mb-4">
                  <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-sm text-slate-900">Serious traders & backtesting</p>
                </div>

                {/* Pros */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Advantages</p>
                  {['High quality clean data', 'Low latency feeds', 'Years of historical data', 'Technical support included'].map((pro, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-900">{pro}</span>
                    </div>
                  ))}
                </div>

                {/* Cons */}
                <div className="space-y-2 pt-4 border-t border-blue-100">
                  <p className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Limitations</p>
                  {['Monthly subscription cost', 'Separate setup required', 'Learning curve for APIs'].map((con, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span className="text-sm text-slate-800">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 - Direct Exchange - Violet Theme */}
            <div className="group relative">
              {/* Top highlight bar - shows on hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl transition-all duration-300 z-20 bg-transparent group-hover:bg-violet-900" />

              <div className="relative bg-gradient-to-br from-violet-50 via-white to-purple-50 rounded-3xl border-2 border-violet-200 p-6 lg:p-8 shadow-lg transition-all duration-300 overflow-hidden h-full group-hover:border-violet-600 group-hover:shadow-xl group-hover:shadow-violet-200/50">
                {/* Diagonal accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-600 to-violet-800 transform translate-x-12 -translate-y-12 rotate-45 transition-all duration-300 opacity-80 group-hover:opacity-100" />

                {/* Cost badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1.5 bg-violet-100 text-violet-800 rounded-full text-xs font-bold">Cost: High</span>
                </div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center shadow-lg mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h4 className="text-xl font-bold text-slate-900 mb-1">Direct Exchange</h4>
                <p className="text-sm font-medium text-violet-700 mb-3">NSE, BSE, MCX Direct Feed</p>

                {/* Detailed description */}
                <p className="text-sm text-slate-800 mb-4 leading-relaxed">
                  Connect directly to exchange servers for the fastest, most authoritative data. Used by institutions and HFT firms.
                </p>

                {/* Best For */}
                <div className="bg-violet-100/50 rounded-xl p-3 mb-4">
                  <p className="text-xs font-semibold text-violet-800 uppercase tracking-wide mb-1">Best For</p>
                  <p className="text-sm text-slate-900">HFT & institutional traders</p>
                </div>

                {/* Pros */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Advantages</p>
                  {['Official authoritative source', 'Zero/minimal latency', 'Complete tick data', 'No middleman delays'].map((pro, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-slate-900">{pro}</span>
                    </div>
                  ))}
                </div>

                {/* Cons */}
                <div className="space-y-2 pt-4 border-t border-violet-100">
                  <p className="text-xs font-semibold text-violet-600 uppercase tracking-wide">Limitations</p>
                  {['Very expensive (lakhs/year)', 'Complex infrastructure needed', 'Requires co-location'].map((con, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span className="text-sm text-slate-800">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-lg">
            <Database className="w-6 h-6" />
            <span className="font-semibold text-lg">Goal: Clean, consistent, and reliable data</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataImportSection;
