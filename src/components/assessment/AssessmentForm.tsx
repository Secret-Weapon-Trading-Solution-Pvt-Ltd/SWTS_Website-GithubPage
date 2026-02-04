'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Question, Answer } from '@/types';
import { allQuestions } from '@/lib/questions';
import { calculateScore } from '@/lib/scoring';
import { generateInsights, getNextSteps, generatePositiveInsight } from '@/lib/insights';
import { storage } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Send, Shield, AlertCircle } from 'lucide-react';
import { sendTelegramNotificationClient } from '@/lib/telegram';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

// Aggressive hooks for each question
const questionHooks: Record<string, { hook: string; subtext: string }> = {
  q_experience: {
    hook: "Experience alone won't save you.",
    subtext: "Even veterans lose to emotional execution. Let's see where you stand.",
  },
  q_risk: {
    hook: "This question separates winners from losers.",
    subtext: "Your risk approach reveals everything about your execution discipline.",
  },
  q_frequency: {
    hook: "More trades ≠ more profits.",
    subtext: "Frequency without consistency is just gambling with extra steps.",
  },
  q_returns: {
    hook: "Be honest. Delusion is expensive.",
    subtext: "Unrealistic expectations are the #1 cause of blown accounts.",
  },
  q_usage: {
    hook: "Why are you really here?",
    subtext: "Your intent determines your outcome. No judgment—just clarity.",
  },
};

export const AssessmentForm: React.FC = () => {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
  });

  const currentQuestion = allQuestions[currentQuestionIndex];
  const totalQuestions = allQuestions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Get current hook
  const currentHook = questionHooks[currentQuestion.id] || {
    hook: "Every answer matters.",
    subtext: "Be honest for accurate results.",
  };

  // Get current answer
  const currentAnswer = answers.find((a) => a.questionId === currentQuestion.id);

  // Handle answer change
  const handleAnswer = (answer: Answer) => {
    setError(null);
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === answer.questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = answer;
        return updated;
      }
      return [...prev, answer];
    });
  };

  // Validate current answer
  const validateCurrentAnswer = (): boolean => {
    if (!currentQuestion.required) return true;

    const answer = answers.find((a) => a.questionId === currentQuestion.id);
    if (!answer || !answer.value || (typeof answer.value === 'string' && !answer.value.trim())) {
      setError('Please answer this question to continue');
      return false;
    }

    return true;
  };

  // Validate contact info
  const validateContactInfo = (): boolean => {
    if (!contactInfo.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!contactInfo.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  // Navigate to next question
  const handleNext = () => {
    if (!validateCurrentAnswer()) return;

    if (isLastQuestion) {
      setShowContactForm(true);
      setError(null);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setError(null);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (showContactForm) {
      setShowContactForm(false);
      setError(null);
    } else if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setError(null);
    }
  };

  // Submit assessment with contact info
  const handleSubmit = async () => {
    if (!validateContactInfo()) return;

    setIsSubmitting(true);

    try {
      const score = calculateScore(answers);
      let insights = generateInsights(answers);
      const positiveInsight = generatePositiveInsight(answers);
      if (positiveInsight && insights.length < 3) {
        insights = [positiveInsight, ...insights].slice(0, 3);
      }
      const nextSteps = getNextSteps(score.leadQuality);
      const timestamp = new Date().toISOString();

      const result = {
        score,
        insights,
        nextSteps,
        answers,
        contactInfo,
        timestamp,
      };

      // Send Telegram notification directly (don't block on failure)
      try {
        await sendTelegramNotificationClient({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone || '',
          score: score.percentage,
          leadQuality: score.leadQuality,
          timestamp,
        });
      } catch (notifyErr) {
        // Don't fail the submission if notification fails
        console.error('Notification failed:', notifyErr);
      }

      storage.setAssessmentData(result);
      router.push('/strategy-assessment/results');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (showContactForm) {
          handleSubmit();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, answers, showContactForm, contactInfo]);

  // Contact form
  if (showContactForm) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Aggressive hook */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Almost there</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Your results are ready.
            </h1>
            <p className="text-black">
              But first—where should we send your personalized report?
            </p>
          </div>

          {/* Progress - complete */}
          <div className="mb-10">
            <div className="flex justify-between text-xs text-black mb-2">
              <span>Assessment complete</span>
              <span>100%</span>
            </div>
            <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-full" />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone <span className="text-black text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white focus:outline-none transition-all placeholder:text-black"
                />
              </div>
            </div>

            {/* Privacy */}
            <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Shield className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <p className="text-sm text-black">
                No spam. No sales calls. Just your personalized report.
              </p>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 text-black hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  View My Results
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Aggressive hook for current question */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
            <span className="text-sm font-medium uppercase tracking-wide">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {currentHook.hook}
          </h1>
          <p className="text-black">
            {currentHook.subtext}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-black mb-2">
            <span>Assessment progress</span>
            <span>{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%</span>
          </div>
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
          <p className="text-xs text-black mt-2">
            Your answers are private and used only to personalize results.
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          {/* Question */}
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.description && (
            <p className="text-black text-sm mb-6 -mt-4">{currentQuestion.description}</p>
          )}

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.type === 'multiple_choice' || currentQuestion.type === 'yes_no' ? (
              currentQuestion.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer({ questionId: currentQuestion.id, value: option.value })}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${
                    currentAnswer?.value === option.value
                      ? 'border-blue-500 bg-blue-50 text-slate-900'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white text-slate-700'
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                </button>
              ))
            ) : (
              <textarea
                value={(currentAnswer?.value as string) || ''}
                onChange={(e) => handleAnswer({ questionId: currentQuestion.id, value: e.target.value })}
                placeholder="Type your answer here..."
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-900 placeholder:text-black focus:border-blue-500 focus:bg-white focus:outline-none min-h-[120px] resize-none transition-all"
              />
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="flex items-center gap-2 text-black hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold transition-colors"
          >
            {isLastQuestion ? 'Continue' : 'Next'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;
