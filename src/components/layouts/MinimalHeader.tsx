'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { Mail } from 'lucide-react';

export const MinimalHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand Name - Links back to main website */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={getAssetPath('/logos/logo1.png')}
              alt="SWTS Logo"
              width={48}
              height={34}
              className="w-10 h-7 sm:w-12 sm:h-[34px] drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold italic leading-tight tracking-tight bg-gradient-to-r from-[#2196F3] to-[#1565C0] bg-clip-text text-transparent">
                Secret Weapon
              </span>
              <span className="text-[7px] sm:text-[8px] font-medium leading-tight tracking-[0.15em] text-[#00897B]">
                TRADING SOLUTION PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Minimal Contact Link */}
          <a
            href="mailto:support@secretweapon.in"
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
