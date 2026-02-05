'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  ArrowDown,
  CandlestickChart,
  Activity,
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

const dataSources = [
  {
    id: 'broker',
    icon: Server,
    title: 'Broker API',
    description: 'Zerodha, Upstox, Tradovate',
    pros: ['Single source', 'Often free', 'Easy setup'],
    cons: ['Limited history', 'Rate limits'],
    cost: 'Free/Low',
    color: 'sky',
  },
  {
    id: 'vendor',
    icon: Database,
    title: 'Data Vendors',
    description: 'TrueData, GDFL',
    pros: ['High quality', 'Low latency', 'Complete data'],
    cons: ['Paid service', 'Extra setup'],
    cost: 'Medium',
    color: 'amber',
  },
  {
    id: 'exchange',
    icon: Building2,
    title: 'Direct Exchange',
    description: 'NSE/BSE Direct',
    pros: ['Official source', 'Zero latency'],
    cons: ['Very expensive', 'Complex'],
    cost: 'High',
    color: 'rose',
  },
];

const DataImportSection: React.FC = () => {
  const [activeSource, setActiveSource] = useState(dataSources[0]);

  return (
    <section id="data-import" className="relative py-16 lg:py-24 bg-white overflow-hidden">

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
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
        </div>

        {/* PART 1: Introduction - Left Right Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="w-full lg:w-[45%] flex justify-center">
            <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-2 border-teal-100 rounded-3xl p-6 lg:p-8 shadow-sm">
              <Image
                src={getAssetPath('/data-import.jpg')}
                alt="Data Import Illustration"
                width={550}
                height={550}
                className="w-full max-w-md lg:max-w-lg h-auto"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-[55%]">
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
          </div>
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
            <div className="group relative">
              <div className="absolute inset-0 bg-teal-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-teal-200 rounded-3xl p-8 hover:border-teal-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
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
            <div className="group relative">
              <div className="absolute inset-0 bg-blue-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
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

        {/* PART 3: Data Sources - Interactive */}
        <div className="mb-20">
          {/* Transition text */}
          <div className="text-center mb-8">
            <p className="text-slate-600 italic">Now you know the data types — let's see where this data comes from</p>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Where Does <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Data</span> Come From?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Different sources provide data with varying quality, speed, and cost</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Source Selection - Left */}
            <div className="lg:col-span-2 space-y-4">
              {dataSources.map((source) => (
                <button
                  key={source.id}
                  onClick={() => setActiveSource(source)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all ${
                    activeSource.id === source.id
                      ? source.color === 'sky'
                        ? 'border-sky-400 bg-sky-100 shadow-lg'
                        : source.color === 'amber'
                          ? 'border-amber-400 bg-amber-100 shadow-lg'
                          : 'border-rose-400 bg-rose-100 shadow-lg'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    activeSource.id === source.id
                      ? source.color === 'sky' ? 'bg-sky-500' : source.color === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
                      : 'bg-slate-100'
                  }`}>
                    <source.icon className={`w-7 h-7 ${activeSource.id === source.id ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-800">{source.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        source.cost === 'Free/Low' ? 'bg-emerald-100 text-emerald-700' :
                        source.cost === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-rose-100 text-rose-700'
                      }`}>
                        {source.cost}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{source.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Source Details - Right */}
            <div className="lg:col-span-3">
              <div className={`rounded-3xl p-8 h-full border-2 ${
                activeSource.color === 'sky' ? 'bg-sky-100 border-sky-300' :
                activeSource.color === 'amber' ? 'bg-amber-100 border-amber-300' :
                'bg-rose-100 border-rose-300'
              } shadow-sm`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    activeSource.color === 'sky' ? 'bg-sky-200' :
                    activeSource.color === 'amber' ? 'bg-amber-200' : 'bg-rose-200'
                  }`}>
                    <activeSource.icon className={`w-8 h-8 ${
                      activeSource.color === 'sky' ? 'text-sky-600' :
                      activeSource.color === 'amber' ? 'text-amber-600' : 'text-rose-600'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800">{activeSource.title}</h4>
                    <p className="text-slate-500">{activeSource.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-5 border border-slate-200">
                    <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Advantages
                    </h5>
                    <div className="space-y-2">
                      {activeSource.pros.map((pro, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200">
                    <h5 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-rose-500" /> Limitations
                    </h5>
                    <div className="space-y-2">
                      {activeSource.cons.map((con, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600">
                          <div className="w-2 h-2 rounded-full bg-rose-500" />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 4: Data Flow - Full Width Flowchart */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Data <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Import</span> Flow
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">How data travels from source to your strategy</p>
          </div>

          <div className="bg-slate-100 rounded-3xl border border-slate-200 shadow-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {[
                { icon: Server, title: 'Data Source', sub: 'Broker / Vendor', color: 'from-teal-500 to-teal-600' },
                { icon: CandlestickChart, title: 'Candle Data', sub: '1min, 5min, 15min', color: 'from-sky-500 to-sky-600' },
                { icon: Activity, title: 'OHLCV Format', sub: 'Open, High, Low, Close, Vol', color: 'from-violet-500 to-violet-600' },
                { icon: Database, title: 'Strategy Ready', sub: 'Clean & formatted', color: 'from-emerald-500 to-emerald-600' },
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center group">
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h4 className="mt-4 font-bold text-slate-900">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.sub}</p>
                  </div>
                  {idx < arr.length - 1 && (
                    <>
                      <ArrowRight className="w-8 h-8 text-slate-400 hidden lg:block" />
                      <ArrowDown className="w-8 h-8 text-slate-400 lg:hidden" />
                    </>
                  )}
                </React.Fragment>
              ))}
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
