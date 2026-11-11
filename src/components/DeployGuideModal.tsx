import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Globe, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. How to Run Locally',
      description: 'Clone or extract the repository, install npm dependencies, and start the local Vite development server:',
      commands: `# Clone or navigate into your project folder
cd portfolio-applet

# Install dependencies
npm install

# Start the development server on localhost:3000
npm run dev`
    },
    {
      title: '2. How to Push to GitHub',
      description: 'Initialize a clean Git repository, commit all project files, and push to your GitHub account (Emmanuel-Devo):',
      commands: `# Initialize Git (if not already initialized)
git init
git branch -M main

# Stage and commit all files
git add .
git commit -m "feat: complete premium cloud and devops portfolio for Emmanuel Chukwuere"

# Create a new repository on GitHub: https://github.com/new
# Link your remote repository and push:
git remote add origin https://github.com/Emmanuel-Devo/portfolio.git
git push -u origin main`
    },
    {
      title: '3. How to Deploy to Vercel (1-Click or CLI)',
      description: 'Deploying to Vercel is free, automatic on git push, and takes under 60 seconds:',
      commands: `# OPTION A: Deploy via Vercel Web Dashboard (Recommended)
1. Go to https://vercel.com and log in with your GitHub account.
2. Click "Add New..." -> "Project".
3. Select your repository: "Emmanuel-Devo/portfolio".
4. Framework Preset: Vite (automatically detected).
5. Build Command: npm run build
6. Output Directory: dist
7. Click "Deploy". Your site is live with free HTTPS and global CDN!

# OPTION B: Deploy via Vercel CLI
npm i -g vercel
vercel`
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-guide-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0D1117] border border-slate-800 rounded-2xl shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/40 text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-guide-title" className="text-base font-bold text-white">
                Developer Deployment &amp; Setup Guide
              </h3>
              <p className="text-xs text-slate-400">
                Local run instructions, GitHub setup, and Vercel hosting
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            aria-label="Close guide modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8 select-text">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="text-blue-400 font-mono">0{idx + 1}.</span>
                  <span>{step.title}</span>
                </h4>
                <button
                  onClick={() => copyCode(step.commands, idx)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Commands</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 text-xs font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {step.commands}
              </pre>
            </div>
          ))}

          {/* Customizing Placeholder Details Box */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Editing Personal Details &amp; Custom Files</span>
            </div>
            <p className="leading-relaxed">
              All personal data (email, LinkedIn URL, bio, projects) is cleanly separated in <code className="text-blue-300 bg-slate-950 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>. You can easily edit or add new projects with zero configuration changes.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Vite + React 19 + Tailwind v4
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
