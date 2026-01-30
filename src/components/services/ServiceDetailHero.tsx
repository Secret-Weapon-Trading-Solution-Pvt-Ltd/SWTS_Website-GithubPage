'use client';

import { motion } from 'framer-motion';
import { StaticImage } from '@/components/ui/StaticImage';
import Link from 'next/link';
import { Service } from '@/data/services';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailHeroProps {
  service: Service;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  // Check if this is the Strategy Automation service for dark theme
  const isDarkTheme = service.slug === 'algo-strategy-development';
  // Check if this is Strategy Backtesting for similar wave style
  const isBacktesting = service.slug === 'strategy-backtesting';
  // Check if this is Strategy Optimization for blue/indigo wave style
  const isOptimization = service.slug === 'strategy-optimization';
  const hasWaveBackground = isDarkTheme || isBacktesting || isOptimization;

  return (
    <section className={`relative pt-28 lg:pt-32 pb-6 overflow-hidden ${
      hasWaveBackground
        ? 'bg-white'
        : 'bg-gradient-to-b from-navy-50 via-white to-white'
    }`}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        {hasWaveBackground ? (
          <>
            {/* Wave at top - shorter, just behind navbar */}
            <div className={`absolute top-0 left-0 right-0 h-[180px] ${
              isBacktesting
                ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400'
                : isOptimization
                ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600'
                : 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600'
            }`}>
              {/* Wave shape at bottom */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                style={{ height: '80px' }}
              >
                <path
                  d="M0,40 C320,80 640,0 960,40 C1120,60 1280,60 1440,40 L1440,80 L0,80 Z"
                  fill="white"
                />
              </svg>

              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="wave-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                      <circle cx="40" cy="40" r="1" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                </svg>
              </div>

              {/* Animated subtle glow */}
              <motion.div
                className={`absolute top-0 right-0 w-[300px] h-[200px] rounded-full blur-3xl ${
                  isBacktesting
                    ? 'bg-gradient-to-br from-violet-400/30 to-purple-400/20'
                    : isOptimization
                    ? 'bg-gradient-to-br from-indigo-400/30 to-blue-400/20'
                    : 'bg-gradient-to-br from-cyan-400/30 to-blue-400/20'
                }`}
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Light colorful accents on white section */}
            <motion.div
              className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl ${
                isBacktesting
                  ? 'bg-gradient-to-tr from-indigo-100/50 to-purple-100/40'
                  : isOptimization
                  ? 'bg-gradient-to-tr from-blue-100/50 to-indigo-100/40'
                  : 'bg-gradient-to-tr from-blue-100/50 to-indigo-100/40'
              }`}
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className={`absolute bottom-20 right-20 w-[350px] h-[350px] rounded-full blur-3xl ${
                isBacktesting
                  ? 'bg-gradient-to-br from-purple-100/40 to-violet-100/30'
                  : isOptimization
                  ? 'bg-gradient-to-br from-indigo-100/40 to-blue-100/30'
                  : 'bg-gradient-to-br from-teal-100/40 to-cyan-100/30'
              }`}
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-br from-purple-100/30 to-violet-100/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </>
        ) : (
          <>
            {/* Light theme background effects */}
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-navy-100/50 to-transparent" />
            <motion.div
              className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
              style={{ background: `linear-gradient(135deg, ${service.accentColor}20, transparent)` }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{ background: `linear-gradient(135deg, ${service.accentColor}15, transparent)` }}
              animate={{ scale: [1.1, 1, 1.1], rotate: [5, 0, 5] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 opacity-[0.03]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="detail-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" className="text-navy-900"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#detail-grid)" />
              </svg>
            </div>
          </>
        )}
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center transition-colors mb-8 group text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">All Services</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Content */}
          <div>
            {/* Service badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-6"
            >
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                isDarkTheme
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : isBacktesting
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : isOptimization
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : `bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white`
              }`}>
                {service.shortTitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 text-navy-800"
            >
              {isDarkTheme ? (
                <>
                  {service.title.split(' ')[0]}{' '}
                  <span className="text-blue-600">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </>
              ) : isBacktesting ? (
                <>
                  {service.title.split(' ')[0]}{' '}
                  <span className="text-indigo-600">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </>
              ) : isOptimization ? (
                <>
                  {service.title.split(' ')[0]}{' '}
                  <span className="text-blue-600">
                    {service.title.split(' ').slice(1).join(' ')}
                  </span>
                </>
              ) : (
                service.title
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-xl leading-relaxed mb-10 text-navy-600"
            >
              {service.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-row flex-wrap gap-4"
            >
              <motion.a
                href="/strategy-assessment"
                className={`inline-flex items-center justify-center w-fit px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl group ${
                  isDarkTheme
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700'
                    : isBacktesting
                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700'
                    : isOptimization
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700'
                    : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#how-it-works"
                className={`inline-flex items-center justify-center w-fit px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                  isDarkTheme
                    ? 'bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400'
                    : isBacktesting
                    ? 'bg-white border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400'
                    : isOptimization
                    ? 'bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400'
                    : 'bg-white border-2 border-navy-200 text-navy-700 hover:bg-navy-50 hover:border-navy-300 shadow-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                See How It Works
              </motion.a>
            </motion.div>
          </div>

          {/* Right column - Illustration/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {isDarkTheme ? (
              /* Strategy Automation - Animated image display */
              <motion.div
                className="relative aspect-[4/3] w-full max-w-xl lg:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <StaticImage
                  src="/cropped-hands-business-people-working-table.jpg"
                  alt="Strategy Automation - Professional trading analysis"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
              </motion.div>
            ) : isBacktesting ? (
              /* Strategy Backtesting - Trading analysis image */
              <motion.div
                className="relative aspect-[4/3] w-full max-w-xl lg:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <StaticImage
                  src="/night-trader.jpg"
                  alt="Strategy Backtesting - Trading analysis"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              </motion.div>
            ) : isOptimization ? (
              /* Strategy Optimization - Professional optimization image */
              <motion.div
                className="relative aspect-[4/3] w-full max-w-xl lg:max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
              >
                <StaticImage
                  src="/cropped-hands-business-people-working-table.jpg"
                  alt="Strategy Optimization - Professional trading optimization"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10 pointer-events-none" />
              </motion.div>
            ) : (
              /* Other services - Card wrapper */
              <div className="relative bg-white rounded-3xl border border-navy-200 shadow-lg overflow-hidden">
                {/* Decorative header bar */}
                <div className="h-2 bg-gradient-to-r from-navy-600 via-teal-500 to-cyan-500" />

                {/* Check if service has a custom hero image */}
                {service.slug === 'python-algo-development' ? (
                  <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
                    <StaticImage
                      src="/python.png"
                      alt={service.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ) : service.slug === 'pine-script-development' ? (
                  <div className="relative w-full aspect-[4/3] overflow-hidden -mt-2">
                    <StaticImage
                      src="/tradingview.png"
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="p-8 lg:p-10">
                    <div className="text-center mb-8">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Powered By
                      </span>
                    </div>

                    {service.brandLogos.length > 0 ? (
                      <div className="space-y-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex justify-center"
                        >
                          <div className="relative group">
                            <div className="w-32 h-32 rounded-2xl bg-white border border-navy-200 flex items-center justify-center p-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                              {service.brandLogos[0].name === 'TradingView' ? (
                                <svg className="w-20 h-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="tvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#2962FF"/>
                                      <stop offset="100%" stopColor="#2979FF"/>
                                    </linearGradient>
                                  </defs>
                                  <circle cx="100" cy="100" r="95" fill="url(#tvGradient)"/>
                                  <g fill="white">
                                    <rect x="45" y="70" width="12" height="60" rx="2"/>
                                    <rect x="49" y="55" width="4" height="90" rx="1"/>
                                    <rect x="75" y="50" width="12" height="70" rx="2"/>
                                    <rect x="79" y="40" width="4" height="95" rx="1"/>
                                    <rect x="105" y="65" width="12" height="55" rx="2"/>
                                    <rect x="109" y="50" width="4" height="85" rx="1"/>
                                    <rect x="135" y="45" width="12" height="75" rx="2"/>
                                    <rect x="139" y="35" width="4" height="100" rx="1"/>
                                  </g>
                                </svg>
                              ) : service.brandLogos[0].name === 'Zerodha' ? (
                                <svg className="w-20 h-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <linearGradient id="zerodhaGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#387ED1"/>
                                      <stop offset="100%" stopColor="#2563EB"/>
                                    </linearGradient>
                                  </defs>
                                  <path d="M100 20 L170 100 L100 180 L30 100 Z" fill="url(#zerodhaGradientPrimary)"/>
                                  <path d="M100 45 L145 100 L100 155 L55 100 Z" fill="#1e40af" opacity="0.25"/>
                                  <line x1="100" y1="20" x2="100" y2="180" stroke="#1e3a8a" strokeWidth="2" opacity="0.4"/>
                                  <line x1="30" y1="100" x2="170" y2="100" stroke="#1e3a8a" strokeWidth="2" opacity="0.4"/>
                                  <text x="100" y="115" textAnchor="middle" fill="#0f172a" fontSize="50" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
                                </svg>
                              ) : (
                                <div className="text-4xl font-bold text-slate-600">
                                  {service.brandLogos[0].name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full border border-navy-200 shadow-sm">
                              <span className="text-sm font-semibold text-navy-700">
                                {service.brandLogos[0].name}
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        {service.brandLogos.length > 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex justify-center gap-6"
                          >
                            {service.brandLogos.slice(1).map((logo) => (
                              <div key={logo.name} className="text-center group">
                                <div className="w-16 h-16 rounded-xl bg-white border border-navy-200 flex items-center justify-center p-2 shadow-sm group-hover:shadow-lg transition-all duration-300">
                                  {logo.name === 'Pandas' ? (
                                    <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="117" y="0" width="70" height="140" fill="#130754"/>
                                      <rect x="117" y="170" width="70" height="170" fill="#130754"/>
                                      <rect x="117" y="370" width="70" height="142" fill="#130754"/>
                                      <rect x="218" y="117" width="70" height="276" fill="#130754"/>
                                      <rect x="324" y="0" width="70" height="140" fill="#FFCA00"/>
                                      <rect x="324" y="170" width="70" height="170" fill="#FFCA00"/>
                                      <rect x="324" y="370" width="70" height="142" fill="#FFCA00"/>
                                    </svg>
                                  ) : logo.name === 'NumPy' ? (
                                    <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M128.002 0L0 64.002v127.996L128.002 256 256 191.998V64.002L128.002 0z" fill="#4DABCF"/>
                                      <path d="M128.002 0L0 64.002v127.996l128.002 64.004V0z" fill="#4D77CF"/>
                                      <path d="M128.002 256L256 191.998V64.002L128.002 0v256z" fill="#4DABCF"/>
                                      <path d="M128.002 34.194L35.753 80.097l92.249 45.905 92.249-45.905-92.249-45.903z" fill="#FFF"/>
                                      <path d="M128.002 148.188v73.618l-64.564-32.143v-73.618l64.564 32.143z" fill="#4D77CF"/>
                                      <path d="M192.566 115.963v73.7l-64.564 32.143v-73.618l64.564-32.225z" fill="#4DABCF"/>
                                    </svg>
                                  ) : logo.name === 'TradingView' ? (
                                    <svg className="w-10 h-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                      <defs>
                                        <linearGradient id="tvGradientSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                                          <stop offset="0%" stopColor="#2962FF"/>
                                          <stop offset="100%" stopColor="#2979FF"/>
                                        </linearGradient>
                                      </defs>
                                      <circle cx="100" cy="100" r="95" fill="url(#tvGradientSmall)"/>
                                      <g fill="white">
                                        <rect x="45" y="70" width="12" height="60" rx="2"/>
                                        <rect x="49" y="55" width="4" height="90" rx="1"/>
                                        <rect x="75" y="50" width="12" height="70" rx="2"/>
                                        <rect x="79" y="40" width="4" height="95" rx="1"/>
                                        <rect x="105" y="65" width="12" height="55" rx="2"/>
                                        <rect x="109" y="50" width="4" height="85" rx="1"/>
                                        <rect x="135" y="45" width="12" height="75" rx="2"/>
                                        <rect x="139" y="35" width="4" height="100" rx="1"/>
                                      </g>
                                    </svg>
                                  ) : (
                                    <span className="text-xl font-bold text-slate-600">
                                      {logo.name.charAt(0)}
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-medium text-navy-600 mt-2 block">
                                  {logo.name}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-20 flex items-center justify-center`}>
                          <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <p className="text-slate-500">Expert consulting & training</p>
                      </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-navy-100">
                      <p className="text-sm text-navy-600 text-center">
                        Built with industry-standard tools trusted by quantitative teams worldwide
                      </p>
                    </div>
                  </div>
                )}

                {/* Floating decorative elements for light theme */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-lg opacity-60"
                  style={{ background: `linear-gradient(135deg, ${service.accentColor}, ${service.accentColor}80)` }}
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-40"
                  style={{ background: `linear-gradient(135deg, ${service.accentColor}, ${service.accentColor}60)` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
