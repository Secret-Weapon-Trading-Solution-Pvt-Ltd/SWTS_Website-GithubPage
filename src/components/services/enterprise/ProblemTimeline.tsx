'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';

interface ProblemTimelineProps {
  service: Service;
}

/**
 * Creative Orbital Problems Section
 * - Central trader illustration
 * - Problems orbit around in a circle
 * - Dynamic, memorable design
 */

// Central frustrated trader illustration
const TraderIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Desk */}
    <rect x="30" y="140" width="140" height="8" rx="2" fill="url(#deskGrad)" />

    {/* Monitor */}
    <rect x="60" y="80" width="80" height="55" rx="4" fill="#1E293B" />
    <rect x="65" y="85" width="70" height="42" rx="2" fill="#0F172A" />
    {/* Red chart going down */}
    <path d="M75 105 L90 100 L105 115 L120 108 L130 120" stroke="#EF4444" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="90" y="135" width="20" height="5" rx="1" fill="#374151" />

    {/* Person body */}
    <ellipse cx="100" cy="155" rx="25" ry="15" fill="url(#shirtGrad)" />

    {/* Head */}
    <circle cx="100" cy="60" r="28" fill="url(#skinGrad)" />

    {/* Hair */}
    <ellipse cx="100" cy="42" rx="22" ry="12" fill="#1E293B" />

    {/* Stressed face */}
    <circle cx="90" cy="58" r="3" fill="#1E293B" />
    <circle cx="110" cy="58" r="3" fill="#1E293B" />
    {/* Worried eyebrows */}
    <path d="M84 52 L94 55" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <path d="M116 52 L106 55" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    {/* Frown */}
    <path d="M92 72 Q100 68, 108 72" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Stress lines */}
    <path d="M135 45 L142 42" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M140 52 L148 52" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <path d="M135 59 L142 62" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />

    {/* Question/confusion marks */}
    <text x="55" y="50" fill="#F59E0B" fontSize="16" fontWeight="bold">?</text>
    <text x="145" y="75" fill="#F59E0B" fontSize="12" fontWeight="bold">!</text>
  </svg>
);

// Position angles for 4 items around circle
const orbitPositions = [
  { angle: -45, delay: 0 },    // top-right
  { angle: 45, delay: 0.1 },   // bottom-right
  { angle: 135, delay: 0.2 },  // bottom-left
  { angle: 225, delay: 0.3 },  // top-left
];

export default function ProblemTimeline({ service }: ProblemTimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-rose-500 font-medium text-sm tracking-wider mb-3 uppercase">
            The daily struggle
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900">
            Sound familiar?
          </h2>
        </motion.div>

        {/* Orbital layout - Desktop */}
        <div className="hidden lg:block relative h-[800px]">
          {/* Orbit rings - larger */}
          <div className="absolute top-1/2 left-1/2 w-[720px] h-[720px]" style={{ transform: 'translate(-50%, -50%)' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-navy-200/50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 rounded-full border border-dashed border-rose-200/50"
            />
          </div>

          {/* Center illustration - larger */}
          <div
            className="absolute w-64 h-64 z-10"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full blur-2xl opacity-50" />
              <div className="relative bg-white rounded-full p-6 shadow-xl h-full">
                <TraderIllustration />
              </div>
            </motion.div>
          </div>

          {/* Orbiting problem cards - larger radius */}
          {service.problems.map((problem, index) => {
            const { angle, delay } = orbitPositions[index % orbitPositions.length];
            const radius = 320;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={index}
                className="absolute w-64"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, delay: index * 0.5 },
                      scale: { duration: 0.2 }
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-100 transition-shadow"
                  >
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-base font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-rose-200 to-transparent" />
                    </div>

                    <h3 className="font-semibold text-navy-900 text-base mb-2 leading-snug">
                      {problem.title}
                    </h3>
                    <p className="text-black text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Connecting lines from cards to center */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <defs>
              <linearGradient id="lineGrad1" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGrad4" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {service.problems.map((_, index) => {
              const { angle } = orbitPositions[index % orbitPositions.length];
              const cardRadius = 320;
              const centerRadius = 140; // Stop at edge of center circle

              // Calculate pixel positions from center (container is ~1200px wide, 800px tall)
              const containerWidth = 1200;
              const containerHeight = 800;
              const centerX = containerWidth / 2;
              const centerY = containerHeight / 2;

              // Card position
              const cardX = centerX + Math.cos((angle * Math.PI) / 180) * cardRadius;
              const cardY = centerY + Math.sin((angle * Math.PI) / 180) * cardRadius;

              // Inner point (edge of center circle)
              const innerX = centerX + Math.cos((angle * Math.PI) / 180) * centerRadius;
              const innerY = centerY + Math.sin((angle * Math.PI) / 180) * centerRadius;

              return (
                <motion.line
                  key={index}
                  x1={innerX}
                  y1={innerY}
                  x2={cardX}
                  y2={cardY}
                  stroke={`url(#lineGrad${index + 1})`}
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Mobile layout - Stack */}
        <div className="lg:hidden">
          {/* Center illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-40 h-40 mx-auto mb-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full blur-2xl opacity-50" />
              <div className="relative bg-white rounded-full p-4 shadow-xl">
                <TraderIllustration />
              </div>
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-2">
                  {problem.title}
                </h3>
                <p className="text-black text-xs leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy-900 text-white rounded-full hover:bg-navy-800 transition-colors">
            <span className="font-medium">We solve all of these</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-teal-400"
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
