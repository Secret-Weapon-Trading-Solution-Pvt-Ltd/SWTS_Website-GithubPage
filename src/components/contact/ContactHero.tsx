'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const contactLinks = [
  {
    icon: Phone,
    label: '+91 7083718306',
    href: '#',
    gradient: 'from-blue-500 to-blue-600',
    hoverBg: 'hover:bg-blue-50',
    noRedirect: true,
  },
  {
    icon: () => <WhatsAppIcon />,
    label: 'WhatsApp',
    href: 'https://wa.me/917083718306',
    gradient: 'from-green-500 to-emerald-600',
    hoverBg: 'hover:bg-green-50',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:support@secretweapon.in',
    gradient: 'from-amber-500 to-orange-500',
    hoverBg: 'hover:bg-amber-50',
  },
  {
    icon: () => <TelegramIcon />,
    label: 'Telegram',
    href: '/subscribe',
    gradient: 'from-cyan-500 to-blue-500',
    hoverBg: 'hover:bg-cyan-50',
  },
];


// Wave lines behind text (same pattern as learn page)
const WaveFlowVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
    <svg className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px]" viewBox="0 0 1000 300" fill="none">
      <path
        d="M0 150 Q125 90 250 150 Q375 210 500 150 Q625 90 750 150 Q875 210 1000 150"
        className="stroke-teal-400"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M0 170 Q150 110 300 170 Q450 230 600 170 Q750 110 900 170 Q950 200 1000 170"
        className="stroke-cyan-300"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M0 130 Q100 180 200 130 Q300 80 400 130 Q500 180 600 130 Q700 80 800 130 Q900 180 1000 130"
        className="stroke-blue-300"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <circle cx="250" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
      <circle cx="500" cy="150" r="6" className="fill-teal-600" opacity="0.7" />
      <circle cx="750" cy="150" r="5" className="fill-teal-500" opacity="0.6" />
    </svg>
  </div>
);

export const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32 pb-20 lg:pb-24 bg-gradient-to-br from-white via-slate-50 to-teal-50/40">
      {/* Gradient blur orbs */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-teal-200/30 rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-blue-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-100/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="relative text-center">
          <WaveFlowVisual />

          <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-teal-200/60 shadow-sm mb-7"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">
              Get In Touch
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 mb-6 leading-tight"
          >
            Let&apos;s Build Your{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Trading Edge
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-9"
          >
            Whether you have a strategy idea or need expert guidance on trading automation,
            we&apos;re here to help you every step of the way.
          </motion.p>

          {/* Quick Contact Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            {contactLinks.map((link) => {
              const IconComponent = link.icon;
              const content = (
                <>
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center text-white shadow-sm`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 hidden sm:block">{link.label}</span>
                </>
              );
              const className = `group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm ${link.hoverBg} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`;

              if (link.noRedirect) {
                return (
                  <div key={link.label} className={`${className} cursor-default`}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default ContactHero;
