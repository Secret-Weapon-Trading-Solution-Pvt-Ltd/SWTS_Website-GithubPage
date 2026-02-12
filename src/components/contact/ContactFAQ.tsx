'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is the typical project turnaround time?',
    answer: 'Project timelines vary based on complexity. Simple strategy automation takes 1-2 weeks, while comprehensive trading systems with backtesting and optimization can take 3-6 weeks. We provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes! We offer a free initial consultation to understand your trading needs and discuss potential solutions. You can also take our free strategy assessment to get personalized recommendations before reaching out.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'We work with all major trading platforms including TradingView (Pine Script), AmiBroker (AFL), Python-based solutions, and can integrate with various broker APIs. We also build custom web-based dashboards and screening tools.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Our pricing is project-based and transparent. After understanding your requirements, we provide a detailed quote covering all aspects of the solution. There are no hidden fees — what we quote is what you pay.',
  },
  {
    question: 'Do you provide ongoing support after delivery?',
    answer: 'Absolutely. We provide post-delivery support to ensure everything runs smoothly. We also offer ongoing optimization and maintenance packages for traders who want continuous refinement of their strategies.',
  },
  {
    question: 'Can you help if I only have a strategy idea but no code?',
    answer: 'That is exactly what we specialize in. Most of our clients come with strategy ideas or trading concepts, and we handle the entire technical implementation — from coding and backtesting to deployment and optimization.',
  },
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border-b border-slate-100 last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-teal-50/30' : ''}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-4 text-left group"
      >
        <div className="flex items-center gap-3 pr-8">
          <span className={`text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-gradient-to-br from-teal-500 to-cyan-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-teal-700' : 'text-slate-800 group-hover:text-blue-700'}`}>
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-teal-500' : 'text-slate-400'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-14 pr-12 text-black leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const ContactFAQ: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-50/40 rounded-full blur-3xl translate-x-1/3" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-5 shadow-sm">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <span className="section-label">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Everything you need to know about working with us. Can&apos;t find your answer? Reach out directly.
              </p>
            </motion.div>
          </div>

          {/* Right - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-soft-md p-6 lg:p-8">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.question} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
