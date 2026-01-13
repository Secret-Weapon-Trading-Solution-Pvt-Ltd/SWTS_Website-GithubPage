import { Question } from '@/types';

// Optimized 5-Question Trading Assessment
// Order: Experience → Risk → Frequency → Returns → Usage Intent
// Purpose: Qualify leads and segment for personalized follow-up
export const assessmentQuestions: Question[] = [
  // Q1: Experience Level - Determines UI complexity, education prompts, risk limits
  {
    id: 'q_experience',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What is your options trading experience?',
    description: 'This helps us tailor recommendations to your skill level',
    required: true,
    weight: 10,
    options: [
      { id: 'q_exp_beginner', label: 'Beginner – Just getting started', value: 'beginner', score: 4 },
      { id: 'q_exp_intermediate', label: 'Intermediate – Some experience', value: 'intermediate', score: 7 },
      { id: 'q_exp_advanced', label: 'Advanced – Experienced trader', value: 'advanced', score: 10 },
    ],
  },
  // Q2: Risk Appetite - MOST CRITICAL for strategy filtering
  {
    id: 'q_risk',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What is your risk appetite?',
    description: 'Critical for matching you with appropriate strategies',
    required: true,
    weight: 15,
    options: [
      { id: 'q_risk_low', label: 'Low – Capital safety first', value: 'low', score: 6 },
      { id: 'q_risk_medium', label: 'Medium – Balanced risk & reward', value: 'medium', score: 10 },
      { id: 'q_risk_high', label: 'High – Aggressive returns', value: 'high', score: 8 },
    ],
  },
  // Q3: Trading Frequency - Active vs casual user detection
  {
    id: 'q_frequency',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How often do you trade?',
    description: 'Helps us understand your trading activity level',
    required: true,
    weight: 10,
    options: [
      { id: 'q_freq_rarely', label: 'Rarely / Just starting', value: 'rarely', score: 4 },
      { id: 'q_freq_moderate', label: '1–10 trades per month', value: 'moderate', score: 7 },
      { id: 'q_freq_active', label: 'More than 10 trades per month', value: 'active', score: 10 },
    ],
  },
  // Q4: Return Expectations - Align expectations & prevent misuse
  {
    id: 'q_returns',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'What returns do you expect monthly?',
    description: 'Helps us set realistic expectations together',
    required: true,
    weight: 10,
    options: [
      { id: 'q_ret_high', label: 'Greater than 5%', value: 'high', score: 6 },
      { id: 'q_ret_medium', label: 'Around 2–5%', value: 'medium', score: 10 },
      { id: 'q_ret_steady', label: 'Up to 2% (steady & safe)', value: 'steady', score: 8 },
    ],
  },
  // Q5: Usage Intent - Feature access & onboarding path
  {
    id: 'q_usage',
    category: 'assessment',
    type: 'multiple_choice',
    question: 'How do you want to trade using our platform?',
    description: 'This determines which features we recommend for you',
    required: true,
    weight: 10,
    options: [
      { id: 'q_use_manual', label: 'Manual trading', value: 'manual', score: 6 },
      { id: 'q_use_algo', label: 'Algo trading (fully automated)', value: 'algo', score: 10 },
      { id: 'q_use_semi', label: 'Alerts + semi-automation', value: 'semi', score: 8 },
      { id: 'q_use_learn', label: 'Learning & backtesting only', value: 'learn', score: 4 },
    ],
  },
];

// Empty contact fields (kept for compatibility but not used)
export const contactFields: Question[] = [];

// For compatibility with existing code
export const bestPracticeQuestions: Question[] = [];
export const qualifyingQuestions: Question[] = [];

// Combined Questions Array (only assessment questions now)
export const allQuestions: Question[] = [...assessmentQuestions];

// Get questions by category
export const getQuestionsByCategory = (category: Question['category']): Question[] => {
  return allQuestions.filter((q) => q.category === category);
};

// Get question by ID
export const getQuestionById = (id: string): Question | undefined => {
  return allQuestions.find((q) => q.id === id);
};

// Calculate max possible score
export const getMaxPossibleScore = (): number => {
  return assessmentQuestions.reduce((sum, q) => sum + (q.weight || 0), 0);
};
