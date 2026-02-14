'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const RoadmapVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[480px]">
      <svg
        viewBox="-50 40 920 530"
        fill="none"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Road surface - perspective: broad bottom-left, narrow upper-right */}
        <path
          d="M -30 560 L -10 430 L 870 340 L 870 385 Z"
          fill="#3D4A5C"
        />
        {/* Road darker bottom edge */}
        <path
          d="M -30 560 L 870 385 L 870 400 L -40 580 Z"
          fill="#2D3748"
        />

        {/* Dashed center line - exactly centered between top and bottom road edges */}
        <line x1="0" y1="492" x2="140" y2="471" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="16 10" />
        <line x1="155" y1="468" x2="350" y2="440" stroke="#CBD5E1" strokeWidth="2.2" strokeDasharray="14 9" />
        <line x1="365" y1="437" x2="560" y2="409" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="12 8" />
        <line x1="575" y1="406" x2="870" y2="363" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="10 7" />

        {/* Pole bases on road */}
        <ellipse cx="140" cy="448" rx="10" ry="4" fill="#4A5568" />
        <ellipse cx="350" cy="408" rx="8" ry="3.5" fill="#4A5568" />
        <ellipse cx="560" cy="378" rx="7" ry="3" fill="#4A5568" />
        <ellipse cx="770" cy="358" rx="6" ry="2.5" fill="#4A5568" />

        {/* Flag poles - taller near viewer, shorter far away */}
        <line x1="140" y1="448" x2="140" y2="250" stroke="#A0AEC0" strokeWidth="4" strokeLinecap="round" />
        <line x1="350" y1="408" x2="350" y2="230" stroke="#A0AEC0" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="560" y1="378" x2="560" y2="220" stroke="#A0AEC0" strokeWidth="3" strokeLinecap="round" />
        <line x1="770" y1="358" x2="770" y2="260" stroke="#A0AEC0" strokeWidth="2.5" strokeLinecap="round" />

        {/* Pole caps */}
        <circle cx="140" cy="250" r="5" fill="#CBD5E1" />
        <circle cx="350" cy="230" r="4.5" fill="#CBD5E1" />
        <circle cx="560" cy="220" r="4" fill="#CBD5E1" />
        <circle cx="770" cy="260" r="3.5" fill="#CBD5E1" />

        {/* Flag 1 - 2014 (violet) */}
        <path d="M 140 250 L 140 290 L 220 284 L 220 244 Z" fill="url(#flag1)" />
        {/* Flag 2 - 2019 (orange) */}
        <path d="M 350 230 L 350 266 L 422 261 L 422 225 Z" fill="url(#flag2)" />
        {/* Flag 3 - 2021 (sky) */}
        <path d="M 560 220 L 560 253 L 625 249 L 625 216 Z" fill="url(#flag3)" />
        {/* Flag 4 - 2025 (teal) */}
        <path d="M 770 260 L 770 288 L 828 285 L 828 257 Z" fill="url(#flag4)" />

        {/* Year text on flags */}
        <text x="177" y="269" fill="white" fontSize="16" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2014</text>
        <text x="383" y="248" fill="white" fontSize="15" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2019</text>
        <text x="590" y="237" fill="white" fontSize="13" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2021</text>
        <text x="797" y="274" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" dominantBaseline="middle">2025</text>

        {/* Label 1 - Started Trading (above left) */}
        <rect x="30" y="90" width="170" height="105" rx="8" fill="white" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.95" />
        <text x="115" y="115" fill="#7C3AED" fontSize="17" fontWeight="700" textAnchor="middle">Started Trading</text>
        <text x="115" y="142" fill="#1E293B" fontSize="14" textAnchor="middle">Studying charts</text>
        <text x="115" y="164" fill="#1E293B" fontSize="14" textAnchor="middle">&amp; mastering markets.</text>
        {/* Connector line from card to pole */}
        <line x1="115" y1="195" x2="140" y2="250" stroke="#8B5CF6" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Label 2 - Algo Development (above) */}
        <rect x="260" y="70" width="170" height="105" rx="8" fill="white" stroke="#F97316" strokeWidth="1.5" opacity="0.95" />
        <text x="345" y="95" fill="#EA580C" fontSize="17" fontWeight="700" textAnchor="middle">Algo Development</text>
        <text x="345" y="122" fill="#1E293B" fontSize="14" textAnchor="middle">Python, Pine Script</text>
        <text x="345" y="144" fill="#1E293B" fontSize="14" textAnchor="middle">&amp; AFL mastery.</text>
        <line x1="345" y1="175" x2="350" y2="230" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Label 3 - Company Founded (above) */}
        <rect x="475" y="55" width="170" height="110" rx="8" fill="white" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.95" />
        <text x="560" y="80" fill="#0284C7" fontSize="17" fontWeight="700" textAnchor="middle">Company Founded</text>
        <text x="560" y="107" fill="#1E293B" fontSize="14" textAnchor="middle">Automating traders&apos;</text>
        <text x="560" y="129" fill="#1E293B" fontSize="14" textAnchor="middle">edge worldwide.</text>
        <line x1="560" y1="165" x2="560" y2="220" stroke="#0EA5E9" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Label 4 - Became Pvt. Ltd. (above road) */}
        <rect x="670" y="110" width="180" height="105" rx="8" fill="white" stroke="#14B8A6" strokeWidth="1.5" opacity="0.95" />
        <text x="760" y="135" fill="#0D9488" fontSize="17" fontWeight="700" textAnchor="middle">Became Pvt. Ltd.</text>
        <text x="760" y="162" fill="#1E293B" fontSize="14" textAnchor="middle">Serving clients</text>
        <text x="760" y="184" fill="#1E293B" fontSize="14" textAnchor="middle">worldwide.</text>
        <line x1="770" y1="215" x2="770" y2="245" stroke="#14B8A6" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="flag1" x1="140" y1="269" x2="220" y2="269">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="flag2" x1="350" y1="248" x2="422" y2="248">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="flag3" x1="560" y1="237" x2="625" y2="237">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="flag4" x1="770" y1="274" x2="828" y2="274">
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
