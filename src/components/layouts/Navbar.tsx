'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAssetPath } from '@/lib/utils';
import { services } from '@/data/services';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/learn/algo-trading', label: 'Learn' },
  { href: '/strategy-assessment', label: 'Assessment' },
  { href: '/about/', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Active link gradient style
const activeGradientStyle = { background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' };

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Check if a nav link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Hash links like /#about don't get highlighted (they're sections, not pages)
    if (href.startsWith('/#')) {
      return false;
    }
    return pathname === href || pathname?.startsWith(href + '/');
  };

  // Check if on any services page
  const isServicesActive = pathname === '/services' || pathname === '/services/' || pathname?.startsWith('/services/');

  // Check if on a specific service page
  const isServicePageActive = (serviceSlug: string) => {
    return pathname === `/services/${serviceSlug}` || pathname === `/services/${serviceSlug}/`;
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 50;
      setIsAtTop(atTop);

      if (atTop) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP — show navbar
        setIsVisible(true);
      } else {
        // Scrolling DOWN — hide navbar immediately
        setIsVisible(false);
        // Close mobile menu when hiding
        if (isOpen) setIsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    <>
      {/* Logo - Top Left (only visible when at top of page) */}
      <Link
        href="/"
        className={cn(
          'fixed top-5 sm:top-6 lg:top-7 2xl:top-8 3xl:top-10 left-4 sm:left-6 lg:left-10 xl:left-12 2xl:left-16 3xl:left-24 4xl:left-32 z-50 transition-all duration-500 group',
          isAtTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <div className="relative">
            <Image
              src={getAssetPath('/logos/logo1.png')}
              alt="SWTS Logo"
              width={64}
              height={64}
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 4xl:w-28 4xl:h-28 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-bold italic leading-tight tracking-tight drop-shadow-sm bg-gradient-to-r from-[#2196F3] to-[#1565C0] bg-clip-text text-transparent">
              Secret Weapon
            </span>
            <span className="text-[10px] sm:text-xs lg:text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-medium leading-tight tracking-[0.15em] text-[#00897B]">
              TRADING SOLUTION PVT. LTD.
            </span>
          </div>
        </div>
      </Link>

      {/* Navbar - Top Right */}
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
              className={cn(
                "px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200",
                isLinkActive(link.href)
                  ? "text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              )}
              style={isLinkActive(link.href) ? activeGradientStyle : undefined}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center gap-1 2xl:gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200",
                isServicesActive
                  ? "text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              )}
              style={isServicesActive ? activeGradientStyle : undefined}
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
                    className={cn(
                      "block px-4 py-3 3xl:px-6 3xl:py-4 transition-colors mx-2 rounded-xl",
                      isServicePageActive(service.slug)
                        ? "bg-blue-50 border border-blue-200"
                        : "hover:bg-slate-50"
                    )}
                  >
                    <span className={cn(
                      "block text-sm 2xl:text-base 3xl:text-lg font-semibold",
                      isServicePageActive(service.slug) ? "text-blue-700" : "text-slate-800"
                    )}>{service.shortTitle}</span>
                    <span className="block text-xs 2xl:text-sm 3xl:text-base text-slate-900 mt-0.5">{service.oneLiner}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 2xl:px-4 2xl:py-2 3xl:px-5 3xl:py-3 4xl:px-6 4xl:py-4 rounded-lg 3xl:rounded-xl text-sm 2xl:text-base 3xl:text-lg 4xl:text-xl font-semibold transition-all duration-200",
                isLinkActive(link.href)
                  ? "text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              )}
              style={isLinkActive(link.href) ? activeGradientStyle : undefined}
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
                  className={cn(
                    "py-3 px-4 rounded-xl font-semibold transition-all duration-200",
                    isLinkActive(link.href)
                      ? "text-white"
                      : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                  )}
                  style={isLinkActive(link.href) ? activeGradientStyle : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Expandable */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={cn(
                    "w-full flex items-center justify-between py-3 px-4 rounded-xl font-semibold transition-all duration-200",
                    isServicesActive
                      ? "text-white"
                      : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                  )}
                  style={isServicesActive ? activeGradientStyle : undefined}
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
                        className={cn(
                          "block py-2.5 px-3 text-sm rounded-lg font-medium transition-all duration-200",
                          isServicePageActive(service.slug)
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "text-slate-700 bg-slate-50/50 hover:bg-slate-100"
                        )}
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
                  className={cn(
                    "py-3 px-4 rounded-xl font-semibold transition-all duration-200",
                    isLinkActive(link.href)
                      ? "text-white"
                      : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                  )}
                  style={isLinkActive(link.href) ? activeGradientStyle : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
