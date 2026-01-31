'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  Target,
  PenTool,
  Code,
  TestTube,
  Rocket,
  X,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';

// ============================================================================
// Types
// ============================================================================
interface ProcessStep {
  id: number;
  icon: React.ElementType;
  label: string;
  shortDesc: string;
  expandedContent: {
    title: string;
    description: string;
    highlights: string[];
    metric?: string;
  };
  accentColor: string;
  glowColor: string;
}

// ============================================================================
// Process Steps Data with Expanded Content
// ============================================================================
const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: Search,
    label: 'Assess',
    shortDesc: 'Analyze your trading profile',
    expandedContent: {
      title: 'Deep Profile Assessment',
      description: 'We analyze your trading style, risk tolerance, and behavioral patterns to create a comprehensive profile.',
      highlights: [
        'Trading psychology evaluation',
        'Risk appetite mapping',
        'Historical performance review',
        'Behavioral pattern identification',
      ],
      metric: '2 min assessment',
    },
    accentColor: 'from-teal-400 to-cyan-400',
    glowColor: 'rgba(20, 184, 166, 0.4)',
  },
  {
    id: 2,
    icon: Target,
    label: 'Analyze',
    shortDesc: 'Identify execution gaps',
    expandedContent: {
      title: 'Gap Analysis Engine',
      description: 'Our AI identifies where your execution breaks down and what patterns lead to suboptimal decisions.',
      highlights: [
        'Execution gap detection',
        'Pattern recognition',
        'Weakness identification',
        'Opportunity mapping',
      ],
      metric: 'AI-powered',
    },
    accentColor: 'from-cyan-400 to-blue-400',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
  {
    id: 3,
    icon: PenTool,
    label: 'Design',
    shortDesc: 'Craft your strategy',
    expandedContent: {
      title: 'Strategy Architecture',
      description: 'Custom strategy design that aligns with your behavior, schedule, and risk parameters.',
      highlights: [
        'Personalized rule sets',
        'Risk parameter tuning',
        'Entry/exit optimization',
        'Position sizing logic',
      ],
      metric: 'Custom-built',
    },
    accentColor: 'from-blue-400 to-indigo-400',
    glowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    id: 4,
    icon: Code,
    label: 'Build',
    shortDesc: 'Develop automation',
    expandedContent: {
      title: 'System Development',
      description: 'Transform your strategy into a robust, automated system with institutional-grade reliability.',
      highlights: [
        'Algorithm development',
        'API integrations',
        'Failsafe mechanisms',
        'Real-time monitoring',
      ],
      metric: '99.9% uptime',
    },
    accentColor: 'from-indigo-400 to-violet-400',
    glowColor: 'rgba(99, 102, 241, 0.4)',
  },
  {
    id: 5,
    icon: TestTube,
    label: 'Test',
    shortDesc: 'Validate & refine',
    expandedContent: {
      title: 'Rigorous Testing',
      description: 'Extensive backtesting and paper trading to validate performance before going live.',
      highlights: [
        'Historical backtesting',
        'Monte Carlo simulation',
        'Paper trading phase',
        'Performance validation',
      ],
      metric: '10+ years data',
    },
    accentColor: 'from-violet-400 to-purple-400',
    glowColor: 'rgba(139, 92, 246, 0.4)',
  },
  {
    id: 6,
    icon: Rocket,
    label: 'Deploy',
    shortDesc: 'Go live with confidence',
    expandedContent: {
      title: 'Launch & Monitor',
      description: 'Seamless deployment with continuous monitoring, optimization, and support.',
      highlights: [
        'Live deployment',
        'Real-time analytics',
        'Continuous optimization',
        'Dedicated support',
      ],
      metric: 'Always-on',
    },
    accentColor: 'from-purple-400 to-pink-400',
    glowColor: 'rgba(168, 85, 247, 0.4)',
  },
];

// ============================================================================
// Animated Connection Path Component
// ============================================================================
interface ConnectionPathProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  index: number;
  isActive: boolean;
  progress: number;
}

