import React from 'react';
import { User, Award, CheckCircle2, MapPin, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal, stats } = portfolioData;

  const highlights = [
    "Clean, maintainable, self-documenting code standard",
    "Expertise in full-stack web and cloud architectures",
    "Integrating machine learning models into seamless web UIs",
    "Strong focus on responsive design, performance & SEO",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Crafting Digital Solutions with Passion & Precision
          </h2>
          <p className="text-slate-400 text-base">
            Get to know my background, core values, and what drives my software development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-40 blur-lg group-hover:opacity-70 transition duration-300" />
              
              <div className="relative glass-card rounded-2xl overflow-hidden p-3 border border-slate-700/60">
                <img
                  src={personal.avatarUrl}
                  alt={personal.name}
                  className="w-full h-96 object-cover rounded-xl filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-slate-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {personal.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Briefcase className="w-3.5 h-3.5" />
                      Full-time / Contract
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Details Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Engineering web experiences that empower businesses & users
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              {personal.bio}
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl border border-slate-800 text-center hover:border-indigo-500/40 transition-colors">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-indigo-400">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-semibold text-white mt-1">
                    {stat.label}
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">
                    {stat.description}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
