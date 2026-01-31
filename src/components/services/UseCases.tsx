'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { TrendingUp, Tag } from 'lucide-react';

interface UseCasesProps {
  service: Service;
}

export default function UseCases({ service }: UseCasesProps) {
  return (
    <section className="py-24 bg-navy-50 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Use Cases & Outcomes
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            See how we&apos;ve helped traders like you achieve measurable results
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {service.useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm hover:shadow-lg hover:border-navy-200 transition-all duration-500">
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-navy-600 to-teal-500" />

                  <div className="p-8">
                    {/* Case number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-medium text-black uppercase tracking-wider">
                        Case Study #{index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-navy-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-black">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy-800 mb-3">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black text-sm leading-relaxed mb-6">
                      {useCase.description}
                    </p>

                    {/* Outcome highlight */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-white border border-teal-100 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-1">
                            Outcome
                          </div>
                          <p className="text-sm font-medium text-navy-800">
                            {useCase.outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + tagIndex * 0.05 }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-navy-100 text-black text-xs font-medium"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-black hover:text-navy-800 transition-colors group"
          >
            <span className="font-medium">View all case studies</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
