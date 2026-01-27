'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';
import { motion } from 'framer-motion';

interface ServiceItem {
  slug: string;
  title: string;
  image: string;
  bgColor?: string;
  gradient?: string;
}

const serviceItems: ServiceItem[] = [
  {
    slug: 'strategy-backtesting',
    title: 'Strategy Backtesting',
    image: '/strategy_automation.jpg',
    gradient: 'from-violet-500/10 to-purple-500/10',
  },
  {
    slug: 'strategy-optimization',
    title: 'Strategy Optimization',
    image: '/strategy validation.jpg',
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    slug: 'algo-strategy-development',
    title: 'Strategy Automation',
    image: '/execution.jpg',
    gradient: 'from-teal-500/10 to-emerald-500/10',
  },
  {
    slug: 'custom-screener',
    title: 'Custom Screener',
    image: '/analyze.jpg',
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    slug: 'custom-dashboard',
    title: 'Custom Dashboard',
    image: '/custom_platform.jpg',
    gradient: 'from-slate-500/10 to-gray-500/10',
  },
  {
    slug: 'strategy-alerts',
    title: 'Strategy Alerts',
    image: '/risk.jpg',
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
  {
    slug: 'paper-trading',
    title: 'Paper Trading',
    image: '/Trading service.jpg',
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex-shrink-0 flex flex-col items-center mx-3"
    >
      {/* Card with gradient border on hover */}
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-70 blur-lg transition-all duration-500" />

        {/* Main card */}
        <div className={`relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200/80 transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl group-hover:-translate-y-2 ${service.bgColor || 'bg-white'}`}>
          {/* Gradient overlay */}
          {service.gradient && (
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} z-10 pointer-events-none`} />
          )}

          <StaticImage
            src={service.image}
            alt={service.title}
            width={176}
            height={176}
            quality={60}
            loading="eager"
            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${service.bgColor ? 'object-contain p-4' : 'object-cover'}`}
          />
        </div>
      </div>

      {/* Title with underline effect */}
      <div className="mt-4 text-center">
        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h3>
        <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 mx-auto rounded-full" />
      </div>
    </Link>
  );
};

export const ServicesScroller: React.FC = () => {
  const allItems = [...serviceItems, ...serviceItems];

  return (
    <div className="py-8 overflow-hidden bg-white">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-6">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            What We Offer
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-slate-800">Our </span>
          <span className="text-teal-600">Services</span>
        </h3>

        {/* Subtitle */}
        <p className="text-slate-500 text-base lg:text-lg max-w-lg mx-auto leading-relaxed">
          Everything you need to automate and scale your trading operations
        </p>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex py-6 will-change-transform"
          animate={{
            x: [0, -1456],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {allItems.map((service, index) => (
            <ServiceCard key={`${service.slug}-${index}`} service={service} />
          ))}
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-blue-600 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          View All Services
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesScroller;
