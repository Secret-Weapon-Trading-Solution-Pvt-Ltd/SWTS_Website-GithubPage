'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Clock, ArrowRight } from 'lucide-react';

interface HowItWorksStepsProps {
  service: Service;
}

export default function HowItWorksSteps({ service }: HowItWorksStepsProps) {
  return (
    <section id="how-it-works" className="py-24 bg-white scroll-mt-20 border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-100 text-black text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Your Journey with Us
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A transparent, collaborative process designed for successful outcomes
          </p>
        </motion.div>

        {/* Steps - Alternating layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-navy-200 to-transparent" />

          <div className="space-y-12 md:space-y-0">
            {service.howItWorks.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative md:flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Step content */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-white rounded-2xl border border-navy-100 p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-navy-200 transition-all duration-500"
                    >
                      {/* Step number badge */}
                      <div className={`inline-flex items-center gap-2 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center text-white font-bold shadow-lg`}>
                          {step.step}
                        </div>
                        {step.duration && (
                          <span className="text-sm text-black flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {step.duration}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-navy-800 mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-black leading-relaxed">
                        {step.description}
                      </p>

                      {/* Hover accent */}
                      <div className={`absolute top-0 ${isEven ? 'right-0 rounded-tr-2xl' : 'left-0 rounded-tl-2xl'} w-full h-1 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} transform origin-${isEven ? 'right' : 'left'} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                    </motion.div>
                  </div>

                  {/* Timeline node (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} border-4 border-white shadow-lg`}
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-8 flex-col items-center"
          >
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center shadow-lg`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="mt-2 text-sm font-medium text-black">Complete</span>
          </motion.div>
        </div>

        {/* CTA after timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-black mb-6">
            Ready to start your project?
          </p>
          <a
            href="/strategy-assessment"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-navy-800 text-white font-semibold hover:bg-navy-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Begin With Our Assessment
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
