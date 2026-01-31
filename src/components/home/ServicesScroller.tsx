'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';

interface ServiceItem {
  slug: string;
  title: string;
  image: string;
  bgColor?: string;
}

const serviceItems: ServiceItem[] = [
  {
    slug: 'strategy-backtesting',
    title: 'Strategy Backtesting',
    image: '/backtesting.jpg',
  },
  {
    slug: 'strategy-optimization',
    title: 'Strategy Optimization',
    image: '/optimization.jpg',
  },
  {
    slug: 'algo-strategy-development',
    title: 'Strategy Automation',
    image: '/execution.jpg',
  },
  {
    slug: 'strategy-alerts',
    title: 'Strategy Alerts',
    image: '/alert.jpg',
  },
  {
    slug: 'custom-screener',
    title: 'Custom Screener',
    image: '/custom screener.jpg',
  },
  {
    slug: 'custom-dashboard',
    title: 'Custom Dashboard',
    image: '/custom dashboard.jpg',
  },
  {
    slug: 'paper-trading',
    title: 'Paper Trading',
    image: '/paper trading.jpg',
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex-shrink-0 flex flex-col items-center"
    >
      {/* Card */}
      <div className="relative">
        {/* Glow effect on hover - solid shadow, no blur */}
        <div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #1565C0, #00897B)',
            filter: 'blur(8px)',
          }}
        />

        {/* Main card */}
        <div className={`relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 transition-all duration-300 group-hover:border-teal-400 group-hover:shadow-2xl group-hover:-translate-y-2 ${service.bgColor || 'bg-white'}`}>
          <StaticImage
            src={service.image}
            alt={service.title}
            width={224}
            height={224}
            quality={75}
            loading="eager"
            className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${service.bgColor ? 'object-contain p-4' : 'object-cover'}`}
          />
        </div>
      </div>

      {/* Title with underline effect */}
      <div className="mt-5 text-center">
        <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
          {service.title}
        </h3>
        <div
          className="mt-1.5 h-0.5 w-0 group-hover:w-full transition-all duration-300 mx-auto rounded-full"
          style={{ background: 'linear-gradient(90deg, #1565C0, #00897B)' }}
        />
      </div>
    </Link>
  );
};

export const ServicesScroller: React.FC = () => {
  return (
    <div className="py-8 bg-white w-full">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 shadow-sm mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            What We Offer
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
          Our{' '}
          <span className="text-teal-600">
            Services
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base lg:text-lg text-slate-900 max-w-xl mx-auto leading-relaxed">
          Pick the service that works best for you
        </p>
      </div>

      {/* Static services grid */}
      <div className="flex flex-wrap justify-center gap-12 lg:gap-16 px-6 lg:px-12 py-6 max-w-7xl mx-auto">
        {serviceItems.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 flex justify-center isolate">
        <Link
          href="/services/"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl
                   hover:-translate-y-0.5 active:translate-y-0
                   transition-transform duration-200 ease-out
                   ring-0 ring-offset-0 outline-none focus:ring-0 focus:outline-none focus-visible:ring-0"
          style={{
            background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)',
            color: '#ffffff',
            boxShadow: '0 4px 20px rgba(0, 137, 123, 0.25)',
            outline: 'none',
            isolation: 'isolate',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          View All Services
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServicesScroller;
