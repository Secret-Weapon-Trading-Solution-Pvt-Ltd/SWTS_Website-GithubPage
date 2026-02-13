'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/lib/utils';
import {
  Monitor,
  Terminal,
  Globe,
  Laptop,
  CheckCircle2,
  XCircle,
  Code,
  Layout,
  Palette,
  Users,
  Settings,
  Server,
  Eye,
  MousePointer,
  Cpu,
  Gauge,
} from 'lucide-react';

const dashboardTypes = [
  {
    id: 'streamlit',
    title: 'Streamlit',
    subtitle: 'Basic Dashboard',
    icon: Layout,
    desc: 'Quick prototype for internal use. Perfect for personal trading systems where simplicity matters. Built entirely in Python with minimal frontend knowledge needed.',
    tech: ['Python', 'Streamlit'],
    complexity: 'Low',
    color: 'teal',
    features: ['Rapid development', 'Python-only stack', 'Built-in widgets', 'Auto refresh'],
  },
  {
    id: 'desktop',
    title: 'Python GUI',
    subtitle: 'Desktop App',
    icon: Laptop,
    desc: 'Standalone desktop application that works locally. Install once and run - no browser needed. Good for traders who prefer native apps.',
    tech: ['Python', 'PyQt/Tkinter'],
    complexity: 'Medium',
    color: 'blue',
    features: ['Native performance', 'System tray', 'Local data'],
  },
  {
    id: 'professional',
    title: 'Node.js + FastAPI',
    subtitle: 'Professional',
    icon: Globe,
    desc: 'Client-level multi-user dashboard with authentication, real-time updates, and professional UI. Ideal for commercial algo trading products.',
    tech: ['Node.js', 'React', 'FastAPI'],
    complexity: 'High',
    color: 'violet',
    features: ['Multi-user support', 'Real-time WebSocket', 'Auth & permissions', 'Scalable'],
  },
];

