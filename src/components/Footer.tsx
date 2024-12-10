import React from 'react';
import { SocialLinks } from './Footer/SocialLinks';
import { FooterLinks } from './Footer/FooterLinks';
import { ContactInfo } from './Footer/ContactInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>
          <div className="col-span-2">
            <FooterLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Zhiwen Huang. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
