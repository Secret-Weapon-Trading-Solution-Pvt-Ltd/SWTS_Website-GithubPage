'use client';

import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { Bell, Zap, CheckCircle, ArrowRight, Clock, Eye, Smartphone, Mail, MessageSquare, Send, AlertTriangle, TrendingUp, Moon, Wifi } from 'lucide-react';

interface AlertsOverviewProps {
  service: Service;
}

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

const AlertNotificationIllustration = () => (
  <svg viewBox="0 0 500 280" className="w-full h-auto">
    <defs>
      <linearGradient id="alertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="cardShadow2" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* Background subtle grid */}
    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" strokeWidth="0.5" opacity="0.5"/>
    </pattern>
    <rect x="0" y="0" width="500" height="280" fill="url(#gridPattern)" opacity="0.3"/>

    {/* LEFT - Code/Conditions Block */}
    <motion.g
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <rect x="20" y="40" width="140" height="200" rx="12" fill="url(#codeGrad)" filter="url(#cardShadow2)"/>
      <rect x="20" y="40" width="140" height="32" rx="12" fill="#334155"/>
      <circle cx="38" cy="56" r="5" fill="#EF4444"/>
      <circle cx="54" cy="56" r="5" fill="#F59E0B"/>
      <circle cx="70" cy="56" r="5" fill="#22C55E"/>
      <text x="100" y="60" fill="#94A3B8" fontSize="8" fontWeight="500">conditions.js</text>

      {/* Code lines */}
      <text x="32" y="92" fill="#7DD3FC" fontSize="9" fontFamily="monospace">{"if"}</text>
      <text x="46" y="92" fill="#F8FAFC" fontSize="9" fontFamily="monospace">{"(price > 22500)"}</text>
      <text x="32" y="110" fill="#7DD3FC" fontSize="9" fontFamily="monospace">{"&&"}</text>
      <text x="46" y="110" fill="#F8FAFC" fontSize="9" fontFamily="monospace">{"RSI < 30"}</text>
      <text x="32" y="128" fill="#7DD3FC" fontSize="9" fontFamily="monospace">{"&&"}</text>
      <text x="46" y="128" fill="#F8FAFC" fontSize="9" fontFamily="monospace">{"volume > 150%"}</text>
      <text x="32" y="154" fill="#A78BFA" fontSize="9" fontFamily="monospace">{"trigger"}</text>
      <text x="70" y="154" fill="#F8FAFC" fontSize="9" fontFamily="monospace">{"("}</text>
      <text x="40" y="172" fill="#FCD34D" fontSize="9" fontFamily="monospace">{"'BREAKOUT_ALERT'"}</text>
      <text x="32" y="190" fill="#F8FAFC" fontSize="9" fontFamily="monospace">{")"}</text>

      {/* Status indicator */}
      <rect x="32" y="210" width="116" height="20" rx="4" fill="#065F46"/>
      <circle cx="44" cy="220" r="4" fill="#4ADE80">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="54" y="224" fill="#4ADE80" fontSize="8" fontWeight="500">Monitoring 24/7</text>
    </motion.g>

    {/* Animated connection line from code to center */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <path d="M165 140 L200 140" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;35,0" dur="1s" fill="freeze"/>
      </path>
      <polygon points="200,135 212,140 200,145" fill="#F59E0B">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.8s" fill="freeze"/>
      </polygon>
    </motion.g>

    {/* CENTER - Alert Bell with Pulse */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      {/* Pulse rings */}
      <circle cx="250" cy="140" r="50" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.2">
        <animate attributeName="r" values="50;70;50" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="250" cy="140" r="40" fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="40;55;40" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
      </circle>

      {/* Main bell circle */}
      <circle cx="250" cy="140" r="45" fill="url(#alertGrad)" filter="url(#glowFilter)"/>

      {/* Bell icon */}
      <path d="M250 110 C235 110 225 125 225 140 L225 155 L220 160 L220 165 L280 165 L280 160 L275 155 L275 140 C275 125 265 110 250 110 Z" fill="white" opacity="0.95"/>
      <circle cx="250" cy="172" r="7" fill="white" opacity="0.95"/>
      <path d="M243 115 L243 108 C243 105 246 102 250 102 C254 102 257 105 257 108 L257 115" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>

      {/* Condition met badge */}
      <rect x="218" y="195" width="64" height="22" rx="11" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1"/>
      <text x="250" y="210" fill="#92400E" fontSize="9" fontWeight="600" textAnchor="middle">TRIGGERED!</text>
    </motion.g>

    {/* Animated connection line from center to right */}
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7 }}
    >
      <path d="M300 140 L335 140" stroke="#22C55E" strokeWidth="3" strokeLinecap="round">
        <animate attributeName="stroke-dasharray" values="0,100;35,0" dur="1s" begin="0.5s" fill="freeze"/>
      </path>
      <polygon points="335,135 347,140 335,145" fill="#22C55E">
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.3s" fill="freeze"/>
      </polygon>
    </motion.g>

    {/* RIGHT - Alert Types Triggered */}
    <motion.g
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
    >
      {/* Card 1 - Entry Signal */}
      <rect x="355" y="35" width="130" height="55" rx="10" fill="white" filter="url(#cardShadow2)" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="375" cy="62" r="14" fill="#22C55E"/>
      <path d="M375 55 L375 69 M369 61 L375 55 L381 61" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="395" y="52" fill="#1E293B" fontSize="9" fontWeight="600">Entry Signal</text>
      <text x="395" y="66" fill="#64748B" fontSize="8">Buy @ 22,510</text>
      <rect x="395" y="72" width="28" height="14" rx="3" fill="#DCFCE7"/>
      <text x="409" y="82" fill="#166534" fontSize="7" fontWeight="600" textAnchor="middle">BUY</text>

      {/* Card 2 - Stop Loss Set */}
      <rect x="355" y="100" width="130" height="55" rx="10" fill="white" filter="url(#cardShadow2)" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="375" cy="127" r="14" fill="#EF4444"/>
      <path d="M370 122 L380 132 M380 122 L370 132" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="395" y="117" fill="#1E293B" fontSize="9" fontWeight="600">Stop Loss</text>
      <text x="395" y="131" fill="#64748B" fontSize="8">Set @ 22,350</text>
      <rect x="395" y="137" width="28" height="14" rx="3" fill="#FEE2E2"/>
      <text x="409" y="147" fill="#DC2626" fontSize="7" fontWeight="600" textAnchor="middle">-0.7%</text>

      {/* Card 3 - Target Hit */}
      <rect x="355" y="165" width="130" height="55" rx="10" fill="white" filter="url(#cardShadow2)" stroke="#E2E8F0" strokeWidth="1"/>
      <circle cx="375" cy="192" r="14" fill="#8B5CF6"/>
      <path d="M369 192 L375 186 L381 192 M375 186 L375 198" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="395" y="182" fill="#1E293B" fontSize="9" fontWeight="600">Target 1</text>
      <text x="395" y="196" fill="#64748B" fontSize="8">@ 22,680</text>
      <rect x="395" y="202" width="28" height="14" rx="3" fill="#F3E8FF"/>
      <text x="409" y="212" fill="#7C3AED" fontSize="7" fontWeight="600" textAnchor="middle">+0.8%</text>

      {/* Action summary */}
      <rect x="355" y="230" width="130" height="35" rx="8" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1"/>
      <text x="420" y="250" fill="#92400E" fontSize="10" fontWeight="600" textAnchor="middle">Ready to Act</text>
      <text x="420" y="262" fill="#B45309" fontSize="8" textAnchor="middle">All signals received</text>
    </motion.g>
  </svg>
);

