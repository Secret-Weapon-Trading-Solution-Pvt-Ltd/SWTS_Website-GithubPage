'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { TrendingUp, Shield, Users, Sparkles } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-28 overflow-hidden">
      {/* Full Page Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getAssetPath('/freepik__modern-fintech-trading-team-working-together-in-a-__42742.jpeg')}
          alt="Trading Team Analyzing Market Charts in Modern Office"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle darken to enrich the image */}
        <div className="absolute inset-0 bg-black/5" />
        {/* Strong white fade behind text area on the left for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.6) 38%, rgba(255,255,255,0.15) 50%, transparent 60%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-[calc(100vh-7rem)] flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28 py-16 lg:py-24">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-8"
            >
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-700">About Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-950 leading-[1.15] mb-8"
            >
              Transforming Trading{' '}
              <span className="block mt-2">
                Through{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-black font-normal leading-[1.8] mb-12"
            >
              Founded by <span className="text-teal-700 font-semibold">Mr. Swapnil Raykar</span>, with over a decade in trading and years of expertise in algo development,
              we specialize in creating innovative automated trading solutions using
              python, Tradingview, Amibroker and couple of other technologies, delivering precision and consistency to serious traders worldwide.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-nowrap gap-6 lg:gap-8"
            >
              {[
                { icon: TrendingUp, value: '10+', label: 'Years Trading' },
                { icon: Shield, value: '1000+', label: 'Projects' },
                { icon: Sparkles, value: '10+', label: 'Technologies' },
                { icon: Users, value: '500+', label: 'Clients' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50/80 backdrop-blur-sm border border-teal-200/60 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-950">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-800">{stat.label}</div>
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
