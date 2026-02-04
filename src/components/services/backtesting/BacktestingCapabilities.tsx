'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Check, Database, BarChart3, Shield, Calculator, ArrowRight } from 'lucide-react';

interface BacktestingCapabilitiesProps {
  service: Service;
}

// Custom capability data with more detail
const capabilitiesData = [
  {
    title: "Historical Data Analysis",
    subtitle: "Multi-Year Testing",
    description: "We test your strategy against years of historical market data to reveal long-term performance patterns",
    features: [
      "5-10 years of historical backtesting (Data will be provided by client)",
      "Multiple market conditions tested",
      "Bull, bear, and sideways markets"
    ],
    icon: Database,
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-50 to-blue-50",
    borderColor: "border-indigo-100"
  },
  {
    title: "Realistic Cost Modeling",
    subtitle: "True Performance Picture",
    description: "We include all the costs that eat into your profits in real trading",
    features: [
      "Slippage simulation",
      "Brokerage & transaction costs",
      "Spread modeling"
    ],
    icon: Calculator,
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100"
  },
  {
    title: "Performance Metrics",
    subtitle: "Comprehensive Analysis",
    description: "Every metric you need to understand your strategy's true potential",
    features: [
      "Win rate & profit factor",
      "Sharpe & Sortino ratios",
      "Maximum drawdown analysis"
    ],
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100"
  },
  {
    title: "Risk Assessment",
    subtitle: "Know Your Exposure",
    description: "Understand the risks before you commit real capital",
    features: [
      "Drawdown duration analysis",
      "Worst-case scenario testing",
      "Risk-adjusted returns"
    ],
    icon: Shield,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100"
  }
];

export default function BacktestingCapabilities({ service }: BacktestingCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-purple-100 to-violet-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 text-indigo-700 rounded-full text-sm font-semibold mb-6 border border-indigo-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-indigo-800 to-purple-900 bg-clip-text text-transparent">Our Backtesting</span>{' '}
            <span className="text-teal-700">Capabilities</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Rigorous analysis that reveals the true potential of your trading strategy
          </p>
        </motion.div>

        {/* Capability cards - 2x2 grid like Strategy Automation */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {capabilitiesData.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                    <div className="relative">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${capability.gradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-black group-hover:text-indigo-600 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 group-hover:text-indigo-700 transition-colors">
                        {capability.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base lg:text-lg text-black mb-5 leading-relaxed">
                        {capability.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        {capability.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${capability.gradient} flex items-center justify-center`}>
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-base text-black">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
