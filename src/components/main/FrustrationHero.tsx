'use client';

import React from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export const FrustrationHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#E8EDF2] md:bg-transparent">
      {/* Light background gradient - matching image background (desktop only) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: '#F0F4F7'
        }}
      />

      {/* Background Image - Mobile: full width centered, Desktop: right side cover */}
      <div
        className="absolute inset-0 bg-no-repeat animate-fade-in hidden md:block"
        style={{
          backgroundImage: `url(${getAssetPath('/bg_new.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          animationDuration: '1s',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}
      />
      {/* Mobile background - wave patterns visible, devices not cropped */}
      <div
        className="absolute inset-0 bg-no-repeat animate-fade-in md:hidden"
        style={{
          backgroundImage: `url(${getAssetPath('/bg_new.png')})`,
          backgroundSize: '180% 110%',
          backgroundPosition: 'right 35%',
          animationDuration: '1s',
          animationDelay: '0.3s',
          animationFillMode: 'both'
        }}
      />

      {/* Gradient overlay - top area on mobile for text readability */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(232,237,242,0.98) 0%, rgba(232,237,242,0.92) 25%, rgba(232,237,242,0.4) 40%, transparent 55%, transparent 100%)'
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(90deg, #F8FAFC 0%, #F8FAFC 35%, rgba(248,250,252,0.5) 40%, transparent 45%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1920px] 4xl:max-w-[2400px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 3xl:px-24 4xl:px-32 pt-24 pb-6 md:py-32 2xl:py-40 3xl:py-48 min-h-screen md:min-h-0 flex flex-col md:block justify-start">
        <div className="max-w-lg lg:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl">

          {/* Micro label with accent line */}
          <div
            className="flex items-center gap-2 md:gap-3 2xl:gap-5 mb-3 md:mb-4 lg:mb-6 2xl:mb-8 3xl:mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span
              className="w-6 md:w-12 lg:w-16 2xl:w-20 3xl:w-24 h-[2px] lg:h-[3px] 2xl:h-[4px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }}
            />
            <span
              className="text-[11px] md:text-sm lg:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl font-semibold tracking-wider uppercase"
              style={{ color: '#0D9488' }}
            >
              For serious traders
            </span>
          </div>

          {/* Hook/Headline */}
          <h2 className="mb-4 md:mb-6 lg:mb-8 2xl:mb-10 3xl:mb-12">
            <span
              className="block text-[28px] sm:text-3xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[32px] sm:leading-[34px] lg:leading-[33px] xl:leading-[42px] 2xl:leading-[50px] 3xl:leading-[61px] 4xl:leading-[77px] tracking-[-0.02em] opacity-0 animate-fade-in-up"
              style={{
                color: '#0F172A',
                fontWeight: 700,
                animationDelay: '0.4s',
                animationFillMode: 'forwards'
              }}
            >
              Your strategy works.
            </span>
            <span
              className="block mt-1 sm:mt-1.5 lg:mt-0.5 xl:mt-1 2xl:mt-1 3xl:mt-1.5 text-[28px] sm:text-3xl lg:text-[30px] xl:text-[38px] 2xl:text-[46px] 3xl:text-[56px] 4xl:text-[70px] leading-[32px] sm:leading-[34px] lg:leading-[33px] xl:leading-[42px] 2xl:leading-[50px] 3xl:leading-[61px] 4xl:leading-[77px] tracking-[-0.02em] opacity-0 animate-fade-in-up"
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

          {/* Subtitle */}
          <p
            className="text-[15px] sm:text-base lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[28px] 4xl:text-[34px] leading-[22px] sm:leading-[24px] lg:leading-[21px] xl:leading-[26px] 2xl:leading-[31px] 3xl:leading-[36px] 4xl:leading-[44px] mb-0 md:mb-8 sm:mb-10 lg:mb-12 2xl:mb-14 3xl:mb-16 max-w-[300px] sm:max-w-xl lg:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl opacity-0 animate-fade-in-up"
            style={{
              color: '#475569',
              fontWeight: 400,
              animationDelay: '0.6s',
              animationFillMode: 'forwards'
            }}
          >
            Stop letting fear and hesitation steal your profits. Trade with confidence.
          </p>

          {/* CTA Group - Desktop only (inline) */}
          <div
            className="hidden md:flex flex-row flex-wrap items-center gap-5 2xl:gap-6 3xl:gap-8 opacity-0 animate-fade-in-up"
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

        {/* CTA Group - Mobile only (at bottom) */}
        <div
          className="flex md:hidden flex-col items-stretch gap-3 mt-auto pb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          {/* Primary CTA Button - Assessment */}
          <Link
            href="/strategy-assessment"
            className="group inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white rounded-xl
                     shadow-[0_4px_20px_rgba(13,148,136,0.25)]
                     transition-all duration-200 ease-out"
            style={{
              background: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
            }}
          >
            Take Free Assessment
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary CTA Button */}
          <Link
            href="/#how-it-works"
            className="group inline-flex items-center justify-center px-6 py-4 text-base font-medium text-slate-600 rounded-xl
                     border border-slate-400/40
                     transition-all duration-200 ease-out"
            style={{ background: 'rgba(232,237,242,0.7)' }}
          >
            See How It Works
          </Link>
        </div>
      </div>

      {/* Bottom fade to next section - hidden on mobile to show image background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 hidden md:block"
        style={{ background: 'linear-gradient(0deg, rgba(241,245,249,0.9) 0%, transparent 100%)' }}
      />
    </section>
  );
};

export default FrustrationHero;
