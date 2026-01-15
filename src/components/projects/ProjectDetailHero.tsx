'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  LineChart,
  TrendingUp,
  Target,
  Shield,
  Clock,
  Zap,
} from 'lucide-react';
import type { Project } from '@/types/projects';

const metricIcons = [LineChart, TrendingUp, Target, Shield, Clock, Zap];

interface ProjectDetailHeroProps {
  project: Project;
}

export const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({ project }) => {
  const categoryLabel = project.category
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900
                     mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-flex px-3 py-1 bg-teal-50 border border-teal-100 rounded-full
                         text-xs font-semibold text-teal-700 uppercase tracking-wide">
            {categoryLabel}
          </span>
          {project.status === 'in-progress' && (
            <span className="inline-flex ml-2 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full
                           text-xs font-semibold text-amber-700 uppercase tracking-wide">
              In Progress
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          {project.title}
        </h1>

        {/* Outcome */}
        <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-3xl">
          {project.outcome}
        </p>

        {/* Key Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-soft">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Key Metrics
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {project.metrics.map((metric, i) => {
                const Icon = metricIcons[i % metricIcons.length];
                return (
                  <div key={metric.label} className="text-center">
                    <Icon className="w-5 h-5 text-teal-500 mx-auto mb-2" />
                    <p className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailHero;
