'use client';

import React from 'react';
import { CheckCircle, Clock, Zap, ArrowRight } from 'lucide-react';

export interface CTASectionProps {
  onStartAssessment: () => void;
}

const benefits = [
  {
    icon: CheckCircle,
    text: '100% Free - No credit card required',
  },
  {
    icon: Clock,
    text: 'Takes only 3 minutes to complete',
  },
  {
    icon: Zap,
    text: 'Instant personalized results',
  },
];

export const CTASection: React.FC<CTASectionProps> = ({ onStartAssessment }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to See If Your Strategy Can Be{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-300">
            Automated?
          </span>
        </h2>

        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Take the first step toward consistent, emotion-free trading. Our assessment
          will show you exactly where you stand and what to do next.
        </p>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 text-white"
              >
                <Icon className="w-5 h-5 text-accent-400" />
                <span>{benefit.text}</span>
              </div>
            );
          })}
        </div>

        {/* Primary CTA Button */}
        <button
          onClick={onStartAssessment}
          className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-primary-900 bg-white rounded-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          <span>Get Free Strategy Assessment</span>
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary CTA */}
        <p className="mt-6 text-primary-300">
          or{' '}
          <button
            onClick={onStartAssessment}
            className="underline hover:text-white transition-colors"
          >
            See if your strategy can be automated
          </button>
        </p>

        {/* Trust Seal */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <p className="text-sm text-black">
            Join 500+ traders who have assessed their automation readiness
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
