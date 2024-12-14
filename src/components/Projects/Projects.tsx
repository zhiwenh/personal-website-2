import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ImageModal } from './ImageModal';
import { projects } from '../../data/projects';

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>
      </div>
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
