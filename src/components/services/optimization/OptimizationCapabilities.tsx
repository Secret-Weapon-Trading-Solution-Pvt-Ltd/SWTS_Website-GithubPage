'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Check, Sliders, Shield, TrendingUp, Layers, ArrowRight } from 'lucide-react';

interface OptimizationCapabilitiesProps {
  service: Service;
}

const capabilitiesData = [
  {
    title: "Parameter Optimization",
    subtitle: "Find Optimal Settings",
    description: "We systematically search through parameter combinations to find settings that maximize YOUR strategy's performance",
    features: [
      "Grid search optimization",
      "Walk-forward analysis",
      "Out-of-sample validation"
    ],
    icon: Sliders,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100"
  },
  {
    title: "Robustness Testing",
    subtitle: "Avoid Overfitting",
    description: "Ensure your optimized parameters are robust and will work in real trading, not just on historical data",
    features: [
      "Monte Carlo simulation",
      "Parameter stability analysis",
      "Sensitivity testing"
    ],
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100"
  },
  {
    title: "Performance Enhancement",
    subtitle: "Maximize Returns",
    description: "Target specific performance metrics to improve—whether it's Sharpe ratio, win rate, or drawdown reduction",
    features: [
      "Sharpe ratio optimization",
      "Drawdown minimization",
      "Win rate improvement"
    ],
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100"
  },
  {
    title: "Adaptive Analysis",
    subtitle: "Market-Aware Parameters",
    description: "Identify parameter sets that work across different market conditions—trending, ranging, volatile",
    features: [
      "Market regime detection",
      "Dynamic parameter sets",
      "Condition-based optimization"
    ],
    icon: Layers,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-100"
  }
];

export default function OptimizationCapabilities({ service }: OptimizationCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-blue-800 to-navy-900 bg-clip-text text-transparent">Our Optimization</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Comprehensive optimization services that improve your strategy without overfitting
          </p>
        </motion.div>

        {/* Capability cards - 2x2 grid */}
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
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                    <div className="relative">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${capability.gradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-700 transition-colors">
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

        {/* Bottom connector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <span className="text-black font-medium">All delivered with comprehensive documentation</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 text-blue-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
