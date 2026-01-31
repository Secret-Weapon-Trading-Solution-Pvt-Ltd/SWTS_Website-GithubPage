'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Check } from 'lucide-react';

interface CapabilitiesProps {
  service: Service;
}

export default function Capabilities({ service }: CapabilitiesProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-navy-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="capabilities-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-navy-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#capabilities-dots)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium mb-6">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Comprehensive solutions engineered for your specific trading requirements
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-full bg-white rounded-2xl border border-navy-100 p-8 overflow-hidden shadow-sm hover:border-navy-200 hover:shadow-lg transition-all duration-500">
                  {/* Decorative gradient accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-600 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Capability number badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-navy-700 text-white font-bold text-sm mb-6 shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-800 mb-3">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black mb-6 leading-relaxed">
                    {capability.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + featureIndex * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-black text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
