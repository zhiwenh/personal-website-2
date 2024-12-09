import React from 'react';
import { Briefcase } from 'lucide-react';
import { workExperience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div key={index} className="flex gap-6 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-16 h-16">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-indigo-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.period}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
