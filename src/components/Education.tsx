import React from 'react';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

export function Education() {
  return (
    <section id="education" className="py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{edu.school}</h3>
                <p className="text-indigo-600">{edu.degree}</p>
                <p className="text-slate-500 text-sm">{edu.date}</p>
                {edu.description && (
                  <p className="mt-2 text-slate-600">{edu.description}</p>
                )}
                <a
                  href={edu.link}
                  className="mt-2 text-indigo-600 hover:text-indigo-700 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
