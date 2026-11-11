import React from 'react';
import { Terminal, GitBranch, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV, onOpenGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] border-t border-slate-800 text-slate-400 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <span>{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-sm font-semibold text-blue-400">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building, automating and managing reliable cloud infrastructure. Focused on AWS, EKS, Terraform, container orchestration, and Linux systems.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education &amp; Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Resources & Actions */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Developer &amp; Recruiter Tools
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenCV}
                className="inline-flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors text-left"
              >
                <span>Curriculum Vitae Preview &amp; Download</span>
                <span className="text-blue-400 font-mono text-[11px]">PDF / MD</span>
              </button>
              <button
                onClick={onOpenGuide}
                className="inline-flex items-center justify-between px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors text-left"
              >
                <span>Run Locally &amp; Deploy on Vercel</span>
                <span className="text-emerald-400 font-mono text-[11px]">Guide</span>
              </button>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GitBranch className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-600">
              Cloud Engineering &amp; DevOps
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
