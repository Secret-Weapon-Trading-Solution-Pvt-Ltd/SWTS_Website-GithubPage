'use client';

import React, { useState } from 'react';
import {
  Search,
  Target,
  PenTool,
  Code,
  TestTube,
  Rocket,
  Brain,
  LineChart,
  Shield,
  Zap,
  Settings,
  BarChart3,
  GitBranch,
  Layers,
  Play,
  CheckCircle2,
  TrendingUp,
  Database,
  Cpu,
  Activity,
  Lock,
  RefreshCw,
  Eye,
  Gauge,
} from 'lucide-react';

// ============================================================================
// Types
// ============================================================================
interface ToolkitItem {
  icon: React.ElementType;
  label: string;
}

interface ProcessStep {
  id: number;
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  mediaSrc: string;
  mediaType: 'video' | 'image';
  toolkit: ToolkitItem[];
}

// ============================================================================
// Process Steps Data
// ============================================================================
const processSteps: ProcessStep[] = [
  {
    id: 1,
    icon: Search,
    label: 'Assess',
    title: 'Deep Profile Assessment',
    description:
      'We analyze your trading style, risk tolerance, and behavioral patterns to understand exactly how you trade and where improvements can be made.',
    mediaSrc: '/Asses.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: Brain, label: 'Psychology Eval' },
      { icon: LineChart, label: 'Risk Mapping' },
      { icon: BarChart3, label: 'Performance Review' },
      { icon: Eye, label: 'Pattern Detection' },
    ],
  },
  {
    id: 2,
    icon: Target,
    label: 'Analyze',
    title: 'Gap Analysis & Insights',
    description:
      'Our systems identify execution gaps, behavioral blind spots, and opportunities for optimization based on your unique trading profile.',
    mediaSrc: '/analyze.jpg',
    mediaType: 'image',
    toolkit: [
      { icon: Activity, label: 'Gap Detection' },
      { icon: TrendingUp, label: 'Opportunity Scan' },
      { icon: Cpu, label: 'AI Analysis' },
      { icon: Database, label: 'Data Insights' },
    ],
  },
  {
    id: 3,
    icon: PenTool,
    label: 'Design',
    title: 'Strategy Architecture',
    description:
      'Custom strategy design that aligns with your behavior, schedule, and risk parameters. Every rule is tailored to how you actually trade.',
    mediaSrc: '/Design.jpg',
    mediaType: 'image',
    toolkit: [
      { icon: Settings, label: 'Custom Rules' },
      { icon: Layers, label: 'Risk Tuning' },
      { icon: GitBranch, label: 'Entry Logic' },
      { icon: Gauge, label: 'Position Sizing' },
    ],
  },
  {
    id: 4,
    icon: Code,
    label: 'Build',
    title: 'System Development',
    description:
      'Transform your strategy into a robust, automated system with institutional-grade reliability, real-time monitoring, and failsafe mechanisms.',
    mediaSrc: '/build.jpg',
    mediaType: 'image',
    toolkit: [
      { icon: Code, label: 'Algorithm Dev' },
      { icon: Zap, label: 'API Integration' },
      { icon: Shield, label: 'Failsafe Logic' },
      { icon: Activity, label: 'Live Monitoring' },
    ],
  },
  {
    id: 5,
    icon: TestTube,
    label: 'Test',
    title: 'Rigorous Validation',
    description:
      'Extensive backtesting across historical data and paper trading phases ensure your system performs before any capital is at risk.',
    mediaSrc: '/Testing.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: BarChart3, label: 'Backtesting' },
      { icon: RefreshCw, label: 'Monte Carlo' },
      { icon: Play, label: 'Paper Trading' },
      { icon: CheckCircle2, label: 'Validation' },
    ],
  },
  {
    id: 6,
    icon: Rocket,
    label: 'Deploy',
    title: 'Launch & Monitor',
    description:
      'Seamless deployment with continuous monitoring, performance analytics, and ongoing optimization to keep your edge sharp.',
    mediaSrc: '/Deploy.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: Rocket, label: 'Live Deploy' },
      { icon: LineChart, label: 'Real-time Stats' },
      { icon: TrendingUp, label: 'Optimization' },
      { icon: Lock, label: '24/7 Support' },
    ],
  },
];

