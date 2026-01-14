'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const ProblemAgitation: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white" id="problems">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        {/* Single powerful statement */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
          It's not your strategy.
          <span className="block mt-2 text-slate-400">It's the execution.</span>
        </h2>

        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
          A mediocre strategy executed consistently will always outperform
          a great strategy executed randomly.
        </p>

        {/* CTA */}
        <Link
          href="/#assessment"
          className="group inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-semibold
                   hover:bg-slate-800 transition-all shadow-button hover:shadow-soft-lg"
        >
          Find Your Execution Gap
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default ProblemAgitation;
