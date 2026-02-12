'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';

const RoadmapVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px]">
      <svg
        viewBox="0 0 730 560"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Road surface - perspective trapezoid, shifted down & extended right */}
        <path
          d="M 0 500 L 140 405 L 730 250 L 730 345 L 140 480 Z"
          fill="#334155"
        />
        {/* Road edge - darker bottom */}
        <path
          d="M 0 500 L 140 480 L 730 345 L 730 365 L 130 500 Z"
          fill="#1E293B"
        />

        {/* Dashed center line */}
        <line x1="60" y1="468" x2="170" y2="432" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="180" y1="428" x2="330" y2="388" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="340" y1="385" x2="500" y2="345" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="510" y1="342" x2="730" y2="283" stroke="#94A3B8" strokeWidth="2" strokeDasharray="12 8" />

        {/* Pole bases (small ellipses on road) */}
        <ellipse cx="110" cy="450" rx="8" ry="3" fill="#475569" />
        <ellipse cx="280" cy="405" rx="8" ry="3" fill="#475569" />
        <ellipse cx="450" cy="363" rx="8" ry="3" fill="#475569" />
        <ellipse cx="640" cy="315" rx="8" ry="3" fill="#475569" />

        {/* Flag poles */}
        <line x1="110" y1="450" x2="110" y2="290" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="280" y1="405" x2="280" y2="210" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="450" y1="363" x2="450" y2="160" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
        <line x1="640" y1="315" x2="640" y2="115" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />

        {/* Pole caps */}
        <circle cx="110" cy="290" r="4" fill="#D1D5DB" />
        <circle cx="280" cy="210" r="4" fill="#D1D5DB" />
        <circle cx="450" cy="160" r="4" fill="#D1D5DB" />
        <circle cx="640" cy="115" r="4" fill="#D1D5DB" />

        {/* Flag 1 - 2014 (violet) */}
        <path d="M 110 290 L 110 320 L 175 313 L 175 283 Z" fill="url(#flag1)" />
        {/* Flag 2 - 2019 (orange) */}
        <path d="M 280 210 L 280 243 L 350 235 L 350 202 Z" fill="url(#flag2)" />
        {/* Flag 3 - 2021 (sky) */}
        <path d="M 450 160 L 450 193 L 520 185 L 520 152 Z" fill="url(#flag3)" />
        {/* Flag 4 - 2025 (teal) */}
        <path d="M 640 115 L 640 148 L 710 141 L 710 108 Z" fill="url(#flag4)" />

        {/* Year text on flags */}
        <text x="138" y="305" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2014</text>
        <text x="311" y="225" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2019</text>
        <text x="481" y="175" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2021</text>
        <text x="671" y="130" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2025</text>

        {/* Label card backgrounds - staircase pattern above flags, no overlap */}
        <rect x="30" y="178" width="160" height="100" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="1.2" opacity="0.95" />
        <rect x="200" y="86" width="160" height="100" rx="8" fill="white" stroke="#F97316" strokeWidth="1.2" opacity="0.95" />
        <rect x="370" y="30" width="160" height="100" rx="8" fill="white" stroke="#0EA5E9" strokeWidth="1.2" opacity="0.95" />
        <rect x="555" y="14" width="160" height="90" rx="8" fill="white" stroke="#14B8A6" strokeWidth="1.2" opacity="0.95" />

        {/* Label 1 - Started Trading */}
        <text x="110" y="200" fill="#7C3AED" fontSize="17" fontWeight="700" textAnchor="middle">Started Trading</text>
        <text x="110" y="228" fill="#1E293B" fontSize="15" textAnchor="middle">Studying charts</text>
        <text x="110" y="248" fill="#1E293B" fontSize="15" textAnchor="middle">&amp; mastering markets.</text>

        {/* Label 2 - Algo Development */}
        <text x="280" y="108" fill="#EA580C" fontSize="17" fontWeight="700" textAnchor="middle">Algo Development</text>
        <text x="280" y="136" fill="#1E293B" fontSize="15" textAnchor="middle">Python, Pine Script</text>
        <text x="280" y="156" fill="#1E293B" fontSize="15" textAnchor="middle">&amp; AFL mastery.</text>

        {/* Label 3 - Company Founded */}
        <text x="450" y="52" fill="#0284C7" fontSize="17" fontWeight="700" textAnchor="middle">Company Founded</text>
        <text x="450" y="80" fill="#1E293B" fontSize="15" textAnchor="middle">Automating traders&apos;</text>
        <text x="450" y="100" fill="#1E293B" fontSize="15" textAnchor="middle">edge worldwide.</text>

        {/* Label 4 - Became Pvt. Ltd. */}
        <text x="635" y="35" fill="#0D9488" fontSize="16" fontWeight="700" textAnchor="middle">Became Pvt. Ltd.</text>
        <text x="635" y="62" fill="#1E293B" fontSize="15" textAnchor="middle">Serving clients</text>
        <text x="635" y="82" fill="#1E293B" fontSize="15" textAnchor="middle">worldwide.</text>

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="flag1" x1="110" y1="305" x2="175" y2="305">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="flag2" x1="280" y1="225" x2="350" y2="225">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="flag3" x1="450" y1="175" x2="520" y2="175">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="flag4" x1="640" y1="130" x2="710" y2="130">
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
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-teal-50/30 overflow-hidden">
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
              <p className="text-base lg:text-lg text-slate-900 leading-relaxed">
                Our journey began in 2014 as passionate traders, spending countless hours studying charts,
                testing strategies, and learning the markets firsthand. Through years of hands-on experience,
                we understood what traders truly need — discipline, precision, and consistency.
              </p>
              <p className="text-base lg:text-lg text-slate-900 leading-relaxed">
                By 2019, we transitioned into algorithmic trading, mastering Python, TradingView Pine Script,
                AmiBroker AFL, and MetaTrader development. In 2021, we founded Secret Weapon Trading Solution
                to help traders automate their edge with professional-grade solutions.
              </p>
              <p className="text-base lg:text-lg text-slate-900 leading-relaxed">
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
