'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, Mail, X } from 'lucide-react';

interface ContactCTAProps {
  buttonText: string;
  className?: string;
}

// WhatsApp SVG Logo
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactCTA({ buttonText, className = '' }: ContactCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Main CTA Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center gap-3 px-8 py-4 text-white rounded-xl font-semibold shadow-[0_4px_20px_rgba(0,137,123,0.25)] hover:shadow-[0_8px_30px_rgba(0,137,123,0.35)] transition-all duration-300 group ${className}`}
        style={{ background: 'linear-gradient(135deg, #1565C0 0%, #00897B 100%)' }}
      >
        <span>{buttonText}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Header */}
              <div className="px-6 pt-6 pb-4 text-center border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">Contact Us</h2>
                <p className="text-slate-500 text-sm mt-1">Select how you'd like to reach us</p>
              </div>

              {/* Contact Options */}
              <div className="p-4 space-y-3">
                {/* Call Option */}
                <motion.a
                  href="tel:+917083718306"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Call Us</div>
                    <div className="text-sm text-blue-600 font-medium">+91 70837 18306</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* WhatsApp Option */}
                <motion.a
                  href="https://wa.me/917083718306"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 border border-green-100 hover:border-green-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">WhatsApp</div>
                    <div className="text-sm text-green-600 font-medium">Chat with us</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                {/* Email Option */}
                <motion.a
                  href="mailto:support@secretweapon.in"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-100 hover:border-amber-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-sm text-amber-600 font-medium">support@secretweapon.in</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <p className="text-center text-xs text-slate-500">
                  We typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
