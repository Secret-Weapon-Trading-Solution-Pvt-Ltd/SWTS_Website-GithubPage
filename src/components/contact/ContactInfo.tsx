'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const contactMethods = [
  {
    id: 'call',
    icon: Phone,
    title: 'Call Us',
    subtitle: 'Speak directly with our team for quick discussions.',
    value: '+91 70837 18306',
    action: 'Call Now',
    href: 'tel:+917083718306',
    gradient: 'from-blue-500 to-blue-600',
    borderColor: 'border-l-blue-500',
    lightBg: 'bg-blue-50',
    iconGradient: 'from-blue-500 to-blue-600',
    accentText: 'text-blue-600',
    iconColor: 'text-blue-600',
    hoverBg: 'hover:bg-blue-50/50',
  },
  {
    id: 'whatsapp',
    icon: () => <WhatsAppIcon />,
    title: 'WhatsApp',
    subtitle: 'Chat instantly for fastest response time.',
    value: '+91 70837 18306',
    action: 'Open Chat',
    href: 'https://wa.me/917083718306',
    gradient: 'from-green-500 to-emerald-600',
    borderColor: 'border-l-green-500',
    lightBg: 'bg-green-50',
    iconGradient: 'from-green-500 to-emerald-600',
    accentText: 'text-green-600',
    iconColor: 'text-white',
    hoverBg: 'hover:bg-green-50/50',
    external: true,
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email',
    subtitle: 'For detailed project requirements and proposals.',
    value: 'support@secretweapon.in',
    action: 'Send Email',
    href: 'mailto:support@secretweapon.in',
    gradient: 'from-amber-500 to-orange-500',
    borderColor: 'border-l-amber-500',
    lightBg: 'bg-amber-50',
    iconGradient: 'from-amber-500 to-orange-500',
    accentText: 'text-amber-600',
    iconColor: 'text-white',
    hoverBg: 'hover:bg-amber-50/50',
  },
  {
    id: 'telegram',
    icon: () => <TelegramIcon />,
    title: 'Telegram',
    subtitle: 'Subscribe for trading signal notifications.',
    value: 'Join Channel',
    action: 'Subscribe',
    href: '/subscribe',
    gradient: 'from-cyan-500 to-blue-500',
    borderColor: 'border-l-cyan-500',
    lightBg: 'bg-cyan-50',
    iconGradient: 'from-cyan-500 to-blue-500',
    accentText: 'text-cyan-600',
    iconColor: 'text-white',
    hoverBg: 'hover:bg-cyan-50/50',
  },
];

export const ContactInfo: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl opacity-20 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-20 -translate-x-1/3" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Reach Out</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mt-3 mb-4">
            Choose How to{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Multiple ways to get in touch — pick what works best for you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            const isHovered = hoveredId === method.id;

            return (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(method.id)}
                onHoverEnd={() => setHoveredId(null)}
                className={`
                  group relative p-6 rounded-2xl bg-white border-l-4 ${method.borderColor}
                  border border-slate-100 shadow-sm
                  hover:shadow-md transition-all duration-300 cursor-pointer
                  ${method.hoverBg}
                `}
              >
                {/* Gradient Icon Box */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.iconGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <div className={method.iconColor}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{method.title}</h3>

                {/* Subtitle */}
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{method.subtitle}</p>

                {/* Value */}
                <p className={`text-sm font-semibold ${method.accentText} mb-4`}>{method.value}</p>

                {/* Action */}
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${method.accentText} group-hover:gap-3 transition-all duration-300`}>
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-slate-50 border border-slate-100"
        >
          <Clock className="w-5 h-5 text-teal-500 flex-shrink-0" />
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-800">Average response time:</span>{' '}
            Within 2-4 hours during business hours (IST)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
