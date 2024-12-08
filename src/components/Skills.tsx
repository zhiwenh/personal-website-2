import React from 'react';
import { skills } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}