'use client';

import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export const FrustrationHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #F1F5F9 100%)'
        }}
      />

      {/* Background Image - Right side, full bleed */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: `url(${getAssetPath('/bg_new.png')})`,
          animationDuration: '1s',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}
      />

      {/* Gradient overlay - sharp transition on desktop, full overlay on mobile for readability */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.85) 60%, rgba(248,250,252,0.7) 100%)'
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(90deg, #F8FAFC 0%, #F8FAFC 35%, rgba(248,250,252,0.5) 40%, transparent 45%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1920px] 4xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 py-32 2xl:py-40 3xl:py-48">
        <div className="max-w-lg lg:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl">

          {/* Micro label with accent line */}
          <div
            className="flex items-center gap-4 2xl:gap-5 mb-4 lg:mb-6 2xl:mb-8 3xl:mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span
              className="w-12 lg:w-16 2xl:w-20 3xl:w-24 h-[2px] lg:h-[3px] 2xl:h-[4px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }}
            />
            <span
              className="text-sm lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-medium tracking-wide uppercase"
              style={{ color: '#0D9488' }}
            >
              For serious traders
            </span>
          </div>

          {/* Hook/Headline - MEDIUM (smaller than company name) */}
          <h2 className="mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12">
            <span
              className="block text-2xl sm:text-3xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[28px] sm:leading-[34px] lg:leading-[33px] xl:leading-[42px] 2xl:leading-[50px] 3xl:leading-[61px] 4xl:leading-[77px] tracking-[-0.01em] opacity-0 animate-fade-in-up"
              style={{
                color: '#0F172A',
                fontWeight: 600,
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              Your strategy works.
            </span>
            <span
              className="block mt-1 sm:mt-1.5 lg:mt-0.5 xl:mt-1 2xl:mt-1 3xl:mt-1.5 text-2xl sm:text-3xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[28px] sm:leading-[34px] lg:leading-[33px] xl:leading-[42px] 2xl:leading-[50px] 3xl:leading-[61px] 4xl:leading-[77px] tracking-[-0.01em] opacity-0 animate-fade-in-up"
              style={{
                color: '#64748B',
                fontWeight: 500,
                animationDelay: '0.5s',
                animationFillMode: 'forwards'
              }}
            >
              Until you have to execute it.
            </span>
          </h2>

          {/* Subtitle - SMALLEST (smaller than hook) */}
          <p
            className="text-base sm:text-lg lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[34px] leading-[24px] sm:leading-[26px] lg:leading-[21px] xl:leading-[26px] 2xl:leading-[31px] 3xl:leading-[36px] 4xl:leading-[44px] mb-8 sm:mb-10 lg:mb-12 2xl:mb-14 3xl:mb-16 max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl opacity-0 animate-fade-in-up"
            style={{
              color: '#475569',
              fontWeight: 400,
              animationDelay: '0.6s',
              animationFillMode: 'forwards'
            }}
          >
            Stop letting fear and hesitation steal your profits. Trade with confidence.
          </p>

          {/* CTA Group */}
          <div
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-5 2xl:gap-6 3xl:gap-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA Button - Assessment */}
            <Link
              href="/strategy-assessment"
              className="group inline-flex items-center justify-center px-6 py-3.5 sm:px-10 sm:py-5 2xl:px-12 2xl:py-6 3xl:px-14 3xl:py-7 4xl:px-16 4xl:py-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium text-white rounded-xl 2xl:rounded-2xl
                       shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.35)]
                       hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_10px_rgba(13,148,136,0.2)]
                       transition-all duration-200 ease-out"
              style={{
                background: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
              }}
            >
              Take Free Assessment
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center justify-center px-6 py-3.5 sm:px-10 sm:py-5 2xl:px-12 2xl:py-6 3xl:px-14 3xl:py-7 4xl:px-16 4xl:py-8 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium text-slate-700 rounded-xl 2xl:rounded-2xl
                       bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50
                       hover:-translate-y-0.5 transition-all duration-200 ease-out"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(0deg, #F1F5F9 0%, transparent 100%)' }}
      />
    </section>
  );
};

export default FrustrationHero;
