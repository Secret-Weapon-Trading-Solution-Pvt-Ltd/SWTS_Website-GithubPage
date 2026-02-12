'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const serviceOptions = [
  'Algo Strategy Development',
  'Strategy Backtesting',
  'Custom Screener',
  'Strategy Alerts',
  'Trading Dashboard',
  'Strategy Optimization',
  'Paper Trading System',
  'Other / Not Sure',
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = encodeURIComponent(`Contact: ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:support@secretweapon.in?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-3xl" />
        <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-teal-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Your Email Client Should Open</h3>
            <p className="text-black mb-8">
              Please send the pre-filled email from your email client. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/30 overflow-hidden scroll-mt-20">
      {/* Decorative blur orbs */}
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-cyan-100/15 rounded-full blur-3xl -translate-x-1/2" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="section-label">Send a Message</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-5">
              Tell Us About Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Trading Goals
              </span>
            </h2>
            <p className="text-lg text-black leading-relaxed mb-8">
              Share your trading strategy idea or automation needs, and we&apos;ll craft a solution
              tailored to your specific requirements.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Free initial consultation to understand your needs',
                'Custom solution designed for your trading style',
                'Transparent pricing with no hidden costs',
                'Ongoing support and strategy refinement',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-black">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Assessment CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-soft"
            >
              <h4 className="font-bold text-slate-900 mb-2">Not sure what you need?</h4>
              <p className="text-sm text-black mb-4">
                Take our free strategy assessment to get personalized recommendations.
              </p>
              <Link
                href="/strategy-assessment"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Take Free Assessment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100/80">
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Interest
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all cursor-pointer"
                  >
                    <option value="">Select a service (optional)</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Message <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your trading strategy idea or what you'd like to automate..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>

              <p className="text-center text-xs text-black mt-4">
                This will open your email client with a pre-filled message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
