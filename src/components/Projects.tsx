import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.github ? <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a> : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
