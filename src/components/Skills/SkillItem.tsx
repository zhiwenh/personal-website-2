import React from 'react';

interface SkillItemProps {
  name: string;
}

export function SkillItem({ name }: SkillItemProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
      {name}
    </span>
  );
}

// className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
