import React, { useState, useMemo } from 'react';
import {
  Cloud,
  Layers,
  Code2,
  Network,
  Search,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryConfig: Record<string, { icon: React.ElementType; accent: string; dot: string; badgeBg: string }> = {
    Languages: {
      icon: Code2,
      accent: 'text-purple-400',
      dot: 'bg-purple-400',
      badgeBg: 'bg-purple-950/40 border-purple-900/50'
    },
    Cloud: {
      icon: Cloud,
      accent: 'text-amber-400',
      dot: 'bg-amber-400',
      badgeBg: 'bg-amber-950/40 border-amber-900/50'
    },
    Networking: {
      icon: Network,
      accent: 'text-cyan-400',
      dot: 'bg-cyan-400',
      badgeBg: 'bg-cyan-950/40 border-cyan-900/50'
    },
    'Systems & DevOps': {
      icon: Layers,
      accent: 'text-blue-400',
      dot: 'bg-blue-400',
      badgeBg: 'bg-blue-950/40 border-blue-900/50'
    }
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      // Filter by tab
      if (activeTab !== 'all' && cat.title !== activeTab) {
        return null;
      }
      // Filter by search query
      if (!searchQuery.trim()) {
        return cat;
      }
      const query = searchQuery.toLowerCase();
      const matchingSkills = cat.skills.filter((s) =>
        s.toLowerCase().includes(query)
      );
      if (matchingSkills.length === 0 && !cat.title.toLowerCase().includes(query)) {
        return null;
      }
      return {
        ...cat,
        skills: matchingSkills.length > 0 ? matchingSkills : cat.skills
      };
    }).filter(Boolean) as typeof SKILL_CATEGORIES;
  }, [activeTab, searchQuery]);

  const totalSkillCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B1120] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              <span>Technical Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Technical Skills
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
              Technologies, cloud services, and tools studied and applied across academic coursework, professional development, and practical projects.
            </p>
          </div>

          {/* Search Input Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Terraform, EKS, Linux)..."
              className="w-full pl-9 pr-4 py-2.5 text-xs text-white bg-slate-900 border border-slate-700/80 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Filter Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Skills ({totalSkillCount})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 ${
                activeTab === cat.title
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title} ({cat.skills.length})
            </button>
          ))}
        </div>

        {/* Category Skill Groups */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-900/50 border border-slate-800">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <p className="text-sm font-medium text-slate-300">
              No skills found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="mt-4 px-3.5 py-1.5 text-xs text-blue-400 hover:underline font-semibold"
            >
              Reset search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category) => {
              const cfg = categoryConfig[category.title] || {
                icon: Layers,
                accent: 'text-blue-400',
                dot: 'bg-blue-400',
                badgeBg: 'bg-blue-950/40 border-blue-900/50'
              };
              const Icon = cfg.icon;

              return (
                <div
                  key={category.title}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 shadow-xl flex flex-col justify-between hover:border-slate-700/80 transition-all"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${cfg.badgeBg} ${cfg.accent}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3.5 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          <span className="text-xs font-semibold text-slate-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
