import React from 'react';
import { Briefcase, Calendar, MapPin, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Work Experience & Milestones
          </h2>
          <p className="text-slate-400 text-base">
            A timeline of my professional roles, key responsibilities, and achievements over the years.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Glowing Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40 group-hover:scale-125 transition-transform">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>

              {/* Date pill overlay for wide screens */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-mono font-semibold text-indigo-400">
                  {exp.period}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-4">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-300">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <span className="sm:hidden flex items-center gap-1 text-indigo-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description bullet points */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
