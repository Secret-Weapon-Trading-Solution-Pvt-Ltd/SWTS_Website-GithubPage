'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          backgroundImage: 'url(/bg_new.png)',
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-32">
        <div className="max-w-lg lg:max-w-xl">

          {/* Company Name - BIGGEST */}
          <div
            className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <Image
              src="/logos/logo1.png"
              alt="SWTS Logo"
              width={80}
              height={80}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[50px] font-bold leading-[1.1] tracking-tight"
                style={{ color: '#0F172A' }}
              >
                Secret Weapon
              </h1>
              <p
                className="text-xl sm:text-2xl lg:text-[36px] xl:text-[45px] font-bold leading-[1.1] tracking-tight mt-1 lg:mt-2"
                style={{ color: '#0F172A' }}
              >
                Trading Solution <span
                  className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium"
                  style={{ color: '#64748B' }}
                >Pvt Ltd</span>
              </p>
            </div>
          </div>

          {/* Micro label with accent line */}
          <div
            className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span
              className="w-16 h-[3px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }}
            />
            <span
              className="text-base lg:text-lg font-medium tracking-wide uppercase"
              style={{ color: '#0D9488' }}
            >
              For serious traders
            </span>
          </div>

          {/* Hook/Headline - MEDIUM (smaller than company name) */}
          <h2 className="mb-8">
            <span
              className="block text-xl sm:text-2xl lg:text-[36px] xl:text-[45px] leading-[1.2] tracking-[-0.01em] opacity-0 animate-fade-in-up"
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
              className="block whitespace-nowrap mt-2 text-xl sm:text-2xl lg:text-[36px] xl:text-[45px] leading-[1.2] tracking-[-0.01em] opacity-0 animate-fade-in-up"
              style={{
                color: '#64748B',
                fontWeight: 500,
                animationDelay: '0.6s',
                animationFillMode: 'forwards'
              }}
            >
              Until you have to execute it.
            </span>
          </h2>

          {/* Subtitle - SMALLEST (smaller than hook) */}
          <p
            className="text-lg sm:text-xl lg:text-[24px] xl:text-[30px] leading-[1.5] mb-12 max-w-2xl opacity-0 animate-fade-in-up"
            style={{
              color: '#475569',
              fontWeight: 400,
              animationDelay: '0.8s',
              animationFillMode: 'forwards'
            }}
          >
            Stop letting fear and hesitation steal your profits. Trade with confidence.
          </p>

          {/* CTA Group */}
          <div
            className="flex flex-wrap items-center gap-5 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA Button - Assessment */}
            <Link
              href="/strategy-assessment"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white rounded-xl
                       shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.35)]
                       hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_10px_rgba(13,148,136,0.2)]
                       transition-all duration-200 ease-out"
              style={{
                background: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
              }}
            >
              Take Free Assessment
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-slate-700 rounded-xl
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
