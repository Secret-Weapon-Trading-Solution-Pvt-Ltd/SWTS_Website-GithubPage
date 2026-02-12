'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

const cards = [
  {
    icon: Eye,
    label: 'Our Vision',
    titleBefore: 'Making ',
    titleHighlight: 'Algo Trading',
    titleAfter: ' Available for Everyone',
    paragraphs: [
      'We envision a future where every trader — from beginners to professionals — has access to sophisticated automation tools and techniques that were once reserved for institutions.',
      'Through cutting-edge technology and advanced algorithms, we aim to help traders achieve consistent, disciplined results by removing emotional decision-making.',
      'Our goal is to bridge the gap between retail traders and institutional-grade solutions, making powerful trading automation accessible, affordable, and easy to implement for everyone regardless of their technical background or trading experience.',
    ],
    keyPoints: [
      'Algo trading tools for beginners to professionals',
      'Remove emotional decision-making',
      'Accessible, affordable & easy to implement',
    ],
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    borderColor: 'border-teal-200',
    textAccent: 'text-teal-600',
    cornerAccent: 'bg-teal-50',
    topStripe: 'from-teal-500 via-cyan-500 to-teal-600',
    keyPointBg: 'bg-teal-50 border-teal-300',
  },
  {
    icon: Target,
    label: 'Our Mission',
    titleBefore: 'Empowering Traders with ',
    titleHighlight: 'Competitive Edge',
    titleAfter: '',
    paragraphs: [
      'Our mission is to empower traders with advanced algorithmic solutions that provide a significant competitive advantage in the market.',
      "We deliver tailored automation systems designed to meet each client's unique needs, helping them stay ahead through discipline, precision, and technology.",
      'By combining deep market expertise with technical excellence, we strive to build long-term partnerships with our clients, continuously improving and adapting their trading systems to evolving market conditions and helping them achieve sustainable success.',
    ],
    keyPoints: [
      'Advanced algorithmic solutions for competitive edge',
      'Tailored automation for each client\'s needs',
      'Long-term partnerships with continuous improvement',
    ],
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    borderColor: 'border-blue-200',
    textAccent: 'text-blue-600',
    cornerAccent: 'bg-blue-50',
    topStripe: 'from-blue-500 via-indigo-500 to-blue-600',
    keyPointBg: 'bg-blue-50 border-blue-300',
  },
];

export const VisionMission: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 bg-white overflow-hidden">
      {/* Decorative blur orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Driven by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Vision &amp; Mission
            </span>
          </h2>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Our vision and mission guide every solution we build, ensuring we deliver meaningful impact to traders worldwide.
          </p>
        </motion.div>

        {/* Two-column card grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`relative h-full bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 border ${card.borderColor} shadow-sm overflow-hidden`}
              >
                {/* Decorative corner accent */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${card.cornerAccent} rounded-bl-[120px] opacity-50`}
                />

                {/* Gradient top stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.topStripe}`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-lg`}
                    >
                      <card.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>

                  {/* Card label */}
                  <span
                    className={`inline-block text-sm font-semibold ${card.textAccent} uppercase tracking-wider mb-2`}
                  >
                    {card.label}
                  </span>

                  {/* Card heading */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-5">
                    {card.titleBefore}
                    <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {card.titleHighlight}
                    </span>
                    {card.titleAfter}
                  </h3>

                  {/* Content paragraphs */}
                  <div className="space-y-4">
                    {card.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={
                          pIndex === 0
                            ? 'text-base lg:text-lg text-slate-900 leading-relaxed'
                            : 'text-base lg:text-lg text-slate-700 leading-relaxed'
                        }
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key points */}
                  <div className={`mt-6 px-5 py-4 rounded-xl border ${card.keyPointBg}`}>
                    <ul className="space-y-2">
                      {card.keyPoints.map((point, kIndex) => (
                        <li key={kIndex} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${card.iconBg}`} />
                          <span className="text-base font-bold text-slate-900">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