const ConnectionPath: React.FC<ConnectionPathProps> = ({
  startX,
  startY,
  endX,
  endY,
  index,
  isActive,
  progress,
}) => {
  // Create a curved path using quadratic bezier
  const midX = (startX + endX) / 2;
  const controlY = startY + (index % 2 === 0 ? -40 : 40);

  const pathD = `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`;

  return (
    <motion.path
      d={pathD}
      fill="none"
      stroke={`url(#gradient-${index})`}
      strokeWidth={isActive ? 3 : 2}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: progress,
        opacity: progress > 0 ? 1 : 0,
      }}
      transition={{
        pathLength: { duration: 0.8, ease: 'easeOut', delay: index * 0.15 },
        opacity: { duration: 0.3, delay: index * 0.15 },
      }}
      style={{
        filter: isActive ? 'drop-shadow(0 0 6px rgba(20, 184, 166, 0.5))' : 'none',
      }}
    />
  );
};

// ============================================================================
// Floating Particles Component
// ============================================================================
const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

// ============================================================================
// Step Card Component
// ============================================================================
interface StepCardProps {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onHover: (id: number | null) => void;
  onClick: (id: number) => void;
  animationDelay: number;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  index,
  isActive,
  isExpanded,
  onHover,
  onClick,
  animationDelay,
}) => {
  const Icon = step.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  // Staggered wave position - alternates up/down
  const yOffset = index % 2 === 0 ? 0 : 40;

  // Subtle background colors for each step
  const bgColors: Record<number, string> = {
    1: 'from-teal-50/80 to-cyan-50/60',
    2: 'from-cyan-50/80 to-blue-50/60',
    3: 'from-blue-50/80 to-indigo-50/60',
    4: 'from-indigo-50/80 to-violet-50/60',
    5: 'from-violet-50/80 to-purple-50/60',
    6: 'from-purple-50/80 to-pink-50/60',
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{ marginTop: yOffset }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {/* Card Container */}
      <motion.div
        className={`
          relative cursor-pointer select-none
          w-full min-h-[160px] lg:min-h-[180px]
          rounded-2xl lg:rounded-3xl
          border transition-all duration-300
          bg-gradient-to-br ${bgColors[step.id]}
          shadow-md hover:shadow-xl
          ${isActive || isExpanded
            ? 'border-slate-300 shadow-xl'
            : 'border-slate-200/60'
          }
        `}
        whileHover={{
          scale: 1.05,
          y: -8,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        whileTap={{ scale: 0.98 }}
        onHoverStart={() => onHover(step.id)}
        onHoverEnd={() => onHover(null)}
        onClick={() => onClick(step.id)}
        layout
      >
        {/* Content */}
        <div className="relative z-10 p-5 lg:p-6 h-full flex flex-col">
          {/* Step Number Badge */}
          <motion.div
            className={`
              absolute -top-3 left-1/2 -translate-x-1/2
              px-3 py-1 rounded-full text-[10px] font-bold tracking-wider
              bg-gradient-to-r ${step.accentColor} text-white shadow-md
            `}
            animate={{
              scale: isActive || isExpanded ? 1.1 : 1,
            }}
          >
            {index === 0 ? 'START' : `0${step.id}`}
          </motion.div>

          {/* Icon Container */}
          <motion.div
            className={`
              relative w-14 h-14 lg:w-16 lg:h-16 mx-auto mt-3 mb-4
              rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${step.accentColor} shadow-lg
            `}
            animate={{
              scale: isActive || isExpanded ? 1.1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={1.5} />
          </motion.div>

          {/* Label */}
          <h4 className="text-center font-bold text-base lg:text-lg mb-1 text-slate-800">
            {step.label}
          </h4>

          {/* Short Description */}
          <p className="text-center text-xs lg:text-sm text-black leading-snug">
            {step.shortDesc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// Expanded Detail Modal
// ============================================================================
interface ExpandedDetailProps {
  step: ProcessStep;
  onClose: () => void;
}

const ExpandedDetail: React.FC<ExpandedDetailProps> = ({ step, onClose }) => {
  const Icon = step.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Gradient */}
        <div className={`h-2 bg-gradient-to-r ${step.accentColor}`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Icon & Step Number */}
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accentColor} flex items-center justify-center shadow-lg`}
              initial={{ rotate: -10, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </motion.div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Step {step.id}
              </span>
              <h3 className="text-2xl font-bold text-slate-900">{step.label}</h3>
            </div>
          </div>

          {/* Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="text-lg font-semibold text-slate-800 mb-2">
              {step.expandedContent.title}
            </h4>
            <p className="text-black leading-relaxed mb-6">
              {step.expandedContent.description}
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {step.expandedContent.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.accentColor} flex items-center justify-center flex-shrink-0`}>
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-700 text-sm font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Metric Badge */}
          {step.expandedContent.metric && (
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-50 rounded-full border border-slate-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Zap className="w-4 h-4 text-teal-500" />
              <span className="text-sm font-semibold text-slate-700">
                {step.expandedContent.metric}
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================================================
// Main Process Flow Component
// ============================================================================
export const ProcessFlowRedesign: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    return pathProgress.on('change', (latest) => {
      setProgressValue(latest);
    });
  }, [pathProgress]);

  const handleStepHover = (id: number | null) => {
    setActiveStep(id);
  };

  const handleStepClick = (id: number) => {
    setExpandedStep(id);
  };

  const handleCloseExpanded = () => {
    setExpandedStep(null);
  };

  const expandedStepData = processSteps.find((s) => s.id === expandedStep);

  return (
    <div ref={containerRef} className="relative py-8">
      {/* Floating Particles Background */}
      <FloatingParticles />

      {/* SVG Connection Paths - Desktop Only */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
        preserveAspectRatio="none"
      >
        <defs>
          {processSteps.slice(0, -1).map((step, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={`rgba(20, 184, 166, ${0.3 + index * 0.1})`} />
              <stop offset="50%" stopColor={`rgba(6, 182, 212, ${0.5 + index * 0.05})`} />
              <stop offset="100%" stopColor={`rgba(59, 130, 246, ${0.3 + index * 0.1})`} />
            </linearGradient>
          ))}
        </defs>

        {/* Render connection paths */}
        {processSteps.slice(0, -1).map((step, index) => {
          const totalSteps = processSteps.length;
          const stepWidth = 100 / totalSteps;
          const startX = (index + 0.5) * stepWidth;
          const endX = (index + 1.5) * stepWidth;

          // Y positions based on wave pattern
          const baseY = 50;
          const startYOffset = index % 2 === 0 ? 0 : 15;
          const endYOffset = (index + 1) % 2 === 0 ? 0 : 15;

          return (
            <ConnectionPath
              key={`path-${index}`}
              startX={`${startX}%` as unknown as number}
              startY={baseY + startYOffset}
              endX={`${endX}%` as unknown as number}
              endY={baseY + endYOffset}
              index={index}
              isActive={activeStep === step.id || activeStep === processSteps[index + 1]?.id}
              progress={progressValue}
            />
          );
        })}
      </svg>

      {/* Steps Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5 px-2">
        {processSteps.map((step, index) => (
          <StepCard
            key={step.id}
            step={step}
            index={index}
            isActive={activeStep === step.id}
            isExpanded={expandedStep === step.id}
            onHover={handleStepHover}
            onClick={handleStepClick}
            animationDelay={index * 0.1}
          />
        ))}
      </div>

      {/* Mobile Connection Indicator */}
      <div className="lg:hidden flex justify-center mt-6">
        <div className="flex items-center gap-2">
          {processSteps.map((_, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              />
              {index < processSteps.length - 1 && (
                <motion.div
                  className="w-6 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.05 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Supporting Text */}
      <motion.p
        className="text-center text-black text-base mt-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
      >
        Click any step to explore the details. A structured path from understanding your needs to deploying your solution.
      </motion.p>

      {/* Key Benefits Row */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
      >
        {[
          { icon: Shield, label: 'Secure Process' },
          { icon: Zap, label: 'Fast Execution' },
          { icon: TrendingUp, label: 'Optimized Results' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <item.icon className="w-4 h-4 text-teal-500" />
            <span className="text-sm font-medium text-black">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded Detail Modal */}
      <AnimatePresence>
        {expandedStepData && (
          <ExpandedDetail step={expandedStepData} onClose={handleCloseExpanded} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProcessFlowRedesign;
