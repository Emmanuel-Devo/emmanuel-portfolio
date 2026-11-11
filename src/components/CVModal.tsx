import React, { useEffect } from 'react';
import {
  X,
  FileDown,
  Printer,
  FileText
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  EDUCATION,
  PROFESSIONAL_DEVELOPMENT,
  SKILL_CATEGORIES
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.classList.add('cv-modal-open');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('cv-modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownloadMarkdown = () => {
    const markdownContent = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.role}** | ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.bioParagraphs.join('\n\n')}

---

## TECHNICAL SKILLS
${SKILL_CATEGORIES.map(
  (c) => `### ${c.title}\n` + c.skills.join(', ')
).join('\n\n')}

---

## FEATURED PROJECTS
${PROJECTS.map(
  (p) => `### ${p.title} ${p.year ? `(${p.year})` : ''}
- Category: ${p.category}
- Repository: ${p.githubUrl || 'Repository link coming soon'}
- Technologies: ${p.technologies.join(', ')}
- Description: ${p.description}
- Highlights:
${p.highlights.map((h) => `  * ${h}`).join('\n')}
`
).join('\n')}

---

## EXPERIENCE
${EXPERIENCES.map(
  (e) => `### ${e.role} — ${e.company} (${e.period})
Location: ${e.location}
${e.highlights.map((h) => `- ${h}`).join('\n')}
`
).join('\n')}

---

## EDUCATION
${EDUCATION.map(
  (ed) => `### ${ed.institution}
${ed.degree} (${ed.period}) — ${ed.location}
${ed.notes || ''}
`
).join('\n')}

---

## PROFESSIONAL DEVELOPMENT & CERTIFICATES
${PROFESSIONAL_DEVELOPMENT.map(
  (pd) => `### ${pd.institution}
${pd.qualification} (${pd.period}) — ${pd.location}
${pd.notes || ''}
`
).join('\n')}
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Emmanuel_Chukwuere_Cloud_DevOps_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      id="cv-modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cv-title"
      className="cv-modal-backdrop printable-modal fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="cv-modal-container relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D1117] border border-slate-800 rounded-2xl shadow-2xl flex flex-col"
      >
        {/* Top Header Bar / Toolbar */}
        <div
          id="cv-modal-toolbar"
          className="cv-modal-toolbar no-print sticky top-0 z-20 px-4 sm:px-6 py-4 bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-900/40 text-blue-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 id="modal-cv-title" className="text-base font-bold text-white truncate">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-slate-400 truncate">
                {PERSONAL_INFO.name} · {PERSONAL_INFO.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Primary Print / Save as PDF Button: opens formatted A4 PDF in new browser tab */}
            <a
              id="print-cv-btn"
              href="/Emmanuel-Chukwuere-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-100 hover:text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-600 hover:border-slate-500 rounded-lg transition-colors cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Open complete A4 CV in new tab to Print or Save as PDF"
              aria-label="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / Save as PDF</span>
            </a>

            {/* Preserved Markdown Download Button */}
            <button
              id="download-cv-md-btn"
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              title="Download formatted markdown resume"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV (.md)</span>
              <span className="sm:hidden">.md</span>
            </button>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div id="cv-document-body" className="cv-document-body p-6 sm:p-10 text-slate-200 space-y-8 select-text">
          {/* Header Block */}
          <div className="cv-print-header border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="cv-print-name text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="cv-print-role text-base font-semibold text-blue-400 mt-1">
                {PERSONAL_INFO.role}
              </p>
              <p className="cv-print-contact-row text-xs text-slate-400 mt-1">
                <span>{PERSONAL_INFO.location}</span>
                <span className="mx-1.5">·</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span className="mx-1.5">·</span>
                <span>{PERSONAL_INFO.email}</span>
              </p>
            </div>
            <div className="cv-print-subcontact mt-3 sm:mt-0 text-xs text-slate-400 font-mono space-y-0.5 sm:text-right">
              <div>GitHub: {PERSONAL_INFO.github}</div>
              <div className="cv-print-status text-emerald-400">Open to Internship Opportunities</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="cv-avoid-break">
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              Professional Summary
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="cv-avoid-break">
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="cv-print-card cv-avoid-break p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="cv-print-card-title font-semibold text-white block mb-1">
                    {cat.title}
                  </span>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Featured Projects
            </h2>
            <div className="space-y-3.5">
              {PROJECTS.map((project) => (
                <div key={project.id} className="cv-print-card cv-avoid-break p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="cv-print-card-title text-sm font-bold text-white">
                      {project.title} {project.year ? `(${project.year})` : ''}
                    </h3>
                    <span className="cv-print-card-sub text-[11px] font-mono text-slate-400">
                      {project.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="cv-print-card-desc text-xs text-slate-300">
                    {project.description}
                  </p>
                  <ul className="cv-print-bullets space-y-1 text-xs text-slate-400 pl-4 list-disc">
                    {project.highlights.map((h, hi) => (
                      <li key={hi} className="cv-print-bullet">{h}</li>
                    ))}
                  </ul>
                  {project.githubUrl && (
                    <div className="cv-print-repo text-[11px] text-blue-400 font-mono pt-1">
                      Repo: <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.githubUrl}</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Experience
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="cv-print-card cv-avoid-break p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="flex justify-between items-start text-xs">
                    <div>
                      <span className="cv-print-card-title font-bold text-white">{exp.role}</span>
                      <span className="cv-print-card-sub text-slate-400"> — {exp.company}</span>
                    </div>
                    <span className="cv-print-card-sub font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="cv-print-card-sub text-[11px] text-slate-400 mt-0.5">{exp.location}</p>
                  <ul className="cv-print-bullets mt-2 space-y-1 text-xs text-slate-300 pl-4 list-disc">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="cv-print-bullet">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="cv-print-card cv-avoid-break p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs">
                  <div className="flex justify-between text-white font-semibold">
                    <span className="cv-print-card-title">{edu.degree}</span>
                    <span className="cv-print-card-sub font-mono">{edu.period}</span>
                  </div>
                  <p className="text-blue-400 print:text-blue-700 mt-0.5">{edu.institution} — {edu.location}</p>
                  {edu.notes && <p className="cv-print-card-sub text-[11px] mt-1">{edu.notes}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Professional Development & Certificates */}
          <div>
            <h2 className="cv-print-section-title text-xs font-bold uppercase tracking-wider text-blue-400 mb-3">
              Professional Development &amp; Certificates
            </h2>
            <div className="space-y-3">
              {PROFESSIONAL_DEVELOPMENT.map((item, i) => (
                <div key={i} className="cv-print-card cv-avoid-break p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 text-xs">
                  <div className="flex justify-between text-white font-semibold">
                    <span className="cv-print-card-title">{item.qualification}</span>
                    <span className="cv-print-card-sub font-mono">{item.period}</span>
                  </div>
                  <p className="text-amber-400 print:text-amber-700 mt-0.5">{item.institution} — {item.location}</p>
                  {item.notes && <p className="cv-print-card-sub text-[11px] mt-1">{item.notes}</p>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
