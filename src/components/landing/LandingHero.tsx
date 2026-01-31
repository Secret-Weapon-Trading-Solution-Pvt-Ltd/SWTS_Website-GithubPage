'use client';

import React from 'react';
import { Clock, TrendingDown, AlertTriangle, Target, BarChart3, Lightbulb, ArrowRight, Check, Play } from 'lucide-react';

export interface LandingHeroProps {
  onStartAssessment: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({ onStartAssessment }) => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-60">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="250" stroke="#F59E0B" strokeWidth="1" strokeDasharray="8 8" opacity="0.3" />
            <circle cx="300" cy="300" r="180" stroke="#F59E0B" strokeWidth="1" opacity="0.2" />
            <circle cx="300" cy="300" r="100" fill="#FEF3C7" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-40">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="300" height="300" stroke="#10B981" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <rect x="100" y="100" width="200" height="200" stroke="#10B981" strokeWidth="1" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-amber-700 text-sm font-medium">
                  Free Assessment • 2 Minutes
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.15] mb-6">
                Is Your Trading Strategy
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Ready for Automation?
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-black mb-8 leading-relaxed">
                Stop guessing. Our 5-question assessment reveals your strategy&apos;s
                automation potential with personalized insights and clear next steps.
              </p>

              {/* CTA */}
              <button
                onClick={onStartAssessment}
                className="group inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40"
              >
                <Play className="w-5 h-5 fill-current" />
                Start Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust */}
              <div className="flex items-center gap-6 mt-8 text-sm text-black">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  No signup required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Instant results
                </div>
              </div>
            </div>

            {/* Right Content - Pain Points Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">
                  Sound Familiar?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Missing Trades</h4>
                      <p className="text-sm text-black">Perfect setups happen while you&apos;re away from the screen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inconsistent Execution</h4>
                      <p className="text-sm text-black">Same strategy, different results every time</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emotional Decisions</h4>
                      <p className="text-sm text-black">Fear and greed override your trading plan</p>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="mt-6 text-center">
                  <span className="text-sm text-black">Find out if automation can help →</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                100% Free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* Value Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Three Insights in Two Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Strategy Readiness Score
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  A clear score showing how well your current trading rules translate to automated systems.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Risk Management Analysis
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  Evaluation of your position sizing, stop-losses, and risk controls against best practices.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-sky-300 transition-all duration-300 h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Personalized Action Plan
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  Specific recommendations tailored to your trading style and automation goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Discover Your Score?
          </h2>
          <p className="text-black mb-8">
            5 questions. 2 minutes. Actionable insights.
          </p>

          <button
            onClick={onStartAssessment}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-amber-500/30"
          >
            Get My Free Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-black">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              No email required to start
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              Results in 2 minutes
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              No sales pitch
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-black font-medium">
            Secret Weapon Trading Solution Pvt. Ltd.
          </p>
          <p className="text-xs text-black mt-2">
            Algorithmic Trading Services • This assessment provides educational insights only.
            Trading involves risk. We do not provide financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingHero;
