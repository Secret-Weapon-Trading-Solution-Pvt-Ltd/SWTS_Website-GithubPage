'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FrustrationHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg_new.png)' }}
      />

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% to-transparent to-70%" />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 py-32">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-teal-500" />
            <span className="text-sm font-medium text-slate-500">For serious traders</span>
          </div>

          {/* Main headline - Frustration hook */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Your strategy works.
            <span className="block mt-2 text-slate-400">
              Until you have to execute it.
            </span>
          </h1>

          {/* Supporting sub-text */}
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            The analysis is sound. The backtest is profitable. But when real money is on the line,
            hesitation and emotion take over.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href="/strategy-assessment/questionnaire"
              className="group inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold
                       hover:bg-slate-800 transition-all shadow-button hover:shadow-soft-lg"
            >
              Find Your Execution Gap
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-sm text-slate-500">
              3 minutes  ·  No signup required
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
};

export default FrustrationHero;
