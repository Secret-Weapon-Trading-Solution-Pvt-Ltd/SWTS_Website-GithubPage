'use client';

import React from 'react';
import { NextStep, LeadQuality } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, Users, BookOpen, Mail, Star } from 'lucide-react';

export interface NextStepsProps {
  nextSteps: NextStep[];
  leadQuality: LeadQuality;
}

const getStepIcon = (stepId: string) => {
  switch (stepId) {
    case 'consultation':
      return Calendar;
    case 'demo':
      return Users;
    case 'strategy_review':
      return Star;
    case 'learning_resources':
    case 'foundation_course':
      return BookOpen;
    case 'newsletter':
      return Mail;
    default:
      return ArrowRight;
  }
};

export const NextSteps: React.FC<NextStepsProps> = ({ nextSteps, leadQuality }) => {
  const primaryStep = nextSteps[0];
  const secondarySteps = nextSteps.slice(1, 4);

  const getHeadlineByQuality = (quality: LeadQuality): string => {
    switch (quality) {
      case 'high':
        return "You're Ready for the Next Level";
      case 'medium':
        return 'Build Your Foundation';
      case 'low':
        return 'Start Your Journey';
      default:
        return 'Your Next Steps';
    }
  };

  const getSubheadlineByQuality = (quality: LeadQuality): string => {
    switch (quality) {
      case 'high':
        return 'Based on your score, we recommend scheduling a personalized strategy consultation to discuss automation options.';
      case 'medium':
        return "You have solid foundations. Let's strengthen a few areas before diving into full automation.";
      case 'low':
        return 'Every expert was once a beginner. Here are resources to help you build a strong trading foundation.';
      default:
        return 'Choose the path that best fits your needs.';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {getHeadlineByQuality(leadQuality)}
        </h2>
        <p className="text-black max-w-xl mx-auto">
          {getSubheadlineByQuality(leadQuality)}
        </p>
      </div>

      {/* Primary CTA */}
      {primaryStep && (
        <div className="mb-8">
          <div
            className={cn(
              'relative rounded-2xl p-8 overflow-hidden',
              leadQuality === 'high'
                ? 'bg-gradient-to-br from-accent-600 to-accent-700'
                : leadQuality === 'medium'
                ? 'bg-gradient-to-br from-primary-600 to-primary-700'
                : 'bg-gradient-to-br from-gray-700 to-gray-800'
            )}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                    Recommended for You
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {primaryStep.title}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-lg">
                    {primaryStep.description}
                  </p>
                  <a
                    href={primaryStep.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    {primaryStep.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Options */}
      {secondarySteps.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Other Ways We Can Help
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondarySteps.map((step) => {
              const Icon = getStepIcon(step.id);
              return (
                <a
                  key={step.id}
                  href={step.ctaLink}
                  className="group flex flex-col p-5 bg-gray-50 rounded-xl hover:bg-primary-50 hover:border-primary-200 border border-gray-100 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-5 h-5 text-black group-hover:text-primary-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary-700">
                    {step.title}
                  </h4>
                  <p className="text-sm text-black flex-1">{step.description}</p>
                  <div className="mt-3 flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.ctaText}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default NextSteps;
