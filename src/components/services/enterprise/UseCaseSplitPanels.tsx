'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/data/services';
import { TrendingUp, Tag, ArrowRight, Sparkles } from 'lucide-react';

interface UseCaseSplitPanelsProps {
  service: Service;
}

/**
 * Enterprise-grade Use Case Split Panels
 *
 * Design philosophy:
 * - Full-width alternating panels create visual drama
 * - Large abstract graphics replace mundane icons
 * - Content breathes with generous whitespace
 * - Parallax effects create depth
 *
 * Why split panels over cards:
 * - Commands attention through scale
 * - Alternating layout creates rhythm
 * - Room for rich visual storytelling
 * - Feels premium and institutional
 */

// Abstract graphics for each use case
const CaseGraphics = [
  // Momentum - Rising bars with particles
  () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="momentum-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="bar-grad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <rect fill="url(#momentum-grad)" width="400" height="300" rx="20" />
      {/* Rising bars */}
      <rect x="60" y="180" width="40" height="80" rx="4" fill="url(#bar-grad)" opacity="0.4" />
      <rect x="120" y="140" width="40" height="120" rx="4" fill="url(#bar-grad)" opacity="0.5" />
      <rect x="180" y="100" width="40" height="160" rx="4" fill="url(#bar-grad)" opacity="0.7" />
      <rect x="240" y="60" width="40" height="200" rx="4" fill="url(#bar-grad)" opacity="0.85" />
      <rect x="300" y="30" width="40" height="230" rx="4" fill="url(#bar-grad)" />
      {/* Trend line */}
      <path d="M 80 180 Q 160 140, 200 100 T 320 40" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeDasharray="8,4" />
      {/* Particles */}
      <circle cx="320" cy="40" r="8" fill="#A78BFA" />
      <circle cx="330" cy="50" r="4" fill="#C4B5FD" />
      <circle cx="340" cy="35" r="3" fill="#DDD6FE" />
    </svg>
  ),
  // Mean Reversion - Oscillating wave with center line
  () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="reversion-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect fill="url(#reversion-grad)" width="400" height="300" rx="20" />
      {/* Center equilibrium line */}
      <line x1="20" y1="150" x2="380" y2="150" stroke="#14B8A6" strokeWidth="2" strokeDasharray="8,4" opacity="0.5" />
      {/* Oscillating wave */}
      <path
        d="M 20 150 Q 60 80, 100 150 T 180 150 T 260 150 T 340 150 T 380 150"
        stroke="#06B6D4"
        strokeWidth="4"
        fill="none"
      />
      {/* Reversion arrows */}
      <path d="M 60 100 L 70 120 L 50 120 Z" fill="#14B8A6" />
      <path d="M 140 200 L 150 180 L 130 180 Z" fill="#14B8A6" />
      {/* Data points */}
      <circle cx="100" cy="150" r="6" fill="#06B6D4" />
      <circle cx="180" cy="150" r="6" fill="#06B6D4" />
      <circle cx="260" cy="150" r="6" fill="#06B6D4" />
      <circle cx="340" cy="150" r="6" fill="#06B6D4" />
    </svg>
  ),
  // Options Flow - Network/flow visualization
  () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="options-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <rect fill="url(#options-grad)" width="400" height="300" rx="20" />
      {/* Flow lines */}
      <path d="M 60 150 Q 120 100, 200 150" stroke="url(#flow-grad)" strokeWidth="3" fill="none" />
      <path d="M 60 150 Q 120 200, 200 150" stroke="url(#flow-grad)" strokeWidth="3" fill="none" />
      <path d="M 200 150 Q 280 80, 340 100" stroke="url(#flow-grad)" strokeWidth="3" fill="none" />
      <path d="M 200 150 Q 280 220, 340 200" stroke="url(#flow-grad)" strokeWidth="3" fill="none" />
      <path d="M 200 150 L 340 150" stroke="url(#flow-grad)" strokeWidth="3" />
      {/* Nodes */}
      <circle cx="60" cy="150" r="20" fill="#F59E0B" />
      <text x="60" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">$</text>
      <circle cx="200" cy="150" r="25" fill="#F97316" />
      <text x="200" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AI</text>
      <circle cx="340" cy="100" r="15" fill="#FBBF24" />
      <circle cx="340" cy="150" r="15" fill="#FBBF24" />
      <circle cx="340" cy="200" r="15" fill="#FBBF24" />
    </svg>
  ),
];

export default function UseCaseSplitPanels({ service }: UseCaseSplitPanelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-navy-50 to-white relative overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold mb-6 shadow-lg shadow-violet-500/30">
            <Sparkles className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Case Studies & Outcomes
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            These aren't hypotheticals. These are real strategies we've built for traders like you,
            with measurable results that speak for themselves.
          </p>
        </motion.div>
      </div>

      {/* Split panels */}
      <div className="space-y-0">
        {service.useCases.map((useCase, index) => {
          const isEven = index % 2 === 0;
          const Graphic = CaseGraphics[index % CaseGraphics.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative ${index > 0 ? 'border-t border-navy-100' : ''}`}
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Visual panel */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-1/2 relative overflow-hidden"
                >
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] p-8 lg:p-16 flex items-center justify-center bg-gradient-to-br from-navy-50 to-white">
                    {/* Abstract graphic */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="w-full max-w-md"
                    >
                      <Graphic />
                    </motion.div>
                  </div>

                  {/* Case number overlay */}
                  <div className={`absolute top-8 ${isEven ? 'left-8' : 'right-8'}`}>
                    <span className="text-8xl font-bold text-navy-100">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>

                {/* Content panel */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center"
                >
                  <div className="max-w-xl">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {useCase.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-navy-100 text-black text-sm font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-black leading-relaxed mb-8">
                      {useCase.description}
                    </p>

                    {/* Outcome highlight - POWERFUL */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="relative bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-100"
                    >
                      {/* Animated pulse */}
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-teal-500"
                      />

                      <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                        <TrendingUp className="w-4 h-4" />
                        Result Achieved
                      </div>
                      <p className="text-lg font-bold text-navy-900 leading-snug">
                        {useCase.outcome}
                      </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.a
                      href="/projects"
                      whileHover={{ x: 6 }}
                      className="inline-flex items-center gap-2 mt-6 text-violet-600 font-semibold group"
                    >
                      <span>View case study</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center"
      >
        <a
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 bg-navy-800 text-white rounded-xl font-semibold hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl group"
        >
          <span>Explore All Case Studies</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
