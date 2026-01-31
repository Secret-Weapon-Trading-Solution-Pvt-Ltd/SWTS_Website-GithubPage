'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Abstract data flow visual - wave lines with data points (positioned behind title)
const DataFlowVisual = () => (
  <div className="absolute top-0 left-0 right-0 h-[280px] overflow-hidden pointer-events-none opacity-40">
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[200px]" viewBox="0 0 900 200" fill="none">
      {/* Primary flowing wave - teal */}
      <path
        d="M0 100 Q112 60 225 100 Q337 140 450 100 Q562 60 675 100 Q787 140 900 100"
        className="stroke-teal-300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Secondary flowing wave - slate */}
      <path
        d="M0 120 Q150 80 300 120 Q450 160 600 120 Q750 80 900 120"
        className="stroke-slate-300"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
      {/* Data points along the wave */}
      <circle cx="225" cy="100" r="4" className="fill-teal-400" opacity="0.6" />
      <circle cx="450" cy="100" r="5" className="fill-teal-500" opacity="0.7" />
      <circle cx="675" cy="100" r="4" className="fill-teal-400" opacity="0.6" />
    </svg>
  </div>
);

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-10 bg-slate-50 overflow-hidden">
      {/* Premium layered background - light theme */}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      {/* Soft radial glow - teal accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(20,184,166,0.08),transparent)]" />

      {/* Wave lines visual */}
      <DataFlowVisual />

      {/* Soft corner accents - depth layers */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-teal-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-slate-200/60 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-[200px] h-[200px] bg-gradient-to-bl from-teal-50/80 to-transparent rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
              Trading Automation Services
            </span>
          </motion.div>

          {/* Headline with gradient accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-6"
          >
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="text-slate-900">Turn Proven Strategies</span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Into Live Execution</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-lg lg:text-xl text-black leading-relaxed max-w-2xl mx-auto">
              You bring the trading logic.
              <span className="text-black"> We engineer the automation, execution, and reliability required for real capital.</span>
            </p>
          </motion.div>

          {/* CTAs with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <a
              href="/strategy-assessment"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Discuss Your Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 text-black font-semibold hover:text-slate-900 transition-colors duration-200 group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base lg:text-lg text-black font-medium"
          >
            Client strategies remain fully owned and confidential.
          </motion.p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
