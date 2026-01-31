'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Check, Search, Bell, Filter, Zap, ArrowRight, Clock, Globe } from 'lucide-react';

interface ScreenerCapabilitiesProps {
  service: Service;
}

const capabilitiesData = [
  {
    title: "Custom Scanning Logic",
    subtitle: "Your Exact Criteria",
    description: "We code YOUR specific setup conditions—multi-timeframe analysis, custom indicator combinations, volume filters, price action patterns—whatever defines YOUR edge",
    features: [
      "Multi-timeframe scanning",
      "Custom indicator logic",
      "Volume & price filters",
      "Pattern recognition"
    ],
    icon: Filter,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-100"
  },
  {
    title: "Real-Time Monitoring",
    subtitle: "24/7 Market Watch",
    description: "Your screener runs continuously, scanning live market data and catching setups the moment they form—even while you sleep or work",
    features: [
      "Live market data feeds",
      "Intraday scanning",
      "After-hours monitoring",
      "Multiple exchange support"
    ],
    icon: Clock,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-100"
  },
  {
    title: "Multi-Channel Alerts",
    subtitle: "Instant Notifications",
    description: "Get notified immediately when your criteria match—via WhatsApp, Telegram, Email, or SMS. Never miss an opportunity because you weren't watching",
    features: [
      "WhatsApp Business alerts",
      "Telegram bot integration",
      "Email with chart snapshots",
      "SMS for critical signals"
    ],
    icon: Bell,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-100"
  },
  {
    title: "Broad Market Coverage",
    subtitle: "Scan Everything",
    description: "Scan across stocks, crypto, forex, or commodities—hundreds or thousands of symbols simultaneously with sub-second response times",
    features: [
      "500+ symbols per scan",
      "Multi-market support",
      "Sector-wise filtering",
      "Ranked results output"
    ],
    icon: Globe,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-100"
  }
];

export default function ScreenerCapabilities({ service }: ScreenerCapabilitiesProps) {
  return (
    <section className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 text-cyan-700 rounded-full text-sm font-semibold mb-6 border border-cyan-200/50 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
            What We Deliver
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-cyan-800 to-navy-900 bg-clip-text text-transparent">Our Screener</span>{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Comprehensive scanning solutions that find opportunities before the crowd
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
                  <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 shadow-md border border-slate-100 hover:shadow-lg hover:border-cyan-200 transition-all duration-300 overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

                    <div className="relative">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${capability.gradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-4xl font-bold text-slate-100 group-hover:text-cyan-100 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-3 group-hover:text-cyan-700 transition-colors">
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
          <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-100">
            <span className="text-black font-medium">All delivered with setup documentation and ongoing support</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 text-cyan-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
