'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';

const RoadmapVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px]">
      <svg
        viewBox="0 0 870 560"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Road surface - perspective trapezoid, extended right */}
        <path
          d="M 0 500 L 140 405 L 870 215 L 870 315 L 140 480 Z"
          fill="#334155"
        />
        {/* Road edge - darker bottom */}
        <path
          d="M 0 500 L 140 480 L 870 315 L 870 335 L 130 500 Z"
          fill="#1E293B"
        />

        {/* Dashed center line */}
        <line x1="50" y1="475" x2="160" y2="438" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="170" y1="434" x2="360" y2="383" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="370" y1="379" x2="580" y2="325" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="590" y1="321" x2="870" y2="250" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />

        {/* Pole bases (small ellipses on road) */}
        <ellipse cx="100" cy="455" rx="8" ry="3" fill="#475569" />
        <ellipse cx="310" cy="400" rx="8" ry="3" fill="#475569" />
        <ellipse cx="520" cy="350" rx="8" ry="3" fill="#475569" />
        <ellipse cx="740" cy="296" rx="8" ry="3" fill="#475569" />

        {/* Flag poles */}
        <line x1="100" y1="455" x2="100" y2="290" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="310" y1="400" x2="310" y2="200" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="520" y1="350" x2="520" y2="145" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="740" y1="296" x2="740" y2="95" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />

        {/* Pole caps */}
        <circle cx="100" cy="290" r="4" fill="#D1D5DB" />
        <circle cx="310" cy="200" r="4" fill="#D1D5DB" />
        <circle cx="520" cy="145" r="4" fill="#D1D5DB" />
        <circle cx="740" cy="95" r="4" fill="#D1D5DB" />

        {/* Flag 1 - 2014 (violet) */}
        <path d="M 100 290 L 100 320 L 168 313 L 168 283 Z" fill="url(#flag1)" />
        {/* Flag 2 - 2019 (orange) */}
        <path d="M 310 200 L 310 233 L 380 225 L 380 192 Z" fill="url(#flag2)" />
        {/* Flag 3 - 2021 (sky) */}
        <path d="M 520 145 L 520 178 L 590 170 L 590 137 Z" fill="url(#flag3)" />
        {/* Flag 4 - 2025 (teal) */}
        <path d="M 740 95 L 740 128 L 810 121 L 810 88 Z" fill="url(#flag4)" />

        {/* Year text on flags */}
        <text x="130" y="305" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2014</text>
        <text x="341" y="215" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2019</text>
        <text x="551" y="160" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2021</text>
        <text x="771" y="110" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2025</text>

        {/* Label card backgrounds - staircase pattern above flags, well spaced */}
        <rect x="20" y="170" width="160" height="105" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.95" />
        <rect x="230" y="78" width="160" height="100" rx="8" fill="white" stroke="#F97316" strokeWidth="1.2" opacity="0.95" />
        <rect x="440" y="14" width="160" height="105" rx="8" fill="white" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.95" />
        <rect x="660" y="0" width="170" height="82" rx="8" fill="white" stroke="#14B8A6" strokeWidth="1.2" opacity="0.95" />

        {/* Label 1 - Started Trading */}
        <text x="100" y="193" fill="#7C3AED" fontSize="17" fontWeight="700" textAnchor="middle">Started Trading</text>
        <text x="100" y="222" fill="#1E293B" fontSize="15" textAnchor="middle">Studying charts</text>
        <text x="100" y="244" fill="#1E293B" fontSize="15" textAnchor="middle">&amp; mastering markets.</text>

        {/* Label 2 - Algo Development */}
        <text x="310" y="100" fill="#EA580C" fontSize="17" fontWeight="700" textAnchor="middle">Algo Development</text>
        <text x="310" y="128" fill="#1E293B" fontSize="15" textAnchor="middle">Python, Pine Script</text>
        <text x="310" y="148" fill="#1E293B" fontSize="15" textAnchor="middle">&amp; AFL mastery.</text>

        {/* Label 3 - Company Founded */}
        <text x="520" y="37" fill="#0284C7" fontSize="17" fontWeight="700" textAnchor="middle">Company Founded</text>
        <text x="520" y="66" fill="#1E293B" fontSize="15" textAnchor="middle">Automating traders&apos;</text>
        <text x="520" y="88" fill="#1E293B" fontSize="15" textAnchor="middle">edge worldwide.</text>

        {/* Label 4 - Became Pvt. Ltd. */}
        <text x="745" y="21" fill="#0D9488" fontSize="16" fontWeight="700" textAnchor="middle">Became Pvt. Ltd.</text>
        <text x="745" y="48" fill="#1E293B" fontSize="15" textAnchor="middle">Serving clients</text>
        <text x="745" y="68" fill="#1E293B" fontSize="15" textAnchor="middle">worldwide.</text>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="flag1" x1="100" y1="305" x2="168" y2="305">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="flag2" x1="310" y1="215" x2="380" y2="215">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="flag3" x1="520" y1="160" x2="590" y2="160">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="flag4" x1="740" y1="110" x2="810" y2="110">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const OurStory: React.FC = () => {
  return (
    <section className="relative pt-16 pb-10 lg:pt-24 lg:pb-14 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <span className="inline-block text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Our Journey
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Story Behind{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Secret Weapon
              </span>
            </h2>

            {/* Story Content */}
            <div className="space-y-4 mb-6">
              <p className="text-base lg:text-lg text-black leading-relaxed">
                Our journey began in 2014 as passionate traders, spending countless hours studying charts,
                testing strategies, and learning the markets firsthand. Through years of hands-on experience,
                we understood what traders truly need — discipline, precision, and consistency.
              </p>
              <p className="text-base lg:text-lg text-black leading-relaxed">
                By 2019, we transitioned into algorithmic trading, mastering Python, TradingView Pine Script,
                AmiBroker AFL, and MetaTrader development. In 2021, we founded Secret Weapon Trading Solution
                to help traders automate their edge with professional-grade solutions.
              </p>
              <p className="text-base lg:text-lg text-black leading-relaxed">
                In 2025, we became a Private Limited company, marking a significant milestone
                in our journey. Today, we serve institutional clients,
                professional traders, and retail investors worldwide.
              </p>
            </div>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-6 border-l-4 border-teal-500"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-teal-200" />
              <p className="text-lg italic text-black mb-3">
                &quot;We take the burden off your shoulders, so you can focus on strategy.&quot;
              </p>
              <p className="text-sm font-semibold text-black">— Swapnil Raykar, Founder</p>
            </motion.div>

            {/* Featured In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-sm font-medium text-black uppercase tracking-wider mb-3 block">Featured In</span>
              <a
                href="https://www.financeoutlookindia.com/finance/vendor/secret-weapon-trading-solution-automate-your-strategies-to-trade-smarter-not-harder-cid-243.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
              >
                <span className="font-semibold text-black group-hover:text-teal-700">Finance Outlook India</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Roadmap Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/30 border border-slate-200 rounded-2xl p-4 pb-5 shadow-sm"
          >
            <RoadmapVisual />
            <h3 className="text-center text-lg lg:text-xl font-bold text-slate-800 mt-2">
              Our Journey — From Traders to Tech Innovators
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
