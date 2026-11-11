import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV, onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3.5 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
            aria-label={`${PERSONAL_INFO.name} Portfolio Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">{PERSONAL_INFO.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-blue-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Deploy Guide & Download CV */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenGuide}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Deployment & Setup Guide for GitHub and Vercel"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Deploy Guide</span>
            </button>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm shadow-blue-600/20 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 border border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-lg"
              >
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                <span>Deploy Guide</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
