import React from 'react';

const links = [
  {
    title: "Navigation",
    items: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Resume", href: "#resume" },
      { label: "Education", href: "#education" },
      { label: "Portfolio", href: "#projects" },
    ],
  },
];

export function FooterLinks() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12">
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  onClick={handleClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
