'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Laptop2,
  Server,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  IndianRupee,
  Cloud,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Settings,
} from 'lucide-react';

const serverProviders = [
  {
    id: 'aws',
    name: 'AWS EC2',
    desc: 'Amazon Web Services - most popular cloud, reliable, scalable. Good for production systems with auto-scaling needs.',
    color: 'teal',
    features: ['Auto-scaling', 'Global regions', 'Pay as you go', 'High availability'],
  },
  {
    id: 'gcloud',
    name: 'Google Cloud',
    desc: 'Google Cloud Platform - powerful computing with strong data analytics and AI/ML capabilities. Great for data-heavy trading systems.',
    color: 'blue',
    features: ['Big data tools', 'AI/ML integration', 'Global network', 'Competitive pricing'],
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    desc: 'Enterprise-grade cloud with seamless Windows integration. Ideal for teams already using Microsoft ecosystem and enterprise trading setups.',
    color: 'violet',
    features: ['Enterprise security', 'Hybrid cloud', 'Windows support', 'Compliance tools'],
  },
];

const DeploymentSection: React.FC = () => {
  const [useServer, setUseServer] = useState(true);
  const [activeProvider, setActiveProvider] = useState(serverProviders[0]);

  return (
    <section id="deployment" className="relative pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white overflow-hidden">

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
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest">Infrastructure</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Where Will It Run?</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-200 to-transparent ml-6" />
        </motion.div>

        {/* Part 1: Introduction - Left Content, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6">
              <Globe className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Critical Infrastructure</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Building is Not Enough - <span className="text-amber-600">Running 24/7</span> is the Real Challenge
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              You&apos;ve built the strategy, tested it, and it works. But where will it run? Signal comes at 10:15 AM,
              but your PC went to sleep mode - trade missed! This section solves that problem.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              The choice between local PC and cloud server depends on your reliability needs, technical comfort,
              and budget. Both have their place in algo trading infrastructure.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <Laptop2 className="w-6 h-6 text-amber-600 mb-2" />
                <p className="font-semibold text-slate-800">Local PC</p>
                <p className="text-sm text-slate-500">Free, but risky</p>
              </div>
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl">
                <Cloud className="w-6 h-6 text-teal-600 mb-2" />
                <p className="font-semibold text-slate-800">Cloud Server</p>
                <p className="text-sm text-slate-500">Paid, but reliable</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={getAssetPath('/server-database.jpg')}
              alt="Server and Database Infrastructure"
              width={700}
              height={580}
              className="w-full max-w-xl lg:max-w-2xl h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Part 2: Side-by-Side Comparison (like UI section) */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-sky-100 via-slate-50 to-emerald-100 rounded-3xl border-2 border-sky-200/50 shadow-2xl p-6 lg:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-sky-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          {/* Header */}
          <div className="relative text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full mb-4 shadow-sm">
              <Server className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">Side-by-Side Comparison</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">
              Compare Your Options
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Understanding the trade-offs helps you make the right choice</p>
          </div>

          {/* Comparison Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-6">

            {/* Left Section - Local PC */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <Laptop2 className="w-5 h-5 inline-block mr-2 -mt-1" />
                Local PC
              </div>

              {/* Column Headers */}
              <div className="flex gap-3 mb-3">
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Pros</span>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Cons</span>
                </div>
              </div>

              <div className="flex gap-3">
                {/* Pros Column */}
                <div className="flex-1 space-y-2">
                  {['No hosting cost', 'Full control', 'Easy debugging', 'Good for testing'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cons Column */}
                <div className="flex-1 space-y-2">
                  {['Sleep mode risk', 'Restart issues', 'Internet/power cuts', 'Not 24/7'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Right Section - Server / VPS */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <Cloud className="w-5 h-5 inline-block mr-2 -mt-1" />
                Server / VPS
              </div>

              {/* Column Headers */}
              <div className="flex gap-3 mb-3">
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wide">Pros</span>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Cons</span>
                </div>
              </div>

              <div className="flex gap-3">
                {/* Pros Column */}
                <div className="flex-1 space-y-2">
                  {['Runs 24/7 reliably', 'No PC dependency', 'Remote access', 'Professional'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cons Column */}
                <div className="flex-1 space-y-2">
                  {['Monthly cost', 'Setup required', 'Tech knowledge'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 3C: Server Providers */}
        {useServer && (
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Popular Server Providers</h3>
              <p className="text-slate-500">Choose based on your budget and technical needs</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Left - Selection Panel */}
              <div className="lg:col-span-2 space-y-4">
                {serverProviders.map((provider) => (
                  <button
                    key={provider.id}
                    onClick={() => setActiveProvider(provider)}
                    className={`group relative w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all overflow-hidden ${
                      activeProvider.id === provider.id
                        ? provider.color === 'teal'
                          ? 'border-teal-400 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg'
                          : provider.color === 'blue'
                            ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg'
                            : 'border-violet-400 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {/* Diagonal accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rotate-45 transition-all duration-300 ${
                      activeProvider.id === provider.id
                        ? provider.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-500'
                          : provider.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500'
                          : 'bg-gradient-to-br from-violet-400 to-violet-500'
                        : 'bg-slate-100 group-hover:bg-slate-200'
                    }`} />

                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      activeProvider.id === provider.id
                        ? provider.color === 'teal' ? 'bg-teal-500'
                          : provider.color === 'blue' ? 'bg-blue-500'
                          : 'bg-violet-500'
                        : 'bg-transparent group-hover:bg-slate-300'
                    }`} />

                    <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${
                      activeProvider.id === provider.id
                        ? provider.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' : provider.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-violet-500 to-violet-600'
                        : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <Cloud className={`w-7 h-7 ${activeProvider.id === provider.id ? 'text-white' : 'text-slate-500'}`} />
                    </div>
                    <div className="relative flex-1">
                      <h4 className="font-bold text-black text-lg">{provider.name}</h4>
                      <p className="text-sm text-slate-500 line-clamp-1">{provider.desc.split('.')[0]}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right - Detail Panel */}
              <div className="lg:col-span-3">
                <div className={`relative h-full rounded-3xl p-8 lg:p-10 border-2 shadow-lg overflow-hidden transition-all duration-300 ${
                  activeProvider.color === 'teal'
                    ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200'
                    : activeProvider.color === 'blue'
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
                      : 'bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200'
                }`}>
                  {/* Diagonal accent - top right */}
                  <div className={`absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 rotate-45 ${
                    activeProvider.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-500' :
                    activeProvider.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                    'bg-gradient-to-br from-violet-400 to-violet-500'
                  }`} />

                  {/* Diagonal accent - bottom left */}
                  <div className={`absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 rotate-45 opacity-50 ${
                    activeProvider.color === 'teal' ? 'bg-gradient-to-br from-cyan-300 to-teal-400' :
                    activeProvider.color === 'blue' ? 'bg-gradient-to-br from-indigo-300 to-blue-400' :
                    'bg-gradient-to-br from-purple-300 to-violet-400'
                  }`} />

                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    activeProvider.color === 'teal' ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500' :
                    activeProvider.color === 'blue' ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500' :
                    'bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500'
                  }`} />

                  {/* Header */}
                  <div className="relative flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                      activeProvider.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
                      activeProvider.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-violet-500 to-violet-600'
                    }`}>
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{activeProvider.name}</h3>
                      <p className="text-slate-500">Cloud Provider</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative text-lg text-black mb-8 leading-relaxed">
                    {activeProvider.desc}
                  </p>

                  {/* Features Grid */}
                  <div className="relative grid grid-cols-2 gap-3">
                    {activeProvider.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-2 px-4 py-3 bg-white rounded-xl border shadow-sm ${
                        activeProvider.color === 'teal' ? 'border-teal-200' :
                        activeProvider.color === 'blue' ? 'border-blue-200' : 'border-violet-200'
                      }`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                          activeProvider.color === 'teal' ? 'text-teal-500' :
                          activeProvider.color === 'blue' ? 'text-blue-500' : 'text-violet-500'
                        }`} />
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Part 4: Cost Optimization Tip */}
        <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-3xl border-2 border-emerald-200/50 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Visual */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              {/* Main Icon with glow */}
              <div className="relative">
                <div className="absolute -inset-5 bg-emerald-300/30 rounded-full blur-2xl" />
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-200">
                  <IndianRupee className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Server Timeline Visual */}
              <div className="w-full bg-white rounded-2xl border border-emerald-200 p-5 shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Server Schedule</p>
                {/* Timeline bar */}
                <div className="relative h-8 bg-emerald-50 rounded-full overflow-hidden mb-3">
                  <div className="absolute left-[37.5%] right-[35.4%] h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full shadow-md" />
                  <div className="absolute left-[37.5%] top-1/2 -translate-y-1/2 text-[10px] font-bold text-white ml-1">9 AM</div>
                  <div className="absolute right-[35.4%] top-1/2 -translate-y-1/2 text-[10px] font-bold text-white mr-1">3:30 PM</div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
                  <span>12 AM</span>
                  <span>6 AM</span>
                  <span>12 PM</span>
                  <span>6 PM</span>
                  <span>12 AM</span>
                </div>
              </div>

              {/* Cost savings cards */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="bg-white rounded-xl border border-emerald-200 p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-3xl font-bold text-emerald-600">6.5h</p>
                  <p className="text-xs text-slate-500 mt-1">Active / day</p>
                </div>
                <div className="bg-white rounded-xl border border-emerald-200 p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-3xl font-bold text-emerald-600">~70%</p>
                  <p className="text-xs text-slate-500 mt-1">Cost saved</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-700 mb-4">
                Cost Optimization Tip
              </h3>
              <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                Server doesn&apos;t need to run 24/7. In Indian market context, schedule it for market hours only:
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                  <span className="text-slate-600 font-semibold">Monday - Friday</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <span className="text-slate-600 font-semibold">9:00 AM - 3:30 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border-l-4 border-emerald-500 shadow-sm">
                <Zap className="w-6 h-6 text-emerald-600" />
                <span className="text-emerald-700 font-semibold text-lg">Reduces cost by 60-70% & avoids wastage!</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeploymentSection;
