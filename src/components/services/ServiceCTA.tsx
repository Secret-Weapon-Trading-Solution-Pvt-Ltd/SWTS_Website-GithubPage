'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { ArrowRight, MessageSquare, Calendar, Zap, Code, Shield, Rocket } from 'lucide-react';

interface ServiceCTAProps {
  service: Service;
}

// Service-specific CTA content
const serviceCTAContent: Record<string, {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  primaryCTA: string;
  features: { icon: typeof MessageSquare; title: string; description: string }[];
}> = {
  'python-algo-development': {
    badge: 'Build Your Edge',
    headline: 'Stop trading manually.',
    subheadline: 'Start executing systematically.',
    description: 'Your strategy deserves institutional-grade infrastructure. Let us build a Python system that executes your edge with precision, speed, and zero emotional interference.',
    primaryCTA: 'Get Your Strategy Assessed',
    features: [
      { icon: Code, title: 'Architecture Review', description: 'We analyze your strategy and design the optimal system' },
      { icon: Shield, title: 'Risk-First Approach', description: 'Built-in safeguards from day one' },
      { icon: Rocket, title: 'Production Ready', description: 'Battle-tested code, not prototypes' }
    ]
  },
  'algo-strategy-development': {
    badge: 'Automate Your Edge',
    headline: 'Your rules. Automated.',
    subheadline: '24/7 execution without intervention.',
    description: 'Transform your proven trading rules into fully automated systems. We take your manual strategy and build production-ready code that executes with precision around the clock.',
    primaryCTA: 'Start Automation Journey',
    features: [
      { icon: MessageSquare, title: 'Strategy Review', description: 'We understand your existing trading rules' },
      { icon: Calendar, title: 'Automation Roadmap', description: 'Clear path from manual to automated' },
      { icon: Zap, title: 'Fast Deployment', description: 'Go live with your automated system quickly' }
    ]
  },
  'pine-script-development': {
    badge: 'TradingView Excellence',
    headline: 'Your indicators.',
    subheadline: 'Built by Pine Script experts.',
    description: 'Custom indicators, strategies, and alerts that work exactly how you envision. From simple signals to complex multi-timeframe systems.',
    primaryCTA: 'Describe Your Indicator',
    features: [
      { icon: MessageSquare, title: 'Requirement Analysis', description: 'We understand your exact specifications' },
      { icon: Calendar, title: 'Structured Development', description: 'Clear timeline with review checkpoints' },
      { icon: Zap, title: 'Fast Delivery', description: 'Most projects completed in days, not weeks' }
    ]
  },
  'execution-broker-integration': {
    badge: 'Institutional Infrastructure',
    headline: 'Stop losing edge to latency.',
    subheadline: 'Connect once, execute everywhere.',
    description: 'Multi-broker APIs, sub-100ms execution, institutional-grade OMS, and fail-safe systems that keep you trading when things go wrong. The execution infrastructure your strategy deserves.',
    primaryCTA: 'Discuss Your Execution Needs',
    features: [
      { icon: Zap, title: 'Sub-100ms Latency', description: 'Optimized for speed from signal to fill' },
      { icon: Shield, title: 'Fail-Safe Systems', description: 'Circuit breakers, kill switches, auto-recovery' },
      { icon: Rocket, title: 'Multi-Broker Ready', description: 'Zerodha, IBKR, Alpaca, Binance & more' }
    ]
  },
  'strategy-backtesting': {
    badge: 'Validate Your Edge',
    headline: 'Know before you trade.',
    subheadline: 'Data-driven confidence.',
    description: 'Stop trading on gut feeling. Get comprehensive historical analysis of YOUR strategy with realistic assumptions and actionable insights.',
    primaryCTA: 'Get Your Strategy Tested',
    features: [
      { icon: MessageSquare, title: 'Strategy Review', description: 'We document your exact rules' },
      { icon: Calendar, title: 'Historical Testing', description: 'Multi-year backtest with real costs' },
      { icon: Zap, title: 'Clear Report', description: 'Metrics and insights you can act on' }
    ]
  },
  'strategy-optimization': {
    badge: 'Maximize Performance',
    headline: 'Find your optimal parameters.',
    subheadline: 'Data-driven, not guesswork.',
    description: 'Rigorous walk-forward optimization, parameter sensitivity analysis, and regime detection. Squeeze every basis point from your edge.',
    primaryCTA: 'Optimize Your Strategy',
    features: [
      { icon: MessageSquare, title: 'Performance Audit', description: 'Identify optimization opportunities' },
      { icon: Calendar, title: 'Testing Framework', description: 'Walk-forward and out-of-sample validation' },
      { icon: Zap, title: 'Measurable Results', description: 'Before/after performance comparison' }
    ]
  },
  'risk-management-systems': {
    badge: 'Protect Your Capital',
    headline: 'Trade aggressively.',
    subheadline: 'Fail safely.',
    description: 'Position sizing algorithms, drawdown controls, correlation monitoring, and circuit breakers. The infrastructure that keeps you in the game.',
    primaryCTA: 'Build Risk Systems',
    features: [
      { icon: Shield, title: 'Risk Assessment', description: 'Identify vulnerabilities in your current setup' },
      { icon: Calendar, title: 'Custom Framework', description: 'Rules tailored to your risk tolerance' },
      { icon: Zap, title: 'Real-time Monitoring', description: 'Dashboards and alerts that matter' }
    ]
  },
  'custom-trading-platforms': {
    badge: 'Your Platform',
    headline: 'Beyond off-the-shelf.',
    subheadline: 'Built for your workflow.',
    description: 'Full-featured trading dashboards, portfolio management systems, and analytics platforms. Designed around how you actually trade.',
    primaryCTA: 'Design Your Platform',
    features: [
      { icon: MessageSquare, title: 'UX Discovery', description: 'Understand your ideal workflow' },
      { icon: Calendar, title: 'Modular Development', description: 'Ship features incrementally' },
      { icon: Rocket, title: 'Scalable Architecture', description: 'Grows with your operation' }
    ]
  }
};

