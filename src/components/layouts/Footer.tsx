'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/', label: 'Home' },
    { href: '/#assessment', label: 'Assessment' },
    { href: '/#credibility', label: 'About Us' },
  ],
  resources: [
    { href: '/assessment', label: 'Free Assessment' },
    { href: 'mailto:support@secretweapon.in', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & CTA */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold mb-4">
              Ready to automate your edge?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transform your trading strategy into a reliable automated system. Start with our free assessment.
            </p>
            <Link
              href="/#assessment"
              className="group inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-full font-medium text-sm
                       hover:bg-teal-400 transition-all"
            >
              Take Free Assessment
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:support@secretweapon.in"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Mail className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="text-sm">support@secretweapon.in</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-teal-500" />
                </div>
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Secret Weapon Trading Solution Pvt. Ltd.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pb-8 pt-2">
          <p className="text-xs text-slate-600 text-center max-w-2xl mx-auto">
            Trading involves substantial risk. Past performance does not guarantee future results.
            We do not provide financial advice or profit guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
