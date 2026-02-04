'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import {
  Bell,
  Layers,
  Clock,
  Zap,
  Settings,
  BarChart3,
  GitBranch,
  Smartphone,
  Shield
} from 'lucide-react';

interface AlertsCapabilitiesProps {
  service: Service;
}

const capabilities = [
  {
    icon: Layers,
    title: "Multi-Condition Logic",
    description: "Combine multiple indicators and conditions into one alert. RSI + MACD + Volume? No problem.",
    features: ["AND/OR logic", "Nested conditions", "Custom formulas"],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: Clock,
    title: "Multi-Timeframe Alerts",
    description: "Check conditions across different timeframes and scripts simultaneously.",
    features: ["Daily + Hourly alignment", "Cross-timeframe confirmation", "Sequential triggers"],
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: BarChart3,
    title: "Custom Indicator Alerts",
    description: "Alerts based on your proprietary indicators or custom calculations.",
    features: ["Pine Script indicators", "Custom formulas", "Any indicator logic"],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50"
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Alerts reach you in seconds, not minutes. Speed matters in trading.",
    features: ["Sub-second processing", "Multiple channels", "Redundant delivery"],
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50"
  },
  {
    icon: GitBranch,
    title: "Conditional Workflows",
    description: "Different alerts for different conditions. Breakout alert vs. pullback alert.",
    features: ["Branching logic", "Context-aware messages", "Priority levels"],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50"
  },
  {
    icon: Shield,
    title: "24/7 Reliability",
    description: "Enterprise-grade infrastructure ensures your alerts never miss a beat.",
    features: ["99.9% uptime", "Automatic failover", "Real-time monitoring"],
    gradient: "from-slate-600 to-slate-700",
    bgGradient: "from-slate-50 to-gray-50"
  }
];

export default function AlertsCapabilities({ service }: AlertsCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-orange-100 to-amber-100 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 text-amber-700 rounded-full text-sm font-semibold mb-6 border border-amber-200/50 shadow-sm"
          >
            <Bell className="w-4 h-4" />
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 bg-clip-text text-transparent">Powerful Alert</span>
            {' '}
            <span className="text-teal-700">Features</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Everything you need to build alerts that match your exact trading strategy
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${capability.bgGradient} border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-white border border-slate-200 shadow-md">
                <capability.icon className="w-7 h-7 text-slate-700" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-3">{capability.title}</h3>
              <p className="text-black leading-relaxed mb-4">{capability.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-white/80 text-slate-700 rounded-full border border-slate-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
