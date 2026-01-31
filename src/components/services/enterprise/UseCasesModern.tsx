'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { TrendingUp, Tag, ArrowRight, Sparkles, Quote, CheckCircle } from 'lucide-react';

interface UseCasesModernProps {
  service: Service;
}

// Modern abstract graphics for use cases
const CaseGraphics = [
  // Breakout Pattern
  () => (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="case1grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
        <linearGradient id="case1bg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      <rect fill="url(#case1bg)" width="300" height="200" rx="16"/>
      {/* Resistance line */}
      <line x1="30" y1="60" x2="200" y2="60" stroke="#94A3B8" strokeWidth="2" strokeDasharray="5,5"/>
      {/* Price bars */}
      <rect x="40" y="80" width="25" height="70" rx="4" fill="url(#case1grad)" opacity="0.3"/>
      <rect x="75" y="70" width="25" height="80" rx="4" fill="url(#case1grad)" opacity="0.4"/>
      <rect x="110" y="65" width="25" height="85" rx="4" fill="url(#case1grad)" opacity="0.5"/>
      <rect x="145" y="60" width="25" height="90" rx="4" fill="url(#case1grad)" opacity="0.6"/>
      {/* Breakout candle */}
      <rect x="180" y="30" width="30" height="120" rx="4" fill="url(#case1grad)"/>
      {/* Arrow indicating breakout */}
      <path d="M220 50 L250 30 L250 45 L270 45 L270 55 L250 55 L250 70 Z" fill="#10B981"/>
      {/* Sparkles */}
      <circle cx="260" cy="25" r="4" fill="#10B981" opacity="0.6"/>
      <circle cx="275" cy="35" r="3" fill="#10B981" opacity="0.4"/>
    </svg>
  ),
  // Mean Reversion
  () => (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="case2grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
        <linearGradient id="case2bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      <rect fill="url(#case2bg)" width="300" height="200" rx="16"/>
      {/* Mean line */}
      <line x1="20" y1="100" x2="280" y2="100" stroke="url(#case2grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.5"/>
      {/* Bands */}
      <path d="M20 60 Q80 60, 150 60 T280 60" stroke="#94A3B8" strokeWidth="1" fill="none" strokeDasharray="4,4"/>
      <path d="M20 140 Q80 140, 150 140 T280 140" stroke="#94A3B8" strokeWidth="1" fill="none" strokeDasharray="4,4"/>
      {/* Price wave */}
      <path d="M20 100 Q60 50, 100 100 T180 100 T260 100" stroke="url(#case2grad)" strokeWidth="3" fill="none"/>
      {/* Entry points */}
      <circle cx="60" cy="65" r="8" fill="url(#case2grad)"/>
      <circle cx="140" cy="135" r="8" fill="url(#case2grad)"/>
      {/* Arrows */}
      <path d="M60 80 L60 95" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <path d="M140 120 L140 105" stroke="#10B981" strokeWidth="2"/>
      {/* Labels */}
      <text x="65" y="60" fill="#3B82F6" fontSize="10" fontWeight="bold">SELL</text>
      <text x="145" y="150" fill="#3B82F6" fontSize="10" fontWeight="bold">BUY</text>
    </svg>
  ),
  // Options Greeks
  () => (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="case3grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#6366F1"/>
        </linearGradient>
        <linearGradient id="case3bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.05"/>
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      <rect fill="url(#case3bg)" width="300" height="200" rx="16"/>
      {/* Central hub */}
      <circle cx="150" cy="100" r="40" fill="url(#case3grad)" opacity="0.2"/>
      <circle cx="150" cy="100" r="30" fill="url(#case3grad)"/>
      <text x="150" y="105" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">OPTIONS</text>
      {/* Greeks orbiting */}
      <g>
        <circle cx="80" cy="60" r="20" fill="white" stroke="url(#case3grad)" strokeWidth="2"/>
        <text x="80" y="65" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">Δ</text>
        <line x1="98" y1="70" x2="125" y2="85" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4,4"/>
      </g>
      <g>
        <circle cx="220" cy="60" r="20" fill="white" stroke="url(#case3grad)" strokeWidth="2"/>
        <text x="220" y="65" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">Γ</text>
        <line x1="202" y1="70" x2="175" y2="85" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4,4"/>
      </g>
      <g>
        <circle cx="80" cy="140" r="20" fill="white" stroke="url(#case3grad)" strokeWidth="2"/>
        <text x="80" y="145" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">θ</text>
        <line x1="98" y1="130" x2="125" y2="115" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4,4"/>
      </g>
      <g>
        <circle cx="220" cy="140" r="20" fill="white" stroke="url(#case3grad)" strokeWidth="2"/>
        <text x="220" y="145" textAnchor="middle" fill="#8B5CF6" fontSize="12" fontWeight="bold">V</text>
        <line x1="202" y1="130" x2="175" y2="115" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4,4"/>
      </g>
      {/* Speed indicator */}
      <path d="M250 170 L270 160 L270 180 Z" fill="#10B981"/>
      <text x="265" y="185" fill="#10B981" fontSize="8" fontWeight="bold">FAST</text>
    </svg>
  ),
];

export default function UseCasesModern({ service }: UseCasesModernProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.1, 1, 1.1], rotate: [5, 0, 5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Real Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
            Case Studies & Outcomes
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Real strategies we've automated for traders like you, with measurable results
          </p>
        </motion.div>

        {/* Use case cards */}
        <div className="space-y-12">
          {service.useCases.map((useCase, index) => {
            const isEven = index % 2 === 0;
            const Graphic = CaseGraphics[index % CaseGraphics.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-500`}>
                  {/* Visual panel */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="lg:w-2/5 relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50"
                  >
                    {/* Case number */}
                    <div className={`absolute top-6 ${isEven ? 'left-6' : 'right-6'}`}>
                      <span className="text-7xl font-bold text-blue-100">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Graphic */}
                    <div className="relative w-full max-w-sm">
                      <Graphic />
                    </div>
                  </motion.div>

                  {/* Content panel */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {useCase.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + tagIndex * 0.1 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-black leading-relaxed mb-8">
                      {useCase.description}
                    </p>

                    {/* Outcome highlight */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="relative bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100"
                    >
                      {/* Success badge */}
                      <div className="absolute -top-3 left-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          RESULT
                        </span>
                      </div>

                      <div className="flex items-start gap-4 pt-2">
                        <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-lg font-semibold text-navy-900 leading-relaxed">
                          {useCase.outcome}
                        </p>
                      </div>
                    </motion.div>

                    {/* Link */}
                    <motion.a
                      href="/projects"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 mt-6 text-blue-600 font-semibold group"
                    >
                      <span>View detailed case study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom section - Stats or testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="case-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#case-pattern)" />
              </svg>
            </div>

            <div className="relative">
              <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
              <p className="text-2xl lg:text-3xl font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                "Our manual trading took hours. Now our strategy runs automatically while we focus on research and new opportunities."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl font-bold">A</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Algorithmic Trader</p>
                  <p className="text-sm text-blue-200">Strategy Automation Client</p>
                </div>
              </div>
            </div>
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
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-800 text-white rounded-xl font-semibold hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl group"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
