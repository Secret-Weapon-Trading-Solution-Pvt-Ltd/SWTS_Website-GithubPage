'use client';

import React from 'react';
import {
  ExternalLink,
  TrendingUp,
  BarChart3,
  Activity,
  LineChart,
  Sparkles,
  Heart,
} from 'lucide-react';

// TradingView scripts data
const tradingViewScripts = [
  {
    id: 1,
    name: 'Candle 2 Closure',
    description: 'Detects a specific reversal pattern on the chart spanning four bars. The first bar trades into a key price level, the second bar closes inside, indicating a potential reversal.',
    likes: '2.9K',
    url: 'https://www.tradingview.com/script/QDmCRtKn-Candle-2-Closure-LuxAlgo/',
    icon: 'candle',
    category: 'Pattern Detection',
  },
  {
    id: 2,
    name: 'Relative Performance Areas',
    description: 'Enables traders to analyze the relative performance of any asset against a user-selected benchmark directly on the chart, session by session with three display modes.',
    likes: '2.7K',
    url: 'https://www.tradingview.com/script/Yp8LKGQR-Relative-Performance-Areas-LuxAlgo/',
    icon: 'chart',
    category: 'Performance Analysis',
  },
  {
    id: 3,
    name: 'Arbitrage Detector',
    description: 'Unveils hidden spreads in the crypto and forex markets. Compares the same asset on main crypto exchanges and forex brokers, displaying prices and volumes on a dashboard.',
    likes: '2.3K',
    url: 'https://www.tradingview.com/script/LA4a9zFx-Arbitrage-Detector-LuxAlgo/',
    icon: 'trending',
    category: 'Arbitrage',
  },
  {
    id: 4,
    name: 'Power Hour Trendlines',
    description: 'Based on Power Hours detection, includes up to three displayed trendlines derived from the closing prices of all bars within the last user-selected Power Hours.',
    likes: '1.7K',
    url: 'https://www.tradingview.com/script/VwE8AFKg-Power-Hour-Trendlines-LuxAlgo/',
    icon: 'line',
    category: 'Trend Analysis',
  },
  {
    id: 5,
    name: 'Intermarket Swing Projection',
    description: 'Allows traders to plot price movement swings from any user-selected asset directly onto the chart in the form of zigzags and horizontal support/resistance levels.',
    likes: '1.7K',
    url: 'https://www.tradingview.com/script/Rb38Xwfv-Intermarket-Swing-Projection-LuxAlgo/',
    icon: 'activity',
    category: 'Swing Trading',
  },
];

const iconMap: Record<string, React.ElementType> = {
  candle: BarChart3,
  chart: LineChart,
  trending: TrendingUp,
  line: Activity,
  activity: Sparkles,
};

export const TradingViewScripts: React.FC = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-white">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 0.5px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #CBD5E1)' }}
          />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full">
            <img
              src="https://www.tradingview.com/static/images/favicon.ico"
              alt="TradingView"
              className="w-4 h-4"
            />
            <span className="text-xs font-semibold tracking-wide uppercase text-black">
              TradingView Scripts
            </span>
          </div>
          <span
            className="w-12 h-[1px]"
            style={{ background: 'linear-gradient(90deg, #CBD5E1, transparent)' }}
          />
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Premium Trading Indicators
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Professional-grade indicators powering thousands of traders worldwide
          </p>
        </div>

        {/* Scripts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tradingViewScripts.map((script) => {
            const Icon = iconMap[script.icon] || LineChart;
            return (
              <a
                key={script.id}
                href={script.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6
                           border border-slate-200/80 hover:border-teal-300
                           shadow-[0_1px_3px_rgba(0,0,0,0.02)]
                           hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                           hover:-translate-y-1.5
                           transition-all duration-300 ease-out"
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.6), transparent)',
                  }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-teal-50/80 group-hover:bg-teal-100/80 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex items-center gap-1.5 text-black">
                    <Heart className="w-3.5 h-3.5 fill-rose-100 text-rose-400" />
                    <span className="text-xs font-medium">{script.likes}</span>
                  </div>
                </div>

                {/* Category */}
                <span className="inline-flex px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-semibold text-black uppercase tracking-wide mb-2">
                  {script.category}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-teal-700 transition-colors">
                  {script.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-black mb-4 leading-relaxed line-clamp-3">
                  {script.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100/80">
                  <span className="text-xs font-medium text-black">
                    TradingView
                  </span>
                  <div className="flex items-center gap-1 text-black group-hover:text-teal-600 transition-colors duration-200">
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Open
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* View More Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.tradingview.com/scripts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl
                       text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-800
                       transition-all duration-200"
          >
            Explore More Scripts on TradingView
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TradingViewScripts;
