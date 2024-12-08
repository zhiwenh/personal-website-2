import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

import personalImage from './../personal-image.png';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
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
        Hi, I’m Zhiwen, a full-stack software engineer with a passion for blockchain technology and decentralized applications. With experience across Ethereum and Solana, I’ve developed innovative solutions in DeFi, NFTs, and token ecosystems. My work combines technical precision with creative problem-solving, from building smart contracts and DEXs to designing scalable backends and user-friendly frontends.
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-left">
        Beyond blockchain, I’m skilled in crafting dynamic web and mobile applications using modern frameworks like React, Angular, and Next.js. I take pride in delivering complete, high-quality software solutions that make a meaningful impact.
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

        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          View My Work
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