const UIDecisionSection: React.FC = () => {
  const [activeDashboard, setActiveDashboard] = useState(dashboardTypes[1]);

  return (
    <section id="ui-decision" className="relative pt-4 pb-16 lg:pt-6 lg:pb-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-60 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Decision Point</p>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-tight">The Interface Decision</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-200 to-transparent ml-6" />
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
            <Image
              src={getAssetPath('/ui-without-ui.jpg')}
              alt="UI vs No UI Decision"
              width={700}
              height={580}
              className="w-full max-w-xl lg:max-w-2xl h-auto"
              priority
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 border border-violet-200 mb-6">
              <Eye className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">After Strategy Signal</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Visual Dashboard or Command Line?
            </h3>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              When your strategy signal is ready, you face a design decision: Do you need just Python code
              running in background, or a visual dashboard to control, monitor, and interact with your trading system?
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              This choice affects development complexity, cost, and who can use your system. A code-only
              approach is faster to build but requires technical knowledge. A dashboard makes it user-friendly
              but needs more development effort.
            </p>

            {/* Quick Comparison Pills */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-md">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-slate-800 text-lg">Without UI</p>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />Personal use</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />Fast setup</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />Lightweight & simple</li>
                </ul>
              </motion.div>
              <motion.div
                className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md">
                    <Monitor className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-slate-800 text-lg">With UI</p>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Teams & clients</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Visual monitoring</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />User-friendly control</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Part 1B: With UI vs Without UI Comparison */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-violet-100 via-indigo-50 to-teal-100 rounded-3xl border-2 border-violet-200/50 shadow-2xl p-6 lg:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          {/* Header */}
          <div className="relative text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full mb-4 shadow-sm">
              <Gauge className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">Side-by-Side Comparison</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              Compare Your Options
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Understanding the trade-offs helps you make the right choice</p>
          </div>

          {/* Comparison Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-center gap-6">

            {/* Left Section - With UI */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <Monitor className="w-5 h-5 inline-block mr-2 -mt-1" />
                With UI
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
                  {[
                    'Easy start/stop & settings',
                    'All info on one screen',
                    'User-friendly interface',
                    'Multi-user support',
                    'Real-time monitoring',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cons Column */}
                <div className="flex-1 space-y-2">
                  {[
                    'More time to build',
                    'Higher development cost',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm">
                      <div className="w-6 h-6 rounded-md bg-rose-500 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Right Section - Without UI */}
            <div className="flex-1">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white text-center py-3 rounded-2xl font-bold text-lg shadow-lg mb-5">
                <Terminal className="w-5 h-5 inline-block mr-2 -mt-1" />
                Without UI
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
                  {[
                    'Fast setup & deployment',
                    'Low cost to build',
                    'Lightweight system',
                    'Simple config files',
                    'Personal use friendly',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-teal-200 shadow-sm">
                      <span className="text-slate-700 font-medium text-sm flex-1">{item}</span>
                      <div className="w-6 h-6 rounded-md bg-teal-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cons Column */}
                <div className="flex-1 space-y-2">
                  {[
                    'Tech knowledge required',
                    'No visual feedback',
                    'Settings change harder',
                    'Scattered monitoring',
                    'Single user mostly',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-rose-200 shadow-sm">
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

        {/* Part 3B: Dashboard Options - Elegant Design */}
        <div className="mb-20">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-violet-50 border border-teal-200 rounded-full mb-4">
              <Layout className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-slate-700">Choose Your Dashboard</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
              Dashboard Types
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Select the right UI approach based on your project requirements</p>
          </motion.div>

          {/* Dashboard Cards - Elegant Horizontal Layout */}
          <div className="relative grid md:grid-cols-3 gap-6 mb-8">
            {dashboardTypes.map((dash, index) => (
              <motion.div
                key={dash.id}
                onClick={() => setActiveDashboard(dash)}
                className={`group relative overflow-hidden rounded-3xl text-center transition-all duration-500 cursor-pointer ${
                  activeDashboard.id === dash.id
                    ? 'shadow-2xl scale-[1.02]'
                    : 'shadow-lg hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  activeDashboard.id === dash.id
                    ? dash.color === 'teal' ? 'bg-gradient-to-br from-teal-500 via-teal-400 to-cyan-500' :
                      dash.color === 'blue' ? 'bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500' :
                      'bg-gradient-to-br from-violet-500 via-violet-400 to-purple-500'
                    : dash.color === 'teal' ? 'bg-white group-hover:bg-teal-50' :
                      dash.color === 'blue' ? 'bg-white group-hover:bg-blue-50' :
                      'bg-white group-hover:bg-violet-50'
                }`} />

                {/* Decorative circles for selected */}
                {activeDashboard.id === dash.id && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-x-8 translate-y-8" />
                  </>
                )}

                {/* Card Content */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                    activeDashboard.id === dash.id
                      ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                      : dash.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg shadow-teal-200' :
                        dash.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-200' :
                        'bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-200'
                  }`}>
                    <dash.icon className={`w-8 h-8 ${activeDashboard.id === dash.id ? 'text-white' : 'text-white'}`} />
                  </div>

                  {/* Title */}
                  <h4 className={`text-xl font-bold mb-1 transition-colors duration-500 ${
                    activeDashboard.id === dash.id ? 'text-white' : 'text-black'
                  }`}>{dash.title}</h4>

                  {/* Subtitle */}
                  <p className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
                    activeDashboard.id === dash.id ? 'text-white/90' :
                    dash.color === 'teal' ? 'text-teal-600' :
                    dash.color === 'blue' ? 'text-blue-600' : 'text-violet-600'
                  }`}>{dash.subtitle}</p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
                    activeDashboard.id === dash.id ? 'text-white' : 'text-slate-600'
                  }`}>
                    {dash.id === 'streamlit' && 'Quick prototype for personal use. Python-only, minimal setup.'}
                    {dash.id === 'professional' && 'Client-level with multi-user login, real-time updates.'}
                    {dash.id === 'desktop' && 'Standalone offline app. Install once, run anywhere.'}
                  </p>

                  {/* Complexity Badge */}
                  <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-500 ${
                    activeDashboard.id === dash.id
                      ? 'bg-white/20 text-white backdrop-blur-sm'
                      : dash.complexity === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                        dash.complexity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                        'bg-rose-100 text-rose-700'
                  }`}>
                    {dash.complexity} Complexity
                  </div>
                </div>

                {/* Bottom accent line for unselected */}
                {activeDashboard.id !== dash.id && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                    dash.color === 'teal' ? 'bg-gradient-to-r from-teal-400 to-cyan-400' :
                    dash.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-indigo-400' :
                    'bg-gradient-to-r from-violet-400 to-purple-400'
                  }`} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Detail Panel - Elegant */}
          <motion.div
            className={`relative rounded-3xl overflow-hidden transition-all duration-500 shadow-xl ${
            activeDashboard.color === 'teal'
              ? 'bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200'
              : activeDashboard.color === 'blue'
                ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
                : 'bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200'
          }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Top accent bar */}
            <div className={`h-1.5 ${
              activeDashboard.color === 'teal' ? 'bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400' :
              activeDashboard.color === 'blue' ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400' :
              'bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400'
            }`} />

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left - Description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeDashboard.color === 'teal' ? 'bg-teal-500' :
                      activeDashboard.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                    }`}>
                      <activeDashboard.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-black">{activeDashboard.title}</h4>
                  </div>

                  <p className="text-black leading-relaxed text-base mb-6">
                    {activeDashboard.desc}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-black text-sm font-bold mb-3">Tech Stack Required</p>
                    <div className="flex flex-wrap gap-2">
                      {activeDashboard.tech.map((t, i) => (
                        <span key={i} className={`px-4 py-2 rounded-xl font-semibold text-sm shadow-sm ${
                          activeDashboard.color === 'teal' ? 'bg-white text-teal-700 border border-teal-200' :
                          activeDashboard.color === 'blue' ? 'bg-white text-blue-700 border border-blue-200' :
                          'bg-white text-violet-700 border border-violet-200'
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Features */}
                <div>
                  <p className="text-black text-sm font-bold mb-4">Key Features</p>
                  <div className="space-y-3">
                    {activeDashboard.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border ${
                        activeDashboard.color === 'teal' ? 'border-teal-100' :
                        activeDashboard.color === 'blue' ? 'border-blue-100' :
                        'border-violet-100'
                      }`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activeDashboard.color === 'teal' ? 'bg-teal-500' :
                          activeDashboard.color === 'blue' ? 'bg-blue-500' : 'bg-violet-500'
                        }`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-black font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Part 4: Tech Stack Architecture */}
        <motion.div
          className="relative bg-white py-8 lg:py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 grid lg:grid-cols-[1fr,auto,1fr] gap-0 items-center">
            {/* Left - Image with Title + Horizontal Line */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col items-center bg-white flex-1">
                <Image
                  src={getAssetPath('/tech-stack.jpg')}
                  alt="Tech Stack Architecture"
                  width={400}
                  height={300}
                  className="w-full max-w-sm h-auto"
                />
                <h3 className="text-2xl lg:text-3xl font-bold text-black mt-6 text-center">
                  Tech Stack Architecture
                </h3>
                <p className="text-slate-600 text-center mt-2 max-w-xs">
                  Understanding the backend-frontend split helps you build better systems
                </p>
              </div>
              {/* Horizontal line going RIGHT from image */}
              <div className="hidden lg:flex items-center">
                <div className="w-6 h-6 rounded-full bg-slate-800 shadow-lg z-10" />
                <div className="w-20 h-1 bg-slate-800 -ml-1" />
              </div>
            </motion.div>

            {/* Center - Branching Lines to Backend/Frontend */}
            <div className="hidden lg:flex items-center justify-center">
              <svg width="100" height="200" viewBox="0 0 100 200" fill="none">
                {/* Horizontal line coming from left */}
                <path d="M0 100 L30 100" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Center dot */}
                <circle cx="30" cy="100" r="8" fill="#1E293B" />
                {/* Line to Backend */}
                <path d="M30 100 Q60 60 100 40" stroke="url(#blueGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="100" cy="40" r="6" fill="#3B82F6" />
                {/* Line to Frontend */}
                <path d="M30 100 Q60 140 100 160" stroke="url(#tealGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="100" cy="160" r="6" fill="#14B8A6" />
                <defs>
                  <linearGradient id="blueGradient" x1="30" y1="100" x2="100" y2="40">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="tealGradient" x1="30" y1="100" x2="100" y2="160">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right - Backend & Frontend Cards */}
            <motion.div
              className="flex flex-col gap-6 bg-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Backend */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-200">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">Backend</h4>
                    <p className="text-blue-600 text-sm font-medium">Python / FastAPI</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Cpu, text: 'Strategy execution' },
                    { icon: Gauge, text: 'Signal generation' },
                    { icon: Settings, text: 'Broker API calls' },
                    { icon: Code, text: 'Data management' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
                      <item.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-black font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Frontend */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-teal-500 to-cyan-500" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-200">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">Frontend</h4>
                    <p className="text-teal-600 text-sm font-medium">React / Streamlit / PyQt</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Layout, text: 'Dashboard display' },
                    { icon: MousePointer, text: 'Start/stop controls' },
                    { icon: Users, text: 'PnL & positions' },
                    { icon: Settings, text: 'Settings UI' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-teal-50 px-3 py-2 rounded-lg">
                      <item.icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span className="text-sm text-black font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Takeaway */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-200 rounded-2xl shadow-lg">
            <Monitor className="w-6 h-6 text-violet-600" />
            <span className="font-semibold text-slate-700">UI is not mandatory, but makes control easier for non-technical users</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UIDecisionSection;
