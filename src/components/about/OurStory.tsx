'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { TrendingUp, Award, Calendar, Quote, ExternalLink, Plane } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '2014', label: 'Started Trading' },
  { icon: TrendingUp, value: '2019', label: 'Algo Development' },
  { icon: Award, value: '2021', label: 'Company Founded' },
  { icon: Award, value: '2025', label: 'Became Pvt. Ltd.' },
];

export const OurStory: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Our Journey
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Story Behind{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Secret Weapon
              </span>
            </h2>

            {/* Story Content */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-900 leading-relaxed">
                Our journey began in 2014 as passionate traders, spending countless hours studying charts,
                testing strategies, and learning the markets firsthand. Through years of hands-on experience,
                we understood what traders truly need — discipline, precision, and consistency.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed">
                By 2019, we transitioned into algorithmic trading, mastering Python, TradingView Pine Script,
                AmiBroker AFL, and MetaTrader development. In 2021, we founded Secret Weapon Trading Solution
                to help traders automate their edge with professional-grade solutions.
              </p>
              <p className="text-lg text-slate-900 leading-relaxed">
                In 2025, we became a Private Limited company, marking a significant milestone
                in our journey. Today, we continue helping institutional clients,
                professional traders, and retail investors worldwide transform their strategies into automated
                systems that execute with precision.
              </p>
            </div>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-8 border-l-4 border-teal-500"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-200" />
              <p className="text-lg italic text-black mb-3">
                "We take the burden off your shoulders, so you can focus on strategy."
              </p>
              <p className="text-sm font-semibold text-black">— Swapnil Raykar, Founder</p>
            </motion.div>

            {/* Featured In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <span className="text-sm font-medium text-black uppercase tracking-wider mb-3 block">Featured In</span>
              <a
                href="https://www.financeoutlookindia.com/finance/vendor/secret-weapon-trading-solution-automate-your-strategies-to-trade-smarter-not-harder-cid-243.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <span className="font-semibold text-black group-hover:text-teal-700">Finance Outlook India</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
              </a>
            </motion.div>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              {[
                'Decade of hands-on trading experience',
                'Expert in Python, TradingView, AmiBroker & MetaTrader',
                'Custom automation solutions for serious traders',
                'Focus on precision, discipline & consistency',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex-shrink-0" />
                  <span className="text-black">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Timeline Row with Airplane Journey */}
            <div className="relative">
              {/* Timeline milestones */}
              <div className="flex items-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    {/* Milestone */}
                    <div className="flex flex-col items-center text-center px-2 sm:px-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center mb-2 shadow-lg shadow-teal-500/30">
                        <span className="text-sm sm:text-base font-bold text-white">{stat.value || '🎉'}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-black font-medium max-w-[80px] sm:max-w-[100px] leading-tight">{stat.label}</div>
                    </div>
                    {/* Dotted connector line with dots - show between items, not after last */}
                    {index < stats.length - 1 && (
                      <div className="hidden sm:flex items-center gap-1 px-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                      </div>
                    )}
                    {/* Airplane at the end */}
                    {index === stats.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="hidden sm:flex items-center ml-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-teal-400"></span>
                        <span className="w-1 h-1 rounded-full bg-teal-400 ml-1"></span>
                        <Plane className="w-5 h-5 text-teal-600 ml-2 rotate-45" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[80%] aspect-square rounded-2xl overflow-hidden">
              <Image
                src={getAssetPath('/about-us-story.jpg')}
                alt="Trading Analytics & Data Visualization"
                fill
                className="object-contain"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
