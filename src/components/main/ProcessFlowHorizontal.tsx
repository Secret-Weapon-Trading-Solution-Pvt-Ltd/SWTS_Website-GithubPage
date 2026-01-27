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
  ChevronRight,
  ClipboardList,
} from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

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
    icon: ClipboardList,
    label: 'Assess',
    title: 'Profile Assessment',
    description:
      'We take a deep look at who you are as a trader. Your fears, your habits, your wins and losses — everything. Because before we build anything, we need to truly understand you. This is where your journey to stress-free trading begins.',
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
    icon: Search,
    label: 'Analyze',
    title: 'Gap Analysis & Insights',
    description:
      'Here we find what\'s holding you back. Those hidden mistakes, missed opportunities, and patterns you never noticed. It\'s eye-opening — and the first step to trading without regret.',
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
      'Now we craft a strategy that fits YOU — your life, your goals, your comfort zone. No cookie-cutter solutions. Just a plan that feels right and works for your unique situation.',
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
      'We turn your strategy into a smart system that works for you 24/7. No more sleepless nights watching charts. Your system handles it all — with safety nets built in.',
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
      'Before risking a single rupee, we test everything. Again and again. You\'ll see exactly how your system performs — so you can trade with confidence, not hope.',
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
    title: 'Deploy & Monitor',
    description:
      'This is it — your system goes live. But you\'re never alone. We watch over it, fine-tune it, and make sure it keeps performing. Your success is our mission.',
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
// Vertical Step Item Component - Left Timeline
// ============================================================================
interface VerticalStepProps {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isLast: boolean;
  onClick: () => void;
}

