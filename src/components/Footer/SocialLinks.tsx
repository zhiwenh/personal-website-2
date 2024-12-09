import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/zhiwenh",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/zhiwenhuang0",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:zhiwen555@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}