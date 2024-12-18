import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import personalImage from './../personal-image.png';

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src={personalImage}
            alt="Zhiwen Huang"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-400"
          />
        </div>

        <h1 className="text-5xl font-bold text-white mb-4">
          Zhiwen Huang
        </h1>

        <p className="text-xl text-indigo-200 mb-6">
          Software Engineer | Blockchain Engineer
        </p>

        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Hi, I’m Zhiwen, a full-stack software engineer specializing in blockchain and
          AI applications. I’ve worked on DeFi applications, NFTs, tokens, smart
          contracts, DEXs, and an AI video generation website. I also develop
          dynamic web and mobile apps using React and Angular, focusing on high-quality,
          user-friendly design.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/zhiwenh" className="text-slate-300 hover:text-indigo-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/zhiwenhuang0" className="text-slate-300 hover:text-indigo-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:zhiwen555@gmail.com" className="text-slate-300 hover:text-indigo-400 transition-colors">
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
            className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 px-6 py-3 rounded-full hover:bg-slate-700 transition-colors border border-slate-600"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Hi, I’m Zhiwen, a full-stack software engineer specializing in blockchain and
// decentralized applications. I’ve worked on DeFi, NFTs, tokens, smart contracts,
// DEXs, and scalable backends. I also develop dynamic web and mobile apps using
// React, Angular, and Next.js, focusing on high-quality, user-friendly design.
