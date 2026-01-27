'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';
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

      {/* Gradient overlay - sharp transition, image fully visible from center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #F8FAFC 0%, #F8FAFC 35%, rgba(248,250,252,0.5) 40%, transparent 45%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1920px] 4xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 py-32 2xl:py-40 3xl:py-48">
        <div className="max-w-lg lg:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl">

          {/* Company Name with Logo - BIGGER than hook line */}
          <div
            className="mb-6 lg:mb-8 2xl:mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <Link href="/" className="inline-flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
              <StaticImage
                src="/logos/logo1.png"
                alt="SWTS Logo"
                width={100}
                height={100}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32 4xl:w-40 4xl:h-40 flex-shrink-0"
              />
              <div className="flex flex-col gap-1 sm:gap-1.5 lg:gap-2">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold leading-none tracking-tight"
                  style={{ color: '#0F172A' }}
                >
                  Secret Weapon
                </h1>
                <p
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold leading-none tracking-tight"
                  style={{ color: '#0F172A' }}
                >
                  Trading Solution{' '}
                  <span
                    className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium"
                    style={{ color: '#64748B' }}
                  >
                    Pvt Ltd
                  </span>
                </p>
              </div>
            </Link>
          </div>

          {/* Micro label with accent line */}
          <div
            className="flex items-center gap-4 2xl:gap-5 mb-4 lg:mb-6 2xl:mb-8 3xl:mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
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
              className="block text-lg sm:text-xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[1.3] tracking-[-0.01em] opacity-0 animate-fade-in-up"
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
              className="block whitespace-nowrap mt-2 lg:mt-3 xl:mt-4 2xl:mt-5 3xl:mt-6 text-lg sm:text-xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[1.3] tracking-[-0.01em] opacity-0 animate-fade-in-up"
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
            className="text-sm sm:text-base lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[34px] leading-[1.6] mb-10 lg:mb-12 2xl:mb-14 3xl:mb-16 max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl opacity-0 animate-fade-in-up"
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
            className="flex flex-wrap items-center gap-5 2xl:gap-6 3xl:gap-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA Button - Assessment */}
            <Link
              href="/strategy-assessment"
              className="group inline-flex items-center justify-center px-10 py-5 2xl:px-12 2xl:py-6 3xl:px-14 3xl:py-7 4xl:px-16 4xl:py-8 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium text-white rounded-xl 2xl:rounded-2xl
                       shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.35)]
                       hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_10px_rgba(13,148,136,0.2)]
                       transition-all duration-200 ease-out"
              style={{
                background: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
              }}
            >
              Take Free Assessment
              <ArrowRight className="ml-3 w-6 h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center justify-center px-10 py-5 2xl:px-12 2xl:py-6 3xl:px-14 3xl:py-7 4xl:px-16 4xl:py-8 text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl font-medium text-slate-700 rounded-xl 2xl:rounded-2xl
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
