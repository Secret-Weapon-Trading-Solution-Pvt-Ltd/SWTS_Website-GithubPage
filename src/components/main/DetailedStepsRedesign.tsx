'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  User,
  Target,
  GitBranch,
  Settings,
  TrendingUp,
  Zap,
} from 'lucide-react';

// ============================================================================
// Types & Data
// ============================================================================
interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  detail: string;
  color: string;
  bgGlow: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: User,
    title: 'Understand Your Style',
    description: 'Map your trading psychology',
    detail: 'Identify natural decision patterns, risk appetite, and time preferences',
    color: 'from-violet-500 to-purple-600',
    bgGlow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 2,
    icon: Target,
    title: 'Identify Gaps',
    description: 'Find execution weaknesses',
    detail: 'Pinpoint where discipline breaks and what triggers inconsistency',
    color: 'from-rose-500 to-pink-600',
    bgGlow: 'rgba(244, 63, 94, 0.4)',
  },
  {
    id: 3,
    icon: GitBranch,
    title: 'Align Strategy',
    description: 'Match methods to behavior',
    detail: 'Design rules that work with your habits, not against them',
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'rgba(245, 158, 11, 0.4)',
  },
  {
    id: 4,
    icon: Settings,
    title: 'Choose Mode',
    description: 'Manual, auto, or hybrid',
    detail: 'Select execution style based on your lifestyle and preferences',
    color: 'from-teal-500 to-cyan-600',
    bgGlow: 'rgba(20, 184, 166, 0.4)',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Execute',
    description: 'Trade with structure',
    detail: 'Operate consistently using your personalized system',
    color: 'from-blue-500 to-indigo-600',
    bgGlow: 'rgba(59, 130, 246, 0.4)',
  },
];

// ============================================================================
// Interconnected Flow Component
// ============================================================================
export const DetailedStepsRedesign: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <div ref={containerRef} className="relative py-4">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 via-teal-100 to-blue-100 border border-slate-200/60 mb-4"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: ['0 0 0 0 rgba(20,184,166,0)', '0 0 0 8px rgba(20,184,166,0.1)', '0 0 0 0 rgba(20,184,166,0)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-3.5 h-3.5 text-teal-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-black">
            Your Journey
          </span>
        </motion.div>

        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
          The Process
        </h3>
        <p className="text-black text-sm max-w-md mx-auto">
          Five connected stages from self-discovery to consistent execution
        </p>
      </motion.div>

      {/* Desktop: Interconnected Nodes */}
      <div className="hidden lg:block relative">
        {/* Animated Connection Line */}
        <svg
          className="absolute top-1/2 left-0 right-0 h-32 -translate-y-1/2 pointer-events-none overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="25%" stopColor="#EC4899" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="75%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main flowing path */}
          <motion.path
            d="M 8% 50% C 15% 20%, 25% 80%, 30% 50% S 45% 20%, 50% 50% S 65% 80%, 70% 50% S 85% 20%, 92% 50%"
            fill="none"
            stroke="url(#flowGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Animated dots traveling along path */}
          <motion.circle
            r="4"
            fill="#14B8A6"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={isInView ? {
              opacity: [0, 1, 1, 0],
              offsetDistance: ['0%', '100%'],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              delay: 1,
            }}
            style={{
              offsetPath: "path('M 8% 50% C 15% 20%, 25% 80%, 30% 50% S 45% 20%, 50% 50% S 65% 80%, 70% 50% S 85% 20%, 92% 50%')",
            }}
          />
        </svg>

        {/* Nodes */}
        <div className="relative flex items-center justify-between px-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                className="relative flex flex-col items-center cursor-pointer"
                style={{ width: '18%' }}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Glow Effect Behind Node */}
                <motion.div
                  className="absolute top-0 w-28 h-28 rounded-full blur-2xl pointer-events-none -z-10"
                  style={{ backgroundColor: step.bgGlow }}
                  animate={{
                    opacity: isActive ? 0.8 : 0,
                    scale: isActive ? 1.2 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Main Node Circle */}
                <motion.div
                  className={`
                    relative z-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full
                    flex items-center justify-center
                    bg-gradient-to-br ${step.color}
                    shadow-lg border-4 border-white
                  `}
                  animate={{
                    scale: isActive ? 1.25 : 1,
                    rotate: isActive ? [0, -8, 8, -4, 4, 0] : 0,
                    y: isActive ? -8 : 0,
                  }}
                  transition={{
                    scale: { type: 'spring', stiffness: 400, damping: 15 },
                    rotate: { duration: 0.6, ease: 'easeInOut' },
                    y: { type: 'spring', stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Step Number Badge */}
                  <motion.span
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg text-sm font-black flex items-center justify-center"
                    style={{ color: step.bgGlow.replace('0.4', '1') }}
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      rotate: isActive ? 360 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {step.id}
                  </motion.span>

                  <Icon
                    className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                    strokeWidth={1.5}
                  />

                  {/* Pulse Rings */}
                  {isActive && (
                    <>
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-white/50`}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-white/30`}
                        initial={{ scale: 1, opacity: 0.4 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Text Content - Also Scales on Hover */}
                <motion.div
                  className="mt-5 text-center"
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    y: isActive ? 4 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.h4
                    className="font-bold text-base lg:text-lg mb-1 transition-colors duration-300"
                    animate={{ color: isActive ? '#0F172A' : '#334155' }}
                  >
                    {step.title}
                  </motion.h4>
                  <motion.p
                    className="text-xs lg:text-sm text-black leading-snug max-w-[140px] mx-auto"
                    animate={{ opacity: isActive ? 1 : 0.7 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="lg:hidden relative pl-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === steps.length - 1;

          return (
            <motion.div
              key={step.id}
              className="relative flex gap-5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {/* Left: Node & Connector */}
              <div className="flex flex-col items-center">
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-3 border-white relative`}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white shadow text-xs font-bold flex items-center justify-center text-slate-700">
                    {step.id}
                  </span>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </motion.div>
                {!isLast && (
                  <motion.div
                    className={`w-1 h-16 rounded-full bg-gradient-to-b ${step.color}`}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    style={{ originY: 0 }}
                  />
                )}
              </div>

              {/* Right: Content */}
              <div className={`flex-1 ${!isLast ? 'pb-4' : ''} pt-1`}>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-black leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Tags */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
      >
        {['5 min assessment', 'Personalized path', 'No commitment'].map((item, i) => (
          <motion.span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-xs font-medium text-black shadow-sm border border-slate-100"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
            {item}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default DetailedStepsRedesign;
