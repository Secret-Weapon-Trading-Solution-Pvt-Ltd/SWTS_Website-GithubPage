'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { icons, LucideIcon } from 'lucide-react';
import { Service } from '@/data/services';
import { ArrowRight, Box } from 'lucide-react';
import { useRef } from 'react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

// Abstract pattern components - NO logos, only geometric shapes
const patterns = {
  dots: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots-pattern)" />
    </svg>
  ),
  lines: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="lines-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20h40M20 0v40" stroke={color} strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines-pattern)" />
    </svg>
  ),
  grid: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke={color} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  ),
  waves: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="waves-pattern" width="60" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 15 Q15 0 30 15 T60 15" stroke={color} strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#waves-pattern)" />
    </svg>
  ),
  circles: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circles-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="8" stroke={color} strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circles-pattern)" />
    </svg>
  ),
  diagonal: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonal-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20L20 0" stroke={color} strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
    </svg>
  ),
  mesh: (color: string) => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mesh-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12h24M12 0v24M0 0l24 24M24 0L0 24" stroke={color} strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
    </svg>
  ),
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Dynamically get the icon component
  const IconComponent: LucideIcon = (icons as Record<string, LucideIcon>)[service.abstractIcon] || Box;

  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / rect.width);
    y.set((event.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Get pattern renderer
  const PatternSvg = patterns[service.patternType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="h-full"
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <motion.article
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="group relative h-full perspective-1000"
        >
          {/* Main card container */}
          <div
            className="relative h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-500 group-hover:border-transparent"
            style={{
              boxShadow: `
                0 4px 20px -4px rgba(0, 0, 0, 0.08),
                0 0 0 1px rgba(0, 0, 0, 0.02)
              `,
            }}
          >
            {/* Animated glow border on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}20, ${service.accentColor}40, ${service.accentColor}20)`,
                padding: '1px',
              }}
            />

            {/* Outer glow effect */}
            <div
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${service.accentColor}30, transparent, ${service.accentColor}30)`,
              }}
            />

            {/* Inner content wrapper */}
            <div className="relative h-full bg-white rounded-2xl overflow-hidden">
              {/* Abstract pattern background - NO LOGOS */}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-150">
                {PatternSvg(service.accentColor)}
              </div>

              {/* Gradient accent bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />

              {/* Corner accent shape */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${service.accentColor}, transparent)` }}
              />

              <div className="relative p-6 h-full flex flex-col" style={{ transform: 'translateZ(40px)' }}>
                {/* Icon with gradient background - centered */}
                <motion.div
                  className="mb-4 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Service title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center group-hover:text-slate-800 transition-colors">
                  {service.shortTitle}
                </h3>

                {/* Powerful one-liner */}
                <p
                  className={`text-sm font-medium mb-3 text-center bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}
                >
                  {service.oneLiner}
                </p>

                {/* Tagline */}
                <p className="text-slate-500 text-xs leading-relaxed flex-grow text-center">
                  {service.tagline}
                </p>

                {/* Stats preview */}
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
                  {service.stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-base font-bold bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA arrow */}
                <div className="flex items-center justify-center mt-4">
                  <motion.div
                    className={`w-9 h-9 rounded-full bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom gradient sweep on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
