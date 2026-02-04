'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import {
  Settings,
  Plug,
  Play,
  BarChart3,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface PaperTradingProcessProps {
  service: Service;
}

// Step-specific gradient colors
const stepColors = [
  { from: 'from-blue-500', to: 'to-indigo-500', shadow: 'shadow-blue-500/30', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { from: 'from-violet-500', to: 'to-purple-500', shadow: 'shadow-violet-500/30', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
  { from: 'from-amber-500', to: 'to-orange-500', shadow: 'shadow-amber-500/30', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
  { from: 'from-rose-500', to: 'to-pink-500', shadow: 'shadow-rose-500/30', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600' },
];

const processSteps = [
  {
    step: 1,
    icon: Settings,
    title: "Environment Setup",
    description: "Configure paper trading environment with live data feeds.",
    duration: "1-2 days",
  },
  {
    step: 2,
    icon: Plug,
    title: "Strategy Deployment",
    description: "Deploy your automated strategy to the simulation environment.",
    duration: "1-2 days",
  },
  {
    step: 3,
    icon: Play,
    title: "Live Simulation",
    description: "Run your strategy against live market data with simulated execution.",
    duration: "1-2 weeks",
  },
  {
    step: 4,
    icon: BarChart3,
    title: "Analysis & Review",
    description: "Comprehensive performance metrics and trade-by-trade analysis.",
    duration: "2-3 days",
  },
  {
    step: 5,
    icon: Rocket,
    title: "Go-Live Ready",
    description: "Confident transition to live trading with proven results.",
    duration: "When ready",
  }
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Environment Setup
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="pt1grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#pt1grad)" opacity="0.1"/>
      <rect x="30" y="30" width="60" height="50" rx="6" fill="white" stroke="url(#pt1grad)" strokeWidth="2"/>
      <rect x="30" y="30" width="60" height="12" rx="6" fill="url(#pt1grad)"/>
      <rect x="30" y="38" width="60" height="4" fill="url(#pt1grad)"/>
      <circle cx="38" cy="36" r="2.5" fill="#FEF08A"/>
      <circle cx="46" cy="36" r="2.5" fill="#86EFAC"/>
      <circle cx="54" cy="36" r="2.5" fill="#FCA5A5"/>
      <rect x="38" y="50" width="20" height="8" rx="2" fill="url(#pt1grad)" opacity="0.3"/>
      <rect x="62" y="50" width="20" height="8" rx="2" fill="url(#pt1grad)" opacity="0.3"/>
      <rect x="38" y="62" width="44" height="8" rx="2" fill="url(#pt1grad)" opacity="0.2"/>
      <circle cx="60" cy="95" r="8" fill="url(#pt1grad)"/>
      <path d="M56 95 L59 98 L64 93" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Step 2 - Strategy Deployment
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="pt2grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#pt2grad)" opacity="0.1"/>
      <rect x="25" y="35" width="30" height="50" rx="5" fill="white" stroke="url(#pt2grad)" strokeWidth="2"/>
      <rect x="30" y="42" width="20" height="3" rx="1.5" fill="url(#pt2grad)" opacity="0.5"/>
      <rect x="30" y="48" width="16" height="3" rx="1.5" fill="url(#pt2grad)" opacity="0.4"/>
      <rect x="30" y="54" width="18" height="3" rx="1.5" fill="url(#pt2grad)" opacity="0.5"/>
      <rect x="65" y="35" width="30" height="50" rx="5" fill="white" stroke="url(#pt2grad)" strokeWidth="2"/>
      <path d="M70 50 L70 70 L90 70 L90 50" fill="none" stroke="url(#pt2grad)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M72 65 L78 58 L82 62 L88 55" stroke="url(#pt2grad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M55 55 L58 60 L55 65" fill="none" stroke="url(#pt2grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M58 60 L62 60" stroke="url(#pt2grad)" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  // Step 3 - Live Simulation
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="pt3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#pt3grad)" opacity="0.1"/>
      <rect x="25" y="30" width="70" height="55" rx="6" fill="white" stroke="url(#pt3grad)" strokeWidth="2"/>
      <rect x="32" y="40" width="8" height="35" rx="2" fill="url(#pt3grad)" opacity="0.3"/>
      <rect x="44" y="48" width="8" height="27" rx="2" fill="url(#pt3grad)" opacity="0.4"/>
      <rect x="56" y="42" width="8" height="33" rx="2" fill="url(#pt3grad)" opacity="0.5"/>
      <rect x="68" y="50" width="8" height="25" rx="2" fill="url(#pt3grad)" opacity="0.6"/>
      <rect x="80" y="38" width="8" height="37" rx="2" fill="url(#pt3grad)"/>
      <circle cx="85" cy="95" r="12" fill="url(#pt3grad)"/>
      <path d="M82 95 L85 92 L85 98 L88 95" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="60" cy="20" r="6" fill="url(#pt3grad)"/>
      <circle cx="60" cy="20" r="3" fill="white"/>
    </svg>
  ),
  // Step 4 - Analysis & Review
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="pt4grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#F97316"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#pt4grad)" opacity="0.1"/>
      <rect x="30" y="25" width="60" height="75" rx="6" fill="white" stroke="url(#pt4grad)" strokeWidth="2"/>
      <rect x="38" y="35" width="44" height="4" rx="2" fill="url(#pt4grad)" opacity="0.6"/>
      <rect x="38" y="43" width="35" height="3" rx="1.5" fill="url(#pt4grad)" opacity="0.3"/>
      <circle cx="50" cy="65" r="15" fill="none" stroke="url(#pt4grad)" strokeWidth="3"/>
      <path d="M50 54 L50 65 L58 65" stroke="url(#pt4grad)" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="70" y="55" width="15" height="4" rx="2" fill="url(#pt4grad)" opacity="0.5"/>
      <rect x="70" y="62" width="12" height="4" rx="2" fill="url(#pt4grad)" opacity="0.4"/>
      <rect x="70" y="69" width="14" height="4" rx="2" fill="url(#pt4grad)" opacity="0.5"/>
      <rect x="38" y="85" width="44" height="8" rx="3" fill="url(#pt4grad)"/>
      <text x="60" y="91" fill="white" fontSize="6" textAnchor="middle" fontWeight="bold">REPORT</text>
    </svg>
  ),
  // Step 5 - Go-Live Ready
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="pt5grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#pt5grad)" opacity="0.1"/>
      <path d="M60 25 L65 50 L75 50 L67 65 L72 90 L60 75 L48 90 L53 65 L45 50 L55 50 Z" fill="white" stroke="url(#pt5grad)" strokeWidth="2"/>
      <path d="M60 35 L63 48 L70 48 L64 58 L67 78 L60 68 L53 78 L56 58 L50 48 L57 48 Z" fill="url(#pt5grad)"/>
      <circle cx="35" cy="40" r="4" fill="url(#pt5grad)" opacity="0.4"/>
      <circle cx="85" cy="40" r="4" fill="url(#pt5grad)" opacity="0.4"/>
      <circle cx="30" cy="70" r="3" fill="url(#pt5grad)" opacity="0.3"/>
      <circle cx="90" cy="70" r="3" fill="url(#pt5grad)" opacity="0.3"/>
      <circle cx="40" cy="95" r="5" fill="url(#pt5grad)" opacity="0.5"/>
      <circle cx="80" cy="95" r="5" fill="url(#pt5grad)" opacity="0.5"/>
    </svg>
  ),
];

export default function PaperTradingProcess({ service }: PaperTradingProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-14 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200/50 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            Our Proven Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-slate-800 to-navy-900 bg-clip-text text-transparent">From Setup to</span>
            {' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">Go-Live</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A structured approach to validating your strategy before real capital
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line background */}
          <div className="absolute top-[120px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-blue-300 via-emerald-300 to-rose-300 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[120px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 rounded-full"
          />

          {/* Animated pulse */}
          <motion.div
            className="absolute top-[120px] left-[5%] w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            animate={{ x: [0, 1400, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          {/* Steps */}
          <div className="grid grid-cols-5 gap-2">
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
              Strategy Validated & Ready
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Go live with confidence, knowing your strategy performs in real market conditions
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 group"
          >
            <span>Start Paper Trading Setup</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
