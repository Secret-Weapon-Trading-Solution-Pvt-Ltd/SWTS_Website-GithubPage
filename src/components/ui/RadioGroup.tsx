'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  layout?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  layout = 'vertical',
  size = 'md',
}) => {
  const sizes = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-5 text-lg',
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {label}
        </label>
      )}
      <div
        className={cn(
          'space-y-2',
          layout === 'horizontal' && 'sm:flex sm:space-y-0 sm:space-x-3'
        )}
      >
        {options.map((option) => (
          <label
            key={option.id}
            className={cn(
              'relative flex items-start cursor-pointer rounded-lg border-2 transition-all duration-200',
              sizes[size],
              value === option.value
                ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            )}
          >
            <div className="flex items-center h-5">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200',
                  value === option.value
                    ? 'border-amber-500 bg-amber-500'
                    : 'border-gray-300 bg-white'
                )}
              >
                {value === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </div>
            <div className="ml-3 flex-1">
              <span
                className={cn(
                  'font-medium',
                  value === option.value ? 'text-amber-900' : 'text-gray-900'
                )}
              >
                {option.label}
              </span>
              {option.description && (
                <p className="text-sm text-black mt-0.5">{option.description}</p>
              )}
            </div>
            {value === option.value && (
              <div className="absolute top-2 right-2">
                <svg
                  className="w-5 h-5 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default RadioGroup;
