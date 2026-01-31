'use client';

import React from 'react';

const differentiators = [
  {
    title: 'Strategy-First Approach',
    description: 'We automate your edge, not replace it. Your strategy stays yours—we just remove the execution friction.',
  },
  {
    title: 'Institutional Infrastructure',
    description: '99.9% uptime, enterprise-grade security, and real-time monitoring built for serious capital.',
  },
  {
    title: 'Platform Agnostic',
    description: 'TradingView, AmiBroker, Python, or custom—we integrate with whatever tools you already trust.',
  },
  {
    title: 'SEBI Compliant',
    description: 'All systems operate within regulatory guidelines. No shortcuts, no grey areas.',
  },
];

const testimonial = {
  quote: 'The assessment was eye-opening. I finally understood why my profitable backtests weren\'t translating to live results. Now my system executes exactly as designed.',
  author: 'Rajesh K.',
  role: 'Options Trader',
  location: 'Mumbai',
};

export const CredibilitySection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white" id="credibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-teal-500" />
              <span className="section-label">Why Automate With Us</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6">
              We've been where you are.
              <span className="text-black"> And built our way out.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-black leading-relaxed mb-12">
              Our team has experienced the same execution struggles. That's why we built systems
              that remove human error from the equation—without removing human judgment from strategy.
            </p>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, i) => (
                <div key={i} className="flex gap-4">
                  {/* Vertical accent line */}
                  <div className="w-0.5 bg-gradient-to-b from-teal-500 to-teal-200 rounded-full flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-black text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
              {/* Quote icon */}
              <svg className="w-10 h-10 text-teal-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-black">
                    {testimonial.role} · {testimonial.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Platform integrations */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-xs text-black uppercase tracking-wider mb-4 text-center">
                Platforms we integrate with
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {['TradingView', 'AmiBroker', 'Python', 'MetaTrader', 'Zerodha'].map((platform) => (
                  <span key={platform} className="text-sm text-black hover:text-black transition-colors">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
