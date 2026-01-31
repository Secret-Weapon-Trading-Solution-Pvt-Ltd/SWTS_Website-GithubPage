'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Service } from '@/data/services';
import { TrendingUp, Shield, Users } from 'lucide-react';

interface OutcomeMetricStripProps {
  service: Service;
}

/**
 * Elevated Outcome Metric Strip
 * - Powerful numbers with dramatic entrance
 * - Data flow signature element
 * - Asymmetric hierarchy
 */

// Animated counter with dramatic entrance
function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseFloat(numericMatch[0]);
    const prefix = value.slice(0, value.indexOf(numericMatch[0]));
    const postfix = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length);

    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentValue = numericValue * easeOut;

      const formatted = numericMatch[0].includes('.')
        ? currentValue.toFixed(1)
        : Math.floor(currentValue).toString();

      setDisplayValue(prefix + formatted + postfix);

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

const metricIcons = [TrendingUp, Shield, Users];

export default function OutcomeMetricStrip({ service }: OutcomeMetricStripProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-900" />

      {/* Animated data flow lines - signature element */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#14B8A6' : '#8B5CF6'}40, transparent)`,
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Glowing accents */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metrics with hierarchy - middle one is emphasized */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
            {service.stats.map((stat, index) => {
              const Icon = metricIcons[index % metricIcons.length];
              const isMiddle = index === 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className={`relative text-center ${
                    isMiddle
                      ? 'md:px-16 md:mx-8 md:border-x md:border-navy-700'
                      : 'md:px-8'
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    animate={isMiddle ? { y: [0, -4, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`mx-auto mb-3 rounded-xl flex items-center justify-center ${
                      isMiddle
                        ? 'w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30'
                        : 'w-10 h-10 bg-navy-800'
                    }`}
                  >
                    <Icon className={`text-white ${isMiddle ? 'w-7 h-7' : 'w-5 h-5'}`} />
                  </motion.div>

                  {/* Value - bigger for middle */}
                  <div className="mb-1">
                    <span className={`font-bold ${
                      isMiddle
                        ? 'text-6xl lg:text-7xl bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent'
                        : 'text-4xl lg:text-5xl text-white'
                    }`}>
                      <AnimatedCounter value={stat.value} />
                    </span>
                  </div>

                  {/* Label */}
                  <p className={`font-medium ${
                    isMiddle ? 'text-teal-300 text-base' : 'text-black text-sm'
                  }`}>
                    {stat.label}
                  </p>

                  {/* Pulse effect for middle */}
                  {isMiddle && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 -z-10 bg-teal-500/10 rounded-2xl blur-xl"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
