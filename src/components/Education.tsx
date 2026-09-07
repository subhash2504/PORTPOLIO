import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-cyber-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;
              
              let gradeColor = 'text-primary-400 border-primary-500/30 bg-primary-500/10';
              if (item.gradeLabel === 'Percentage' && parseInt(item.grade) > 90) {
                gradeColor = 'text-cyber-400 border-cyber-500/30 bg-cyber-500/10';
              } else if (item.gradeLabel === 'Percentage' && parseInt(item.grade) < 70) {
                gradeColor = 'text-amber-400 border-amber-500/30 bg-amber-500/10';
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-surface-900 border border-white/10 p-1 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-cyber-500 flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-primary-500),0.5)]">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Empty space for desktop alignment */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0">
                    <div className={`bg-surface-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-colors duration-300 ${
                      isEven ? 'md:mr-12' : 'md:ml-12'
                    }`}>
                      <h3 className="font-display font-semibold text-xl text-white">
                        {item.institution}
                      </h3>
                      <p className="text-primary-400 text-sm font-medium mt-1">
                        {item.degree}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-surface-200/50 mt-3">
                        <Calendar className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mt-5 ${gradeColor}`}
                      >
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.gradeLabel}: {item.grade}</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
