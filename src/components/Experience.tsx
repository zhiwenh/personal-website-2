import React from 'react';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';
import { workExperience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-10 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
              style={{ userSelect: 'text' }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-600 bg-slate-700 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="object-cover object-center items-center"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                  </div>
                </div>

                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors select-text" style={{ userSelect: 'text' }}>
                        {exp.position}
                      </h3>
                      <p className="text-indigo-400 font-medium select-text" style={{ userSelect: 'text' }}>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm select-text" style={{ userSelect: 'text' }}>{exp.period}</span>
                    </div>
                  </div>

                  <div className="prose prose-slate prose-invert max-w-none">
                    <p className="text-slate-300 leading-relaxed select-text" style={{ userSelect: 'text' }}>{exp.description}</p>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    {exp.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 select-text"
                        style={{ userSelect: 'text' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
