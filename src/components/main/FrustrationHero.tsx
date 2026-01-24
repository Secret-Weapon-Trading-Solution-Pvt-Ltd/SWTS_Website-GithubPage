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

      {/* Gradient overlay - fades image into background on left */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #F8FAFC 0%, #F8FAFC 45%, rgba(248,250,252,0.8) 55%, transparent 70%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-32">
        <div className="max-w-xl">

          {/* Company Logo and Name */}
          <div
            className="flex items-center gap-4 mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <Image
              src="/logos/logo1.png"
              alt="SWTS Logo"
              width={80}
              height={80}
              className=""
            />
            <div>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight"
                style={{ color: '#0F172A' }}
              >
                Secret Weapon Trading Solution
                <span
                  className="text-sm sm:text-base lg:text-lg font-medium ml-2"
                  style={{ color: '#64748B' }}
                >
                  Private Limited
                </span>
              </h2>
            </div>
          </div>

          {/* Micro label with accent line */}
          <div
            className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span
              className="w-12 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }}
            />
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: '#0D9488' }}
            >
              For serious traders
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8">
            <span
              className="block whitespace-nowrap text-[1.75rem] sm:text-[2rem] lg:text-[2.15rem] leading-[1.15] tracking-[-0.01em] opacity-0 animate-fade-in-up"
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
              className="block mt-1 text-[1.75rem] sm:text-[2rem] lg:text-[2.15rem] leading-[1.15] tracking-[-0.01em] opacity-0 animate-fade-in-up"
              style={{
                color: '#64748B',
                fontWeight: 500,
                animationDelay: '0.6s',
                animationFillMode: 'forwards'
              }}
            >
              Until you have to execute it.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl leading-[1.7] mb-12 max-w-lg opacity-0 animate-fade-in-up"
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
            className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            {/* Primary CTA Button - Assessment */}
            <Link
              href="/strategy-assessment"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-xl
                       shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.35)]
                       hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_10px_rgba(13,148,136,0.2)]
                       transition-all duration-200 ease-out"
              style={{
                background: 'linear-gradient(180deg, #0D9488 0%, #0F766E 100%)',
              }}
            >
              Take Free Assessment
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            {/* Secondary CTA Button */}
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 rounded-xl
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
