import React from 'react';
import { SkillItem } from './SkillItem';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export function SkillCategory({ title, skills, icon }: SkillCategoryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-indigo-600">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}