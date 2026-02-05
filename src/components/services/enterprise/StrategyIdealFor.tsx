'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import ContactCTA from '@/components/ui/ContactCTA';

const profiles = [
  {
    icon: TrendingUp,
    title: "Novice Traders",
    description: "You're profitable but manual execution is limiting your scale and consistency"
  },
  {
    icon: Target,
    title: "Systematic Traders",
    description: "You have clear, rule-based strategies but lack the technical skills to automate them"
  },
  {
    icon: Users,
    title: "Trading Teams",
    description: "You need to standardize and scale proven strategies across your operation"
  }
];

export default function StrategyIdealFor() {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-black">
              Who Should Use This?
            </h3>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed mt-4">
              Whether you&apos;re just starting out or managing multiple strategies, automation can transform your trading
            </p>
          </div>

          {/* Profiles Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {profiles.map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-indigo-600 shadow-blue-500/25' :
                  index === 1 ? 'from-emerald-500 to-teal-600 shadow-emerald-500/25' :
                  'from-violet-500 to-purple-600 shadow-violet-500/25'
                }`}>
                  <profile.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-blue-900 transition-colors">{profile.title}</h4>
                  <p className="text-black leading-relaxed">{profile.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Result indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-4">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-2 text-center">
              Your Strategy, Fully Automated
            </h3>
            <p className="text-base lg:text-lg text-black text-center">
              Running 24/7 with monitoring, alerts, and support
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <ContactCTA buttonText="Start Your Journey" />
        </motion.div>
      </div>
    </section>
  );
}
