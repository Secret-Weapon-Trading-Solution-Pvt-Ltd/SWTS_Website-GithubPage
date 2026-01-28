import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layouts/MainLayout';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ProblemsSolved from '@/components/services/ProblemsSolved';
import Capabilities from '@/components/services/Capabilities';
import ServiceFlowchart from '@/components/services/ServiceFlowchart';
import HowItWorksSteps from '@/components/services/HowItWorksSteps';
import UseCases from '@/components/services/UseCases';
import ServiceCTA from '@/components/services/ServiceCTA';
// Enterprise components for premium service pages (modern redesign)
import {
  StrategyOverview,
  CapabilitiesModern,
  ProcessFlowModern
} from '@/components/services/enterprise';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | SWTS',
    };
  }

  return {
    title: `${service.title} | SWTS`,
    description: service.description,
    keywords: [
      service.shortTitle,
      'algorithmic trading',
      'trading automation',
      'trading technology',
      ...service.useCases.flatMap(uc => uc.tags),
    ],
    openGraph: {
      title: `${service.title} | SWTS`,
      description: service.tagline,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Check if this is a premium enterprise service page
  const isEnterpriseLayout = service.slug === 'algo-strategy-development';

  return (
    <MainLayout>
      {/* Hero with brand logos */}
      <ServiceDetailHero service={service} />

      {isEnterpriseLayout ? (
        <>
          {/* Modern Strategy Overview - What/Why/Who/Benefits */}
          <StrategyOverview service={service} />

          {/* Modern Capabilities section */}
          <CapabilitiesModern service={service} />

          {/* Modern Process Flow with illustrations */}
          <ProcessFlowModern service={service} />

          {/* CTA section - same style as other services */}
          <ServiceCTA service={service} />
        </>
      ) : (
        <>
          {/* Standard layout: Card-based problems */}
          <ProblemsSolved service={service} />

          {/* Capabilities / What we build */}
          <Capabilities service={service} />

          {/* Visual flowchart - our process */}
          <ServiceFlowchart service={service} />

          {/* How it works - detailed steps */}
          <HowItWorksSteps service={service} />

          {/* Use cases with outcomes */}
          <UseCases service={service} />
        </>
      )}

      {/* CTA section - for non-enterprise layout only (enterprise has it in its block) */}
      {!isEnterpriseLayout && <ServiceCTA service={service} />}
    </MainLayout>
  );
}
