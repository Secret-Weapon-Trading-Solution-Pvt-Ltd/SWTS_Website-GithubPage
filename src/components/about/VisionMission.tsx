'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative overflow-hidden mb-16 lg:mb-24">

      {/* Vision Section */}
      <div className="relative py-12 lg:py-16">
        {/* Thin diagonal colored accent */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600"
          style={{ clipPath: 'polygon(0 0, 18% 0, 12% 100%, 0 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-48 flex-shrink-0"
            >
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Our<br />Vision
              </h2>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 lg:pl-8"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Democratizing{' '}
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Algo Trading
                </span>{' '}
                for Everyone
              </h3>
              <p className="text-xl text-slate-900 leading-relaxed mb-3">
                We envision a future where every trader — from beginners to professionals —
                has access to sophisticated automation tools that were once reserved for institutions.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Through cutting-edge technology and advanced algorithms, we aim to help traders
                achieve consistent, disciplined results by removing emotional decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section - Reversed */}
      <div className="relative py-12 lg:py-16 bg-slate-50">
        {/* Thin diagonal colored accent from right */}
        <div
          className="absolute inset-0 bg-gradient-to-bl from-blue-600 via-blue-500 to-indigo-600"
          style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 82% 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6 lg:gap-12">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:pr-8"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Empowering Traders with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Competitive Edge
                </span>
              </h3>
              <p className="text-xl text-slate-900 leading-relaxed mb-3">
                Our mission is to empower traders with advanced algorithmic solutions that
                provide a significant competitive advantage in the market.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We deliver tailored automation systems designed to meet each client's unique needs,
                helping them stay ahead through discipline, precision, and technology.
              </p>
            </motion.div>

            {/* Right - Title */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-48 flex-shrink-0 lg:text-right"
            >
              <div className="flex items-center gap-3 mb-2 lg:justify-end">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Our<br />Mission
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VisionMission;
