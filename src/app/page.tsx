'use client';

import { MainLayout } from '@/components/layouts';
import {
  FrustrationHero,
  CredibilityStrip,
  PlatformIntro,
  HowItWorks,
  FinalCTA
} from '@/components/main';

export default function Home() {
  return (
    <MainLayout>
      {/* Section 1: Hero - Frustration hook with premium visual */}
      <FrustrationHero />

      {/* Section 2: Credibility Strip - Quiet trust indicators */}
      <CredibilityStrip />

      {/* Section 3: Platform Introduction - What we do */}
      <PlatformIntro />

      {/* Section 4: How It Works - Process explanation (includes Services & Ready to Begin) */}
      <HowItWorks />

      {/* Section 4: Final CTA - Strong close with assessment push */}
      <FinalCTA />
    </MainLayout>
  );
}
