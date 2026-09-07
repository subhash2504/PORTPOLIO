import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-surface-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto py-12 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-xl text-white">{personalInfo.name}</h2>
            <p className="text-sm text-surface-200/50 mt-1">{personalInfo.role}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-surface-200/60 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-surface-200/60 hover:text-white hover:border-white/30 hover:bg-surface-900 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-surface-200/60 hover:text-white hover:border-white/30 hover:bg-surface-900 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-surface-200/60 hover:text-white hover:border-white/30 hover:bg-surface-900 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-200/40 text-center md:text-left">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-sm text-surface-200/40 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 mx-1" fill="currentColor" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
}
