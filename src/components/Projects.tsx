import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyber-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group flex flex-col md:flex-row w-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-white/10"
            >
              {/* Image Area (Left/Top) */}
              <div
                className={`relative w-full md:w-[40%] h-[250px] md:h-auto ${project.gradient || 'bg-gradient-to-br from-primary-900 to-cyber-900'} overflow-hidden flex flex-col items-center justify-center p-8`}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 text-center flex flex-col items-center gap-4"
                >
                  <Layers className="w-12 h-12 text-white/80" />
                  <h3 className="font-display font-bold text-3xl text-white tracking-wide hidden md:block">
                    {project.title}
                  </h3>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium shadow-xl">
                    {project.role || 'Frontend Developer'}
                  </span>
                </motion.div>
                
                {/* Animated overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Area (Right/Bottom) */}
              <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2 md:hidden">
                    {project.title}
                  </h3>
                  <p className="text-primary-400 font-medium text-sm mb-4 md:hidden">
                    {project.role || 'Frontend Developer'}
                  </p>
                  
                  <p className="text-surface-200/70 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {project.features?.map((feature: string, fIndex: number) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * fIndex + 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="w-4 h-4 text-cyber-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-surface-200/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies?.map((tech: string, tIndex: number) => (
                      <motion.span
                        key={tIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * tIndex + 0.4 }}
                        className="tech-tag"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  {(project.github || (project as any).githubUrl) && (
                    <a
                      href={project.github || (project as any).githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 group hover:scale-105 transition-transform"
                    >
                      <Github className="w-4 h-4 group-hover:text-white transition-colors" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {(project.demo || (project as any).liveUrl) && (
                    <a
                      href={project.demo || (project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 group hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
