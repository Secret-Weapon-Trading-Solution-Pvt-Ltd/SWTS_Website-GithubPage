'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import {
  MessageSquare,
  Database,
  FlaskConical,
  FileBarChart,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface BacktestingProcessProps {
  service: Service;
}

// Step icons
const stepIcons = [
  MessageSquare,
  Database,
  FlaskConical,
  FileBarChart
];

// Step-specific gradient colors
const stepColors = [
  { from: 'from-indigo-500', to: 'to-blue-500', shadow: 'shadow-indigo-500/30', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  { from: 'from-purple-500', to: 'to-violet-500', shadow: 'shadow-purple-500/30', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  { from: 'from-fuchsia-500', to: 'to-pink-500', shadow: 'shadow-fuchsia-500/30', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
];

// Process steps with short descriptions
const processSteps = [
  {
    step: 1,
    title: "Document Your Rules",
    description: "We extract your exact trading rules—entry, exit, position sizing.",
    duration: "1-2 sessions",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Data Preparation",
    description: "We source clean historical data for your instruments.",
    duration: "1-3 days",
    icon: Database,
  },
  {
    step: 3,
    title: "Backtest Execution",
    description: "Automated system simulates your strategy on historic data.",
    duration: "1-4 weeks",
    icon: FlaskConical,
  },
  {
    step: 4,
    title: "Reports / Utility",
    description: "Full metrics, equity curves, and actionable insights.",
    duration: "1-3 days",
    icon: FileBarChart,
  }
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Document/Discovery
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step1grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step1grad)" opacity="0.1"/>
      <rect x="35" y="25" width="50" height="70" rx="5" fill="white" stroke="url(#step1grad)" strokeWidth="2"/>
      <rect x="42" y="35" width="35" height="3" rx="1.5" fill="url(#step1grad)" opacity="0.6"/>
      <rect x="42" y="43" width="28" height="3" rx="1.5" fill="url(#step1grad)" opacity="0.4"/>
      <rect x="42" y="51" width="32" height="3" rx="1.5" fill="url(#step1grad)" opacity="0.6"/>
      <rect x="42" y="59" width="25" height="3" rx="1.5" fill="url(#step1grad)" opacity="0.4"/>
      <circle cx="55" cy="78" r="10" fill="url(#step1grad)"/>
      <path d="M51 78 L54 81 L60 75" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Step 2 - Data preparation
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step2grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step2grad)" opacity="0.1"/>
      <ellipse cx="60" cy="35" rx="30" ry="10" fill="white" stroke="url(#step2grad)" strokeWidth="2"/>
      <path d="M30 35 L30 75 Q30 85 60 85 Q90 85 90 75 L90 35" fill="white" stroke="url(#step2grad)" strokeWidth="2"/>
      <ellipse cx="60" cy="75" rx="30" ry="10" fill="none" stroke="url(#step2grad)" strokeWidth="2"/>
      <rect x="40" y="45" width="40" height="5" rx="2" fill="url(#step2grad)" opacity="0.3"/>
      <rect x="40" y="55" width="35" height="5" rx="2" fill="url(#step2grad)" opacity="0.4"/>
      <rect x="40" y="65" width="38" height="5" rx="2" fill="url(#step2grad)" opacity="0.5"/>
    </svg>
  ),
  // Step 3 - Backtest execution
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D946EF"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step3grad)" opacity="0.1"/>
      <path d="M50 25 L50 50 L30 85 Q27 92 35 95 L85 95 Q93 92 90 85 L70 50 L70 25" fill="white" stroke="url(#step3grad)" strokeWidth="2"/>
      <rect x="48" y="20" width="24" height="8" rx="2" fill="url(#step3grad)"/>
      <circle cx="45" cy="75" r="4" fill="url(#step3grad)" opacity="0.5"/>
      <circle cx="60" cy="80" r="5" fill="url(#step3grad)" opacity="0.4"/>
      <circle cx="72" cy="72" r="3" fill="url(#step3grad)" opacity="0.6"/>
      <path d="M40 88 L50 80 L60 83 L70 77 L80 81" stroke="url(#step3grad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  // Step 4 - Report
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step4grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step4grad)" opacity="0.1"/>
      <rect x="30" y="20" width="60" height="80" rx="6" fill="white" stroke="url(#step4grad)" strokeWidth="2"/>
      <rect x="40" y="55" width="10" height="30" rx="2" fill="url(#step4grad)"/>
      <rect x="55" y="45" width="10" height="40" rx="2" fill="url(#step4grad)"/>
      <rect x="70" y="50" width="10" height="35" rx="2" fill="url(#step4grad)"/>
      <rect x="40" y="28" width="40" height="4" rx="2" fill="url(#step4grad)" opacity="0.5"/>
      <rect x="40" y="36" width="30" height="3" rx="1.5" fill="url(#step4grad)" opacity="0.3"/>
    </svg>
  ),
];

export default function BacktestingProcess({ service }: BacktestingProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-14 bg-gradient-to-b from-white via-indigo-50/30 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-purple-100 to-violet-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section header */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            Our Proven Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">From Rules to</span>
            {' '}
            <span className="text-teal-700">Results</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A straightforward process that transforms your trading rules into actionable performance data
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line background - colorful gradient for all steps */}
          <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-indigo-300 via-purple-300 via-fuchsia-300 to-emerald-300 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-indigo-500 via-purple-500 via-fuchsia-500 to-emerald-500 rounded-full"
          />

          {/* Animated pulse */}
          <motion.div
            className="absolute top-[120px] left-[8%] w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            animate={{ x: [0, 1200, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Steps */}
          <div className="grid grid-cols-4 gap-3">
            {processSteps.map((step, index) => {
              const colors = stepColors[index % stepColors.length];
              const Illustration = StepIllustrations[index % StepIllustrations.length];
              const isLast = index === processSteps.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Illustration */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 mb-4"
                  >
                    <Illustration />
                    {/* Step number badge */}
                    <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center shadow-md`}>
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </motion.div>

                  {/* Node on timeline */}
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${colors.from} ${colors.to} shadow-sm mb-4`} />

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-black leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className={`inline-flex items-center gap-1.5 text-sm ${colors.text} font-medium`}>
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </span>
                    )}
                  </div>

                  {/* Arrow connector */}
                  {!isLast && (
                    <div className="absolute top-[112px] right-0 translate-x-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-white drop-shadow-md" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet - Vertical Cards */}
        <div className="lg:hidden space-y-3">
          {processSteps.map((step, index) => {
            const colors = stepColors[index % stepColors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative bg-white rounded-xl p-4 shadow-md border ${colors.border}`}
              >
                <div className="flex gap-3 items-center">
                  {/* Step number */}
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {step.step}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
                      {step.duration && (
                        <span className={`text-sm ${colors.text} font-medium`}>
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-black">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Result indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-2 text-center">
              Your Strategy, Validated
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Make informed decisions with confidence, backed by years of historical data
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/917083718306"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            <span>Get Your Strategy Tested</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
