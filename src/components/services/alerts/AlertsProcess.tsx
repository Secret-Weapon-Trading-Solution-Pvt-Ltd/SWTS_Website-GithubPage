'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import {
  FileText,
  Code,
  Plug,
  Eye,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface AlertsProcessProps {
  service: Service;
}

// Step-specific colors
const stepColors = [
  { from: 'from-amber-500', to: 'to-orange-500', shadow: 'shadow-amber-500/30', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
  { from: 'from-blue-500', to: 'to-indigo-500', shadow: 'shadow-blue-500/30', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  { from: 'from-violet-500', to: 'to-purple-500', shadow: 'shadow-violet-500/30', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600' },
  { from: 'from-emerald-500', to: 'to-teal-500', shadow: 'shadow-emerald-500/30', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Define Your Triggers",
    description: "We document exactly what conditions should fire an alert—every indicator, every threshold.",
    duration: "1 session",
    icon: FileText,
  },
  {
    step: 2,
    title: "Build Alert Logic",
    description: "We code your custom alert system with all your conditions and multi-timeframe logic.",
    duration: "1-4 weeks",
    icon: Code,
  },
  {
    step: 3,
    title: "Connect Channels",
    description: "Set up your preferred notification channels—Telegram, WhatsApp, email, or webhook.",
    duration: "1-2 days",
    icon: Plug,
  },
  {
    step: 4,
    title: "Go Live",
    description: "Your alerts run 24/7 with ongoing support and optimization.",
    duration: "Ongoing",
    icon: Eye,
  }
];

// SVG illustrations for each step
const StepIllustrations = [
  // Step 1 - Define triggers
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="alertStep1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B"/>
          <stop offset="100%" stopColor="#EA580C"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#alertStep1)" opacity="0.1"/>
      <rect x="30" y="25" width="60" height="70" rx="6" fill="white" stroke="url(#alertStep1)" strokeWidth="2"/>
      <rect x="38" y="35" width="44" height="4" rx="2" fill="url(#alertStep1)" opacity="0.6"/>
      <rect x="38" y="45" width="36" height="3" rx="1.5" fill="url(#alertStep1)" opacity="0.4"/>
      <rect x="38" y="55" width="40" height="3" rx="1.5" fill="url(#alertStep1)" opacity="0.4"/>
      <rect x="38" y="70" width="20" height="16" rx="3" fill="url(#alertStep1)"/>
      <path d="M44 78l4 4 8-8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  ),
  // Step 2 - Build logic
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="alertStep2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#alertStep2)" opacity="0.1"/>
      <rect x="25" y="30" width="70" height="60" rx="6" fill="white" stroke="url(#alertStep2)" strokeWidth="2"/>
      <rect x="25" y="30" width="70" height="15" rx="6" fill="url(#alertStep2)"/>
      <circle cx="35" cy="37.5" r="3" fill="white" opacity="0.5"/>
      <circle cx="45" cy="37.5" r="3" fill="white" opacity="0.5"/>
      <circle cx="55" cy="37.5" r="3" fill="white" opacity="0.5"/>
      <text x="33" y="58" fill="#3B82F6" fontSize="8" fontFamily="monospace">{"if (RSI < 30)"}</text>
      <text x="37" y="68" fill="#6366F1" fontSize="8" fontFamily="monospace">{"  alert()"}</text>
      <text x="33" y="80" fill="#3B82F6" fontSize="8" fontFamily="monospace">{"}"}</text>
    </svg>
  ),
  // Step 3 - Connect channels
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="alertStep3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#A855F7"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#alertStep3)" opacity="0.1"/>
      <circle cx="60" cy="60" r="20" fill="url(#alertStep3)"/>
      <path d="M55 55v10m10 0v-10m-5 5h-5m10 0h-5" stroke="white" strokeWidth="2"/>
      <circle cx="30" cy="35" r="12" fill="white" stroke="url(#alertStep3)" strokeWidth="2"/>
      <circle cx="90" cy="35" r="12" fill="white" stroke="url(#alertStep3)" strokeWidth="2"/>
      <circle cx="30" cy="85" r="12" fill="white" stroke="url(#alertStep3)" strokeWidth="2"/>
      <circle cx="90" cy="85" r="12" fill="white" stroke="url(#alertStep3)" strokeWidth="2"/>
      <line x1="45" y1="50" x2="38" y2="42" stroke="url(#alertStep3)" strokeWidth="2" strokeDasharray="3,2"/>
      <line x1="75" y1="50" x2="82" y2="42" stroke="url(#alertStep3)" strokeWidth="2" strokeDasharray="3,2"/>
      <line x1="45" y1="70" x2="38" y2="78" stroke="url(#alertStep3)" strokeWidth="2" strokeDasharray="3,2"/>
      <line x1="75" y1="70" x2="82" y2="78" stroke="url(#alertStep3)" strokeWidth="2" strokeDasharray="3,2"/>
    </svg>
  ),
  // Step 4 - Go live
  () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <defs>
        <linearGradient id="alertStep4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#14B8A6"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="url(#alertStep4)" opacity="0.1"/>
      <circle cx="60" cy="60" r="35" fill="white" stroke="url(#alertStep4)" strokeWidth="3"/>
      <circle cx="60" cy="60" r="25" fill="url(#alertStep4)" opacity="0.2"/>
      <circle cx="60" cy="60" r="8" fill="url(#alertStep4)">
        <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="60" r="18" fill="none" stroke="url(#alertStep4)" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="60" y="95" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">LIVE</text>
    </svg>
  ),
];

export default function AlertsProcess({ service }: AlertsProcessProps) {
  return (
    <section
      id="how-it-works"
      className="py-14 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-80 h-80 bg-gradient-to-tr from-orange-100 to-amber-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 text-amber-700 rounded-full text-sm font-semibold mb-6 border border-amber-200/50 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            Our Proven Process
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-amber-800 to-navy-900 bg-clip-text text-transparent">From Idea to</span>
            {' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">Live Alerts</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A simple process that transforms your trading conditions into 24/7 automated alerts
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block relative mb-10">
          {/* Progress line */}
          <div className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-amber-300 via-blue-300 via-violet-300 to-emerald-300 rounded-full" />
          <motion.div
            className="absolute top-[120px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-amber-500 via-blue-500 via-violet-500 to-emerald-500 rounded-full"
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
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${colors.from} ${colors.to} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {step.step}
                  </span>
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
              Never Miss a Setup Again
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Your alerts running 24/7, keeping you informed while you live your life
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 group"
          >
            <span>Get Your Custom Alerts</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
