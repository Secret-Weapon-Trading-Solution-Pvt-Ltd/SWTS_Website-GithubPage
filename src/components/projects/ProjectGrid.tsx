'use client';

import React, { useState, useMemo } from 'react';
import { Layers } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { PROJECT_CATEGORIES, type ProjectCategory } from '@/types/projects';
import { projects } from '@/data/projects';

export const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative py-16 lg:py-20">
      {/* Background with subtle gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 50%, #F8FAFC 100%)'
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #64748B 0.5px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #CBD5E1)' }}
          />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-sm">
            <Layers className="w-3.5 h-3.5 text-black" />
            <span className="text-xs font-semibold tracking-wide uppercase text-black">
              All Projects
            </span>
          </div>
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)' }}
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
                ${
                  activeCategory === cat.value
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-black border border-slate-200/80 hover:border-slate-300 hover:text-slate-900 hover:shadow-sm'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.04}s`,
                animationFillMode: 'forwards',
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-black">No projects found in this category.</p>
          </div>
        )}

        {/* Results count */}
        <div className="text-center mt-10">
          <p className="text-xs font-medium text-black uppercase tracking-wider">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
