import { Answer, Insight, NextStep, LeadQuality } from '@/types';
import { getQuestionById } from './questions';

// Insight definitions based on question responses
// Updated to match new question IDs: q_experience, q_risk, q_frequency, q_returns, q_usage
const insightDefinitions: Record<string, (value: string) => Insight | null> = {
  // Q1: Experience Level
  q_experience: (value) => {
    if (value === 'beginner') {
      return {
        id: 'insight_beginner',
        title: 'Perfect Starting Point',
        description:
          'As a beginner, you have the advantage of building systematic trading habits from day one—without bad habits to unlearn.',
        recommendation:
          'Start with our guided onboarding and paper trading features. Build confidence before going live with real capital.',
        priority: 'high',
      };
    }
    if (value === 'intermediate') {
      return {
        id: 'insight_intermediate',
        title: 'Ready to Level Up',
        description:
          'Your trading experience gives you a solid foundation. Automation can help you execute more consistently.',
        recommendation:
          'Focus on automating your proven strategies first. This will reveal where your execution has been costing you returns.',
        priority: 'medium',
      };
    }
    if (value === 'advanced') {
      return {
        id: 'insight_advanced',
        title: 'Advanced Automation Ready',
        description:
          'Your experience positions you perfectly for advanced automation features like multi-strategy portfolios and dynamic risk management.',
        recommendation:
          'Explore our API integrations and custom strategy builder to create sophisticated automated systems.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q2: Risk Appetite - Most Critical
  q_risk: (value) => {
    if (value === 'low') {
      return {
        id: 'insight_risk_low',
        title: 'Capital Preservation Focus',
        description:
          'Prioritizing capital safety is wise. Automation excels at enforcing strict risk limits without emotional override.',
        recommendation:
          'Use our automated stop-loss and position sizing tools to ensure your risk rules are followed every single time.',
        priority: 'high',
      };
    }
    if (value === 'medium') {
      return {
        id: 'insight_risk_medium',
        title: 'Balanced Risk Profile',
        description:
          'A balanced approach to risk and reward is sustainable long-term. Our tools can help you maintain this discipline.',
        recommendation:
          'Consider automating your risk-reward ratios and position sizing to maintain consistency across all trades.',
        priority: 'medium',
      };
    }
    if (value === 'high') {
      return {
        id: 'insight_risk_high',
        title: 'Aggressive Strategy Match',
        description:
          'High-risk strategies require precise execution and quick adjustments—exactly what automation provides.',
        recommendation:
          'Automation ensures you never miss an exit or hesitate on entries. Critical for managing aggressive positions.',
        priority: 'high',
      };
    }
    return null;
  },

  // Q3: Trading Frequency
  q_frequency: (value) => {
    if (value === 'rarely') {
      return {
        id: 'insight_rare_trader',
        title: 'Quality Over Quantity',
        description:
          'Trading less frequently often means waiting for high-quality setups—but it\'s easy to miss them when they appear.',
        recommendation:
          'Set up automated alerts to notify you when your setup criteria are met, so you never miss the perfect opportunity.',
        priority: 'high',
      };
    }
    if (value === 'moderate') {
      return {
        id: 'insight_moderate_trader',
        title: 'Consistent Trader',
        description:
          'Regular trading activity means you understand market dynamics. Automation can make your execution more consistent.',
        recommendation:
          'Focus on automating your entry and exit rules to eliminate the variance in your current execution.',
        priority: 'medium',
      };
    }
    if (value === 'active') {
      return {
        id: 'insight_active_trader',
        title: 'High-Volume Trader',
        description:
          'With 10+ trades per month, automation could save you hours while improving execution quality.',
        recommendation:
          'Automate your routine trades to free up time for strategy development and market analysis.',
        priority: 'low',
      };
    }
    return null;
  },

  // Q4: Return Expectations
  q_returns: (value) => {
    if (value === 'high') {
      return {
        id: 'insight_high_returns',
        title: 'Ambitious Return Goals',
        description:
          'Targeting 5%+ monthly requires excellent strategy AND flawless execution. One without the other won\'t get you there.',
        recommendation:
          'Validate your strategy with thorough backtesting first, then use automation to ensure perfect execution.',
        priority: 'high',
      };
    }
    if (value === 'medium') {
      return {
        id: 'insight_medium_returns',
        title: 'Realistic Targets',
        description:
          '2-5% monthly is achievable with good strategy and consistent execution—the exact combination automation provides.',
        recommendation:
          'Your expectations align well with systematic trading. Focus on consistency and let compound returns work for you.',
        priority: 'low',
      };
    }
    if (value === 'steady') {
      return {
        id: 'insight_steady_returns',
        title: 'Steady Growth Approach',
        description:
          'Targeting steady returns shows mature risk awareness. Automation helps maintain this discipline through all market conditions.',
        recommendation:
          'Our risk management tools are perfect for your approach—protecting capital while capturing consistent returns.',
        priority: 'medium',
      };
    }
    return null;
  },

  // Q5: Usage Intent
  q_usage: (value) => {
    if (value === 'manual') {
      return {
        id: 'insight_manual',
        title: 'Strategy Development Focus',
        description:
          'Using tools for manual trading and analysis is a great first step toward understanding what to automate later.',
        recommendation:
          'Start with our backtesting and strategy builder. Once you find a winning approach, we can help you automate it.',
        priority: 'medium',
      };
    }
    if (value === 'algo') {
      return {
        id: 'insight_algo',
        title: 'Full Automation Ready',
        description:
          'You\'re ready for fully automated trading. Our platform handles everything from signal generation to order execution.',
        recommendation:
          'Let\'s discuss your strategy requirements and set up your automated trading system. We\'ll handle the technical complexity.',
        priority: 'high',
      };
    }
    if (value === 'semi') {
      return {
        id: 'insight_semi',
        title: 'Smart Semi-Automation',
        description:
          'Alerts with semi-automation gives you control while eliminating emotional trading decisions.',
        recommendation:
          'Our alert system integrates with TradingView and other platforms. You decide, the system executes.',
        priority: 'medium',
      };
    }
    if (value === 'learn') {
      return {
        id: 'insight_learn',
        title: 'Learning & Testing Focus',
        description:
          'Starting with backtesting is the smart approach. Understand your strategy deeply before risking capital.',
        recommendation:
          'Use our backtesting tools to validate ideas. When you\'re confident in your strategy, we\'re here to help you automate.',
        priority: 'high',
      };
    }
    return null;
  },
};

// Generate insights from answers
export const generateInsights = (answers: Answer[]): Insight[] => {
  const insights: Insight[] = [];

  answers.forEach((answer) => {
    const generateInsight = insightDefinitions[answer.questionId];
    if (generateInsight) {
      const insight = generateInsight(answer.value as string);
      if (insight) {
        insights.push(insight);
      }
    }
  });

  // Sort by priority (high first)
  const priorityOrder: Record<string, number> = { high: 0, medium: 1, low: 2 };
  insights.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  // Return top 3 insights
  return insights.slice(0, 3);
};

// Define next steps based on lead quality
export const getNextSteps = (leadQuality: LeadQuality): NextStep[] => {
  const allNextSteps: NextStep[] = [
    {
      id: 'consultation',
      title: 'Schedule Your Strategy Consultation',
      description:
        'Get a personalized 30-minute session with our automation experts to discuss your specific strategy and implementation roadmap.',
      ctaText: 'Book Free Consultation',
      ctaLink: 'mailto:contact@swts.in?subject=Strategy%20Consultation%20Request',
      forLeadQuality: ['high'],
    },
    {
      id: 'demo',
      title: 'See Our Platform in Action',
      description:
        'See our automation solutions in action. Learn how other traders are using algorithmic systems to improve consistency.',
      ctaText: 'Request Demo',
      ctaLink: 'mailto:contact@swts.in?subject=Demo%20Request',
      forLeadQuality: ['high', 'medium'],
    },
    {
      id: 'strategy_review',
      title: 'Get Your Strategy Reviewed',
      description:
        'Submit your trading strategy for a complimentary review. We\'ll assess automation potential and suggest improvements.',
      ctaText: 'Submit Strategy',
      ctaLink: 'mailto:contact@swts.in?subject=Strategy%20Review%20Request',
      forLeadQuality: ['medium'],
    },
    {
      id: 'learning_resources',
      title: 'Learn More About Algo Trading',
      description:
        'Discover how algorithmic trading can transform your trading results with our educational resources.',
      ctaText: 'Contact Us',
      ctaLink: 'mailto:contact@swts.in?subject=Learning%20Resources',
      forLeadQuality: ['medium', 'low'],
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description:
        'Have questions? Our team is here to help you understand how SWTS can fit your trading needs.',
      ctaText: 'Contact Us',
      ctaLink: 'mailto:contact@swts.in',
      forLeadQuality: ['high', 'medium', 'low'],
    },
  ];

  return allNextSteps.filter((step) => step.forLeadQuality.includes(leadQuality));
};

// Generate positive insight for high performers
export const generatePositiveInsight = (answers: Answer[]): Insight | null => {
  const positiveAnswers = answers.filter((a) => {
    const q = getQuestionById(a.questionId);
    if (!q?.options) return false;
    const selectedOption = q.options.find((opt) => opt.value === a.value);
    const maxScore = Math.max(...q.options.map((opt) => opt.score || 0));
    return selectedOption?.score === maxScore;
  });

  // With only 5 questions, lower the threshold
  if (positiveAnswers.length >= 3) {
    return {
      id: 'insight_strong_foundation',
      title: 'Strong Trading Foundation',
      description:
        'Your responses indicate you have experience and clear goals. You\'re well-positioned for algorithmic trading.',
      recommendation:
        'Focus on automating your proven strategies to improve consistency and free up time for analysis.',
      priority: 'low',
    };
  }

  return null;
};
