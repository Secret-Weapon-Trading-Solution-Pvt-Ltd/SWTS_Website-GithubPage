'use client';

import { motion } from 'framer-motion';
import { StaticImage } from '@/components/ui/StaticImage';
import Link from 'next/link';
import { Service } from '@/data/services';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailHeroProps {
  service: Service;
}

// Get hero image based on service slug
const getHeroImage = (slug: string): string => {
  const imageMap: Record<string, string> = {
    'strategy-backtesting': '/strategy-backtesting.jpg',
    'strategy-optimization': '/strategy-optimization.jpg',
    'custom-screener': '/custom-screener-new.png',
    'custom-dashboard': '/custom-dashboard.jpg',
    'strategy-alerts': '/strategy-alert.jpg',
    'paper-trading': '/paper-trading.jpg',
  };
  return imageMap[slug] || '/cropped-hands-business-people-working-table.jpg';
};

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const heroImage = getHeroImage(service.slug);

  return (
    <section className="relative pt-28 lg:pt-32 pb-6 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Light colorful accents */}
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-tr from-blue-100/50 to-indigo-100/40"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-br from-teal-100/40 to-cyan-100/30"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-br from-purple-100/30 to-violet-100/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div>
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 group bg-white/90 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200"
              >
                <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                All Services
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 text-navy-800"
            >
              {service.title.split(' ')[0]}{' '}
              <span className="text-teal-700">
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl leading-relaxed mb-10 text-black"
            >
              {service.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-row flex-wrap gap-4"
            >
              <motion.a
                href="/strategy-assessment"
                className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 group text-white"
                style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="relative aspect-[4/3] w-full max-w-xl lg:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <StaticImage
                src={heroImage}
                alt={`${service.title} - Professional trading analysis`}
                fill
                className={`${service.slug === 'custom-screener' ? 'object-contain' : 'object-cover'} ${service.slug === 'strategy-alerts' ? 'object-top' : ''}`}
                priority
              />
              {/* Subtle gradient overlay for polish */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
