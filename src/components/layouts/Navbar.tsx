'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/strategy-assessment', label: 'Assessment' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar when at the top of the page (within 50px)
      const atTop = window.scrollY <= 50;
      setIsVisible(atTop);

      // Close mobile menu when scrolling down
      if (!atTop && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-4 2xl:top-5 3xl:top-6 right-6 sm:right-10 lg:right-16 xl:right-20 2xl:right-24 3xl:right-32 4xl:right-40 z-50 transition-all duration-500',
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      )}
    >
      <div className="flex items-center h-12 lg:h-14 2xl:h-16 3xl:h-20 4xl:h-24 transition-all duration-300 rounded-2xl 3xl:rounded-3xl px-4 2xl:px-6 3xl:px-8 bg-white/90 backdrop-blur-md shadow-md border border-slate-200/30">
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1 2xl:gap-2 3xl:gap-3">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 2xl:gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-blue-700"
            >
              Services
              <ChevronDown className={cn(
                "w-4 h-4 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6 transition-transform duration-200",
                isServicesOpen && "rotate-180"
              )} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 2xl:w-80 3xl:w-96 bg-white/95 backdrop-blur-xl rounded-2xl 3xl:rounded-3xl border border-slate-200/50 shadow-2xl py-2 3xl:py-3 animate-fade-in z-50">
                <div className="px-4 py-2 3xl:px-6 3xl:py-3 border-b border-slate-100">
                  <Link
                    href="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="text-xs 2xl:text-sm 3xl:text-base font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                  >
                    View All Services →
                  </Link>
                </div>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setIsServicesOpen(false)}
                    className="block px-4 py-3 3xl:px-6 3xl:py-4 hover:bg-slate-50 transition-colors mx-2 rounded-xl"
                  >
                    <span className="block text-sm 2xl:text-base 3xl:text-lg font-semibold text-slate-800">{service.shortTitle}</span>
                    <span className="block text-xs 2xl:text-sm 3xl:text-base text-slate-500 mt-0.5">{service.oneLiner}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-blue-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl overflow-hidden animate-fade-in">
          <nav className="flex flex-col p-3 gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Expandable */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                Services
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isMobileServicesOpen && "rotate-180"
                )} />
              </button>

              {isMobileServicesOpen && (
                <div className="mt-1 ml-2 border-l-2 border-blue-200 pl-2 space-y-1">
                  <Link
                    href="/services"
                    onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                    className="block py-2 px-3 text-xs font-bold text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                  >
                    View All Services →
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => { setIsOpen(false); setIsMobileServicesOpen(false); }}
                      className="block py-2.5 px-3 text-sm text-slate-700 bg-slate-50/50 hover:bg-slate-100 rounded-lg font-medium transition-all duration-200"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
