'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import {
  MessageSquare,
  FileText,
  Code,
  FlaskConical,
  PlayCircle,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface ProcessFlowModernProps {
  service: Service;
}

// Step icons
const stepIcons = [
  MessageSquare,
  FileText,
  Code,
  FlaskConical,
  PlayCircle,
  Rocket
];

// Step-specific gradient colors
const stepColors = [
  { from: 'from-blue-500', to: 'to-cyan-500', shadow: 'shadow-blue-500/30', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { from: 'from-indigo-500', to: 'to-blue-500', shadow: 'shadow-indigo-500/30', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
  { from: 'from-violet-500', to: 'to-indigo-500', shadow: 'shadow-violet-500/30', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600' },
  { from: 'from-purple-500', to: 'to-violet-500', shadow: 'shadow-purple-500/30', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  { from: 'from-fuchsia-500', to: 'to-purple-500', shadow: 'shadow-fuchsia-500/30', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Document/Discovery
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step1grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#06B6D4"/>
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
  // Step 2 - Technical Spec
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step2grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step2grad)" opacity="0.1"/>
      <rect x="25" y="35" width="70" height="50" rx="5" fill="white" stroke="url(#step2grad)" strokeWidth="2"/>
      <rect x="32" y="42" width="55" height="4" rx="2" fill="url(#step2grad)" opacity="0.3"/>
      <rect x="32" y="52" width="25" height="25" rx="3" fill="url(#step2grad)" opacity="0.2"/>
      <rect x="62" y="52" width="25" height="25" rx="3" fill="url(#step2grad)" opacity="0.2"/>
      <path d="M40 60 L50 70 L40 70" stroke="url(#step2grad)" strokeWidth="2" fill="none"/>
      <path d="M70 60 L80 60 M70 65 L78 65 M70 70 L75 70" stroke="url(#step2grad)" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // Step 3 - Code/Development
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step3grad)" opacity="0.1"/>
      <rect x="25" y="30" width="70" height="60" rx="8" fill="url(#step3grad)" opacity="0.15"/>
      <rect x="30" y="35" width="60" height="50" rx="5" fill="white" stroke="url(#step3grad)" strokeWidth="2"/>
      {/* Code lines */}
      <path d="M40 50 L48 57 L40 64" stroke="url(#step3grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M55 50 L63 57 L55 64" stroke="url(#step3grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="scale(-1,1) translate(-118,0)"/>
      <rect x="57" y="70" width="25" height="4" rx="2" fill="url(#step3grad)"/>
    </svg>
  ),
  // Step 4 - Backtest/Flask
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step4grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step4grad)" opacity="0.1"/>
      {/* Flask shape */}
      <path d="M50 30 L50 50 L35 80 Q32 88 40 90 L80 90 Q88 88 85 80 L70 50 L70 30"
            fill="white" stroke="url(#step4grad)" strokeWidth="2"/>
      <rect x="48" y="25" width="24" height="8" rx="2" fill="url(#step4grad)"/>
      {/* Bubbles */}
      <circle cx="50" cy="70" r="4" fill="url(#step4grad)" opacity="0.6"/>
      <circle cx="60" cy="75" r="5" fill="url(#step4grad)" opacity="0.4"/>
      <circle cx="70" cy="68" r="3" fill="url(#step4grad)" opacity="0.5"/>
      {/* Chart inside */}
      <path d="M42 82 L50 75 L58 78 L66 72 L75 76" stroke="url(#step4grad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  // Step 5 - Paper Trading
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step5grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D946EF"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step5grad)" opacity="0.1"/>
      {/* Play button circle */}
      <circle cx="60" cy="60" r="35" fill="white" stroke="url(#step5grad)" strokeWidth="2"/>
      <circle cx="60" cy="60" r="28" fill="url(#step5grad)" opacity="0.1"/>
      {/* Play icon */}
      <path d="M52 45 L52 75 L78 60 Z" fill="url(#step5grad)"/>
      {/* Orbiting dots */}
      <circle cx="60" cy="20" r="4" fill="url(#step5grad)" opacity="0.6"/>
      <circle cx="95" cy="60" r="4" fill="url(#step5grad)" opacity="0.4"/>
      <circle cx="60" cy="100" r="4" fill="url(#step5grad)" opacity="0.5"/>
    </svg>
  ),
  // Step 6 - Go Live/Rocket
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="step6grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#step6grad)" opacity="0.1"/>
      {/* Rocket body */}
      <ellipse cx="60" cy="55" rx="15" ry="30" fill="white" stroke="url(#step6grad)" strokeWidth="2"/>
      <ellipse cx="60" cy="40" rx="10" ry="15" fill="url(#step6grad)"/>
      {/* Window */}
      <circle cx="60" cy="50" r="6" fill="url(#step6grad)" opacity="0.3"/>
      <circle cx="60" cy="50" r="4" fill="white"/>
      {/* Fins */}
      <path d="M45 70 L40 85 L50 75" fill="url(#step6grad)"/>
      <path d="M75 70 L80 85 L70 75" fill="url(#step6grad)"/>
      {/* Flames */}
      <ellipse cx="60" cy="92" rx="8" ry="12" fill="#F59E0B" opacity="0.8"/>
      <ellipse cx="60" cy="95" rx="5" ry="8" fill="#EF4444" opacity="0.9"/>
      {/* Stars */}
      <circle cx="25" cy="30" r="2" fill="url(#step6grad)"/>
      <circle cx="90" cy="25" r="2" fill="url(#step6grad)"/>
      <circle cx="95" cy="85" r="2" fill="url(#step6grad)"/>
    </svg>
  ),
];

export default function ProcessFlowModern({ service }: ProcessFlowModernProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-14 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30"
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
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">Your Journey to</span>
            {' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Automation</span>
          </h2>
          <p className="text-xl text-navy-600/90 max-w-3xl mx-auto leading-relaxed">
            A transparent, step-by-step methodology that ensures your strategy is properly translated, tested, and deployed
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line background - colorful gradient for all steps */}
          <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-300 via-indigo-300 via-purple-300 via-fuchsia-300 to-emerald-300 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 via-fuchsia-500 to-emerald-500 rounded-full"
          />

          {/* Animated pulse */}
          <motion.div
            className="absolute top-[120px] left-[8%] w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
            animate={{ x: [0, 1200, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Steps */}
          <div className="grid grid-cols-6 gap-3">
            {service.howItWorks.map((step, index) => {
              const colors = stepColors[index % stepColors.length];
              const Illustration = StepIllustrations[index % StepIllustrations.length];
              const isLast = index === service.howItWorks.length - 1;

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
                    <h3 className="text-base font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-snug mb-2 line-clamp-2">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className={`inline-flex items-center gap-1 text-xs ${colors.text} font-medium`}>
                        <Clock className="w-3 h-3" />
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
          {service.howItWorks.map((step, index) => {
            const colors = stepColors[index % stepColors.length];
            const Illustration = StepIllustrations[index % StepIllustrations.length];

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
                      <h3 className="text-base font-bold text-navy-900">{step.title}</h3>
                      {step.duration && (
                        <span className={`text-xs ${colors.text} font-medium`}>
                          {step.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-navy-600 line-clamp-2">
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
              Your Strategy, Fully Automated
            </h3>
            <p className="text-base lg:text-lg text-navy-600 text-center">
              Running 24/7 with monitoring, alerts, and support
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
            href="/strategy-assessment"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
