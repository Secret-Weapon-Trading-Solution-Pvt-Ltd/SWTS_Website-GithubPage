'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  LineChart,
  TrendingUp,
  Target,
  Shield,
  Sparkles,
  Play,
  Video,
} from 'lucide-react';
import { getFeaturedProject } from '@/data/projects';

// Video configuration
const VIDEO_CONFIG = {
  youtubeId: 'UY0h3v6RPoY',
  title: 'Project Walkthrough',
  subtitle: 'Recorded demonstration',
};

export const FeaturedCaseStudy: React.FC = () => {
  const featured = getFeaturedProject();
  const [isPlaying, setIsPlaying] = useState(false);

  if (!featured) return null;

  return (
    <section className="relative py-6 lg:py-10 bg-slate-50/50">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)'
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #CBD5E1)' }}
          />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200/80 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span className="text-xs font-semibold tracking-wide uppercase text-black">
              Flagship Project
            </span>
          </div>
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)' }}
          />
        </div>

        {/* Featured Card - Wider, more dominant */}
        <div className="relative">
          {/* Subtle glow behind card */}
          <div
            className="absolute -inset-1 rounded-[2rem] opacity-50 blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, transparent 50%, rgba(20, 184, 166, 0.04) 100%)'
            }}
          />

          {/* Main card */}
          <div
            className="relative bg-white rounded-[1.75rem] p-8 lg:p-10 overflow-hidden"
            style={{
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #14B8A6 20%, #0D9488 50%, #14B8A6 80%, transparent 100%)'
              }}
            />

            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - Takes 3 columns */}
              <div className="lg:col-span-3">
                {/* Icon + Category + Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
                      border: '1px solid rgba(20, 184, 166, 0.2)'
                    }}
                  >
                    <TrendingUp className="w-7 h-7 text-teal-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1.5">
                      {featured.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </p>
                    <h3 className="text-2xl lg:text-[1.75rem] font-bold text-slate-900 leading-tight">
                      {featured.title}
                    </h3>
                  </div>
                </div>

                {/* Context */}
                {featured.details?.clientContext && (
                  <p className="text-lg text-black mb-5 leading-relaxed">
                    {featured.details.clientContext}
                  </p>
                )}

                {/* Challenge Preview */}
                {featured.details?.challenge.description && (
                  <p className="text-lg text-black mb-6 leading-relaxed">
                    <span className="font-semibold text-slate-700">The Challenge: </span>
                    {featured.details.challenge.description.slice(0, 160)}...
                  </p>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${featured.slug}`}
                    className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-900 text-white rounded-xl
                             text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-200"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>

              {/* Right: Metrics Grid - Takes 2 columns */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {featured.metrics?.map((metric, i) => {
                  const icons = [LineChart, TrendingUp, Target, Shield];
                  const Icon = icons[i % icons.length];
                  return (
                    <div
                      key={metric.label}
                      className="bg-slate-50/80 border border-slate-100 rounded-2xl p-4 text-center
                               hover:bg-white hover:border-slate-200 hover:shadow-sm
                               transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-teal-500 mx-auto mb-2.5" />
                      <p className="text-xl lg:text-2xl font-bold text-slate-900 mb-0.5 tracking-tight">
                        {metric.value}
                      </p>
                      <p className="text-[10px] font-semibold text-black uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video Section */}
            <div className="relative mt-8 pt-8 border-t border-slate-100">
              {/* Video Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Video className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{VIDEO_CONFIG.title}</p>
                    <p className="text-xs text-black">{VIDEO_CONFIG.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Video Player Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video">
                {!isPlaying ? (
                  /* Video Thumbnail with Play Button */
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                  >
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${VIDEO_CONFIG.youtubeId}/maxresdefault.jpg`}
                      alt={VIDEO_CONFIG.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_CONFIG.youtubeId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 w-20 h-20 rounded-full bg-teal-500/30 animate-ping"
                          style={{ animationDuration: '2s' }}
                        />

                        {/* Outer ring */}
                        <div className="relative w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30
                                      flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30
                                      transition-all duration-300">
                          {/* Inner play button */}
                          <div className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/40
                                        group-hover:bg-teal-400 transition-all duration-300">
                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 rounded text-xs font-medium text-white">
                      Click to play
                    </div>
                  </button>
                ) : (
                  /* Embedded YouTube Player */
                  <iframe
                    src={`https://www.youtube.com/embed/${VIDEO_CONFIG.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={VIDEO_CONFIG.title}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
