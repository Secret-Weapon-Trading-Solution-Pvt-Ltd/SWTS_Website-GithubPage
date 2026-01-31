'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  LineChart,
  Bot,
  BarChart3,
  Server,
  Cpu,
  Zap,
  TrendingUp,
  Database,
  Shield,
  Settings,
  Activity,
} from 'lucide-react';
import type { Project } from '@/types/projects';

const iconMap: Record<string, React.ElementType> = {
  'line-chart': LineChart,
  'bot': Bot,
  'bar-chart': BarChart3,
  'server': Server,
  'cpu': Cpu,
  'zap': Zap,
  'trending-up': TrendingUp,
  'database': Database,
  'shield': Shield,
  'settings': Settings,
  'activity': Activity,
};

// Category-based color tints for icon backgrounds
const categoryColors: Record<string, { bg: string; bgHover: string; icon: string }> = {
  'algorithmic-trading': {
    bg: 'bg-teal-50/80',
    bgHover: 'group-hover:bg-teal-100/80',
    icon: 'text-teal-600',
  },
  'analytics': {
    bg: 'bg-blue-50/80',
    bgHover: 'group-hover:bg-blue-100/80',
    icon: 'text-blue-600',
  },
  'infrastructure': {
    bg: 'bg-violet-50/80',
    bgHover: 'group-hover:bg-violet-100/80',
    icon: 'text-violet-600',
  },
  'automation': {
    bg: 'bg-amber-50/80',
    bgHover: 'group-hover:bg-amber-100/80',
    icon: 'text-amber-600',
  },
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = iconMap[project.icon] || LineChart;
  const colors = categoryColors[project.category] || categoryColors['algorithmic-trading'];

  // Get first metric if available
  const primaryMetric = project.metrics?.[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block bg-white rounded-2xl p-6 h-full
                 border border-slate-200/80 hover:border-slate-300
                 shadow-[0_1px_3px_rgba(0,0,0,0.02)]
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                 hover:-translate-y-1.5
                 transition-all duration-300 ease-out"
    >
      {/* Subtle top accent on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.5), transparent)'
        }}
      />

      {/* Icon Container - Category tinted */}
      <div className={`w-11 h-11 ${colors.bg} ${colors.bgHover} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300`}>
        <Icon className={`w-5 h-5 ${colors.icon}`} />
      </div>

      {/* Title - Strongest emphasis */}
      <h3 className="text-[1.0625rem] font-semibold text-slate-900 mb-2 leading-snug group-hover:text-slate-800 transition-colors">
        {project.title}
      </h3>

      {/* Primary Metric - Medium emphasis */}
      {primaryMetric && (
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg font-bold text-slate-700">
            {primaryMetric.value}
          </span>
          <span className="text-xs font-medium text-black uppercase tracking-wide">
            {primaryMetric.label}
          </span>
        </div>
      )}

      {/* Outcome - Lighter tone */}
      <p className="text-sm text-black mb-4 leading-relaxed line-clamp-2">
        {project.outcome}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="inline-flex px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md
                       text-[11px] font-medium text-black"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="inline-flex px-2 py-0.5 text-[11px] font-medium text-black">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Footer with status and arrow */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100/80">
        <span
          className={`text-xs font-medium ${
            project.status === 'completed'
              ? 'text-emerald-600'
              : 'text-amber-600'
          }`}
        >
          {project.status === 'completed' ? 'Completed' : 'In Progress'}
        </span>
        <div className="flex items-center gap-1 text-black group-hover:text-teal-600 transition-colors duration-200">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View
          </span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
