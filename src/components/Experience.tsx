import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0B1120] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Professional roles and practical operational, mentoring, and technical experience.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10 ml-2 sm:ml-4">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B1120] border-2 border-blue-500 flex items-center justify-center group-hover:border-blue-400 group-hover:scale-110 transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700/80 p-6 sm:p-7 shadow-xl transition-all duration-200">
                
                {/* Header Info: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/70 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </span>
                    {exp.location && (
                      <span className="hidden sm:flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mt-4">
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
