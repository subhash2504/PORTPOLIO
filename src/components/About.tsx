import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { Brain, Code2, Lightbulb, Rocket, Zap } from 'lucide-react';
import { stats } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const AnimatedCounter = ({ value, label }: { value: string | number, label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');
  
  const numValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
  const suffix = value.toString().replace(/[0-9.]/g, '');
  const hasDecimal = value.toString().includes('.');
  
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView && !isNaN(numValue)) {
      const controls = animate(motionValue, numValue, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (hasDecimal) {
            setDisplayValue(latest.toFixed(1) + suffix);
          } else {
            setDisplayValue(Math.round(latest).toString() + suffix);
          }
        },
      });
      return () => controls.stop();
    } else if (isNaN(numValue)) {
        setDisplayValue(value.toString());
    }
  }, [isInView, motionValue, numValue, suffix, hasDecimal, value]);

  return (
    <div ref={ref} className="text-center relative z-10">
      <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
        {displayValue}
      </div>
      <div className="text-sm text-surface-200/60 mt-2">{label}</div>
    </div>
  );
};

export default function About() {
  const highlights = [
    { text: 'Problem Solving', icon: Brain },
    { text: 'Fast Learning', icon: Zap },
    { text: 'AI Model Development', icon: Code2 },
    { text: 'Software Development', icon: Rocket },
    { text: 'Real-World Applications', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-surface-200">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 relative">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: About text */}
            <motion.div variants={itemVariants} className="bg-surface-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
              <p className="text-lg md:text-xl text-surface-200 leading-relaxed mb-8 font-sans">
                I am an aspiring AI Engineer with a strong interest in machine learning, deep learning, generative AI, and software development. I enjoy solving problems, learning new technologies, and transforming ideas into practical applications.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-surface-200 hover:bg-white/10 hover:border-primary-500/50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary-400" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat: any, index: number) => (
                <div 
                  key={index}
                  className="group relative bg-surface-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:bg-surface-800/80 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <AnimatedCounter value={stat.value} label={stat.label} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
