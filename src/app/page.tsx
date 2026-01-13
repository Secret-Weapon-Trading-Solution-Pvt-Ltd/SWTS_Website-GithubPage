'use client';

import { MainLayout } from '@/components/layouts';
import {
  FrustrationHero,
  CredibilityStrip,
  AssessmentExplanation,
  CredibilitySection,
  FinalCTA
} from '@/components/main';

export default function Home() {
  return (
    <MainLayout>
      {/* Section 1: Hero - Frustration hook with premium visual */}
      <FrustrationHero />

      {/* Section 2: Credibility Strip - Quiet trust indicators */}
      <CredibilityStrip />

      {/* Section 3: Assessment Explanation - Show the value of taking the assessment */}
      <AssessmentExplanation />

      {/* Section 5: Differentiation - Why automate with SWTS */}
      <CredibilitySection />

      {/* Section 6: Final CTA - Strong close with assessment push */}
      <FinalCTA />
    </MainLayout>
  );
}
