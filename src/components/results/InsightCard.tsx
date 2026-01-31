'use client';

import React from 'react';
import { Insight } from '@/types';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle, Info, Lightbulb } from 'lucide-react';

export interface InsightCardProps {
  insight: Insight;
  index: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({ insight, index }) => {
  const getPriorityStyles = (priority: Insight['priority']) => {
    switch (priority) {
      case 'high':
        return {
          border: 'border-l-red-500',
          bg: 'bg-red-50',
          icon: AlertCircle,
          iconColor: 'text-red-500',
          badge: 'bg-red-100 text-red-700',
        };
      case 'medium':
        return {
          border: 'border-l-primary-500',
          bg: 'bg-primary-50',
          icon: Info,
          iconColor: 'text-primary-500',
          badge: 'bg-primary-100 text-primary-700',
        };
      case 'low':
        return {
          border: 'border-l-accent-500',
          bg: 'bg-accent-50',
          icon: CheckCircle,
          iconColor: 'text-accent-500',
          badge: 'bg-accent-100 text-accent-700',
        };
      default:
        return {
          border: 'border-l-gray-500',
          bg: 'bg-gray-50',
          icon: Info,
          iconColor: 'text-black',
          badge: 'bg-gray-100 text-gray-700',
        };
    }
  };

  const styles = getPriorityStyles(insight.priority);
  const Icon = styles.icon;

  return (
    <div
      className={cn(
        'rounded-xl border-l-4 p-6 transition-all duration-300 hover:shadow-lg animate-fade-in',
        styles.border,
        styles.bg
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm'
            )}
          >
            <Icon className={cn('w-5 h-5', styles.iconColor)} />
          </div>
          <div>
            <span className="text-sm text-black">Insight #{index + 1}</span>
            <h3 className="font-bold text-gray-900">{insight.title}</h3>
          </div>
        </div>
        <span
          className={cn(
            'text-xs font-medium px-2 py-1 rounded-full',
            styles.badge
          )}
        >
          {insight.priority === 'high'
            ? 'Priority'
            : insight.priority === 'medium'
            ? 'Important'
            : 'Good to Know'}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{insight.description}</p>

      {/* Recommendation */}
      <div className="bg-white rounded-lg p-4 border border-gray-100">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-sm font-medium text-gray-900">Recommendation</span>
            <p className="text-sm text-black mt-1">{insight.recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
