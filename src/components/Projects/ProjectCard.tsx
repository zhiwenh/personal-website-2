import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from './types';

interface ProjectCardProps {
  project: Project;
  onImageClick: (image: string) => void;
}

export function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
      <div
        className="relative cursor-pointer overflow-hidden group"
        onClick={() => onImageClick(project.image)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <span className="text-sm text-slate-500">{project.date}</span>
        </div>
        <p className="text-slate-600 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
