import React from 'react';

export function ContactInfo() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold text-white">Zhiwen Huang</h3>
      <p className="text-gray-400">Software Engineer | Blockchain Engineer</p>
      <a
        href="mailto:zhiwen555@gmail.com"
        className="text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        zhiwen555@gmail.com
      </a>
    </div>
  );
}
