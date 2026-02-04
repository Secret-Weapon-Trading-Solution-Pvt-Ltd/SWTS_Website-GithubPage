'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { FileText, Cpu, Globe, Rocket, Check, ArrowRight } from 'lucide-react';

interface CapabilitiesModernProps {
  service: Service;
}

// Custom SVG icons for each capability
const CapabilityIcons = [
  // Rule Translation
  () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="icon1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <rect x="15" y="15" width="50" height="50" rx="8" fill="url(#icon1Grad)" opacity="0.15"/>
      <rect x="22" y="28" width="36" height="3" rx="1.5" fill="url(#icon1Grad)"/>
      <rect x="22" y="36" width="28" height="3" rx="1.5" fill="url(#icon1Grad)"/>
      <rect x="22" y="44" width="32" height="3" rx="1.5" fill="url(#icon1Grad)"/>
      <rect x="22" y="52" width="24" height="3" rx="1.5" fill="url(#icon1Grad)"/>
      <circle cx="55" cy="55" r="12" fill="url(#icon1Grad)"/>
      <path d="M50 55 L54 59 L61 51" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Automated Execution
  () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="icon2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="28" fill="url(#icon2Grad)" opacity="0.15"/>
      <circle cx="40" cy="40" r="20" fill="url(#icon2Grad)" opacity="0.3"/>
      <circle cx="40" cy="40" r="12" fill="url(#icon2Grad)"/>
      <path d="M36 35 L46 40 L36 45 Z" fill="white"/>
      {/* Orbiting dots */}
      <circle cx="40" cy="12" r="4" fill="url(#icon2Grad)"/>
      <circle cx="68" cy="40" r="4" fill="url(#icon2Grad)"/>
      <circle cx="40" cy="68" r="4" fill="url(#icon2Grad)"/>
      <circle cx="12" cy="40" r="4" fill="url(#icon2Grad)"/>
    </svg>
  ),
  // Platform Agnostic
  () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="icon3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <circle cx="40" cy="40" r="25" fill="none" stroke="url(#icon3Grad)" strokeWidth="2" strokeDasharray="4,4"/>
      <circle cx="40" cy="40" r="8" fill="url(#icon3Grad)"/>
      {/* Connection nodes */}
      <circle cx="20" cy="25" r="8" fill="url(#icon3Grad)" opacity="0.8"/>
      <circle cx="60" cy="25" r="8" fill="url(#icon3Grad)" opacity="0.8"/>
      <circle cx="25" cy="58" r="8" fill="url(#icon3Grad)" opacity="0.8"/>
      <circle cx="55" cy="58" r="8" fill="url(#icon3Grad)" opacity="0.8"/>
      {/* Lines */}
      <line x1="27" y1="30" x2="35" y2="36" stroke="url(#icon3Grad)" strokeWidth="2"/>
      <line x1="53" y1="30" x2="45" y2="36" stroke="url(#icon3Grad)" strokeWidth="2"/>
      <line x1="30" y1="53" x2="36" y2="46" stroke="url(#icon3Grad)" strokeWidth="2"/>
      <line x1="50" y1="53" x2="44" y2="46" stroke="url(#icon3Grad)" strokeWidth="2"/>
    </svg>
  ),
  // Deployment & Monitoring
  () => (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="icon4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect x="15" y="25" width="50" height="35" rx="4" fill="url(#icon4Grad)" opacity="0.15"/>
      <rect x="20" y="30" width="40" height="25" rx="2" fill="url(#icon4Grad)" opacity="0.3"/>
      {/* Chart line */}
      <path d="M25 48 L32 42 L40 45 L48 35 L55 38" stroke="url(#icon4Grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Rocket */}
      <circle cx="55" cy="20" r="10" fill="url(#icon4Grad)"/>
      <path d="M52 20 L55 15 L58 20 M53 22 L55 24 L57 22" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  ),
];

const LucideIcons = [FileText, Cpu, Globe, Rocket];

export default function CapabilitiesModern({ service }: CapabilitiesModernProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full"></span>
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">Our Capabilities</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            End-to-end solutions that transform your trading rules into production-ready automated systems
          </p>
        </motion.div>

        {/* Capabilities grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {service.capabilities.map((capability, index) => {
            const IconComponent = CapabilityIcons[index] || CapabilityIcons[0];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                    <div className="relative">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-16 h-16 lg:w-18 lg:h-18">
                          <IconComponent />
                        </div>
                        <span className="text-4xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {capability.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-black mb-5 leading-relaxed">
                        {capability.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {capability.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-base text-black">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
