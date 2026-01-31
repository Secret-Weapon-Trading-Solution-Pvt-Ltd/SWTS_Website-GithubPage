'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ProblemsSolvedProps {
  service: Service;
}

export default function ProblemsSolved({ service }: ProblemsSolvedProps) {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Problems We Solve
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            These are the exact challenges our clients faced before working with us
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {service.problems.map((problem, index) => (
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
                  {/* Problem number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-600">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon indicator */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
                      <AlertTriangle className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Problem title */}
                  <h3 className="text-lg font-semibold text-navy-800 mb-3 pr-8">
                    {problem.title}
                  </h3>

                  {/* Problem description */}
                  <p className="text-black leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Hover indicator - "We solve this" */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-50 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="flex items-center text-teal-700 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      We solve this
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 text-black">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-navy-300" />
            <span className="text-sm font-medium uppercase tracking-wider">Here&apos;s how we help</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-navy-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
