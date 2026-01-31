'use client';

import React from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Twitter } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Questions? We&apos;re Here to Help
        </h2>
        <p className="text-black">
          Reach out to discuss your specific trading automation needs
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <a
          href="mailto:contact@swts.in"
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <Mail className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">Email Us</div>
            <div className="text-sm text-black">contact@swts.in</div>
          </div>
        </a>

        <a
          href="tel:+919876543210"
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <Phone className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <div className="font-medium text-gray-900">Call Us</div>
            <div className="text-sm text-black">+91 98765 43210</div>
          </div>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 pt-6 border-t border-gray-100">
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-black hover:text-primary-600" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-black hover:text-primary-600" />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 text-black hover:text-primary-600" />
        </a>
      </div>

      {/* Company Info */}
      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <p className="font-bold text-gray-900 mb-1">
          Secret Weapon Trading Solution Pvt. Ltd.
        </p>
        <p className="text-sm text-black">
          Algorithmic & Automated Trading Services
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
