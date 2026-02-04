'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import {
  Play,
  Settings,
  CheckCircle,
  FileBarChart,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface OptimizationProcessProps {
  service: Service;
}

// Step-specific gradient colors
const stepColors = [
  { from: 'from-blue-500', to: 'to-indigo-500', shadow: 'shadow-blue-500/30', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { from: 'from-indigo-500', to: 'to-violet-500', shadow: 'shadow-indigo-500/30', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  { from: 'from-violet-500', to: 'to-purple-500', shadow: 'shadow-violet-500/30', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
];

const processSteps = [
  {
    step: 1,
    title: "Baseline Analysis",
    description: "We test your current parameters to establish a performance benchmark.",
    duration: "1-2 days",
    icon: Play,
  },
  {
    step: 2,
    title: "Parameter Search",
    description: "We code the logic and then our software checks the best optimum result.",
    duration: "1-4 weeks",
    icon: Settings,
  },
  {
    step: 3,
    title: "Analysis",
    description: "We analyse the search results to pick the one with best metrics.",
    duration: "2-3 days",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Report/Utility",
    description: "We share search report with performance metric across all parameter sets, backtest trade history of recommended set.",
    duration: "1-2 days",
    icon: FileBarChart,
  }
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Baseline Analysis
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step1gradOpt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step1gradOpt)" opacity="0.1"/>
      <rect x="30" y="30" width="60" height="60" rx="8" fill="white" stroke="url(#step1gradOpt)" strokeWidth="2"/>
      <rect x="38" y="45" width="44" height="4" rx="2" fill="url(#step1gradOpt)" opacity="0.6"/>
      <rect x="38" y="55" width="35" height="4" rx="2" fill="url(#step1gradOpt)" opacity="0.4"/>
      <rect x="38" y="65" width="40" height="4" rx="2" fill="url(#step1gradOpt)" opacity="0.6"/>
      <path d="M55 78 L58 81 L65 74" stroke="url(#step1gradOpt)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Step 2 - Parameter Search
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step2gradOpt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step2gradOpt)" opacity="0.1"/>
      <rect x="30" y="35" width="60" height="50" rx="6" fill="white" stroke="url(#step2gradOpt)" strokeWidth="2"/>
      <rect x="38" y="48" width="44" height="6" rx="3" fill="#E5E7EB"/>
      <rect x="38" y="48" width="30" height="6" rx="3" fill="url(#step2gradOpt)"/>
      <rect x="38" y="60" width="44" height="6" rx="3" fill="#E5E7EB"/>
      <rect x="38" y="60" width="25" height="6" rx="3" fill="url(#step2gradOpt)" opacity="0.7"/>
      <rect x="38" y="72" width="44" height="6" rx="3" fill="#E5E7EB"/>
      <rect x="38" y="72" width="35" height="6" rx="3" fill="url(#step2gradOpt)" opacity="0.5"/>
    </svg>
  ),
  // Step 3 - Validation
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step3gradOpt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step3gradOpt)" opacity="0.1"/>
      <circle cx="60" cy="55" r="28" fill="white" stroke="url(#step3gradOpt)" strokeWidth="2"/>
      <path d="M48 55 L56 63 L72 47" stroke="url(#step3gradOpt)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="40" y="88" width="40" height="6" rx="3" fill="url(#step3gradOpt)" opacity="0.3"/>
    </svg>
  ),
  // Step 4 - Report
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step4gradOpt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step4gradOpt)" opacity="0.1"/>
      <rect x="30" y="25" width="60" height="70" rx="6" fill="white" stroke="url(#step4gradOpt)" strokeWidth="2"/>
      <rect x="40" y="50" width="10" height="30" rx="2" fill="url(#step4gradOpt)"/>
      <rect x="55" y="40" width="10" height="40" rx="2" fill="url(#step4gradOpt)"/>
      <rect x="70" y="45" width="10" height="35" rx="2" fill="url(#step4gradOpt)"/>
      <rect x="40" y="33" width="40" height="4" rx="2" fill="url(#step4gradOpt)" opacity="0.5"/>
    </svg>
  ),
];

export default function OptimizationProcess({ service }: OptimizationProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-14 relative overflow-hidden scroll-mt-20"
    >
      {/* Full background similar to Why It Matters */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-blue-50" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#3B82F6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-pattern)" />
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/50 to-indigo-200/50 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-indigo-200/50 to-blue-200/50 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            Our Proven Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-navy-900 bg-clip-text text-transparent">From Parameters to</span>
            {' '}
            <span className="text-teal-700">Performance</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A rigorous, scientific approach that finds better parameters without overfitting
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line background */}
          <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-300 via-indigo-300 via-violet-300 to-emerald-300 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-violet-500 to-emerald-500 rounded-full"
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
              Optimized & Validated
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Walk away with parameters that are proven to work in live trading conditions
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
            <span>Start Your Optimization</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
