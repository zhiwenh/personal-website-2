import React from 'react';
import { Code2, Layout, Blocks, Wrench } from 'lucide-react';
import { SkillCategory } from './SkillCategory';
import { skillsData } from './skillsData';

export function Skills() {
  const categoryIcons = {
    programmingLanguages: <Code2 className="w-6 h-6" />,
    frameworks: <Layout className="w-6 h-6" />,
    blockchain: <Blocks className="w-6 h-6" />,
    tools: <Wrench className="w-6 h-6" />
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise,
            spanning multiple domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([key, category]) => (
            <SkillCategory
              key={key}
              title={category.title}
              skills={category.skills}
              icon={categoryIcons[key as keyof typeof categoryIcons]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
