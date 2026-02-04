'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  ChevronLeft,
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
    title: 'Strategy Understanding',
    description:
      'We connect with the client through an online meeting, understand every detail of the strategy or project requirement, discuss rules, logic, and expectations clearly. Based on this, we create a detailed document together.',
    mediaSrc: '/Asses.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: ClipboardList, label: 'Project Details' },
      { icon: Settings, label: 'Defining Rules' },
      { icon: Layers, label: 'Platform Selection' },
      { icon: Target, label: 'Scope Finalization' },
    ],
  },
  {
    id: 2,
    icon: Search,
    label: 'Analyze',
    title: 'Quotation to Client',
    description:
      'Once the document is ready, we review all requirements internally. We analyze the effort, complexity, and technical needs of the project. Then we prepare a clear quotation for the client. The quotation includes pricing and project timeline.',
    mediaSrc: '/analyze_new.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: ClipboardList, label: 'Requirement Analysis' },
      { icon: Activity, label: 'Effort Estimation' },
      { icon: BarChart3, label: 'Timeline Planning' },
      { icon: CheckCircle2, label: 'Quote Approval' },
    ],
  },
  {
    id: 3,
    icon: PenTool,
    label: 'Design',
    title: 'Strategy Architecture',
    description:
      'After the client approves the quotation, we move to the design phase. We plan the full architecture of the strategy or system. This includes data flow, logic structure, and execution process. The goal is to keep the system stable and scalable.',
    mediaSrc: '/design_new.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: GitBranch, label: 'Logic Structure' },
      { icon: Activity, label: 'Data Flow' },
      { icon: Zap, label: 'Execution Flow' },
      { icon: Layers, label: 'Architecture Planning' },
    ],
  },
  {
    id: 4,
    icon: Code,
    label: 'Build',
    title: 'System Development',
    description:
      'Once the design is finalized, our team starts development. We build the system step by step as per the approved plan. During development, we stay in regular touch with the client. We clear doubts and share progress updates continuously.',
    mediaSrc: '/build.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: Code, label: 'Code Development' },
      { icon: Layers, label: 'Module Integration' },
      { icon: Eye, label: 'Client Reviews' },
      { icon: RefreshCw, label: 'Progress Updates' },
    ],
  },
  {
    id: 5,
    icon: TestTube,
    label: 'Test',
    title: 'Rigorous Validation',
    description:
      'After development is completed, we begin testing the system. First, testing is done on our side using paper trading or small capital. We check all scenarios to ensure the system works correctly. Once verified, we hand over the system to the client for real-account testing.',
    mediaSrc: '/Testing.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: TestTube, label: 'Internal Testing' },
      { icon: Play, label: 'Paper Trading' },
      { icon: Settings, label: 'Issue Fixing' },
      { icon: CheckCircle2, label: 'Client Testing' },
    ],
  },
  {
    id: 6,
    icon: Rocket,
    label: 'Deploy',
    title: 'Deploy & Monitor',
    description:
      'After successful testing and client approval, we deploy the system. Deployment is done on the client\'s local PC or server as required. We ensure everything is set up properly and runs smoothly. Post-deployment support is provided if needed.',
    mediaSrc: '/deployment.mp4',
    mediaType: 'video',
    toolkit: [
      { icon: Rocket, label: 'Deployment Setup' },
      { icon: Database, label: 'Server Setup' },
      { icon: Zap, label: 'Go-Live Support' },
      { icon: Eye, label: 'Ongoing Monitoring' },
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
                stroke="#14b8a6"
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
            ${isActive ? 'bg-teal-400/25 blur-xl opacity-100' : 'opacity-0'}
          `}
        />

        {/* Main circle */}
        <div
          className={`
            relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full
            flex items-center justify-center border-[3px]
            transition-all duration-300 ease-out
            ${isActive
              ? 'bg-gradient-to-br from-teal-500 to-teal-600 border-teal-300 scale-110 shadow-2xl shadow-teal-500/40'
              : isCompleted
                ? 'bg-gradient-to-br from-teal-400 to-teal-500 border-teal-300/60 shadow-lg shadow-teal-500/20'
                : 'bg-white border-slate-200 group-hover:border-teal-300 group-hover:bg-teal-50/50 shadow-md'
            }
          `}
        >
          <Icon
            className={`
              w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300
              ${isActive || isCompleted ? 'text-white' : 'text-slate-800 group-hover:text-teal-500'}
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
                ? 'bg-gradient-to-br from-teal-400 to-teal-600 text-white'
                : isCompleted
                  ? 'bg-teal-400 text-white'
                  : 'bg-slate-100 text-slate-900 group-hover:bg-teal-100 group-hover:text-teal-600'
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
          ${isActive ? 'text-teal-600' : isCompleted ? 'text-teal-500' : 'text-slate-900 group-hover:text-slate-700'}
        `}
      >
        {step.label}
      </span>

      {/* Mini title - hidden on small screens */}
      <span
        className={`
          hidden sm:block text-xs lg:text-sm mt-1 transition-all duration-300 text-center max-w-[120px] lg:max-w-[150px]
          ${isActive ? 'text-teal-500/80' : 'text-slate-800'}
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
            bg-gradient-to-r from-teal-400 to-teal-500
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
      <div className="relative bg-gradient-to-br from-white via-slate-50/80 to-teal-50/40 rounded-3xl border border-slate-200/60 shadow-xl shadow-teal-500/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.06)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* Grid layout - Media left, Content right on large screens */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: Media */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Gradient border */}
                <div className="absolute -inset-[3px] bg-gradient-to-br from-teal-500/60 via-teal-400/50 to-cyan-500/60 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

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
                      <div className={`w-2.5 h-2.5 rounded-full ${step.mediaType === 'video' ? 'bg-teal-400 animate-pulse' : 'bg-teal-300'}`} />
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
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-teal-100/60 border border-teal-200/70 shadow-sm mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                  Step {String(step.id).padStart(2, '0')}
                </span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                  {step.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight tracking-tight mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed mb-8">
                {step.description}
              </p>

              {/* Capabilities Grid */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 mb-4">
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
                        "
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-100/80 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-teal-600" strokeWidth={1.75} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="w-full">
      {/* ================================================================ */}
      {/* Horizontal Process Steps - Full Width */}
      {/* ================================================================ */}
      <div className="mb-8 lg:mb-12 w-full relative">
        {/* Left scroll arrow - mobile only */}
        <button
          onClick={scrollLeft}
          className={`
            absolute left-0 top-[85px] z-20 md:hidden
            w-9 h-9 rounded-full bg-white/95 shadow-lg border border-slate-200
            flex items-center justify-center
            transition-all duration-200
            ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}
          `}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-slate-900" />
        </button>

        {/* Right scroll arrow - mobile only */}
        <button
          onClick={scrollRight}
          className={`
            absolute right-0 top-[85px] z-20 md:hidden
            w-9 h-9 rounded-full bg-white/95 shadow-lg border border-slate-200
            flex items-center justify-center
            transition-all duration-200
            ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
          `}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-slate-900" />
        </button>

        {/* Gradient fade on edges - mobile only */}
        <div className={`absolute left-0 top-5 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute right-0 top-5 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className="flex items-start justify-start md:justify-between w-full overflow-x-auto md:overflow-visible scrollbar-hide px-2 md:px-0 pt-5 -mt-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex-shrink-0">
                <HorizontalStepButton
                  step={step}
                  index={index}
                  isActive={activeStepId === step.id}
                  isCompleted={step.id < activeStepId}
                  onClick={() => handleStepClick(step.id)}
                />
              </div>
              {index < processSteps.length - 1 && (
                <div className="flex-shrink-0 w-8 sm:w-12 md:flex-1">
                  <ConnectorLine isCompleted={step.id < activeStepId} />
                </div>
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
