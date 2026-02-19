// Contact Information Types
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

// Question Types
export type QuestionType = 'yes_no' | 'multiple_choice' | 'text' | 'scale';

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
  score?: number;
}

export interface Question {
  id: string;
  category: 'contact' | 'best_practice' | 'qualifying' | 'assessment';
  type: QuestionType;
  question: string;
  description?: string;
  options?: QuestionOption[];
  required: boolean;
  weight?: number;
}

// Answer Types
export interface Answer {
  questionId: string;
  value: string | string[];
  score?: number;
}

// Assessment State
export interface AssessmentState {
  currentStep: number;
  totalSteps: number;
  contactInfo: ContactInfo;
  answers: Answer[];
  isComplete: boolean;
}

// Scoring Types
export type LeadQuality = 'high' | 'medium' | 'low';

export interface ScoreResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  leadQuality: LeadQuality;
  categoryScores: {
    bestPractices: number;
    qualifying: number;
  };
}

// Insight Types
export interface Insight {
  id: string;
  title: string;
  description: string;
  recommendation: string;
  priority: 'high' | 'medium' | 'low';
}

// Results Types
export interface AssessmentResult {
  contactInfo: ContactInfo;
  score: ScoreResult;
  insights: Insight[];
  nextSteps: NextStep[];
  timestamp: Date;
}

export interface NextStep {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  forLeadQuality: LeadQuality[];
}

// Form Validation
export interface ValidationError {
  field: string;
  message: string;
}

// Component Props Types
export interface QuestionCardProps {
  question: Question;
  answer?: Answer;
  onAnswer: (answer: Answer) => void;
  isActive: boolean;
}

export interface ProgressBarProps {
  current: number;
  total: number;
  showPercentage?: boolean;
}

export interface InsightCardProps {
  insight: Insight;
  index: number;
}

export interface ScoreRevealProps {
  score: ScoreResult;
  userName: string;
}
