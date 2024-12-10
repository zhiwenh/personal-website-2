import React, { useState, useEffect, useCallback } from 'react';
import { Menu } from 'lucide-react';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY && !isScrolling) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY, isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [controlNavbar]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    setIsScrolling(true);
    setShow(true);
    setIsOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <nav className={`fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
            onClick={handleNavClick}
          >
            ZH
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-indigo-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-indigo-400"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-slate-300 hover:text-indigo-400"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
