import React from 'react';
import { FileText, Download } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-10 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Resume</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg max-w-2xl w-full border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white mr-2">Zhiwen Huang - Resume</h3>
              </div>
              <a
                href="/zhiwen-huang-resume.pdf"
                download
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">Summary</h4>
                <p className="text-slate-300">
                  Full-stack software engineer with expertise in blockchain technology and decentralized applications.
                  Experienced in developing innovative solutions across Ethereum and Solana ecosystems,
                  specializing in DeFi, NFTs, and token systems.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-200 mb-2">Key Skills</h4>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Blockchain Development (Ethereum, Solana, Smart Contracts)</li>
                  <li>Full Stack Development (React, Node.js, TypeScript)</li>
                  <li>DeFi & NFT Platforms</li>
                  <li>System Architecture & Optimization</li>
                </ul>
              </div>
              <div className="pt-4">
                <a
                  href="/zhiwen-huang-resume.pdf"
                  className="text-indigo-400 hover:text-indigo-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full resume in browser →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
