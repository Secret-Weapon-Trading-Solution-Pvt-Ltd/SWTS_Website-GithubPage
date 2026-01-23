'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden">
      {/* Gradient background - light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-teal-50/40" />

      {/* Subtle accent orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <span className="section-label">The Next Step</span>

          {/* Main headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mt-4 mb-6">
            Stop wondering.
            <span className="block text-slate-400">Start knowing.</span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Explore our projects and see how we build precision trading systems.
          </p>

          {/* CTA Button */}
          <Link
            href="/projects"
            className="group inline-flex items-center px-10 py-5 bg-slate-900 text-white rounded-full font-semibold text-lg
                     hover:bg-slate-800 transition-all shadow-button hover:shadow-soft-xl"
          >
            View Our Projects
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Contact line */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            Questions? Reach out at{' '}
            <a
              href="mailto:support@secretweapon.in"
              className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
            >
              support@secretweapon.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
