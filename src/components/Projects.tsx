import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  GitBranch,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  FolderGit2,
  ImageIcon,
  Info,
  Pause,
  Play
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectImageDisplayProps {
  project: Project;
  onOpenDetails: () => void;
}

const ProjectImageDisplay: React.FC<ProjectImageDisplayProps> = ({ project, onOpenDetails }) => {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(project.screenshotUrl && !hasError);

  return (
    <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden border-b border-slate-200 flex flex-col justify-between group/img">
      {showImage ? (
        <img
          src={project.screenshotUrl}
          alt={`${project.title} screenshot`}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Professional Neutral Placeholder */
        <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              {project.year ? `Year: ${project.year}` : 'GitHub Repository'}
            </span>
          </div>

          <div className="text-center py-2 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 mx-auto flex items-center justify-center">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-slate-200 truncate px-2">
              {project.title}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
              <ImageIcon className="w-3 h-3 text-slate-400" />
              <span>Project screenshot coming soon</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/60">
            <span className="text-blue-400">{project.category}</span>
            <span>{project.githubUrl ? 'Source Available' : 'Pending'}</span>
          </div>
        </div>
      )}

      {/* Expand Details Overlay Button */}
      <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={onOpenDetails}
          className="p-1.5 rounded-lg bg-slate-900/90 hover:bg-blue-600 border border-slate-700 text-white transition-colors shadow-lg"
          title="Inspect Project Details"
          aria-label={`Inspect ${project.title} details`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);
  
  // Auto-slide and interaction states
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState<boolean>(false);
  const [isTouching, setIsTouching] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);

  const categories = ['All', 'Cloud & Kubernetes', 'Linux & Systems', 'DevOps & Containers'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  // Detect user's reduced-motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Responsive Items Per Page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute maximum index for carousel sliding
  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  // Reset to first slide when category changes or when maxIndex shrinks
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Automatic sliding: advance every 5 seconds unless paused, hovered, interacting, or reduced-motion
  useEffect(() => {
    if (
      prefersReducedMotion ||
      isManuallyPaused ||
      isHovered ||
      isTouching ||
      Boolean(activeProject) ||
      maxIndex <= 0
    ) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isManuallyPaused, isHovered, isTouching, activeProject, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsTouching(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const isAutoPlaying = !prefersReducedMotion && !isManuallyPaused && maxIndex > 0;

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              <span>Practical Work &amp; Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Practical engineering projects covering cloud infrastructure, Kubernetes deployments, containerization, and Linux system administration.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto scrollbar-none shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Controls Bar (Arrows, Play/Pause Toggle & Counter) */}
        <div className="flex items-center justify-between mb-6 pb-2">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>
              Showing <span className="font-bold text-slate-800">{Math.min(currentIndex + 1, filteredProjects.length)}</span> –{' '}
              <span className="font-bold text-slate-800">{Math.min(currentIndex + itemsPerPage, filteredProjects.length)}</span> of{' '}
              <span className="font-bold text-slate-800">{filteredProjects.length}</span> projects
            </span>
            {maxIndex > 0 && !prefersReducedMotion && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono pl-2 border-l border-slate-300">
                {isHovered ? (
                  <span className="text-amber-600">Paused on hover</span>
                ) : isManuallyPaused ? (
                  <span className="text-slate-500">Auto-slide paused</span>
                ) : (
                  <span className="text-emerald-600">Auto-slide active (5s)</span>
                )}
              </span>
            )}
          </div>

          {/* Navigation Controls: Play/Pause and Left/Right Arrows */}
          <div className="flex items-center gap-2">
            {/* Play/Pause Manual Control */}
            {maxIndex > 0 && !prefersReducedMotion && (
              <button
                onClick={() => setIsManuallyPaused((prev) => !prev)}
                className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label={isManuallyPaused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'}
                title={isManuallyPaused ? 'Resume auto-advance' : 'Pause auto-advance'}
              >
                {isManuallyPaused ? (
                  <Play className="w-4 h-4 text-blue-600" />
                ) : (
                  <Pause className="w-4 h-4 text-slate-600" />
                )}
              </button>
            )}

            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Previous project slide"
              title="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              disabled={maxIndex === 0}
              className="p-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Next project slide"
              title="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Project Carousel Container with Hover and Touch Handlers */}
        <div
          className="overflow-hidden py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out -mx-3"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{ width: `${100 / itemsPerPage}%` }}
                className="px-3 shrink-0 flex"
              >
                <div className="w-full group rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-sm">
                  
                  <div>
                    {/* Visual Screenshot Header */}
                    <ProjectImageDisplay
                      project={project}
                      onOpenDetails={() => setActiveProject(project)}
                    />

                    {/* Card Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies Used */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <GitBranch className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-blue-100" />
                      </a>
                    ) : (
                      <span className="px-2.5 py-1 text-[11px] font-medium text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
                        Repository link coming soon
                      </span>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {maxIndex > 0 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  currentIndex === dotIndex
                    ? 'w-7 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        )}

        {/* Repository Statement Note */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start sm:items-center gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
          <span>
            Explore my practical projects and complete source code on GitHub. Each repository includes documentation, architecture details, and setup scripts.
          </span>
        </div>

      </div>

      {/* Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
