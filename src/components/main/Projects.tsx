'use client';

import React, { useState } from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type ProjectStatus = 'completed' | 'in-progress';

interface Project {
  id: string;
  title: string;
  description: string;
  platform: string;
  status: ProjectStatus;
  tags: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Multi-Timeframe Breakout System',
    description:
      'Automated breakout detection across multiple timeframes with dynamic support/resistance levels and volume confirmation.',
    platform: 'TradingView',
    status: 'completed',
    tags: ['Pine Script', 'MTF Analysis', 'Alerts'],
    highlights: ['3 timeframe confluence', 'Auto S/R levels', 'Webhook alerts'],
  },
  {
    id: '2',
    title: 'Options Scalping Bot',
    description:
      'Python-based scalping system for NSE options with auto strike selection, momentum detection, and broker API integration.',
    platform: 'Python + Broker API',
    status: 'completed',
    tags: ['Python', 'Options', 'Automation'],
    highlights: ['Auto strike selection', 'Real-time Greeks', 'Position sizing'],
  },
  {
    id: '3',
    title: 'Sector Rotation Scanner',
    description:
      'AmiBroker exploration system to identify strongest sectors and rotating capital based on relative strength.',
    platform: 'AmiBroker',
    status: 'completed',
    tags: ['AFL', 'Scanning', 'Sector Analysis'],
    highlights: ['Daily ranking', 'RS analysis', 'Portfolio signals'],
  },
  {
    id: '4',
    title: 'Forex Grid Trading EA',
    description:
      'MetaTrader Expert Advisor implementing adaptive grid strategy with drawdown controls and equity protection.',
    platform: 'MetaTrader 5',
    status: 'completed',
    tags: ['MQL5', 'Forex', 'Grid Strategy'],
    highlights: ['Adaptive spacing', 'DD protection', 'Multi-pair'],
  },
  {
    id: '5',
    title: 'ML-Based Pattern Recognition',
    description:
      'Machine learning model to identify high-probability chart patterns using historical price action data.',
    platform: 'Python + TensorFlow',
    status: 'in-progress',
    tags: ['ML/AI', 'Pattern Recognition', 'Deep Learning'],
    highlights: ['CNN model', 'Pattern labeling', 'Probability scoring'],
  },
  {
    id: '6',
    title: 'Crypto Arbitrage System',
    description:
      'Cross-exchange arbitrage detection and execution system for cryptocurrency pairs with latency optimization.',
    platform: 'Python',
    status: 'in-progress',
    tags: ['Crypto', 'Arbitrage', 'Multi-exchange'],
    highlights: ['3 exchanges', 'Low latency', 'Auto execution'],
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | ProjectStatus>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  return (
    <section id="projects" className="py-24 bg-[#060610]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A selection of algorithmic trading systems we&apos;ve built for clients
            across various platforms and markets.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'completed', label: 'Completed' },
            { key: 'in-progress', label: 'In Progress' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={cn(
                'px-5 py-2.5 rounded-full font-medium transition-all',
                filter === tab.key
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-white/5 text-black border border-white/10 hover:border-white/20 hover:text-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/[0.02] rounded-2xl p-6 border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-black font-medium">{project.platform}</span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                    project.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  )}
                >
                  {project.status === 'completed' ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-black text-sm mb-4">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-black">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/5 text-black rounded-md text-xs border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-black">
              Have a similar project in mind?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors"
            >
              Let&apos;s Discuss
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
