import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

import personalImage from './../personal-image.png';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16 py-3">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mt-2 mb-8">
          <img
            src={personalImage}
            alt="Zhiwen Huang"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Zhiwen Huang
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Software Engineer | Blockchain Engineer
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-left">
          Hi, I’m Zhiwen, a full-stack software engineer passionate about blockchain technology
          and decentralized applications. I’ve built innovative solutions in DeFi, NFTs, and
          token ecosystems, including smart contracts, decentralized exchanges, and scalable
          backends. Beyond blockchain, I excel in creating dynamic web and mobile applications
          using modern frameworks like React, Angular, and Next.js, delivering high-quality
          software that combines technical precision with user-friendly design.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/zhiwenh" className="text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/zhiwenhuang0" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:zhiwen555@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Contact Me
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors border border-gray-200"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
