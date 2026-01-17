'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LandingLayout } from '@/components/layouts';
import { ScoreReveal, InsightCard, NextSteps } from '@/components/results';
import { storage } from '@/lib/utils';
import { ScoreResult, Insight, NextStep, Answer, LeadQuality } from '@/types';
import { ArrowRight, Calendar, MessageCircle, BookOpen, AlertTriangle, TrendingUp, Target } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface AssessmentResult {
  score: ScoreResult;
  insights: Insight[];
  nextSteps: NextStep[];
  answers: Answer[];
  contactInfo: ContactInfo;
  timestamp: string;
}

// Aggressive hooks based on score
const getScoreHook = (score: number, quality: LeadQuality) => {
  if (quality === 'high') {
    return {
      hook: "You're closer than most. But close isn't profitable.",
      subtext: "Your foundation is solid. Now it's about eliminating the remaining execution gaps.",
    };
  } else if (quality === 'medium') {
    return {
      hook: "You know what to do. You just can't do it consistently.",
      subtext: "This is the most dangerous place to be—skilled enough to win, undisciplined enough to lose.",
    };
  } else {
    return {
      hook: "The market doesn't care about your potential.",
      subtext: "Raw truth: you're not ready for automation yet. But that's fixable.",
    };
  }
};

// Segmented CTAs based on lead quality
const getSegmentedCTA = (quality: LeadQuality) => {
  switch (quality) {
    case 'high':
      return {
        title: 'You\'re ready. The question is—will you act?',
        subtitle: 'Most traders in your position wait. Then watch others succeed. Don\'t be most traders.',
        primaryCTA: {
          text: 'Schedule Strategy Call',
          href: 'mailto:contact@swts.in?subject=Strategy%20Consultation%20-%20High%20Readiness%20Score',
          icon: Calendar,
        },
        secondaryCTA: {
          text: 'See Platform Demo',
          href: 'mailto:contact@swts.in?subject=Demo%20Request',
        },
        urgency: 'Consultations typically scheduled within 2–3 business days',
      };
    case 'medium':
      return {
        title: 'You\'re one decision away from consistency.',
        subtitle: 'The gap between where you are and where you could be is smaller than you think.',
        primaryCTA: {
          text: 'Get Strategy Review',
          href: 'mailto:contact@swts.in?subject=Strategy%20Review%20Request',
          icon: MessageCircle,
        },
        secondaryCTA: {
          text: 'Learn More',
          href: 'mailto:contact@swts.in?subject=Information%20Request',
        },
        urgency: null,
      };
    case 'low':
    default:
      return {
        title: 'Build the foundation first. Automation comes later.',
        subtitle: 'Rushing into automation without fundamentals is how accounts blow up.',
        primaryCTA: {
          text: 'Get Learning Resources',
          href: 'mailto:contact@swts.in?subject=Learning%20Resources%20Request',
          icon: BookOpen,
        },
        secondaryCTA: {
          text: 'Ask Questions',
          href: 'mailto:contact@swts.in?subject=Question',
        },
        urgency: null,
      };
  }
};

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = storage.getAssessmentData<AssessmentResult>();

    if (!data) {
      router.push('/strategy-assessment');
      return;
    }

    setResult(data);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <LandingLayout>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-slate-200 border-t-blue-600 mx-auto mb-4" />
            <p className="text-slate-500">Analyzing your responses...</p>
          </div>
        </div>
      </LandingLayout>
    );
  }

  if (!result) return null;

  const firstName = result.contactInfo?.name?.split(' ')[0] || '';
  const scoreHook = getScoreHook(result.score.percentage, result.score.leadQuality);
  const segmentedCTA = getSegmentedCTA(result.score.leadQuality);
  const CTAIcon = segmentedCTA.primaryCTA.icon;

  return (
    <LandingLayout>
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Aggressive Header Hook */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Your Results</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              {scoreHook.hook}
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              {scoreHook.subtext}
            </p>
          </div>

          {/* Score Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                  Automation Readiness Score
                </p>
                <p className="text-sm text-slate-500 mb-2">
                  {firstName ? `${firstName}, this` : 'This'} score reflects how prepared your trading approach is for systematic automation.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-slate-900">{result.score.percentage}</span>
                  <span className="text-2xl text-slate-400">/100</span>
                </div>
              </div>
              <div className={`px-6 py-3 rounded-xl text-center ${
                result.score.leadQuality === 'high'
                  ? 'bg-emerald-50 text-emerald-700'
                  : result.score.leadQuality === 'medium'
                    ? 'bg-amber-50 text-amber-700'
                    : 'bg-slate-100 text-slate-600'
              }`}>
                <p className="text-sm font-medium">
                  {result.score.leadQuality === 'high'
                    ? 'High Readiness'
                    : result.score.leadQuality === 'medium'
                      ? 'Moderate Readiness'
                      : 'Building Foundation'}
                </p>
              </div>
            </div>

            {/* Score bar */}
            <div className="mt-8">
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    result.score.leadQuality === 'high'
                      ? 'bg-emerald-500'
                      : result.score.leadQuality === 'medium'
                        ? 'bg-amber-500'
                        : 'bg-slate-400'
                  }`}
                  style={{ width: `${result.score.percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>0 - Not Ready</span>
                <span>100 - Automation Ready</span>
              </div>
            </div>
          </div>

          {/* Insights */}
          {result.insights.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-slate-900">Key Insights</h2>
              </div>
              <p className="text-sm text-slate-500 mb-6">Personalized observations based on your responses.</p>
              <div className="space-y-4">
                {result.insights.map((insight, index) => (
                  <div
                    key={insight.id}
                    className="bg-white rounded-xl p-6 border border-slate-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        insight.priority === 'high' ? 'bg-amber-100 text-amber-600' :
                        insight.priority === 'medium' ? 'bg-blue-100 text-blue-600' :
                        'bg-emerald-100 text-emerald-600'
                      }`}>
                        {insight.priority === 'high' ? <AlertTriangle className="w-4 h-4" /> :
                         insight.priority === 'medium' ? <Target className="w-4 h-4" /> :
                         <TrendingUp className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{insight.title}</h3>
                        <p className="text-slate-500 text-sm mb-2">{insight.description}</p>
                        <p className="text-xs text-slate-400 italic">
                          {insight.priority === 'high'
                            ? 'Why this matters: Addressing this gap can significantly improve your execution consistency.'
                            : insight.priority === 'medium'
                              ? 'Why this matters: This insight can help refine your trading approach.'
                              : 'Why this matters: Building on this strength supports long-term success.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mb-4">
            <p className="text-sm text-slate-500">Based on your results, here's the most effective next step.</p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              {segmentedCTA.title}
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              {segmentedCTA.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <a
                  href={segmentedCTA.primaryCTA.href}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors"
                >
                  <CTAIcon className="w-5 h-5" />
                  {segmentedCTA.primaryCTA.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-slate-500 mt-3">
                  Discuss your assessment and execution gaps in a 30-minute call.
                </p>
              </div>
              <a
                href={segmentedCTA.secondaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-4 text-slate-400 hover:text-white transition-colors"
              >
                {segmentedCTA.secondaryCTA.text}
              </a>
            </div>

            {segmentedCTA.urgency && (
              <p className="mt-6 text-sm text-slate-400">{segmentedCTA.urgency}</p>
            )}
          </div>

          {/* Retake */}
          <div className="text-center">
            <button
              onClick={() => {
                storage.clearAssessmentData();
                router.push('/strategy-assessment');
              }}
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              Retake Assessment
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center text-xs text-slate-400">
            <p>
              This assessment provides educational insights only. Trading involves risk.
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
