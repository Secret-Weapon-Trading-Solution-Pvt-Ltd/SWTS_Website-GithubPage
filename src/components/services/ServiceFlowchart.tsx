'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { icons, LucideIcon, Circle, ChevronRight } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceFlowchartProps {
  service: Service;
}

export default function ServiceFlowchart({ service }: ServiceFlowchartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Calculate curved path for connectors
  const getCurvedPath = (startX: number, startY: number, endX: number, endY: number) => {
    const midX = (startX + endX) / 2;
    const controlOffset = 30;
    return `M ${startX} ${startY} C ${midX} ${startY - controlOffset}, ${midX} ${endY - controlOffset}, ${endX} ${endY}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-navy-100 via-navy-50 to-white overflow-hidden border-t border-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy-200 shadow-sm text-black text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            How It All Connects
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A complete trading system with each component engineered to work seamlessly together
          </p>
        </motion.div>

        {/* Flowchart visualization */}
        <div ref={containerRef} className="relative">
          {/* Desktop: Horizontal flowing layout with curved connectors */}
          <div className="hidden lg:block">
            <div className="relative py-8">
              {/* SVG for curved connector lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Gradient for the connector lines */}
                  <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={service.accentColor} stopOpacity="0.3" />
                    <stop offset="50%" stopColor={service.accentColor} stopOpacity="0.6" />
                    <stop offset="100%" stopColor={service.accentColor} stopOpacity="0.3" />
                  </linearGradient>

                  {/* Animated dash pattern */}
                  <pattern id="flowPattern" width="10" height="1" patternUnits="userSpaceOnUse">
                    <rect width="6" height="1" fill={service.accentColor} opacity="0.5" />
                  </pattern>

                  {/* Arrow marker */}
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill={service.accentColor}
                      opacity="0.6"
                    />
                  </marker>
                </defs>

                {/* Curved connector paths - Dynamic based on step count */}
                {service.flowchart.slice(0, -1).map((_, index) => {
                  const stepWidth = 1000 / service.flowchart.length;
                  const startX = stepWidth * index + stepWidth * 0.75;
                  const endX = stepWidth * (index + 1) + stepWidth * 0.1;
                  const y = 100;
                  const curveHeight = service.flowchart.length > 6 ? 18 : 25;

                  return (
                    <motion.g key={index}>
                      {/* Background line */}
                      <motion.path
                        d={`M ${startX} ${y} Q ${(startX + endX) / 2} ${y - curveHeight}, ${endX} ${y}`}
                        fill="none"
                        stroke={service.accentColor}
                        strokeWidth="2"
                        strokeOpacity="0.15"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
                      />
                      {/* Animated flowing line */}
                      <motion.path
                        d={`M ${startX} ${y} Q ${(startX + endX) / 2} ${y - curveHeight}, ${endX} ${y}`}
                        fill="none"
                        stroke="url(#connectorGradient)"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        markerEnd="url(#arrowhead)"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
                      />
                    </motion.g>
                  );
                })}
              </svg>

              {/* Flow step cards - Dynamic grid based on step count */}
              <div
                className="relative grid gap-3"
                style={{
                  gridTemplateColumns: `repeat(${service.flowchart.length}, minmax(0, 1fr))`
                }}
              >
                {service.flowchart.map((step, index) => {
                  const IconComponent: LucideIcon = (icons as Record<string, LucideIcon>)[step.icon] || Circle;
                  const isActive = activeStep === index;
                  // Adjust sizing based on number of steps
                  const isCompact = service.flowchart.length > 6;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                        className={`group relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden h-full
                          ${isActive
                            ? 'border-blue-300 shadow-lg shadow-blue-100'
                            : 'border-slate-200 hover:border-slate-300 shadow-soft hover:shadow-soft-lg'
                          }`}
                      >
                        {/* Step number badge */}
                        <div className={`absolute -top-2 -right-2 ${isCompact ? 'w-6 h-6 text-[10px]' : 'w-8 h-8 text-xs'} rounded-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center text-white font-bold shadow-lg z-10`}>
                          {index + 1}
                        </div>

                        {/* Active indicator glow */}
                        {isActive && (
                          <motion.div
                            layoutId="activeGlow"
                            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}

                        <div className={`relative ${isCompact ? 'p-4' : 'p-5'}`}>
                          {/* Icon */}
                          <motion.div
                            animate={isActive ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${isCompact ? 'w-11 h-11' : 'w-12 h-12'} rounded-xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center mb-3 shadow-lg`}
                          >
                            <IconComponent className={`${isCompact ? 'w-5 h-5' : 'w-6 h-6'} text-white`} strokeWidth={1.5} />
                          </motion.div>

                          {/* Title */}
                          <h3 className={`${isCompact ? 'text-sm' : 'text-base'} font-bold text-navy-800 mb-1.5 leading-tight`}>
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-black leading-relaxed`}>
                            {step.description}
                          </p>

                          {/* Hover expand indicator */}
                          <motion.div
                            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={isActive ? { x: 0 } : { x: -5 }}
                          >
                            <ChevronRight className={`${isCompact ? 'w-3 h-3' : 'w-4 h-4'} text-black`} />
                          </motion.div>
                        </div>

                        {/* Bottom accent */}
                        <div className={`h-1 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                      </motion.div>

                      {/* Connector pulse animation */}
                      {index < service.flowchart.length - 1 && (
                        <motion.div
                          className="absolute top-1/2 -right-2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: service.accentColor }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? {
                            scale: [0, 1.5, 1],
                            opacity: [0, 0.8, 0.4]
                          } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.8 + index * 0.15,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Data flow indicator - Service-specific messaging */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex items-center justify-center mt-10 gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy-100 text-black text-sm font-medium">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: service.accentColor }} />
                  <span>
                    {service.slug === 'pine-script-development'
                      ? 'From TradingView charts to automated execution'
                      : service.slug === 'python-algo-development'
                      ? 'From strategy logic to 24/7 live trading'
                      : service.slug === 'algo-strategy-development'
                      ? 'From edge discovery to production deployment'
                      : service.slug === 'execution-broker-integration'
                      ? 'Signal to fill in under 100ms with full audit trail'
                      : 'Each component flows seamlessly to the next'}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile/Tablet: Vertical timeline layout */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical connector line */}
              <motion.div
                className="absolute left-8 top-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(to bottom, transparent, ${service.accentColor}40, transparent)` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />

              <div className="space-y-6">
                {service.flowchart.map((step, index) => {
                  const IconComponent: LucideIcon = (icons as Record<string, LucideIcon>)[step.icon] || Circle;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative flex gap-6"
                    >
                      {/* Timeline node */}
                      <div className="flex-shrink-0 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                        </motion.div>
                        {/* Step number */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow">
                          <span className="text-xs font-bold text-slate-700">{index + 1}</span>
                        </div>
                      </div>

                      {/* Content card */}
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex-1 bg-white rounded-xl border border-navy-100 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <h3 className="font-bold text-navy-800 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-black leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Technical note - Service-specific */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 border border-navy-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                {service.slug === 'pine-script-development' ? (
                  <>
                    <h4 className="font-semibold text-navy-800 mb-1">TradingView to Execution Bridge</h4>
                    <p className="text-sm text-black">
                      Your Pine Script strategy runs on TradingView, generating signals and alerts.
                      When conditions trigger, webhooks send JSON payloads to your execution server.
                      From there, orders flow directly to your broker—no manual intervention required.
                    </p>
                  </>
                ) : service.slug === 'execution-broker-integration' ? (
                  <>
                    <h4 className="font-semibold text-navy-800 mb-1">Fail-Safe by Design</h4>
                    <p className="text-sm text-black">
                      Every order passes through pre-trade risk checks before hitting the broker.
                      Circuit breakers monitor for runaway losses. Kill switches flatten positions instantly.
                      When things go wrong—and they will—the system degrades gracefully, not catastrophically.
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="font-semibold text-navy-800 mb-1">Modular by Design</h4>
                    <p className="text-sm text-black">
                      Each component is built as an independent module with clean interfaces.
                      This means you can start with backtesting only, then add execution later—or
                      swap out your broker integration without touching your strategy logic.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
