import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Zhiwen Huang</h3>
            <p className="text-gray-400">Software Engineer | Blockchain Engineer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/zhiwenh" className="hover:text-indigo-400">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/zhiwenhuang0" className="hover:text-indigo-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:zhiwen555@gmail.com" className="hover:text-indigo-400">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zhiwen Huang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}