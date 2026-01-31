'use client';

import React from 'react';
import Link from 'next/link';
import { StaticImage } from '@/components/ui/StaticImage';
import { Mail } from 'lucide-react';

export const MinimalHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Links back to main website */}
          <Link href="/" className="flex items-center">
            <StaticImage
              src="/logos/logo1.jpg"
              alt="Secret Weapon Trading Solution"
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Minimal Contact Link */}
          <a
            href="mailto:contact@swts.in"
            className="flex items-center gap-2 text-sm text-black hover:text-amber-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Need help? Contact us</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default MinimalHeader;
