import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-cyber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 hover:border-primary-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-cyber-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-primary-400 group-hover:animate-pulse-slow" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-display font-semibold text-xl text-white">
                    {cert.name}
                  </h3>
                  <p className="text-primary-400 font-medium mt-1">
                    {cert.issuer}
                  </p>
                  
                  <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent my-4"></div>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-800 text-white text-sm font-medium hover:bg-surface-700 transition-colors border border-white/5 hover:border-white/10"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
