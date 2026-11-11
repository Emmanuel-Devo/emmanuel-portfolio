import React from 'react';
import {
  Workflow,
  Terminal,
  Server,
  GraduationCap,
  Cloud,
  MapPin,
  Compass,
  Target
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const capabilityCards = [
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'Codifying declarative cloud infrastructure with Terraform to guarantee reproducibility, version control, and consistency without manual drift.',
      icon: Workflow,
      accentColor: 'text-blue-600',
      badgeBg: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Linux Systems & Networking',
      description: 'Solid operational foundation in Linux administration, user permissions, shell scripting, systemd service management, and core TCP/IP networking.',
      icon: Terminal,
      accentColor: 'text-emerald-600',
      badgeBg: 'bg-emerald-50 border-emerald-200'
    },
    {
      title: 'Container Orchestration',
      description: 'Packaging applications in Docker containers and deploying scalable, declarative workloads into Kubernetes clusters and managed AWS EKS nodes.',
      icon: Server,
      accentColor: 'text-purple-600',
      badgeBg: 'bg-purple-50 border-purple-200'
    }
  ];

  const infoItems = [
    { label: 'Degree', value: PERSONAL_INFO.infoPanel.education, icon: GraduationCap },
    { label: 'Cloud Training', value: PERSONAL_INFO.infoPanel.cloudTraining, icon: Cloud },
    { label: 'Focus Area', value: PERSONAL_INFO.infoPanel.specialisation, icon: Compass },
    { label: 'Location', value: PERSONAL_INFO.infoPanel.location, icon: MapPin }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            <span>Background &amp; Direction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
            Combining an Electrical and Electronics Engineering degree with dedicated Cloud Engineering training to build reliable, automated systems.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Background, Direction & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              {PERSONAL_INFO.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Profile Information Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {infoItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-xs font-semibold text-slate-800 truncate mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Three Professional Capability Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Engineering Capabilities
              </span>
            </div>

            {capabilityCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`p-2.5 rounded-xl border ${card.badgeBg} ${card.accentColor} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-0.5">
                    {card.description}
                  </p>
                </div>
              );
            })}

            {/* Status Card */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 leading-relaxed">
              <div className="flex items-center gap-2 font-bold mb-1 text-blue-950">
                <Target className="w-4 h-4 text-blue-600" />
                <span>Career Focus &amp; Availability</span>
              </div>
              <p className="text-slate-700">
                Actively seeking internship and entry-level Cloud &amp; DevOps roles where I can contribute to infrastructure automation, deployment pipelines, and operational reliability.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
