'use client';

import React, { useEffect, useState } from 'react';
import { ScoreResult, LeadQuality } from '@/types';
import { getReadinessLabel, getScoreInterpretation } from '@/lib/scoring';
import { cn } from '@/lib/utils';
import { Award, TrendingUp, Shield, Target } from 'lucide-react';

export interface ScoreRevealProps {
  score: ScoreResult;
  userName?: string;
}

export const ScoreReveal: React.FC<ScoreRevealProps> = ({ score, userName }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Animate score on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = score.percentage / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= score.percentage) {
        setAnimatedScore(score.percentage);
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 300);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score.percentage]);

  const getScoreColor = (quality: LeadQuality): string => {
    switch (quality) {
      case 'high':
        return 'text-emerald-600';
      case 'medium':
        return 'text-blue-600';
      case 'low':
        return 'text-black';
      default:
        return 'text-black';
    }
  };

  const getScoreRingColor = (quality: LeadQuality): string => {
    switch (quality) {
      case 'high':
        return 'stroke-emerald-500';
      case 'medium':
        return 'stroke-blue-500';
      case 'low':
        return 'stroke-slate-400';
      default:
        return 'stroke-slate-400';
    }
  };

  const getBadgeIcon = (quality: LeadQuality) => {
    switch (quality) {
      case 'high':
        return Award;
      case 'medium':
        return TrendingUp;
      case 'low':
        return Shield;
      default:
        return Shield;
    }
  };

  const BadgeIcon = getBadgeIcon(score.leadQuality);

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-4">
          <Target className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-sm font-medium">Assessment Complete</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          {userName ? `${userName}, Your Results Are Ready` : 'Your Results Are Ready'}
        </h1>
        <p className="text-black">
          Here&apos;s your personalized automation readiness score
        </p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-slate-100"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              className={cn(
                'transition-all duration-1000 ease-out',
                getScoreRingColor(score.leadQuality)
              )}
              style={{
                strokeDasharray: `${2 * Math.PI * 88}`,
                strokeDashoffset: `${2 * Math.PI * 88 * (1 - animatedScore / 100)}`,
              }}
            />
          </svg>

          {/* Score Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className={cn(
                'text-5xl font-bold',
                getScoreColor(score.leadQuality)
              )}
            >
              {animatedScore}%
            </span>
            <span className="text-sm text-black mt-1">Readiness Score</span>
          </div>
        </div>
      </div>

      {/* Readiness Badge */}
      <div
        className={cn(
          'flex items-center justify-center gap-2 py-3 px-6 rounded-full mx-auto w-fit mb-8 transition-all duration-500',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          score.leadQuality === 'high' && 'bg-emerald-50 text-emerald-700 border border-emerald-100',
          score.leadQuality === 'medium' && 'bg-blue-50 text-blue-700 border border-blue-100',
          score.leadQuality === 'low' && 'bg-slate-100 text-slate-700 border border-slate-200'
        )}
      >
        <BadgeIcon className="w-5 h-5" />
        <span className="font-bold">{getReadinessLabel(score.leadQuality)}</span>
      </div>

      {/* Interpretation */}
      <div
        className={cn(
          'text-center transition-all duration-500 delay-200',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <p className="text-slate-700 text-lg leading-relaxed max-w-xl mx-auto">
          {getScoreInterpretation(score)}
        </p>
      </div>

      {/* Category Breakdown */}
      <div
        className={cn(
          'mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-6 transition-all duration-500 delay-300',
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
      >
        <div className="text-center p-4 bg-slate-50 rounded-xl">
          <div className="text-2xl font-bold text-blue-600">
            {score.totalScore}
          </div>
          <div className="text-sm text-black">Your Score</div>
        </div>
        <div className="text-center p-4 bg-slate-50 rounded-xl">
          <div className="text-2xl font-bold text-black">
            {score.maxScore}
          </div>
          <div className="text-sm text-black">Maximum</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreReveal;
