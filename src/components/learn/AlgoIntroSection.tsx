'use client';

import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import {
  Database,
  Brain,
  Zap,
  ArrowRight,
  ArrowDown,
  Monitor,
  Server,
  Bell,
  Bot,
  TrendingUp,
  Clock,
  Shield,
  BarChart3,
} from 'lucide-react';

const AlgoIntroSection: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-30 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/3" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* TOP SECTION: Text Left + Image Right */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* LEFT SIDE - Text Content */}
          <div className="w-full lg:w-[45%]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <Bot className="w-4 h-4 text-slate-800" />
              <span className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
                What is Algo Trading?
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Trading with <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">Rules</span>,<br />
              Not Emotions
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-900 mb-8 leading-relaxed">
              Algo trading (Algorithmic Trading) means using a computer program to execute trades based on
              predefined rules. Instead of manually watching charts and placing orders, your Python code
              does it for you - faster, more disciplined, and without emotional decisions.
            </p>

            {/* Benefits - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { text: 'No Emotional Trading', icon: Shield, desc: 'Remove fear & greed', gradient: 'from-teal-500 to-cyan-500', bg: 'from-teal-50 to-cyan-50', border: 'border-teal-200 hover:border-teal-300' },
                { text: '24/7 Rule Following', icon: Clock, desc: 'Consistent execution', gradient: 'from-blue-500 to-indigo-500', bg: 'from-blue-50 to-indigo-50', border: 'border-blue-200 hover:border-blue-300' },
                { text: 'Faster Execution', icon: TrendingUp, desc: 'Millisecond orders', gradient: 'from-emerald-500 to-green-500', bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200 hover:border-emerald-300' },
                { text: 'Backtested Strategies', icon: BarChart3, desc: 'Data-driven decisions', gradient: 'from-violet-500 to-purple-500', bg: 'from-violet-50 to-purple-50', border: 'border-violet-200 hover:border-violet-300' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-default overflow-hidden bg-gradient-to-br ${item.bg} ${item.border}`}
                >
                  <div className="relative flex items-start gap-3">
                    {/* Colorful gradient icon container */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">{item.text}</h4>
                      <p className="text-xs text-slate-800 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="w-full lg:w-[55%] flex items-center justify-center">
            <Image
              src={getAssetPath('/algotrading-intr0.jpg')}
              alt="Algo Trading Illustration"
              width={800}
              height={600}
              className="w-full h-auto max-w-none lg:scale-110"
              priority
            />
          </div>
        </div>

        {/* BOTTOM SECTION: Full-width Horizontal Flowchart */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 border-2 border-slate-200 rounded-3xl p-6 lg:p-10 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl" />

          {/* Flowchart Title */}
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Pillars of Algo Trading
            </h3>
            <p className="text-base lg:text-lg text-slate-800">The complete trading automation pipeline</p>
          </div>

          {/* Horizontal Flowchart */}
          <div className="relative">
            {/* Main horizontal connection line */}
            <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-emerald-400 rounded-full" />

            {/* Three Pillars Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 mb-10">

              {/* Pillar 1: Data Import */}
              <div className="flex flex-col items-center">
                <div className="relative group mb-4">
                  <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-teal-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                      <Database className="w-8 h-8 lg:w-10 lg:h-10 text-teal-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white">
                      1
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Data Import</h4>
                <p className="text-sm text-slate-800 text-center">Market data feed</p>

                {/* Connector line to sub-branches */}
                <div className="flex flex-col items-center my-3">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-teal-400 to-teal-300"></div>
                  <div className="w-24 h-0.5 bg-teal-300"></div>
                  <div className="flex justify-between w-24">
                    <div className="w-0.5 h-4 bg-teal-300"></div>
                    <div className="w-0.5 h-4 bg-teal-300"></div>
                  </div>
                </div>

                {/* Sub-branches */}
                <div className="flex gap-3">
                  <div className="px-4 py-3 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Database className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-teal-700 text-center">Data Source</p>
                  </div>
                  <div className="px-4 py-3 bg-gradient-to-br from-cyan-50 to-teal-50 border border-cyan-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Database className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-cyan-700 text-center">Data Type</p>
                  </div>
                </div>
              </div>

              {/* Arrow between pillars - Mobile */}
              <div className="flex md:hidden justify-center">
                <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
              </div>

              {/* Pillar 2: Strategy & Signal */}
              <div className="flex flex-col items-center">
                <div className="relative group mb-4">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <Brain className="w-8 h-8 lg:w-10 lg:h-10 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white">
                      2
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Strategy & Signal</h4>
                <p className="text-sm text-slate-800 text-center">Rules & triggers</p>

                {/* Connector line to sub-branches */}
                <div className="flex flex-col items-center my-3">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-blue-400 to-blue-300"></div>
                  <div className="w-24 h-0.5 bg-blue-300"></div>
                  <div className="flex justify-between w-24">
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                    <div className="w-0.5 h-4 bg-blue-300"></div>
                  </div>
                </div>

                {/* Sub-branches */}
                <div className="flex gap-3">
                  <div className="px-4 py-3 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Monitor className="w-5 h-5 text-violet-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-violet-700 text-center">UI Decision</p>
                  </div>
                  <div className="px-4 py-3 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <Server className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-amber-700 text-center">Deployment</p>
                  </div>
                </div>
              </div>

              {/* Arrow between pillars - Mobile */}
              <div className="flex md:hidden justify-center">
                <ArrowRight className="w-6 h-6 text-slate-300 rotate-90" />
              </div>

              {/* Pillar 3: Execution */}
              <div className="flex flex-col items-center">
                <div className="relative group mb-4">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-emerald-400 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-200/50 group-hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                      <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-emerald-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold shadow-lg border-2 border-white">
                      3
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Execution</h4>
                <p className="text-sm text-slate-800 text-center">Trade placement</p>

                {/* Connector line to sub-branch */}
                <div className="flex flex-col items-center my-3">
                  <div className="w-0.5 h-10 bg-gradient-to-b from-emerald-400 to-emerald-300"></div>
                </div>

                {/* Sub-branch */}
                <div className="px-4 py-3 bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Bell className="w-5 h-5 text-pink-600 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-pink-700 text-center">Notifications</p>
                </div>
              </div>
            </div>

            {/* Desktop Arrow indicators on the line */}
            <div className="hidden lg:block">
              <ArrowRight className="absolute top-[52px] left-[32%] w-6 h-6 text-teal-500" />
              <ArrowRight className="absolute top-[52px] right-[32%] w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-8 pt-6 border-t border-slate-200/70">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-slate-200 shadow-sm">
              <div className="w-4 h-4 rounded-full border-2 border-teal-400 bg-white" />
              <span className="text-xs lg:text-sm text-slate-900 font-medium">Core Pillars</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-slate-200 shadow-sm">
              <div className="w-4 h-4 rounded-lg bg-gradient-to-br from-violet-100 to-pink-100 border border-violet-200" />
              <span className="text-xs lg:text-sm text-slate-900 font-medium">Sub-components</span>
            </div>
          </div>

          {/* Transition text */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-50 via-blue-50 to-emerald-50 border border-slate-200 rounded-full shadow-sm">
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <span className="text-slate-800 font-medium">Let&apos;s understand each pillar one by one</span>
              <ArrowDown className="w-4 h-4 text-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgoIntroSection;
