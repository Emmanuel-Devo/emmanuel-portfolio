import React, { useEffect } from 'react';
import { X, ExternalLink, GitBranch, Server, CheckCircle, Terminal, Image as ImageIcon } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [imageError, setImageError] = React.useState(false);

  useEffect(() => {
    setImageError(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0D1117] border border-slate-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media / Screenshot Area */}
        <div className="relative aspect-[16/9] w-full bg-[#080C14] overflow-hidden border-b border-slate-800 flex items-center justify-center">
          {project.screenshotUrl && !imageError ? (
            <img
              src={project.screenshotUrl}
              alt={`${project.title} screenshot`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#0B0F17] via-[#0D1117] to-[#0A0E1A]">
              {/* Terminal Frame Bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-slate-400">{project.id}</span>
                </div>
                <span className="text-[11px] text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                  Project screenshot coming soon
                </span>
              </div>

              {/* Center Callout */}
              <div className="text-center py-4 space-y-2">
                <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-900/40 text-blue-400 mx-auto flex items-center justify-center">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                  Project screenshot coming soon. Genuine evidence will be displayed once screenshots are published.
                </p>
              </div>

              <div className="text-right text-[11px] font-mono text-slate-500">
                GitHub Repository: {project.githubUrl ? 'Available' : 'Pending'}
              </div>
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-4 pointer-events-none">
            <div className="pointer-events-auto">
              <span className="text-xs uppercase font-semibold text-blue-400 tracking-wider">
                {project.category}
              </span>
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-3">
              Key Work &amp; Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider mb-2.5">
              Technologies
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Local Clone Command */}
          {project.githubUrl ? (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 font-mono space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Clone &amp; Review Repository</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 select-all overflow-x-auto">
                git clone {project.githubUrl}.git
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
              Repository link coming soon once public publishing is finalized.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {project.year ? `Year: ${project.year}` : 'Verified Project'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-4 py-2 text-xs font-medium text-slate-500 bg-slate-900 border border-slate-800 rounded-lg">
                Repository link coming soon
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