const VerticalStepItem: React.FC<VerticalStepProps> = ({
  step,
  index,
  isActive,
  isCompleted,
  isLast,
  onClick,
}) => {
  const Icon = step.icon;

  return (
    <div className="relative">
      {/* Vertical connector line - centered on circle */}
      {!isLast && (
        <div className="absolute left-[41px] lg:left-[46px] top-[68px] lg:top-[74px] w-[2px] h-[calc(100%-28px)] z-0">
          <div className="absolute inset-0 bg-slate-200 rounded-full" />
          <div
            className={`
              absolute inset-0 rounded-full transition-all duration-500 ease-out
              bg-gradient-to-b from-blue-500 to-blue-400
              ${isCompleted ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>
      )}

      <button
        onClick={onClick}
        className={`
          relative z-10 w-full flex items-center gap-4 p-2 lg:p-2.5 rounded-xl
          transition-all duration-300 ease-out group outline-none
          ${isActive
            ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 shadow-md shadow-blue-500/10'
            : 'hover:bg-slate-50/80'
          }
        `}
        aria-pressed={isActive}
      >
        {/* Circle with icon */}
        <div className="relative flex-shrink-0">
          {/* Animated ring for active state */}
          {isActive && (
            <div className="absolute -inset-2 rounded-full spin-slow-animation">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}

          {/* Glow effect */}
          <div
            className={`
              absolute -inset-2 rounded-full transition-all duration-500
              ${isActive ? 'bg-blue-400/20 blur-lg opacity-100' : 'opacity-0'}
            `}
          />

          {/* Main circle - medium size */}
          <div
            className={`
              relative w-[62px] h-[62px] lg:w-[68px] lg:h-[68px] rounded-full
              flex items-center justify-center border-[2px]
              transition-all duration-300 ease-out
              ${isActive
                ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-300 scale-105 shadow-xl shadow-blue-500/30'
                : isCompleted
                  ? 'bg-gradient-to-br from-blue-400 to-blue-500 border-blue-300/60'
                  : 'bg-white border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50'
              }
            `}
          >
            <Icon
              className={`
                w-6 h-6 lg:w-7 lg:h-7 transition-all duration-300
                ${isActive || isCompleted ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}
              `}
              strokeWidth={1.5}
            />

            {/* Step number badge */}
            <div
              className={`
                absolute -top-0.5 -right-0.5 w-5 h-5 lg:w-6 lg:h-6 rounded-full
                flex items-center justify-center text-[10px] lg:text-xs font-bold
                border-[2px] border-white shadow-md transition-all duration-300
                ${isActive
                  ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white'
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

        {/* Step label and mini description */}
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`
                text-sm lg:text-base font-bold transition-all duration-300
                ${isActive ? 'text-blue-600' : isCompleted ? 'text-blue-500' : 'text-slate-600 group-hover:text-slate-800'}
              `}
            >
              {step.label}
            </span>
            {isActive && (
              <ChevronRight className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            )}
          </div>
          <p
            className={`
              text-[11px] lg:text-xs line-clamp-1 transition-all duration-300
              ${isActive ? 'text-blue-600/70' : 'text-slate-400 group-hover:text-slate-500'}
            `}
          >
            {step.title}
          </p>
        </div>
      </button>
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
            src={getAssetPath(src)}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        ) : (
          <img
            key={stepId}
            src={getAssetPath(src)}
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
// Right Panel Content Component
// ============================================================================
interface RightPanelContentProps {
  step: ProcessStep;
}

const RightPanelContent: React.FC<RightPanelContentProps> = ({ step }) => {
  return (
    <div key={step.id} className="animate-fadeIn">
      {/* Step badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200/60 shadow-sm w-fit mb-3">
        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
          Step {String(step.id).padStart(2, '0')}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          {step.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-slate-800 leading-tight tracking-tight mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {step.description}
      </p>

      {/* Media Container - Compact */}
      <div className="mb-4">
        <div className="relative group max-w-[520px]">
          {/* Gradient border container */}
          <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-500/50 via-blue-400/40 to-blue-600/50 rounded-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300 ease-out" />

          {/* Media wrapper */}
          <div className="relative bg-slate-900 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/10 z-10 pointer-events-none" />

            {step.mediaType === 'video' ? (
              <video
                key={step.id}
                src={getAssetPath(step.mediaSrc)}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            ) : (
              <img
                key={step.id}
                src={getAssetPath(step.mediaSrc)}
                alt=""
                className="w-full aspect-video object-cover opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            )}

            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 z-20">
              <div className="flex items-center gap-1 px-2 py-0.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                <div className={`w-1.5 h-1.5 rounded-full ${step.mediaType === 'video' ? 'bg-blue-400 animate-pulse' : 'bg-blue-300'}`} />
                <span className="text-[9px] font-medium text-white/90 uppercase tracking-wider">
                  {step.mediaType === 'video' ? 'Live' : 'Preview'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolkit section - 2x2 grid compact */}
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-2">
          Capabilities
        </p>
        <div className="grid grid-cols-2 gap-2">
          {step.toolkit.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  bg-white/70 backdrop-blur-sm border border-slate-100
                  hover:bg-white hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:border-blue-100
                  transition-all duration-300 ease-out group/item cursor-default
                "
              >
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100/60 flex items-center justify-center flex-shrink-0 group-hover/item:border-blue-200 transition-colors duration-300">
                  <Icon className="w-3.5 h-3.5 text-blue-600" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Mobile Horizontal Steps (for small screens)
// ============================================================================
interface MobileStepsProps {
  activeStepId: number;
  onStepClick: (id: number) => void;
}

const MobileSteps: React.FC<MobileStepsProps> = ({ activeStepId, onStepClick }) => {
  return (
    <div className="lg:hidden mb-6">
      <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex items-center gap-2 min-w-max">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStepId === step.id;
            const isCompleted = step.id < activeStepId;

            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => onStepClick(step.id)}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300
                    ${isActive
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : isCompleted
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span className="text-xs font-semibold">{step.label}</span>
                </button>
                {index < processSteps.length - 1 && (
                  <div className={`w-4 h-0.5 rounded-full ${isCompleted ? 'bg-blue-400' : 'bg-slate-200'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Process Flow Component - Left-Right Layout
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
      {/* Mobile horizontal steps */}
      <MobileSteps activeStepId={activeStepId} onStepClick={handleStepClick} />

      {/* ================================================================ */}
      {/* MAIN LAYOUT - Left Steps | Right Content */}
      {/* ================================================================ */}
      <div className="relative grid lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] 3xl:grid-cols-[420px_1fr] gap-6 lg:gap-10 xl:gap-12 items-start">

        {/* ============================================================ */}
        {/* LEFT SIDE - Vertical Timeline Steps */}
        {/* ============================================================ */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            {/* Steps container with subtle background */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-50/80 via-white to-blue-50/30 border border-slate-200/60 p-5 lg:p-6 shadow-sm">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none rounded-tl-3xl" />

              {/* Steps list */}
              <div className="relative space-y-1">
                {processSteps.map((step, index) => (
                  <VerticalStepItem
                    key={step.id}
                    step={step}
                    index={index}
                    isActive={activeStepId === step.id}
                    isCompleted={step.id < activeStepId}
                    isLast={index === processSteps.length - 1}
                    onClick={() => handleStepClick(step.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT SIDE - Content Panel - Match left side height */}
        {/* ============================================================ */}
        <div className="relative">
          {/* Container with gradient background */}
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-slate-50/80 to-blue-50/30 border border-slate-200/60 shadow-[0_0_40px_rgba(59,130,246,0.06)] overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.04)_0%,transparent_60%)] pointer-events-none" />

            {/* Panel content with transition */}
            <div
              className={`
                relative px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-6
                transition-opacity duration-150 ease-out
                ${isTransitioning ? 'opacity-0' : 'opacity-100'}
              `}
            >
              <RightPanelContent step={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowHorizontal;
