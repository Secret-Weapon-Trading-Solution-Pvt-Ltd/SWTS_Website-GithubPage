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
  Clock
} from 'lucide-react';
import ContactCTA from '@/components/ui/ContactCTA';

interface HowItWorksFlowProps {
  service: Service;
}

/**
 * Elevated How It Works Flow
 * - Animated data pulse through pipeline
 * - Directional motion (left to right)
 * - Asymmetric hierarchy for key steps
 */

// Icon mapping for steps
const stepIcons = [
  MessageSquare, // Discovery
  FileText,      // Specification
  Code,          // Development
  FlaskConical,  // Testing
  PlayCircle,    // Paper Trading
  Rocket         // Deployment
];

// Key steps get more emphasis
const keySteps = [2, 5]; // Development and Deployment

export default function HowItWorksFlow({ service }: HowItWorksFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const flowProgress = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="flow-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-navy-900" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flow-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-100 text-black text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Your Journey with Us
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A transparent, structured process designed for successful outcomes.
            Every project follows this proven methodology.
          </p>
        </motion.div>

        {/* Flow diagram - Desktop horizontal layout */}
        <div className="hidden lg:block relative">
          {/* Connecting line background - positioned at center of circles (top-7 = 1.75rem, half of w-14) */}
          <div className="absolute top-7 left-[5%] right-[5%] h-0.5 bg-navy-200 rounded-full" />

          {/* Animated data pulse through pipeline - signature element */}
          <motion.div
            className="absolute top-7 left-[5%] w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
            animate={{ x: ['0%', '1400%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-7 left-[5%] h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-teal-500 rounded-full"
            style={{ width: flowProgress }}
          />

          {/* Flow nodes */}
          <div className="relative flex justify-between px-[2%]">
            {service.howItWorks.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isKey = keySteps.includes(step.step);
              const isLast = index === service.howItWorks.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col items-center ${isKey ? 'w-[18%]' : 'w-[14%]'}`}
                >
                  {/* Node circle - key steps are bigger */}
                  <motion.div
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="relative z-10 group cursor-pointer"
                  >
                    {/* Animated ring for key steps */}
                    {isKey && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-3 bg-violet-500/20 rounded-full"
                      />
                    )}

                    {/* Outer glow ring */}
                    <div className={`absolute rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isLast ? '-inset-3 bg-teal-500/40' : '-inset-2 bg-violet-500/30'
                    }`} />

                    {/* Main circle */}
                    <div className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                      isLast
                        ? 'w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30'
                        : isKey
                        ? 'w-18 h-18 bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30'
                        : 'w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 shadow-md shadow-violet-500/20'
                    }`} style={isKey && !isLast ? { width: '4.5rem', height: '4.5rem' } : {}}>
                      <Icon className={`text-white ${isLast ? 'w-9 h-9' : isKey ? 'w-8 h-8' : 'w-6 h-6'}`} strokeWidth={1.5} />
                    </div>

                    {/* Step number badge */}
                    <div className={`absolute -top-1 -right-1 rounded-full bg-white flex items-center justify-center ${
                      isKey ? 'w-7 h-7 border-2 border-violet-500' : 'w-5 h-5 border border-violet-400'
                    }`}>
                      <span className={`font-bold text-violet-600 ${isKey ? 'text-sm' : 'text-xs'}`}>{step.step}</span>
                    </div>
                  </motion.div>

                  {/* Content below - key steps have more emphasis */}
                  <div className={`mt-5 text-center ${isKey ? 'mt-6' : ''}`}>
                    <h3 className={`font-bold text-navy-900 mb-1.5 ${isKey ? 'text-base' : 'text-sm'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-black leading-snug mb-2 ${isKey ? 'text-sm' : 'text-xs'}`}>
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className={`inline-flex items-center gap-1 text-black ${isKey ? 'text-xs' : 'text-[10px]'}`}>
                        <Clock className={`${isKey ? 'w-3 h-3' : 'w-2.5 h-2.5'}`} />
                        {step.duration}
                      </span>
                    )}
                  </div>

                  {/* Directional arrow between nodes */}
                  {!isLast && (
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute top-6 -right-3 text-violet-400 z-20 text-lg"
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Flow diagram - Mobile/Tablet vertical layout */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-navy-100" />
          <motion.div
            className="absolute left-8 top-8 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-teal-500"
            style={{ height: flowProgress }}
          />

          <div className="space-y-12">
            {service.howItWorks.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-violet-500 flex items-center justify-center">
                      <span className="text-xs font-bold text-violet-600">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-black leading-relaxed mb-2">
                      {step.description}
                    </p>
                    {step.duration && (
                      <span className="inline-flex items-center gap-1 text-sm text-black">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Completion indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-navy-50 to-white rounded-2xl border border-navy-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-black">End result</p>
              <p className="text-lg font-bold text-navy-900">Your strategy, automated and live</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <ContactCTA buttonText="Start Your Journey" />
        </motion.div>
      </div>
    </section>
  );
}
