'use client';

import React from 'react';
import { TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export interface HeroProps {
  onStartAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartAssessment }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-primary-950 to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pain Points Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-red-300 text-sm font-medium">
            90% of manual traders struggle with consistency
          </span>
        </div>

        {/* Main Headline - Frustration Hook */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Tired of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Emotional Trading
          </span>{' '}
          Destroying Your Results?
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto">
          Discover if your trading strategy is ready for automation
        </p>

        {/* Assessment Invitation */}
        <p className="text-lg text-primary-300 mb-8 max-w-2xl mx-auto">
          Take our free 15-question Strategy Assessment and get personalized insights
          on how to improve your trading consistency
        </p>

        {/* Pain Points */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-black">
            <Clock className="w-5 h-5 text-red-400" />
            <span>Missing trades while away?</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <TrendingUp className="w-5 h-5 text-red-400" />
            <span>Inconsistent execution?</span>
          </div>
          <div className="flex items-center gap-2 text-black">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span>Overtrading on impulse?</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStartAssessment}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-2xl shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
        >
          <span>Get Your Free Strategy Assessment</span>
          <svg
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        {/* Trust Indicators */}
        <p className="mt-6 text-sm text-black">
          Free assessment - Takes only 3 minutes - Instant results
        </p>
      </div>
    </section>
  );
};

export default Hero;
