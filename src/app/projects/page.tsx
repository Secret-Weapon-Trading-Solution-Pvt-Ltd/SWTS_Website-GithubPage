'use client';

import { MainLayout } from '@/components/layouts';
import {
  ProjectsHero,
  ProjectGrid,
  FeaturedCaseStudy,
} from '@/components/projects';

export default function ProjectsPage() {
  return (
    <MainLayout>
      {/* Hero - Clean headline with stats */}
      <ProjectsHero />

      {/* Featured Case Study - Flagship project highlight */}
      <FeaturedCaseStudy />

      {/* All Projects Grid - Filterable project cards */}
      <ProjectGrid />
    </MainLayout>
  );
}
