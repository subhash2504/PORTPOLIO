import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyber-400">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central timeline line */}
          <div className="timeline-line absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-cyber-500/30 to-transparent -translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="timeline-dot absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(var(--color-primary-400),0.6)] border-2 border-surface-950 -translate-x-1/2 z-20"
                  />

                  {/* Desktop layout: alternating left/right */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 ${
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="glass-card-hover p-6 md:p-8 rounded-2xl relative group overflow-hidden">
                      {/* Optional subtle gradient background effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-6 h-6 text-primary-400" />
                          <h3 className="font-display font-semibold text-xl text-white">
                            {exp.title}
                          </h3>
                        </div>
                        
                        <div className="text-primary-400 font-medium mb-4 flex flex-wrap items-center gap-4">
                          <span>{exp.company}</span>
                          {exp.location && (
                            <span className="flex items-center gap-1 text-sm text-surface-200/50">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-surface-200/50 font-mono mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        
                        <div className="glow-line my-5" />
                        
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-surface-200/70 text-sm leading-relaxed">
                              <ChevronRight className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.type && (
                          <div className="mt-6 flex justify-end">
                            <span className="px-3 py-1 rounded-full bg-primary-900/40 border border-primary-500/20 text-xs font-medium text-primary-300 tracking-wide">
                              {exp.type}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
