import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layouts/MainLayout';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ProblemsSolved from '@/components/services/ProblemsSolved';
import Capabilities from '@/components/services/Capabilities';
import ServiceFlowchart from '@/components/services/ServiceFlowchart';
import HowItWorksSteps from '@/components/services/HowItWorksSteps';
import UseCases from '@/components/services/UseCases';
// Enterprise components for premium service pages (modern redesign)
import {
  StrategyOverview,
  CapabilitiesModern,
  ProcessFlowModern,
  StrategyIdealFor
} from '@/components/services/enterprise';
// Backtesting-specific enterprise components
import {
  BacktestingOverview,
  BacktestingCapabilities,
  BacktestingProcess
} from '@/components/services/backtesting';
// Optimization-specific enterprise components
import {
  OptimizationOverview,
  OptimizationCapabilities,
  OptimizationProcess
} from '@/components/services/optimization';
// Screener-specific enterprise components
import {
  ScreenerOverview,
  ScreenerCapabilities,
  ScreenerProcess
} from '@/components/services/screener';
// Dashboard-specific enterprise components
import {
  DashboardOverview,
  DashboardCapabilities,
  DashboardProcess
} from '@/components/services/dashboard';
// Alerts-specific enterprise components
import {
  AlertsOverview,
  AlertsCapabilities,
  AlertsProcess
} from '@/components/services/alerts';
// Paper Trading-specific enterprise components
import {
  PaperTradingOverview,
  PaperTradingCapabilities,
  PaperTradingProcess
} from '@/components/services/papertrading';
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
  const isStrategyAutomation = service.slug === 'algo-strategy-development';
  const isBacktesting = service.slug === 'strategy-backtesting';
  const isOptimization = service.slug === 'strategy-optimization';
  const isScreener = service.slug === 'custom-screener';
  const isDashboard = service.slug === 'custom-dashboard';
  const isAlerts = service.slug === 'strategy-alerts';
  const isPaperTrading = service.slug === 'paper-trading';
  const isEnterpriseLayout = isStrategyAutomation || isBacktesting || isOptimization || isScreener || isDashboard || isAlerts || isPaperTrading;

  return (
    <MainLayout>
      {/* Hero with brand logos */}
      <ServiceDetailHero service={service} />

      {isStrategyAutomation ? (
        <>
          {/* Modern Strategy Overview - What/Why/Who/Benefits */}
          <StrategyOverview service={service} />

          {/* Modern Capabilities section */}
          <CapabilitiesModern service={service} />

          {/* Modern Process Flow with illustrations */}
          <ProcessFlowModern service={service} />

          {/* Ideal For - Who Should Use This */}
          <StrategyIdealFor />
        </>
      ) : isBacktesting ? (
        <>
          {/* Backtesting Overview - Varied layouts */}
          <BacktestingOverview service={service} />

          {/* Backtesting Capabilities - Bento grid style */}
          <BacktestingCapabilities service={service} />

          {/* Backtesting Process - Alternating timeline */}
          <BacktestingProcess service={service} />
        </>
      ) : isOptimization ? (
        <>
          {/* Optimization Overview - Balanced left/right layouts */}
          <OptimizationOverview service={service} />

          {/* Optimization Capabilities - Alternating layout */}
          <OptimizationCapabilities service={service} />

          {/* Optimization Process - Vertical timeline */}
          <OptimizationProcess service={service} />
        </>
      ) : isScreener ? (
        <>
          {/* Screener Overview - With alert delivery channels */}
          <ScreenerOverview service={service} />

          {/* Screener Capabilities - Full width cards */}
          <ScreenerCapabilities service={service} />

          {/* Screener Process - Horizontal timeline with background */}
          <ScreenerProcess service={service} />
        </>
      ) : isDashboard ? (
        <>
          {/* Dashboard Overview - Data unification visualization */}
          <DashboardOverview service={service} />

          {/* Dashboard Capabilities - Feature cards */}
          <DashboardCapabilities service={service} />

          {/* Dashboard Process - Development workflow */}
          <DashboardProcess service={service} />
        </>
      ) : isAlerts ? (
        <>
          {/* Alerts Overview - What/Why/Channels */}
          <AlertsOverview service={service} />

          {/* Alerts Capabilities - Feature cards */}
          <AlertsCapabilities service={service} />

          {/* Alerts Process - Timeline */}
          <AlertsProcess service={service} />
        </>
      ) : isPaperTrading ? (
        <>
          {/* Paper Trading Overview - Simulation Lab */}
          <PaperTradingOverview service={service} />

          {/* Paper Trading Capabilities - Feature cards */}
          <PaperTradingCapabilities service={service} />

          {/* Paper Trading Process - Vertical timeline */}
          <PaperTradingProcess service={service} />
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
    </MainLayout>
  );
}
