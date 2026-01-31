'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services" className="pt-10 pb-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            <span className="text-violet-700 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            What We Build For You
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            From Pine Script indicators to full Python trading systems—we implement
            YOUR strategy across any platform. Pick what fits your needs.
          </p>
        </motion.div>

        {/* Services grid - 7 cards layout */}
        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Row 2: 3 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[12.5%]">
          {services.slice(4, 7).map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={index + 4}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-14">
            {/* Background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Not sure which service fits your needs?
                </h3>
                <p className="text-white/90 max-w-xl text-lg">
                  Take our quick assessment. We'll understand your requirements
                  and recommend the right approach for YOUR trading goals.
                </p>
              </div>
              <a
                href="/strategy-assessment"
                className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors duration-300 group shadow-lg"
              >
                Take Assessment
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
