import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">John Doe</h1>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:john@example.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
