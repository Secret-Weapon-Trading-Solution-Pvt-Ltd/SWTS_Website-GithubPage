'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative overflow-hidden mb-16 lg:mb-24">

      {/* Vision Section */}
      <div className="relative py-12 lg:py-16">
        {/* Diagonal colored accent */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600"
          style={{ clipPath: 'polygon(0 0, 30% 0, 22% 100%, 0 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            {/* Left - Image and Title on diagonal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-56 flex-shrink-0 flex flex-col items-center justify-center"
            >
              <div className="w-28 h-28 lg:w-36 lg:h-36 relative mb-4">
                <Image
                  src={getAssetPath('/vision.jpg')}
                  alt="Vision"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight text-center">
                Our Vision
              </h2>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 lg:pl-28"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
                Making{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Algo Trading
                </span>{' '}
                Available for Everyone
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-slate-900 leading-relaxed">
                  We envision a future where every trader — from beginners to professionals —
                  has access to sophisticated automation tools and techniques that were once reserved for institutions.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  Through cutting-edge technology and advanced algorithms, we aim to help traders
                  achieve consistent, disciplined results by removing emotional decision-making.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  Our goal is to bridge the gap between retail traders and institutional-grade solutions,
                  making powerful trading automation accessible, affordable, and easy to implement for everyone
                  regardless of their technical background or trading experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section - Reversed */}
      <div className="relative py-12 lg:py-16 bg-slate-50">
        {/* Diagonal colored accent from right */}
        <div
          className="absolute inset-0 bg-gradient-to-bl from-blue-600 via-blue-500 to-indigo-600"
          style={{ clipPath: 'polygon(78% 0, 100% 0, 100% 100%, 70% 100%)' }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-16">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:pr-12"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5">
                Empowering Traders with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Competitive Edge
                </span>
              </h3>
              <div className="space-y-4">
                <p className="text-xl text-slate-900 leading-relaxed">
                  Our mission is to empower traders with advanced algorithmic solutions that
                  provide a significant competitive advantage in the market.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  We deliver tailored automation systems designed to meet each client's unique needs,
                  helping them stay ahead through discipline, precision, and technology.
                </p>
                <p className="text-lg text-black leading-relaxed">
                  By combining deep market expertise with technical excellence, we strive to build long-term
                  partnerships with our clients, continuously improving and adapting their trading systems
                  to evolving market conditions and helping them achieve sustainable success.
                </p>
              </div>
            </motion.div>

            {/* Right - Image and Title on diagonal */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-56 flex-shrink-0 flex flex-col items-center justify-center"
            >
              <div className="w-28 h-28 lg:w-36 lg:h-36 relative mb-4">
                <Image
                  src={getAssetPath('/mission.jpg')}
                  alt="Mission"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight text-center">
                Our Mission
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default VisionMission;
