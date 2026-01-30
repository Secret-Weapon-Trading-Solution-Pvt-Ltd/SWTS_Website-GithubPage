'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';
import { Mail, MapPin, ArrowRight, Phone } from 'lucide-react';

const footerLinks = {
  services: [
    { href: '/services/algo-strategy-development', label: 'Strategy Automation' },
    { href: '/services/strategy-backtesting', label: 'Strategy Backtesting' },
    { href: '/services/custom-screener', label: 'Custom Screener' },
    { href: '/services/strategy-alerts', label: 'Strategy Alerts' },
  ],
  company: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'All Services' },
    { href: '/strategy-assessment', label: 'Free Assessment' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(to right, #172554 0%, #1e3a8a 40%, #1e40af 70%, #2563eb 100%)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <StaticImage
                src="/logos/logo1.png"
                alt="SWTS Logo"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-bold italic leading-tight tracking-tight drop-shadow-sm bg-gradient-to-r from-[#2196F3] to-[#1565C0] bg-clip-text text-transparent">
                  Secret Weapon
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-xs font-medium leading-tight tracking-[0.15em] text-[#00897B]">
                  TRADING SOLUTION PVT. LTD.
                </span>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              We help serious traders automate their edge with precision and consistency.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917083718306"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="text-sm font-medium">+91 7083718306</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@secretweapon.in"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="text-sm font-medium">support@secretweapon.in</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white/80" />
                </div>
                <span className="text-sm font-medium">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-10 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/15 rounded-2xl p-8 border border-white/15">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Ready to automate your edge?
              </h3>
              <p className="text-white/90 text-sm">
                Start with our free strategy assessment today.
              </p>
            </div>
            <Link
              href="/strategy-assessment"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-indigo-50 text-indigo-700 font-semibold rounded-xl transition-all shadow-lg"
            >
              Take Free Assessment
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10" style={{ backgroundColor: '#172554' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} Secret Weapon Trading Solution Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* Telegram */}
              <Link
                href="/subscribe"
                className="w-8 h-8 bg-white/15 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-all"
                title="Get Telegram Notifications"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-white/70 text-xs text-center mt-6 max-w-2xl mx-auto">
            Trading involves substantial risk. Past performance does not guarantee future results. We do not provide financial advice or profit guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
