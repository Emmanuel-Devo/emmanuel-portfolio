import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnicalHighlights } from './components/TechnicalHighlights';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { DeployGuideModal } from './components/DeployGuideModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600/20 selection:text-blue-900">
      {/* Sticky Header Navigation (Light) */}
      <div className="no-print">
        <Navbar
          onOpenCV={() => setCvModalOpen(true)}
          onOpenGuide={() => setGuideModalOpen(true)}
        />
      </div>

      {/* Main Alternating Sections */}
      <main className="flex-1 no-print">
        {/* 1. Hero (Light) */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />
        
        {/* 2. Technical Highlights (Dark Navy) */}
        <TechnicalHighlights />
        
        {/* 3. About (Light) */}
        <About />
        
        {/* 4. Technical Skills (Dark Navy) */}
        <Skills />
        
        {/* 5. Projects with Carousel (Light) */}
        <Projects />
        
        {/* 6. Experience (Dark Navy) */}
        <Experience />
        
        {/* 7. Education & Certifications (Light) */}
        <Education />
        
        {/* 8. Contact (Dark Navy) */}
        <Contact />
      </main>

      {/* Footer (Dark) */}
      <div className="no-print">
        <Footer
          onOpenCV={() => setCvModalOpen(true)}
          onOpenGuide={() => setGuideModalOpen(true)}
        />
      </div>

      {/* Modals */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
      <DeployGuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />
    </div>
  );
}
