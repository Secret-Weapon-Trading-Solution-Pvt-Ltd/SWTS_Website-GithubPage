'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Settings, Plug, Play, BarChart3, CheckCircle, ArrowRight, Rocket } from 'lucide-react';

interface PaperTradingProcessProps {
  service: Service;
}

const processSteps = [
  {
    step: 1,
    icon: Settings,
    title: "Environment Setup",
    description: "Configure paper trading environment",
    duration: "1-2 days",
    color: "bg-blue-500"
  },
  {
    step: 2,
    icon: Plug,
    title: "Strategy Deployment",
    description: "Deploy your strategy to simulation",
    duration: "1-2 days",
    color: "bg-violet-500"
  },
  {
    step: 3,
    icon: Play,
    title: "Live Simulation",
    description: "Run against live market data",
    duration: "2-4 weeks",
    color: "bg-emerald-500"
  },
  {
    step: 4,
    icon: BarChart3,
    title: "Analysis & Review",
    description: "Comprehensive performance analysis",
    duration: "2-3 days",
    color: "bg-amber-500"
  },
  {
    step: 5,
    icon: Rocket,
    title: "Go-Live Ready",
    description: "Transition to live trading",
    duration: "When ready",
    color: "bg-rose-500"
  }
];

export default function PaperTradingProcess({ service }: PaperTradingProcessProps) {
  return (
    <section id="how-it-works" className="py-14 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold mb-6 border border-slate-200"
          >
            <CheckCircle className="w-4 h-4" />
            Your Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-navy-900">
            From Setup to Go-Live
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            A structured approach to validating your strategy before real capital
          </p>
        </motion.div>

        {/* Horizontal Process Steps */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step card */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${step.color} relative z-10 mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-1 w-6 h-6 bg-white rounded-full border-2 border-slate-200 flex items-center justify-center shadow-sm">
                    <span className="text-xs font-bold text-slate-600">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 w-full">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-black leading-relaxed mb-3">{step.description}</p>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-5 h-5 text-slate-300 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Ready to Test Your Strategy?</h3>
            <p className="text-black mb-6">Get your strategy running in a safe paper trading environment</p>
            <motion.a
              href="/strategy-assessment"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 group"
            >
              Start Paper Trading Setup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
