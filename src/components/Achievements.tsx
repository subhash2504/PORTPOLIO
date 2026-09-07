import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-8 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="text-5xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                >
                  {achievement.icon || '🏆'}
                </motion.div>
                
                <h3 className="font-display font-semibold text-xl text-white mt-4">
                  {achievement.title}
                </h3>
                
                <p className="text-surface-200/70 text-sm mt-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mt-6 group-hover:w-24 transition-all duration-300" />
              </div>
              
              {/* Subtle hover gradient border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              
              {/* Subtle glow on hover */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
