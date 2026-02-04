'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import {
  Search,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface DashboardProcessProps {
  service: Service;
}

// Step-specific gradient colors
const stepColors = [
  { from: 'from-slate-500', to: 'to-gray-600', shadow: 'shadow-slate-500/30', bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-600' },
  { from: 'from-blue-500', to: 'to-indigo-500', shadow: 'shadow-blue-500/30', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
  { from: 'from-amber-500', to: 'to-orange-500', shadow: 'shadow-amber-500/30', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
];

const processSteps = [
  {
    step: 1,
    title: "Workflow Discovery",
    description: "We analyze your trading workflow to understand your data needs and pain points.",
    duration: "2-3 sessions",
    icon: Search,
  },
  {
    step: 2,
    title: "UX Design",
    description: "Create wireframes and interactive prototypes based on your feedback.",
    duration: "1-2 weeks",
    icon: Palette,
  },
  {
    step: 3,
    title: "Development",
    description: "Build your dashboard with data integrations and real-time updates.",
    duration: "4-8 weeks",
    icon: Code,
  },
  {
    step: 4,
    title: "Launch & Iterate",
    description: "Deploy and continuously refine based on real-world usage.",
    duration: "Ongoing",
    icon: Rocket,
  }
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Workflow Discovery
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="db1grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748B"/>
          <stop offset="100%" stopColor="#475569"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#db1grad)" opacity="0.1"/>
      <circle cx="60" cy="55" r="25" fill="white" stroke="url(#db1grad)" strokeWidth="2"/>
      <circle cx="60" cy="55" r="15" fill="none" stroke="url(#db1grad)" strokeWidth="2" strokeDasharray="4,2"/>
      <line x1="78" y1="73" x2="92" y2="87" stroke="url(#db1grad)" strokeWidth="4" strokeLinecap="round"/>
      <rect x="30" y="85" width="15" height="10" rx="2" fill="url(#db1grad)" opacity="0.5"/>
      <rect x="52" y="85" width="15" height="10" rx="2" fill="url(#db1grad)" opacity="0.6"/>
      <rect x="74" y="85" width="15" height="10" rx="2" fill="url(#db1grad)" opacity="0.7"/>
      <path d="M37 90 L40 87 L43 92" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  // Step 2 - UX Design
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="db2grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#db2grad)" opacity="0.1"/>
      <rect x="25" y="25" width="70" height="55" rx="6" fill="white" stroke="url(#db2grad)" strokeWidth="2"/>
      <rect x="25" y="25" width="70" height="12" rx="6" fill="url(#db2grad)"/>
      <rect x="25" y="33" width="70" height="4" fill="url(#db2grad)"/>
      <circle cx="33" cy="31" r="2.5" fill="#FEF08A"/>
      <circle cx="41" cy="31" r="2.5" fill="#86EFAC"/>
      <circle cx="49" cy="31" r="2.5" fill="#FCA5A5"/>
      <rect x="32" y="45" width="25" height="28" rx="3" fill="url(#db2grad)" opacity="0.2" stroke="url(#db2grad)" strokeWidth="1" strokeDasharray="3,2"/>
      <rect x="62" y="45" width="25" height="12" rx="2" fill="url(#db2grad)" opacity="0.3"/>
      <rect x="62" y="61" width="25" height="12" rx="2" fill="url(#db2grad)" opacity="0.3"/>
      <circle cx="75" cy="95" r="10" fill="url(#db2grad)"/>
      <path d="M72 95 L75 92 L78 95 L75 98 Z" fill="white"/>
    </svg>
  ),
  // Step 3 - Development
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="db3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#db3grad)" opacity="0.1"/>
      <rect x="25" y="30" width="70" height="55" rx="6" fill="white" stroke="url(#db3grad)" strokeWidth="2"/>
      <rect x="25" y="30" width="70" height="12" rx="6" fill="url(#db3grad)"/>
      <rect x="25" y="38" width="70" height="4" fill="url(#db3grad)"/>
      <circle cx="33" cy="36" r="2.5" fill="#FEF08A"/>
      <circle cx="41" cy="36" r="2.5" fill="#86EFAC"/>
      <circle cx="49" cy="36" r="2.5" fill="#FCA5A5"/>
      <text x="32" y="55" fill="#10B981" fontSize="7" fontFamily="monospace">&lt;Dashboard&gt;</text>
      <text x="36" y="64" fill="#14B8A6" fontSize="7" fontFamily="monospace">&lt;Chart/&gt;</text>
      <text x="36" y="73" fill="#14B8A6" fontSize="7" fontFamily="monospace">&lt;Table/&gt;</text>
      <text x="32" y="82" fill="#10B981" fontSize="7" fontFamily="monospace">&lt;/Dashboard&gt;</text>
      <circle cx="85" cy="95" r="10" fill="url(#db3grad)"/>
      <path d="M81 95 L84 92 L84 98 L87 95" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Step 4 - Launch & Iterate
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="db4grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#F97316"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#db4grad)" opacity="0.1"/>
      <path d="M60 20 L70 50 L60 45 L50 50 Z" fill="url(#db4grad)"/>
      <path d="M55 50 L50 80 L60 70 L70 80 L65 50" fill="white" stroke="url(#db4grad)" strokeWidth="2"/>
      <ellipse cx="60" cy="85" rx="25" ry="8" fill="url(#db4grad)" opacity="0.3"/>
      <circle cx="30" cy="45" r="5" fill="url(#db4grad)" opacity="0.4"/>
      <circle cx="90" cy="45" r="5" fill="url(#db4grad)" opacity="0.4"/>
      <circle cx="25" cy="70" r="3" fill="url(#db4grad)" opacity="0.3"/>
      <circle cx="95" cy="70" r="3" fill="url(#db4grad)" opacity="0.3"/>
      <path d="M35 50 L40 45" stroke="url(#db4grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M85 50 L80 45" stroke="url(#db4grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
];

export default function DashboardProcess({ service }: DashboardProcessProps) {
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
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            Our Proven Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-slate-800 to-navy-900 bg-clip-text text-transparent">How We Build</span>
            {' '}
            <span className="text-teal-700">Your Dashboard</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A collaborative process that ensures your dashboard fits your workflow perfectly
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line background */}
          <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-slate-300 via-blue-300 via-emerald-300 to-amber-300 rounded-full" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-slate-500 via-blue-500 via-emerald-500 to-amber-500 rounded-full"
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
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center shadow-lg shadow-slate-500/30 mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-2 text-center">
              Dashboard Live & Evolving
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Your unified trading command center, continuously improving based on your needs
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
            <span>Start Your Dashboard Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
