import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles, Terminal, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, socials } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Radial glowing background spots */}
      <div className="glow-blob w-96 h-96 bg-indigo-600 top-1/4 -left-20" />
      <div className="glow-blob w-96 h-96 bg-violet-600 bottom-1/4 -right-20" />
      <div className="glow-blob w-80 h-80 bg-sky-500 top-1/3 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-indigo-300">
                {personal.availabilityStatus}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm{' '}
              <span className="glow-gradient-text">
                {personal.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
              {personal.role}
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {personal.headline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl hover:border-slate-500 transition-all flex items-center gap-2 hover:text-white"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: socials.github, label: 'GitHub' },
                  { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
                  { icon: Twitter, href: socials.twitter, label: 'Twitter' },
                  { icon: Mail, href: `mailto:${socials.email}`, label: 'Email' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-950/40 transition-all hover:scale-110"
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Floating Card Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 opacity-30 blur-lg animate-pulse" />
              
              {/* Card Container */}
              <div className="relative glass-card rounded-2xl p-6 border border-slate-700/60 shadow-2xl">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span>developer.ts</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="py-4 font-mono text-xs text-slate-300 leading-relaxed space-y-2">
                  <p><span className="text-purple-400">const</span> <span className="text-indigo-300">developer</span> = &#123;</p>
                  <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">'{personal.name}'</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">role</span>: <span className="text-emerald-300">'{personal.role}'</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">location</span>: <span className="text-emerald-300">'{personal.location}'</span>,</p>
                  <p className="pl-4"><span className="text-sky-300">coreTech</span>: [</p>
                  <p className="pl-8 text-amber-300">'React', 'TypeScript', 'Node.js', 'Python', 'Tailwind'</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-sky-300">passion</span>: <span className="text-emerald-300">'Building awesome AI & Web Apps'</span></p>
                  <p>&#125;;</p>
                </div>

                {/* Status indicator footer inside code card */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Status</span>
                  <span className="text-emerald-400 font-mono font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Ready to build
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