// ============================================================================
// Step Circle Component - Premium Large Circle with Animated Dotted Border
// ============================================================================
interface StepCircleProps {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const StepCircle: React.FC<StepCircleProps> = ({
  step,
  index,
  isActive,
  isCompleted,
  onClick,
}) => {
  const Icon = step.icon;

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-4 group outline-none min-w-[110px] sm:min-w-[140px] px-2"
      aria-pressed={isActive}
    >
      {/* Large circle container - extra padding for scale and glow */}
      <div className="relative p-3">
        {/* Animated rotating dotted border - visible when active */}
        {isActive && (
          <div className="absolute -inset-2 rounded-full spin-slow-animation">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        {/* Outer glow - visible when active */}
        <div
          className={`
            absolute -inset-3 rounded-full transition-all duration-500 ease-out
            ${isActive
              ? 'bg-blue-400/25 blur-xl scale-100 opacity-100'
              : 'scale-75 opacity-0'
            }
          `}
        />

        {/* Main circle */}
        <div
          className={`
            relative w-20 h-20 sm:w-24 sm:h-24 rounded-full
            transition-all duration-300 ease-out
            flex items-center justify-center
            border-[3px]
            ${isActive
              ? 'bg-gradient-to-br from-blue-500 to-blue-400 border-blue-300 scale-110 shadow-[0_0_35px_rgba(96,165,250,0.35)]'
              : isCompleted
                ? 'bg-gradient-to-br from-blue-400/80 to-blue-300/80 border-blue-300/60'
                : 'bg-white border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/40'
            }
          `}
        >
          {/* Icon */}
          <Icon
            className={`
              w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 ease-out
              ${isActive
                ? 'text-white'
                : isCompleted
                  ? 'text-white'
                  : 'text-slate-400 group-hover:text-blue-500'
              }
            `}
            strokeWidth={1.5}
          />

          {/* Step number badge */}
          <div
            className={`
              absolute -top-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full
              flex items-center justify-center text-xs sm:text-sm font-bold
              transition-all duration-300 ease-out border-[3px] border-white shadow-md
              ${isActive
                ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white scale-110'
                : isCompleted
                  ? 'bg-blue-400 text-white'
                  : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500'
              }
            `}
          >
            {index + 1}
          </div>
        </div>
      </div>

      {/* Step label - Large heading */}
      <span
        className={`
          text-base sm:text-lg font-bold transition-all duration-300 ease-out tracking-wide
          ${isActive
            ? 'text-blue-500'
            : isCompleted
              ? 'text-blue-400'
              : 'text-slate-400 group-hover:text-slate-600'
          }
        `}
      >
        {step.label}
      </span>
    </button>
  );
};

// ============================================================================
// Connector Line Component - Dark Blue Gradient
// ============================================================================
interface ConnectorLineProps {
  isCompleted: boolean;
  isActive: boolean;
}

const ConnectorLine: React.FC<ConnectorLineProps> = ({ isCompleted, isActive }) => {
  return (
    <div className="flex-1 min-w-[20px] sm:min-w-[40px] max-w-[70px] h-[4px] mx-0 sm:mx-1 self-start mt-[52px] sm:mt-[60px] relative overflow-hidden rounded-full">
      {/* Background track */}
      <div className="absolute inset-0 bg-slate-200 rounded-full" />

      {/* Animated progress fill */}
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-500 ease-out
          bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400
          ${isCompleted || isActive ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{
          backgroundSize: '200% 100%',
          animation: isActive ? 'shimmer 2s infinite linear' : 'none',
        }}
      />
    </div>
  );
};

// ============================================================================
// Media Container Component (Video or Image)
// ============================================================================
interface MediaContainerProps {
  src: string;
  mediaType: 'video' | 'image';
  stepId: number;
}

const MediaContainer: React.FC<MediaContainerProps> = ({ src, mediaType, stepId }) => {
  return (
    <div className="relative group">
      {/* Gradient border container */}
      <div className="absolute -inset-[3px] bg-gradient-to-br from-blue-500/50 via-blue-400/40 to-blue-600/50 rounded-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300 ease-out" />

      {/* Media wrapper */}
      <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-lg">
        {/* Subtle inner shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/10 z-10 pointer-events-none" />

        {mediaType === 'video' ? (
          <video
            key={stepId}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        ) : (
          <img
            key={stepId}
            src={src}
            alt=""
            className="w-full aspect-video object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        )}

        {/* Status indicator overlay */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
            <div className={`w-2 h-2 rounded-full ${mediaType === 'video' ? 'bg-blue-400 animate-pulse' : 'bg-blue-300'}`} />
            <span className="text-[11px] font-medium text-white/90 uppercase tracking-wider">
              {mediaType === 'video' ? 'Live Preview' : 'Preview'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Toolkit Grid Component
// ============================================================================
interface ToolkitGridProps {
  items: ToolkitItem[];
}

const ToolkitGrid: React.FC<ToolkitGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              flex items-center gap-3 px-4 py-3 rounded-xl
              bg-white/70 backdrop-blur-sm border border-slate-100
              hover:bg-white hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] hover:border-blue-100
              transition-all duration-300 ease-out group/item cursor-default
            "
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100/60 flex items-center justify-center flex-shrink-0 group-hover/item:border-blue-200 transition-colors duration-300">
              <Icon className="w-4.5 h-4.5 text-blue-600" strokeWidth={1.75} />
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// Explanation Panel Component - Two Column Layout
// ============================================================================
interface ExplanationPanelProps {
  step: ProcessStep;
}

const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ step }) => {
  return (
    <div key={step.id} className="animate-fadeIn">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* LEFT: Media Container */}
        <div className="order-2 lg:order-1">
          <MediaContainer src={step.mediaSrc} mediaType={step.mediaType} stepId={step.id} />
        </div>

        {/* RIGHT: Content */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Step badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/60 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
              Step {String(step.id).padStart(2, '0')}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {step.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-slate-800 leading-tight tracking-tight">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {step.description}
          </p>

          {/* Toolkit section */}
          <div className="pt-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              Capabilities
            </p>
            <ToolkitGrid items={step.toolkit} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Process Flow Horizontal Component
// ============================================================================
export const ProcessFlowHorizontal: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeStep = processSteps.find((s) => s.id === activeStepId) || processSteps[0];

  const handleStepClick = (stepId: number) => {
    if (stepId !== activeStepId) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveStepId(stepId);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className="relative">

      {/* ================================================================ */}
      {/* PROCESS STEPS ZONE */}
      {/* ================================================================ */}
      <div className="relative pt-2 pb-4 sm:pt-4 sm:pb-6 -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12 mb-2">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent" />

        {/* Radial glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative">
          {/* Process Steps Row - Extra padding to prevent cut-off */}
          <div className="overflow-x-auto pb-6 pt-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex items-start justify-center min-w-max px-4 py-2">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <StepCircle
                    step={step}
                    index={index}
                    isActive={activeStepId === step.id}
                    isCompleted={step.id < activeStepId}
                    onClick={() => handleStepClick(step.id)}
                  />
                  {index < processSteps.length - 1 && (
                    <ConnectorLine
                      isCompleted={step.id < activeStepId}
                      isActive={step.id === activeStepId}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile step indicator */}
          <div className="flex justify-center gap-1.5 mt-6 sm:hidden">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`
                  h-2 rounded-full transition-all duration-300 ease-out
                  ${activeStepId === step.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 w-6'
                    : step.id < activeStepId
                      ? 'bg-blue-400 w-2'
                      : 'bg-slate-300 w-2 hover:bg-slate-400'
                  }
                `}
                aria-label={`Go to step ${step.id}: ${step.label}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* TOOLKIT EXPLANATION ZONE */}
      {/* ================================================================ */}
      <div className="relative">
        {/* Container with gradient background */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 border border-slate-200/60 shadow-[0_0_40px_rgba(59,130,246,0.06)] overflow-hidden">
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

          {/* Panel content with transition */}
          <div
            className={`
              relative px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14
              transition-opacity duration-150 ease-out
              ${isTransitioning ? 'opacity-0' : 'opacity-100'}
            `}
          >
            <ExplanationPanel step={activeStep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowHorizontal;
