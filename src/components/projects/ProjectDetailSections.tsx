'use client';

import React from 'react';
import Link from 'next/link';
import {
  AlertCircle,
  Lightbulb,
  Layers,
  Play,
  CheckCircle2,
  ArrowRight,
  Quote,
  Image as ImageIcon,
} from 'lucide-react';
import type { Project } from '@/types/projects';

interface ProjectDetailSectionsProps {
  project: Project;
}

const SectionWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <section className={`py-16 lg:py-20 ${className}`}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const SectionHeader: React.FC<{
  icon: React.ElementType;
  label: string;
  title: string;
}> = ({ icon: Icon, label, title }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
      <Icon className="w-5 h-5 text-black" />
    </div>
    <div>
      <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">
        {label}
      </p>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
    </div>
  </div>
);

const MediaPlaceholder: React.FC<{ type: 'image' | 'video' }> = ({ type }) => (
  <div className="bg-slate-100 border border-slate-200 rounded-2xl aspect-video flex flex-col items-center justify-center">
    {type === 'video' ? (
      <>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft mb-3">
          <Play className="w-6 h-6 text-black ml-1" />
        </div>
        <p className="text-sm text-black">Video Placeholder</p>
      </>
    ) : (
      <>
        <ImageIcon className="w-12 h-12 text-black mb-2" />
        <p className="text-sm text-black">Screenshot Placeholder</p>
      </>
    )}
  </div>
);

export const ProjectDetailSections: React.FC<ProjectDetailSectionsProps> = ({ project }) => {
  const details = project.details;

  if (!details) {
    return (
      <SectionWrapper className="bg-slate-50">
        <div className="text-center py-12">
          <p className="text-black">Detailed case study coming soon.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      {/* The Challenge */}
      <SectionWrapper className="bg-white">
        <SectionHeader
          icon={AlertCircle}
          label="The Challenge"
          title="Understanding the Problem"
        />
        <p className="text-black leading-relaxed mb-6">
          {details.challenge.description}
        </p>
        {details.challenge.painPoints.length > 0 && (
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <p className="text-sm font-semibold text-slate-700 mb-4">Key Pain Points:</p>
            <ul className="space-y-3">
              {details.challenge.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-black">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-slate-50">
        <SectionHeader
          icon={Lightbulb}
          label="The Solution"
          title="Our Approach"
        />
        <p className="text-black leading-relaxed mb-8">
          {details.solution.description}
        </p>
        {details.solution.highlights && details.solution.highlights.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {details.solution.highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>
        )}

        {/* Media Placeholder */}
        <MediaPlaceholder type={details.media?.videoUrl ? 'video' : 'image'} />
      </SectionWrapper>

      {/* Architecture */}
      <SectionWrapper className="bg-white">
        <SectionHeader
          icon={Layers}
          label="Architecture"
          title="Technical Design"
        />
        <p className="text-black leading-relaxed mb-8">
          {details.architecture.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-slate-700 mb-4">Technology Stack:</p>
          <div className="flex flex-wrap gap-2">
            {details.architecture.techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl
                         text-sm font-medium text-slate-700"
              >
                {tech.name}
                <span className="ml-2 text-xs text-black capitalize">
                  {tech.category}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Diagram Placeholder */}
        <MediaPlaceholder type="image" />
      </SectionWrapper>

      {/* Execution */}
      <SectionWrapper className="bg-slate-50">
        <SectionHeader
          icon={Play}
          label="Execution"
          title="Implementation Process"
        />
        <p className="text-black leading-relaxed mb-8">
          {details.execution.description}
        </p>

        {/* Phases */}
        <div className="space-y-4">
          {details.execution.phases.map((phase, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5"
            >
              <div className="w-8 h-8 bg-teal-50 border border-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-teal-600">{i + 1}</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">{phase.name}</p>
                <p className="text-sm text-black">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Results */}
      <SectionWrapper className="bg-white">
        <SectionHeader
          icon={CheckCircle2}
          label="Results"
          title="Measurable Outcomes"
        />
        <p className="text-black leading-relaxed mb-8">
          {details.results.description}
        </p>

        {/* Before/After Comparison */}
        {details.results.before && details.results.after && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Before */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <p className="text-xs font-semibold text-black uppercase tracking-wider mb-4">
                Before
              </p>
              <ul className="space-y-3">
                {details.results.before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black text-sm">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6">
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-4">
                After
              </p>
              <ul className="space-y-3">
                {details.results.after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-teal-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {details.results.testimonial && (
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <Quote className="w-8 h-8 text-teal-400 mb-4" />
            <blockquote className="text-lg leading-relaxed mb-4">
              "{details.results.testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{details.results.testimonial.author}</p>
              <p className="text-sm text-slate-300">{details.results.testimonial.role}</p>
            </div>
          </div>
        )}
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-slate-50 border-t border-slate-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to discuss your project?
          </h3>
          <p className="text-black mb-8 max-w-lg mx-auto">
            Let's explore how we can build a similar solution tailored to your specific trading requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#assessment"
              className="group inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl
                       font-medium shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5
                       transition-all duration-200"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200
                       text-slate-700 rounded-xl font-medium hover:border-slate-300 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProjectDetailSections;