const defaultCTAContent = {
  badge: 'Ready to Start?',
  headline: 'Build your trading edge.',
  subheadline: 'Professional systems, delivered.',
  description: 'Take our strategy assessment to help us understand your requirements, or schedule a call to discuss your project directly with our team.',
  primaryCTA: 'Start Assessment',
  features: [
    { icon: MessageSquare, title: 'Free Strategy Call', description: 'Discuss your requirements with our experts' },
    { icon: Calendar, title: 'Detailed Proposal', description: 'Receive a comprehensive project plan' },
    { icon: Zap, title: 'Quick Turnaround', description: 'Start building within days of approval' }
  ]
};

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const content = serviceCTAContent[service.slug] || defaultCTAContent;

  return (
    <section className="py-24 bg-gradient-to-b from-navy-100 to-navy-50 border-t border-navy-200 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-section-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-section-grid)" />
        </svg>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          {/* Main CTA card - Navy with teal accent */}
          <div className="relative rounded-3xl bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 p-12 md:p-16 shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                      {content.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {content.headline}
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-white/90 mb-6 leading-tight">
                      {content.subheadline}
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      {content.description}
                    </p>

                    {/* CTA buttons - Confident styling */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a
                        href="/strategy-assessment"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        {content.primaryCTA}
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                      <motion.a
                        href="mailto:info@swts.in"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                      >
                        Contact Us
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Right content - Features */}
                <div className="lg:pl-8">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  >
                    <h3 className="text-white font-semibold text-lg mb-6">
                      What happens next?
                    </h3>
                    <div className="space-y-6">
                      {content.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                            <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-white/70 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Trust indicator */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50"
                            />
                          ))}
                        </div>
                        <p className="text-white/80 text-sm">
                          <span className="font-semibold text-white">200+</span> traders trust us
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-navy-600"
        >
          <a href="mailto:info@swts.in" className="flex items-center gap-2 hover:text-navy-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>info@swts.in</span>
          </a>
          <a href="https://t.me/swaboratory" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-navy-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            <span>@swaboratory</span>
          </a>
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Pune, India</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
