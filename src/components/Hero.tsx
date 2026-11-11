import React from 'react';
import {
  ArrowRight,
  FileDown,
  Mail,
  Cloud,
  Terminal,
  ShieldCheck,
  Server
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  // Reusable Hero Portrait Card featuring Emmanuel's genuine office photograph
  const renderPortraitCard = () => (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl group transition-all duration-300 hover:shadow-2xl">
      
      {/* Decorative Terminal / Status Header Bar (Clean Light Style) */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-slate-600 text-[11px] truncate">
            emmanuel@cloud-workstation
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-mono text-[11px] shrink-0 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Online</span>
        </div>
      </div>

      {/* Main Professional Portrait Photo Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <img
          src={PERSONAL_INFO.photoUrl || '/images/emmanuel-chukwuere-portrait.png'}
          onError={(e) => {
            e.currentTarget.src = '/public/assets/aistudio/Professional_Developer_at_Work_____15feda2d.png';
          }}
          alt="Emmanuel Chukwuere - Cloud Engineering and DevOps"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          loading="eager"
        />

        {/* Subtle bottom shadow scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-50 pointer-events-none" />

        {/* Floating Technical Badge: Top Right (AWS & EKS) */}
        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-md flex items-center gap-2 text-white">
          <Cloud className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-[11px] font-mono font-semibold">AWS &amp; EKS</span>
        </div>

        {/* Floating Technical Badge: Bottom Left (Linux & Terraform) */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-md flex items-center gap-2 text-white">
          <Terminal className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-mono font-semibold">Linux &bull; Terraform IaC</span>
        </div>
      </div>

      {/* Bottom Technical Identity Highlights */}
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Cloud</p>
            <p className="text-xs font-bold text-slate-800 mt-0.5">AWS &amp; EKS</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Automation</p>
            <p className="text-xs font-bold text-blue-600 mt-0.5">Terraform</p>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Environment</p>
            <p className="text-xs font-bold text-emerald-600 mt-0.5">Linux Server</p>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-blue-100/60 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-100/40 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Introductory Kicker & Availability Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-600">
                HELLO, I&apos;M
              </span>
              <span className="hidden sm:inline-block text-slate-300">·</span>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>Open to Cloud Engineering and DevOps Internship Opportunities</span>
              </div>
            </div>

            {/* Main Heading & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-blue-600 tracking-tight flex items-center gap-2.5">
                <span>{PERSONAL_INFO.role}</span>
                <span className="text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200/80 border border-slate-300">
                  {PERSONAL_INFO.location}
                </span>
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I build and explore cloud infrastructure, automate workflows and work with modern technologies to deploy and manage applications.
            </p>

            {/* Professional Focus / Tagline Card */}
            <div className="w-full sm:max-w-xl p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-700 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900">Focus: </span>
                {PERSONAL_INFO.tagline}
              </div>
            </div>

            {/* Mobile Stack: Portrait photograph placed neatly below intro & focus card, above action buttons */}
            <div className="block lg:hidden w-full my-2">
              {renderPortraitCard()}
            </div>

            {/* Action Buttons: 3 Prominent Controls */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              {/* 1. View My Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-600/20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Download My CV */}
              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download My CV</span>
              </button>

              {/* 3. Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white/60 hover:bg-white border border-slate-300 rounded-xl shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Core Stack Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600">
              <span className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">Core Stack:</span>
              <span className="font-semibold text-slate-800">AWS &amp; EKS</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-semibold text-slate-800">Kubernetes &amp; Docker</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-semibold text-slate-800">Terraform IaC</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="font-semibold text-slate-800">Linux System Administration</span>
            </div>

          </div>

          {/* Right Column: Desktop Portrait Photo Frame */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {renderPortraitCard()}
          </div>

        </div>
      </div>
    </section>
  );
};