const DeliveryChannelsIllustration = () => (
  <svg viewBox="0 0 500 320" className="w-full h-auto">
    <defs>
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08"/>
      </filter>
    </defs>

    <rect x="0" y="0" width="500" height="320" fill="#F8FAFC" rx="16"/>

    <motion.g
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <rect x="20" y="40" width="100" height="70" rx="10" fill="white" filter="url(#cardShadow)"/>
      <rect x="35" y="55" width="8" height="30" rx="2" fill="#3B82F6"/>
      <rect x="48" y="65" width="8" height="20" rx="2" fill="#3B82F6" opacity="0.6"/>
      <rect x="61" y="50" width="8" height="35" rx="2" fill="#3B82F6"/>
      <rect x="74" y="60" width="8" height="25" rx="2" fill="#3B82F6" opacity="0.6"/>
      <text x="70" y="100" fill="#64748B" fontSize="8" textAnchor="middle">Your Strategy</text>

      <path d="M125 75 L155 75" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>
      <path d="M150 70 L160 75 L150 80" fill="#CBD5E1"/>

      <rect x="20" y="130" width="100" height="70" rx="10" fill="white" filter="url(#cardShadow)"/>
      <circle cx="70" cy="155" r="18" fill="#F59E0B"/>
      <path d="M70 145v12m0 4v2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="70" y="192" fill="#64748B" fontSize="8" textAnchor="middle">Alert Triggers</text>

      <path d="M125 165 L155 165" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>
      <path d="M150 160 L160 165 L150 170" fill="#CBD5E1"/>

      <rect x="20" y="220" width="100" height="60" rx="10" fill="white" filter="url(#cardShadow)"/>
      <text x="70" y="250" fill="#1E293B" fontSize="16" fontWeight="700" textAnchor="middle">24/7</text>
      <text x="70" y="268" fill="#64748B" fontSize="8" textAnchor="middle">Always Running</text>
    </motion.g>

    <motion.g
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <rect x="175" y="15" width="150" height="290" rx="22" fill="#1E293B" filter="url(#cardShadow)"/>
      <rect x="184" y="32" width="132" height="258" rx="4" fill="#0F172A"/>
      <text x="196" y="48" fill="#94A3B8" fontSize="9">9:41</text>
      <rect x="285" y="40" width="22" height="11" rx="3" fill="#22C55E"/>
    </motion.g>

    <motion.g initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
      <rect x="192" y="58" width="116" height="50" rx="8" fill="#EFF6FF"/>
      <circle cx="210" cy="83" r="12" fill="#0088CC"/>
      <path d="M210 77l-6 3 1.5 1.5-0.5 3 2.5-2 3 2.5 5-8z" fill="white"/>
      <text x="228" y="76" fill="#1E40AF" fontSize="9" fontWeight="600">Telegram</text>
      <text x="228" y="90" fill="#64748B" fontSize="7">NIFTY Alert received</text>
    </motion.g>

    <motion.g initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
      <rect x="192" y="115" width="116" height="50" rx="8" fill="#ECFDF5"/>
      <circle cx="210" cy="140" r="12" fill="#25D366"/>
      <path d="M210 132c-4 0-7 3-7 7 0 1.2.3 2.4.9 3.4l-.9 3.4 3.5-.9c1 .5 2.1.8 3.3.8 4 0 7-3 7-7s-3-6.7-6.8-6.7zm4 10c-.2.5-1 .9-1.4 1-.3 0-.7.1-2.4-.5-2-.8-3.3-2.8-3.4-3-.1-.1-.9-1.2-.9-2.3s.6-1.6.8-1.8c.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4s.6 1.5.7 1.6c0 .1 0 .2 0 .4l-.2.3c-.1.1-.2.2-.3.3-.1.1-.2.2-.1.5.2.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.2.1.4.1.5-.1.1-.1.5-.6.7-.9.1-.2.3-.2.5-.1.2.1 1.2.6 1.5.7.2.1.4.1.5.2 0 .1 0 .5-.2 1z" fill="white"/>
      <text x="228" y="133" fill="#166534" fontSize="9" fontWeight="600">WhatsApp</text>
      <text x="228" y="147" fill="#64748B" fontSize="7">RSI Signal triggered</text>
    </motion.g>

    <motion.g initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
      <rect x="192" y="172" width="116" height="50" rx="8" fill="#FEF3C7"/>
      <circle cx="210" cy="197" r="12" fill="#F59E0B"/>
      <rect x="203" y="193" width="14" height="9" rx="1.5" fill="none" stroke="white" strokeWidth="1.5"/>
      <path d="M203 193l7 5 7-5" fill="none" stroke="white" strokeWidth="1.5"/>
      <text x="228" y="190" fill="#B45309" fontSize="9" fontWeight="600">Email</text>
      <text x="228" y="204" fill="#64748B" fontSize="7">Report sent</text>
    </motion.g>

    <motion.g initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
      <rect x="192" y="229" width="116" height="50" rx="8" fill="#F3E8FF"/>
      <circle cx="210" cy="254" r="12" fill="#8B5CF6"/>
      <path d="M205 254h10m-5-5v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <text x="228" y="247" fill="#6D28D9" fontSize="9" fontWeight="600">Webhook</text>
      <text x="228" y="261" fill="#64748B" fontSize="7">API executed</text>
    </motion.g>

    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <path d="M340 83 L370 83" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>
      <path d="M340 140 L370 140" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>
      <path d="M340 197 L370 197" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>
      <path d="M340 254 L370 254" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4,4"/>

      <rect x="380" y="40" width="100" height="55" rx="10" fill="white" filter="url(#cardShadow)"/>
      <circle cx="405" cy="62" r="12" fill="#DCFCE7"/>
      <path d="M400 62l3 3 6-6" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="423" y="60" fill="#1E293B" fontSize="9" fontWeight="600">Delivered</text>
      <text x="423" y="73" fill="#22C55E" fontSize="8">Instantly</text>

      <rect x="380" y="105" width="100" height="55" rx="10" fill="white" filter="url(#cardShadow)"/>
      <circle cx="405" cy="127" r="12" fill="#DCFCE7"/>
      <path d="M400 127l3 3 6-6" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="423" y="125" fill="#1E293B" fontSize="9" fontWeight="600">Delivered</text>
      <text x="423" y="138" fill="#22C55E" fontSize="8">Instantly</text>

      <rect x="380" y="170" width="100" height="55" rx="10" fill="white" filter="url(#cardShadow)"/>
      <circle cx="405" cy="192" r="12" fill="#DCFCE7"/>
      <path d="M400 192l3 3 6-6" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="423" y="190" fill="#1E293B" fontSize="9" fontWeight="600">Delivered</text>
      <text x="423" y="203" fill="#22C55E" fontSize="8">Instantly</text>

      <rect x="380" y="235" width="100" height="55" rx="10" fill="white" filter="url(#cardShadow)"/>
      <circle cx="405" cy="257" r="12" fill="#DCFCE7"/>
      <path d="M400 257l3 3 6-6" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <text x="423" y="255" fill="#1E293B" fontSize="9" fontWeight="600">Executed</text>
      <text x="423" y="268" fill="#22C55E" fontSize="8">200 OK</text>
    </motion.g>
  </svg>
);

