'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import {
  FlaskConical,
  Wifi,
  BarChart3,
  Shield,
  Clock,
  AlertCircle,
  Settings,
  FileText,
  TrendingUp
} from 'lucide-react';

interface PaperTradingCapabilitiesProps {
  service: Service;
}

const capabilities = [
  {
    icon: Wifi,
    title: "Live Data Connection",
    description: "Your strategy runs on real-time market data, not delayed or historical feeds.",
    features: ["Real-time price feeds", "Live order book data", "Actual market conditions"],
    color: "bg-blue-500",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  {
    icon: Settings,
    title: "Realistic Execution",
    description: "Simulated fills with realistic slippage and latency modeling.",
    features: ["Slippage simulation", "Latency modeling", "Partial fills"],
    color: "bg-violet-500",
    bgGradient: "from-violet-50 to-purple-50"
  },
  {
    icon: BarChart3,
    title: "Full Trade Logging",
    description: "Every trade recorded with timestamp, price, and P&L for analysis.",
    features: ["Complete trade history", "Entry/exit timestamps", "P&L attribution"],
    color: "bg-emerald-500",
    bgGradient: "from-emerald-50 to-green-50"
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Track the same metrics you'll use in live trading.",
    features: ["Win rate tracking", "Sharpe ratio", "Max drawdown"],
    color: "bg-amber-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    icon: AlertCircle,
    title: "Alert Integration",
    description: "Get notified of paper trades just like you would with real trades.",
    features: ["Trade notifications", "Daily summaries", "Threshold alerts"],
    color: "bg-rose-500",
    bgGradient: "from-rose-50 to-pink-50"
  },
  {
    icon: Clock,
    title: "Duration Flexibility",
    description: "Run paper trading for as long as you need to build confidence.",
    features: ["1 week minimum", "Extend as needed", "Seasonal testing"],
    color: "bg-slate-600",
    bgGradient: "from-slate-50 to-gray-50"
  }
];

export default function PaperTradingCapabilities({ service }: PaperTradingCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-200/50 shadow-sm"
          >
            <FlaskConical className="w-4 h-4" />
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 bg-clip-text text-transparent">Production-Grade</span>
            {' '}
            <span className="text-teal-700">Testing</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Everything you need to validate your strategy before going live
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
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg ${capability.color}`}>
                <capability.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-3">{capability.title}</h3>
              <p className="text-black leading-relaxed mb-4">{capability.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-200">
            <Shield className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium">All testing happens with zero capital at risk</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
