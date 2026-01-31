'use client';

import React from 'react';
import { Question, Answer } from '@/types';
import { RadioGroup, Input, Textarea } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface QuestionCardProps {
  question: Question;
  answer?: Answer;
  onAnswer: (answer: Answer) => void;
  questionNumber: number;
  totalQuestions: number;
  isActive?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  onAnswer,
  questionNumber,
  totalQuestions,
  isActive = true,
}) => {
  const handleValueChange = (value: string) => {
    onAnswer({
      questionId: question.id,
      value,
    });
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'yes_no':
      case 'multiple_choice':
        return (
          <RadioGroup
            name={question.id}
            options={
              question.options?.map((opt) => ({
                id: opt.id,
                label: opt.label,
                value: opt.value,
              })) || []
            }
            value={answer?.value as string}
            onChange={handleValueChange}
            size="md"
          />
        );

      case 'text':
        if (question.id.includes('phone') || question.id === 'q_5') {
          return question.id === 'q_5' ? (
            <Textarea
              value={(answer?.value as string) || ''}
              onChange={(e) => handleValueChange(e.target.value)}
              placeholder="Share any specific details about your trading or automation needs..."
              className="min-h-[120px]"
            />
          ) : (
            <Input
              type={question.id.includes('email') ? 'email' : 'text'}
              value={(answer?.value as string) || ''}
              onChange={(e) => handleValueChange(e.target.value)}
              placeholder={
                question.id.includes('email')
                  ? 'your@email.com'
                  : question.id.includes('phone')
                  ? '+91 98765 43210'
                  : 'Your answer'
              }
              required={question.required}
            />
          );
        }
        return (
          <Input
            type={question.id.includes('email') ? 'email' : 'text'}
            value={(answer?.value as string) || ''}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder={
              question.id.includes('email')
                ? 'your@email.com'
                : question.id.includes('name')
                ? 'John Doe'
                : 'Your answer'
            }
            required={question.required}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300',
        isActive ? 'opacity-100' : 'opacity-50'
      )}
    >
      {/* Question Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
            {questionNumber}
          </span>
          <span className="text-sm text-black">
            of {totalQuestions} questions
          </span>
          {question.required && (
            <span className="ml-auto text-xs text-red-500 font-medium">
              Required
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          {question.question}
        </h3>

        {question.description && (
          <p className="text-black">{question.description}</p>
        )}
      </div>

      {/* Question Input */}
      <div className="mt-6">{renderQuestionInput()}</div>
    </div>
  );
};

export default QuestionCard;
