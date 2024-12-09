import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Resume } from './components/Resume';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
