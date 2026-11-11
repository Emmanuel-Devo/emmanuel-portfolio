import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  FileCheck,
  Maximize2,
  X,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import {
  EDUCATION,
  PROFESSIONAL_DEVELOPMENT,
  CERTIFICATES_ACHIEVEMENTS,
  CertificateAchievement
} from '../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateAchievement | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-certificate-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0D1117] border border-slate-800 rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header with Title & Close Button */}
        <div className="sticky top-0 z-20 px-5 sm:px-6 py-4 bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400 block truncate">
              {certificate.category}
            </span>
            <h3 id="modal-certificate-title" className="text-base sm:text-lg font-bold text-white truncate">
              {certificate.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {certificate.imageUrl && (
              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                title="Open original image at full resolution in new tab"
              >
                <span>Full Resolution</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Preview Display */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="relative w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-2 sm:p-4 min-h-[300px]">
            {certificate.imageUrl ? (
              <img
                src={certificate.imageUrl}
                alt={`${certificate.title} original certificate`}
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            ) : (
              <div className="text-center py-10 space-y-3">
                <FileCheck className="w-10 h-10 text-blue-400 mx-auto" />
                <p className="text-sm font-semibold text-slate-200">
                  Document scan pending upload
                </p>
              </div>
            )}
          </div>

          {/* Details Metadata Grid */}
          <div className="space-y-4 pt-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">
                  Issuing Organisation
                </span>
                <span className="text-white font-bold mt-1 block">
                  {certificate.issuer}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">
                  Date / Period
                </span>
                <span className="text-slate-200 font-mono font-medium mt-1 block">
                  {certificate.date}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] block font-semibold">
                  Qualification / Award
                </span>
                <span className="text-emerald-400 font-semibold mt-1 block">
                  {certificate.status}
                </span>
              </div>
            </div>

            {certificate.notes && (
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-slate-200">Official Note: </span>
                {certificate.notes}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Original Certificate Document</span>
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              Close Viewer
            </button>
            {certificate.imageUrl && (
              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>Open Full Size</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('All');
  const [activeCertificate, setActiveCertificate] = useState<CertificateAchievement | null>(null);

  const galleryCategories = [
    'All',
    'Academic Qualifications & Development',
    'Professional Certifications & Training',
    'Leadership & Recognition'
  ];

  const filteredCertificates = selectedGalleryCategory === 'All'
    ? CERTIFICATES_ACHIEVEMENTS
    : CERTIFICATES_ACHIEVEMENTS.filter((c) => c.category === selectedGalleryCategory);

  return (
    <section id="education" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            <span>Academic Background &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Education &amp; Qualifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Formal university engineering education, specialized cloud development training, and completed leadership credentials.
          </p>
        </div>

        {/* Part 1 & 2: Education & Professional Development Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
          
          {/* 1. Education Sub-section */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 shadow-xs hover:shadow-md hover:bg-white transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-blue-600 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 shadow-xs">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.notes && (
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                      {edu.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Professional Development Sub-section */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200">
              <BookOpen className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Professional Development
              </h3>
            </div>

            <div className="space-y-4">
              {PROFESSIONAL_DEVELOPMENT.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6 shadow-xs hover:shadow-md hover:bg-white transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {item.qualification}
                      </h4>
                      <p className="text-sm font-semibold text-amber-700 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-700 bg-white border border-slate-200 shadow-xs">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>

                  {item.notes && (
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                      {item.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Part 3: Certificates & Achievements Gallery */}
        <div className="pt-4 border-t border-slate-200">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 tracking-wider uppercase mb-2">
                <span>Verified Credentials Gallery</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Certificates &amp; Achievements
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 max-w-xl">
                Original certificate documents and recognitions across academic achievements, professional technical training, and leadership roles.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto scrollbar-none shadow-xs">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGalleryCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                    selectedGalleryCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {cat === 'All' ? 'All (7)' : cat.split('&')[0].trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Certificate Cards Grid: 3 Columns Desktop, 2 Tablet, 1 Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Thumbnail Area */}
                  <div className="relative aspect-[16/11] w-full bg-slate-900 border-b border-slate-200 flex items-center justify-center p-2.5 overflow-hidden group/thumb">
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={`${cert.title} certificate scan`}
                        className="w-full h-full object-cover object-top rounded-lg group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-center py-4 text-white">
                        <FileCheck className="w-8 h-8 text-blue-400 mx-auto mb-1" />
                        <span className="text-xs text-slate-300 font-medium">Original Scan</span>
                      </div>
                    )}

                    {/* Gradient bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Category Label Pill */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-700/80 font-medium text-[10px]">
                        {cert.status}
                      </span>
                    </div>

                    {/* Quick Expand Button */}
                    <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => setActiveCertificate(cert)}
                        className="p-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600 border border-slate-700 text-white transition-colors shadow-lg"
                        title="View Certificate in Modal"
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                      {cert.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 mt-1">
                      {cert.issuer}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-5 py-3.5 bg-white border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono truncate max-w-[150px]">
                    {cert.issuer}
                  </span>
                  <button
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 rounded-lg transition-colors"
                  >
                    <span>View Certificate</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Transparency Note */}
          <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <span className="font-bold text-slate-800">Original Document Repository:</span> All seven original certificates and recognitions above have been issued to Emmanuel Chukwuere and are displayed with their original document scans. Click &quot;View Certificate&quot; on any card to examine the credential in high resolution.
            </p>
          </div>

        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
};
