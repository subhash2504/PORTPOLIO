import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background with gradient and dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-900 to-surface-950"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
            Want to know more about my experience?
          </h2>
          <p className="text-surface-200/70 text-lg mb-10 max-w-2xl mx-auto">
            Explore my resume to learn more about my education, skills, experience, and projects.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                View Resume
              </span>
            </a>
            
            <a
              href={personalInfo.resumeUrl}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-800 text-white font-medium hover:bg-surface-700 transition-colors border border-white/10 hover:border-white/20 group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
