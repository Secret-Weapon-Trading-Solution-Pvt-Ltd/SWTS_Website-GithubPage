'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Check, LayoutDashboard, Database, Gauge, LineChart, Shield, Zap } from 'lucide-react';

interface DashboardCapabilitiesProps {
  service: Service;
}

const capabilitiesData = [
  {
    title: "Real-Time View of Trading",
    subtitle: "Live Operations Dashboard",
    description: "Monitor your trading activity as it happens—P&L updates in real-time, positions auto-refresh, and signals appear the moment they trigger",
    features: [
      "Live P&L tracking",
      "Position management",
      "Signal monitoring",
      "Trade execution log"
    ],
    icon: LayoutDashboard,
    gradient: "from-slate-500 to-gray-600",
    bgGradient: "from-slate-50 to-gray-50",
    borderColor: "border-slate-100"
  },
  {
    title: "Multi-Source Integration",
    subtitle: "Connect Everything",
    description: "We integrate with your broker APIs, data feeds, signal systems, and any custom sources—all feeding into one unified view",
    features: [
      "Multi-broker connectivity",
      "Custom API integrations",
      "External data feeds",
      "Webhook receivers"
    ],
    icon: Database,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100"
  },
  {
    title: "Performance Analytics",
    subtitle: "Know Your Numbers",
    description: "Track what matters—equity curves, win rates, drawdowns, risk metrics. Customizable charts and reports for your specific needs",
    features: [
      "Equity curve visualization",
      "Performance metrics",
      "Risk analysis charts",
      "Custom report builder"
    ],
    icon: LineChart,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100"
  },
  {
    title: "Risk Monitoring",
    subtitle: "Stay Protected",
    description: "Real-time risk alerts, exposure tracking, and drawdown monitoring keep you informed of your portfolio's risk at all times",
    features: [
      "Position exposure alerts",
      "Drawdown warnings",
      "Correlation analysis",
      "Risk limit tracking"
    ],
    icon: Shield,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100"
  }
];

export default function DashboardCapabilities({ service }: DashboardCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-gray-100 to-slate-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-slate-500/10 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full"></span>
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-slate-800 to-navy-900 bg-clip-text text-transparent">Our Dashboard</span>{' '}
            <span className="text-teal-700">Capabilities</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Everything you need to monitor and manage your trading operations in one place
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
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                    <div className="relative">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${capability.gradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-black group-hover:text-slate-600 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 group-hover:text-slate-700 transition-colors">
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
