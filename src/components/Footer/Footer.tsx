import React from 'react';
import { SocialLinks } from './SocialLinks';
import { FooterLinks } from './FooterLinks';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>

          {/* Navigation Links */}
          <div className="col-span-2">
            <FooterLinks />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zhiwen Huang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
