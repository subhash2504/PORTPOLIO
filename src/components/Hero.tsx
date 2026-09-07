import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Download, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero3DScene from './Hero3DScene';
import { personalInfo } from '../data/portfolioData';

const roles = ['AI Engineer', 'ML Developer', 'Full-Stack Developer', 'Problem Solver'];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const y = useTransform(scrollY, [0, 200], [0, 50]);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? currentRole.substring(0, currentText.length - 1)
          : currentRole.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const description = "Aspiring AI Engineer specializing in Core AI Model Engineering with hands-on experience in machine learning, deep learning, and generative AI. Passionate about building scalable AI solutions and solving real-world problems.";
  const words = description.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-500/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-20 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-col-reverse lg:flex-row">
          
          {/* Left Column (Text Content) */}
          <motion.div 
            className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-900/60 backdrop-blur-xl border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-surface-50">✦ Available for Opportunities</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-surface-200/60 font-mono mb-2">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 relative inline-block">
              Dulipudi Subhash
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-cyber-500 rounded-full" />
            </motion.h1>

            <motion.div variants={itemVariants} className="h-8 md:h-10 mb-6">
              <p className="font-display text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-cyber-400">
                {currentText}
                <span className="animate-pulse inline-block w-[2px] h-[1em] bg-cyber-400 ml-1 align-middle">|</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 max-w-xl text-surface-200/70 text-base md:text-lg leading-relaxed flex flex-wrap justify-center lg:justify-start gap-x-1">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="#projects" className="btn-primary group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View My Projects
              </a>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost group hidden sm:inline-flex">
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Let's Connect
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: personalInfo.github },
                { icon: <Linkedin className="w-5 h-5" />, href: personalInfo.linkedin },
                { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}` }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center border border-white/10 text-surface-200 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(var(--color-primary-500),0.3)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (3D WebGL Scene + Profile Image) */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2 h-[420px] lg:h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D WebGL Canvas Scene */}
            <div className="absolute inset-0 z-0">
              <Hero3DScene />
            </div>

            {/* Code snippet badges */}
            <motion.div 
              className="absolute top-10 left-10 md:top-20 md:-left-10 z-20 glass-card px-3 py-1.5 rounded-lg hidden md:block border border-white/10 bg-surface-900/60 backdrop-blur-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <span className="font-mono text-xs text-cyber-300">&lt;AI /&gt;</span>
            </motion.div>
            <motion.div 
              className="absolute top-1/4 right-0 md:top-1/3 md:-right-12 z-20 glass-card px-3 py-1.5 rounded-lg hidden md:block border border-white/10 bg-surface-900/60 backdrop-blur-md"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            >
              <span className="font-mono text-xs text-primary-300">ML</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-10 left-1/4 md:bottom-20 md:-left-4 z-20 glass-card px-3 py-1.5 rounded-lg hidden md:block border border-white/10 bg-surface-900/60 backdrop-blur-md"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 2 }}
            >
              <span className="font-mono text-xs text-surface-200">&#123; &#125;</span>
            </motion.div>
            <motion.div 
              className="absolute bottom-1/4 right-10 md:bottom-1/3 md:right-0 z-20 glass-card px-3 py-1.5 rounded-lg hidden md:block border border-white/10 bg-surface-900/60 backdrop-blur-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="font-mono text-xs text-cyber-400">def train():</span>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-cyber-500 rounded-full blur-2xl opacity-20 animate-pulse-slow" />
              <img 
                src={personalInfo.profileImage} 
                alt="Dulipudi Subhash" 
                className="profile-frame w-full h-full object-cover border-4 border-surface-800 shadow-2xl relative z-10"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity, y }}
      >
        <span className="text-xs text-surface-400 font-medium uppercase tracking-wider">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 text-primary-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