const overviewData = {
  whatItIs: {
    title: "What are Strategy Alerts?",
    description: "Strategy alerts are automated notifications that fire the moment YOUR specific trading conditions are met. We code YOUR exact rules—whether it's a breakout, indicator crossover, or custom pattern—and connect them to instant delivery channels so you never miss a setup again.",
    highlights: [
      "Your exact conditions",
      "24/7 market monitoring",
      "Instant notifications",
      "Multiple channels"
    ]
  },
  whyAlerts: {
    title: "Why You Need Custom Alerts",
    description: "You can't watch charts 24 hours a day. Your setups happen while you sleep, work, or live your life. Custom alerts ensure you never miss an opportunity.",
    problems: [
      { icon: Moon, title: "Setups While You Sleep", description: "Markets move around the clock—your best trades might happen at 3 AM" },
      { icon: Eye, title: "Chart Fatigue", description: "Staring at screens all day burns you out and leads to mistakes" },
      { icon: AlertTriangle, title: "Generic Alerts Fail", description: "Simple price alerts can't capture YOUR multi-condition setups" },
      { icon: Clock, title: "Delayed Reaction", description: "By the time you manually spot the setup, the optimal entry is gone" },
      { icon: TrendingUp, title: "Missed Opportunities", description: "Every missed setup is potential profit left on the table" }
    ]
  },
  deliveryChannels: {
    title: "How Your Alerts Reach You",
    description: "Choose how you want to be notified. We integrate with all major platforms for instant, reliable delivery.",
    channels: [
      { icon: Send, name: "Telegram", description: "Fast, reliable bot messages to your phone", color: "from-blue-500 to-cyan-500" },
      { icon: MessageSquare, name: "WhatsApp", description: "Alerts to your most-used messaging app", color: "from-green-500 to-emerald-500" },
      { icon: Mail, name: "Email", description: "Detailed alerts with charts attached", color: "from-amber-500 to-orange-500" },
      { icon: Wifi, name: "Webhook", description: "Direct API calls for automation", color: "from-violet-500 to-purple-500" }
    ]
  },
  whoShouldUse: {
    title: "Who Needs Custom Alerts?",
    profiles: [
      { icon: Clock, title: "Part-Time Traders", description: "You have a day job or business but want to catch setups during market hours" },
      { icon: Moon, title: "Global Market Traders", description: "You trade markets in different time zones while you sleep" },
      { icon: TrendingUp, title: "Swing Traders", description: "You hold positions for days and need entry/exit signals without constant monitoring" }
    ]
  }
};

