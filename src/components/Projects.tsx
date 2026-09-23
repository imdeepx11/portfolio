import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Star } from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI / ML', 'Full Stack', 'Frontend', 'Mobile / Tools'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Selected Works & Open Source
          </h2>
          <p className="text-slate-400 text-base">
            Explore a collection of my recent web applications, AI models, developer utilities, and client products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md text-[11px] font-semibold text-indigo-300">
                  {project.category}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-md text-[10px] font-bold text-amber-300 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    Featured
                  </div>
                )}
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Footer Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 group/link"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono">Demo N/A</span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
