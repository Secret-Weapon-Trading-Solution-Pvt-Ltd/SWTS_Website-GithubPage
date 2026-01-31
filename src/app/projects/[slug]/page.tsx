import { MainLayout } from '@/components/layouts';
import { ProjectDetailHero, ProjectDetailSections } from '@/components/projects';
import { getProjectBySlug, projects } from '@/data/projects';
import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { notFound } from 'next/navigation';

// Generate static params for projects that don't have dedicated pages
export function generateStaticParams() {
  // Exclude slugs that have their own dedicated page in /projects/[name]/page.tsx
  const dedicatedRoutes = ['ema-crossover-screener', 'delta-screener'];
  return projects
    .filter((project) => !dedicatedRoutes.includes(project.slug))
    .map((project) => ({
      slug: project.slug,
    }));
}

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  // Project not found
  if (!project) {
    return (
      <MainLayout>
        <section className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center px-4">
            <FileQuestion className="w-16 h-16 text-black mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-slate-900 mb-3">
              Project Not Found
            </h1>
            <p className="text-black mb-8 max-w-md mx-auto">
              The project you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl
                       font-medium hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero with metrics */}
      <ProjectDetailHero project={project} />

      {/* Detail sections: Challenge → Solution → Architecture → Execution → Results */}
      <ProjectDetailSections project={project} />
    </MainLayout>
  );
}
