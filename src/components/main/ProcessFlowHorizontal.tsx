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
  ArrowRight,
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
// Horizontal Step Button Component
// ============================================================================
interface HorizontalStepProps {
  step: ProcessStep;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const HorizontalStepButton: React.FC<HorizontalStepProps> = ({
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
      className={`
        relative flex flex-col items-center group outline-none
        transition-all duration-300 ease-out px-2 sm:px-4 lg:px-6
      `}
    >
      {/* Circle with icon */}
      <div className="relative mb-3">
        {/* Animated ring for active state */}
        {isActive && (
          <div className="absolute -inset-3 rounded-full spin-slow-animation">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}

        {/* Glow effect */}
        <div
          className={`
            absolute -inset-4 rounded-full transition-all duration-500
            ${isActive ? 'bg-blue-400/25 blur-xl opacity-100' : 'opacity-0'}
          `}
        />

        {/* Main circle */}
        <div
          className={`
            relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full
            flex items-center justify-center border-[3px]
            transition-all duration-300 ease-out
            ${isActive
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-300 scale-110 shadow-2xl shadow-blue-500/40'
              : isCompleted
                ? 'bg-gradient-to-br from-blue-400 to-blue-500 border-blue-300/60 shadow-lg shadow-blue-500/20'
                : 'bg-white border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50/50 shadow-md'
            }
          `}
        >
          <Icon
            className={`
              w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300
              ${isActive || isCompleted ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'}
            `}
            strokeWidth={1.5}
          />

          {/* Step number badge */}
          <div
            className={`
              absolute -top-1 -right-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full
              flex items-center justify-center text-xs sm:text-sm font-bold
              border-[3px] border-white shadow-lg transition-all duration-300
              ${isActive
                ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white'
                : isCompleted
                  ? 'bg-blue-400 text-white'
                  : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
              }
            `}
          >
            {index + 1}
          </div>
        </div>
      </div>

      {/* Step label */}
      <span
        className={`
          text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 text-center
          ${isActive ? 'text-blue-600' : isCompleted ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-700'}
        `}
      >
        {step.label}
      </span>

      {/* Mini title - hidden on small screens */}
      <span
        className={`
          hidden sm:block text-xs lg:text-sm mt-1 transition-all duration-300 text-center max-w-[120px] lg:max-w-[150px]
          ${isActive ? 'text-blue-500/80' : 'text-slate-400'}
        `}
      >
        {step.title}
      </span>
    </button>
  );
};

// ============================================================================
// Connector Line Between Steps
// ============================================================================
interface ConnectorLineProps {
  isCompleted: boolean;
}

const ConnectorLine: React.FC<ConnectorLineProps> = ({ isCompleted }) => {
  return (
    <div className="flex-1 flex items-center self-start mt-8 sm:mt-10 lg:mt-12">
      <div className="relative w-full h-[3px] rounded-full bg-slate-200 overflow-hidden">
        <div
          className={`
            absolute inset-y-0 left-0 rounded-full transition-all duration-500 ease-out
            bg-gradient-to-r from-blue-400 to-blue-500
            ${isCompleted ? 'w-full' : 'w-0'}
          `}
        />
      </div>
    </div>
  );
};

// ============================================================================
// Content Panel Component
// ============================================================================
interface ContentPanelProps {
  step: ProcessStep;
  isTransitioning: boolean;
}

const ContentPanel: React.FC<ContentPanelProps> = ({ step, isTransitioning }) => {
  return (
    <div
      className={`
        transition-all duration-300 ease-out
        ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
      `}
    >
      {/* Full width content card */}
      <div className="relative bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40 rounded-3xl border border-slate-200/60 shadow-xl shadow-blue-500/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.06)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* Grid layout - Media left, Content right on large screens */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Media */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Gradient border */}
                <div className="absolute -inset-[3px] bg-gradient-to-br from-blue-500/60 via-blue-400/50 to-indigo-500/60 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Media container */}
                <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20 z-10 pointer-events-none" />

                  {step.mediaType === 'video' ? (
                    <video
                      key={step.id}
                      src={getAssetPath(step.mediaSrc)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <img
                      key={step.id}
                      src={getAssetPath(step.mediaSrc)}
                      alt={step.title}
                      className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  )}

                  {/* Status badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                      <div className={`w-2.5 h-2.5 rounded-full ${step.mediaType === 'video' ? 'bg-blue-400 animate-pulse' : 'bg-blue-300'}`} />
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        {step.mediaType === 'video' ? 'Live Preview' : 'Preview'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              {/* Step badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100/60 border border-blue-200/70 shadow-sm mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Step {String(step.id).padStart(2, '0')}
                </span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {step.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight tracking-tight mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                {step.description}
              </p>

              {/* Capabilities Grid */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Capabilities
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {step.toolkit.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="
                          flex items-center gap-3 px-4 py-3 rounded-xl
                          bg-white/80 backdrop-blur-sm border border-slate-100
                          hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200
                          transition-all duration-300 ease-out group/item
                        "
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover/item:border-blue-200 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Process Flow Component - Horizontal Layout
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
      }, 200);
    }
  };

  return (
    <div className="w-full">
      {/* ================================================================ */}
      {/* Horizontal Process Steps - Full Width */}
      {/* ================================================================ */}
      <div className="mb-8 lg:mb-12 w-full">
        <div className="flex items-start justify-between w-full">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <HorizontalStepButton
                step={step}
                index={index}
                isActive={activeStepId === step.id}
                isCompleted={step.id < activeStepId}
                onClick={() => handleStepClick(step.id)}
              />
              {index < processSteps.length - 1 && (
                <ConnectorLine isCompleted={step.id < activeStepId} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ================================================================ */}
      {/* Content Panel - Full Width */}
      {/* ================================================================ */}
      <ContentPanel step={activeStep} isTransitioning={isTransitioning} />
    </div>
  );
};

export default ProcessFlowHorizontal;
