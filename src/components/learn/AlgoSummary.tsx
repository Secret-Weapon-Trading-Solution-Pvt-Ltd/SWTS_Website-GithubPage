'use client';

import React from 'react';
import Link from 'next/link';
import {
  Database,
  Brain,
  Zap,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Monitor,
  Server,
  Bell,
} from 'lucide-react';

const summaryPoints = [
  {
    step: '01',
    title: 'Data Import',
    icon: Database,
    description:
      'Market data should come correctly, on time, and in clean format so that strategy gets reliable input.',
    color: 'teal',
  },
  {
    step: '02',
    title: 'Strategy + Signal',
    icon: Brain,
    description:
      'Rules should be clear and well-defined so signals are clean. At this stage, decide: Without UI or With UI, deployment on PC or Server.',
    color: 'blue',
  },
  {
    step: '03',
    title: 'Order Execution & Notifications',
    icon: Zap,
    description:
      'After signal, Python either sends notification (signal/status update) or places order via broker API and confirms result - filled/rejected/SL-TP set.',
    color: 'emerald',
  },
];

const AlgoSummary: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border-2 border-teal-200 mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              Summary
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Algo Trading in{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              3 Lines
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The complete backbone of algo trading, simplified.
          </p>
        </div>

        {/* Visual Flow Summary */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-4">
            {summaryPoints.map((point, idx) => (
              <React.Fragment key={point.step}>
                {/* Main Node */}
                <div className="flex flex-col items-center lg:self-start">
                  <div className="relative">
                    <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center shadow-lg border-2 ${
                      point.color === 'teal' ? 'bg-teal-50 border-teal-200' :
                      point.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                      'bg-emerald-50 border-emerald-200'
                    }`}>
                      <point.icon className={`w-12 h-12 lg:w-14 lg:h-14 ${
                        point.color === 'teal' ? 'text-teal-600' :
                        point.color === 'blue' ? 'text-blue-600' :
                        'text-emerald-600'
                      }`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                      point.color === 'teal' ? 'bg-teal-600' :
                      point.color === 'blue' ? 'bg-blue-600' :
                      'bg-emerald-600'
                    }`}>
                      {point.step.replace('0', '')}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-800 text-center">{point.title}</h3>

                  {/* Sub-branches for Strategy step */}
                  {point.step === '02' && (
                    <div className="flex gap-8 mt-4">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-violet-300" />
                        <div className="w-10 h-10 rounded-lg bg-violet-50 border-2 border-violet-200 flex items-center justify-center">
                          <Monitor className="w-5 h-5 text-violet-600" />
                        </div>
                        <p className="text-xs text-violet-600 mt-1">UI</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 bg-amber-300" />
                        <div className="w-10 h-10 rounded-lg bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                          <Server className="w-5 h-5 text-amber-600" />
                        </div>
                        <p className="text-xs text-amber-600 mt-1">Deploy</p>
                      </div>
                    </div>
                  )}

                  {/* Sub-branch for Execution step */}
                  {point.step === '03' && (
                    <div className="flex flex-col items-center mt-4">
                      <div className="w-0.5 h-4 bg-pink-300" />
                      <div className="w-10 h-10 rounded-lg bg-pink-50 border-2 border-pink-200 flex items-center justify-center">
                        <Bell className="w-5 h-5 text-pink-600" />
                      </div>
                      <p className="text-xs text-pink-600 mt-1">Alerts</p>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                {idx < summaryPoints.length - 1 && (
                  <div className="lg:mt-12">
                    <ArrowRight className="w-8 h-8 text-slate-400 hidden lg:block" />
                    <ArrowDown className="w-8 h-8 text-slate-400 lg:hidden" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Summary Cards - Left Right Layout */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {summaryPoints.map((point) => (
            <div
              key={point.step}
              className={`rounded-3xl p-6 lg:p-8 border-2 transition-all hover:scale-[1.02] shadow-sm hover:shadow-lg ${
                point.color === 'teal'
                  ? 'bg-teal-50 border-teal-200 hover:border-teal-300'
                  : point.color === 'blue'
                    ? 'bg-blue-50 border-blue-200 hover:border-blue-300'
                    : 'bg-emerald-50 border-emerald-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    point.color === 'teal'
                      ? 'bg-teal-100'
                      : point.color === 'blue'
                        ? 'bg-blue-100'
                        : 'bg-emerald-100'
                  }`}
                >
                  <point.icon className={`w-6 h-6 ${
                    point.color === 'teal'
                      ? 'text-teal-600'
                      : point.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-emerald-600'
                  }`} />
                </div>
                <div className="text-4xl font-black text-black/20">
                  {point.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-semibold text-teal-300">Remember This</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Key Takeaways</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { text: 'Algo trading = disciplined rule following, not magic profits', icon: Brain, color: 'teal' },
                { text: 'Data quality determines strategy success', icon: Database, color: 'blue' },
                { text: 'Clear rules = clean signals', icon: Sparkles, color: 'violet' },
                { text: 'Execution is about confirmation, not just placing orders', icon: Zap, color: 'amber' },
                { text: 'UI decision affects deployment choice', icon: Monitor, color: 'cyan' },
                { text: 'Reliability matters as much as strategy', icon: Server, color: 'emerald' },
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      point.color === 'teal' ? 'bg-teal-500/20' :
                      point.color === 'blue' ? 'bg-blue-500/20' :
                      point.color === 'violet' ? 'bg-violet-500/20' :
                      point.color === 'amber' ? 'bg-amber-500/20' :
                      point.color === 'cyan' ? 'bg-cyan-500/20' :
                      'bg-emerald-500/20'
                    }`}>
                      <point.icon className={`w-5 h-5 ${
                        point.color === 'teal' ? 'text-teal-400' :
                        point.color === 'blue' ? 'text-blue-400' :
                        point.color === 'violet' ? 'text-violet-400' :
                        point.color === 'amber' ? 'text-amber-400' :
                        point.color === 'cyan' ? 'text-cyan-400' :
                        'text-emerald-400'
                      }`} />
                    </div>
                    <span className="text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors">{point.text}</span>
                  </div>
                  {/* Number watermark */}
                  <div className="absolute bottom-2 right-4 text-white/5 text-3xl font-black">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-slate-600 mb-6">
            Ready to automate your trading strategy?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/strategy-assessment"
              className="group flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Free Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 px-8 py-4 bg-slate-100 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgoSummary;
