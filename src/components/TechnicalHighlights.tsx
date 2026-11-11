import React from 'react';
import { Cloud, GitBranch, Terminal } from 'lucide-react';

export const TechnicalHighlights: React.FC = () => {
  const highlights = [
    {
      category: 'TARGET CLOUD',
      title: 'AWS & EKS',
      description: 'Building scalable and reliable cloud infrastructure.',
      icon: Cloud,
      accentColor: 'text-amber-400',
      badgeBg: 'bg-amber-400/10 border-amber-400/20'
    },
    {
      category: 'METHODOLOGY',
      title: 'IaC & CI/CD',
      description: 'Automating infrastructure and delivery workflows.',
      icon: GitBranch,
      accentColor: 'text-blue-400',
      badgeBg: 'bg-blue-400/10 border-blue-400/20'
    },
    {
      category: 'FOUNDATION',
      title: 'Linux & B.Eng',
      description: 'Strong foundation in Linux systems and engineering principles.',
      icon: Terminal,
      accentColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-400/10 border-emerald-400/20'
    }
  ];

  return (
    <section className="bg-[#0B1120] text-white py-12 md:py-16 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.category}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400">
                      {item.category}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${item.badgeBg} ${item.accentColor}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
