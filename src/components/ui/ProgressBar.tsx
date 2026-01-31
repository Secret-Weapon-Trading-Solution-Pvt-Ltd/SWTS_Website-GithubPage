'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ProgressBarProps {
  current: number;
  total: number;
  showPercentage?: boolean;
  showSteps?: boolean;
  variant?: 'default' | 'gradient' | 'striped';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  showPercentage = false,
  showSteps = true,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const percentage = Math.round((current / total) * 100);

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const variants = {
    default: 'bg-amber-500',
    gradient: 'bg-gradient-to-r from-amber-500 to-orange-500',
    striped:
      'bg-amber-500 bg-stripes animate-pulse-slow',
  };

  return (
    <div className={cn('w-full', className)}>
      <div className="flex justify-between items-center mb-2">
        {showSteps && (
          <span className="text-sm font-medium text-black">
            Step {current} of {total}
          </span>
        )}
        {showPercentage && (
          <span className="text-sm font-medium text-amber-600">
            {percentage}% Complete
          </span>
        )}
      </div>
      <div
        className={cn(
          'w-full bg-gray-200 rounded-full overflow-hidden',
          sizes[size]
        )}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
