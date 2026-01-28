'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { ArrowRight, MessageSquare, Zap, Shield, Clock, CheckCircle } from 'lucide-react';

interface CTAModernProps {
  service: Service;
}

const features = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Strategy documented and coded within weeks"
  },
  {
    icon: Shield,
    title: "Full Ownership",
    description: "You own all code and documentation"
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "30-day support included with every project"
  }
];

const stats = [
  { value: "150+", label: "Strategies Automated" },
  { value: "94%", label: "Client Retention" },
  { value: "24/7", label: "Automated Execution" },
  { value: "<1s", label: "Execution Speed" }
];

export default function CTAModern({ service }: CTAModernProps) {
  return (
    <section className="relative py-14 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <MessageSquare className="w-4 h-4" />
                Ready to Automate?
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                Turn Your Strategy Into an{' '}
                <span className="text-blue-600">Automated System</span>
              </h2>

              <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                Start with a free strategy assessment. We'll review your trading rules and show you exactly how automation can work for your approach.
              </p>

              {/* Feature points */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-navy-500">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/strategy-assessment"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Free Strategy Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Our Work</span>
                </motion.a>
              </div>
            </div>

            {/* Right Stats Panel - 2 columns */}
            <div className="lg:col-span-2 bg-slate-50 p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-slate-200">
              <h3 className="text-lg font-semibold text-navy-900 mb-6">Our Track Record</h3>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-navy-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicator */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-navy-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Trusted by systematic traders worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
