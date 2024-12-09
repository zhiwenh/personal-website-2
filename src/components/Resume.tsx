import React from 'react';
import { FileText, Download } from 'lucide-react';
import zhiwenHuangResume from './../zhiwen-huang-resume.pdf';

export function Resume() {
  return (
    <section id="resume" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-2xl w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold">Zhiwen Huang - Resume</h3>
              </div>
              <a
                href={zhiwenHuangResume}
                download
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Summary</h4>
                <p className="text-gray-600">
                  Software engineer with expertise in blockchain, full stack, and software development,
                  including building cryptocurrency exchanges, NFT marketplaces, and decentralized
                  applications. Skilled in Angular, React, Solidity, ERC-20 and ERC-721 tokens,
                  API development, and MongoDB.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Skills</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Blockchain Development (Ethereum, Smart Contracts)</li>
                  <li>Full Stack Development (React, Node.js, TypeScript)</li>
                  <li>DeFi & NFT Platforms</li>
                  <li>System Architecture & Optimization</li>
                </ul>
              </div>
              <div className="pt-4">
                <a
                  href={zhiwenHuangResume}
                  className="text-indigo-600 hover:text-indigo-700 text-sm"
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