export default function AlertsOverview({ service }: AlertsOverviewProps) {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <BackgroundPattern />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></span>
            Understanding Strategy Alerts
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-navy-900">
            Never Miss a Signal
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Get notified instantly when YOUR exact trading conditions trigger—24/7, even while you sleep.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {overviewData.whatItIs.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.whatItIs.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {overviewData.whatItIs.highlights.map((highlight, index) => {
                const iconColors = ['bg-amber-500', 'bg-blue-500', 'bg-emerald-500', 'bg-violet-500'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gradient-to-br from-white to-slate-50/80 rounded-xl shadow-md shadow-slate-200/50 border border-slate-100"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${iconColors[index]}`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-navy-800">{highlight}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:order-last"
          >
            <div className="relative w-full bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/50 rounded-xl p-1 border border-slate-200/60 shadow-md overflow-hidden">
              <AlertNotificationIllustration />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-50 rounded-3xl p-8 lg:p-12 border border-amber-100">
            <div className="relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-4 border border-amber-200/50">
                  <span className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></span>
                  The Problems
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                  {overviewData.whyAlerts.title}
                </h3>
                <p className="text-lg text-black max-w-2xl mx-auto">
                  {overviewData.whyAlerts.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                {overviewData.whyAlerts.problems.map((problem, index) => {
                  const iconColors = [
                    'bg-indigo-500',
                    'bg-emerald-500',
                    'bg-amber-500',
                    'bg-rose-500',
                    'bg-violet-500'
                  ];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 border border-amber-100 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${iconColors[index]}`}>
                          <problem.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">{problem.title}</h4>
                      <p className="text-base text-black leading-relaxed">{problem.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:order-first"
          >
            <div className="relative w-full bg-white rounded-2xl p-3 border border-slate-200 shadow-sm overflow-hidden">
              <DeliveryChannelsIllustration />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-last"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full text-emerald-700 text-sm font-semibold mb-5 border border-emerald-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
              The Solution
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              {overviewData.deliveryChannels.title}
            </h3>
            <p className="text-lg text-black leading-relaxed mb-8">
              {overviewData.deliveryChannels.description}
            </p>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 via-amber-500 to-violet-500"></div>

              <div className="space-y-4">
                {overviewData.deliveryChannels.channels.map((channel, index) => {
                  const iconColors = ['bg-blue-500', 'bg-green-500', 'bg-amber-500', 'bg-violet-500'];
                  const borderColors = ['border-blue-200', 'border-green-200', 'border-amber-200', 'border-violet-200'];
                  const bgColors = ['bg-blue-50', 'bg-green-50', 'bg-amber-50', 'bg-violet-50'];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${iconColors[index]} z-10 flex-shrink-0`}>
                        <channel.icon className="w-5 h-5 text-white" />
                      </div>

                      <div className={`flex-1 p-4 rounded-xl border ${borderColors[index]} ${bgColors[index]}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-base font-bold text-navy-900">{channel.name}</div>
                            <div className="text-sm text-slate-600">{channel.description}</div>
                          </div>
                          <div className="flex items-center gap-1 text-emerald-600">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-medium">Live</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full text-violet-700 text-sm font-semibold mb-5 border border-violet-200/50 shadow-sm">
              <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></span>
              Ideal For
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-900 via-navy-800 to-amber-900 bg-clip-text text-transparent">
              {overviewData.whoShouldUse.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {overviewData.whoShouldUse.profiles.map((profile, index) => {
              const iconColors = ['bg-blue-500', 'bg-indigo-500', 'bg-emerald-500'];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-5 items-start p-5 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-100 shadow-md hover:shadow-lg hover:border-amber-200 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg ${iconColors[index]}`}>
                    <profile.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-amber-900 transition-colors">{profile.title}</h4>
                    <p className="text-black leading-relaxed">{profile.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold rounded-2xl shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
          >
            See Our Process
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
