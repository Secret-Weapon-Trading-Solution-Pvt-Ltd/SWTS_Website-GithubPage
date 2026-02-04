'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { TrendingUp, Shield, Users, Sparkles } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-28 overflow-hidden">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0">
        <Image
          src={getAssetPath('/about-us.jpg')}
          alt="Secret Weapon Team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-[calc(100vh-7rem)] flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 py-12 lg:py-20">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium text-white/90">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Transforming Trading{' '}
              <span className="block mt-2">
                Through{' '}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              Founded by <span className="text-teal-400 font-semibold">Swapnil Raykar</span>, with over a decade in trading and years of expertise in algo development,
              we specialize in creating innovative automated trading solutions using
              python, Tradingview, Amibroker and couple of other technologies, delivering precision and consistency to serious traders worldwide.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 lg:gap-10"
            >
              {[
                { icon: TrendingUp, value: '10+', label: 'Years Trading' },
                { icon: Shield, value: '1000+', label: 'Projects' },
                { icon: Users, value: '500+', label: 'Clients' },
                { icon: Sparkles, value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;
