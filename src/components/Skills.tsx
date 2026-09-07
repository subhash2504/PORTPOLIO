import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyber-400">Skills</span>
          </h2>
          <p className="text-surface-200/70 max-w-2xl mx-auto text-lg">
            Technologies, tools, and methodologies I use to build premium digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const isLast = index === skillCategories.length - 1;
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`glass-card-hover p-6 md:p-8 rounded-2xl group ${
                  isLast ? 'lg:col-span-3 flex flex-col lg:flex-row lg:items-start lg:gap-8' : ''
                }`}
              >
                <div className={`${isLast ? 'lg:w-1/4' : ''}`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-${category.color.split(' ')[0].replace('from-', '')}/50`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl text-white mt-4">
                    {category.title}
                  </h3>
                  
                  <div className={`h-px w-12 bg-gradient-to-r ${category.color} mt-3 mb-6 transition-all duration-300 group-hover:w-24`} />
                </div>
                
                <div className={`${isLast ? 'lg:w-3/4 flex flex-wrap gap-4' : 'flex flex-col gap-3'}`}>
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      className={`flex items-center gap-3 text-surface-200/80 group/skill transition-colors duration-200 hover:text-white ${
                        isLast ? 'bg-surface-800/50 border border-white/5 rounded-full px-4 py-2 hover:bg-surface-800 hover:border-white/10 transition-all duration-300' : ''
                      }`}
                    >
                      {!isLast && (
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} transition-transform duration-200 group-hover/skill:scale-150`} />
                      )}
                      <span className={`${!isLast ? 'transition-transform duration-200 group-hover/skill:translate-x-1' : ''}`}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
