import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { journeySteps } from '../data/portfolioData';

const gradients = [
  'from-purple-500 to-indigo-500',
  'from-indigo-500 to-blue-500',
  'from-blue-500 to-cyan-500',
  'from-cyan-500 to-teal-500',
  'from-teal-500 to-green-500'
];

const glowColors = [
  'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]',
  'group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]',
  'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]',
  'group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]',
  'group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]'
];

const borderColors = [
  'group-hover:border-purple-500/50',
  'group-hover:border-indigo-500/50',
  'group-hover:border-blue-500/50',
  'group-hover:border-cyan-500/50',
  'group-hover:border-green-500/50'
];

const JourneyNode = ({ step, index, isLeft }: { step: any, index: number, isLeft: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);
  
  const gradient = gradients[index % gradients.length];
  const glow = glowColors[index % glowColors.length];
  const border = borderColors[index % borderColors.length];

  return (
    <div 
      ref={ref}
      className={`relative flex items-center justify-between w-full mb-16 md:mb-24 ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-5/12" />

      {/* Center Node */}
      <div className="absolute left-7 md:left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} p-[2px] shadow-lg animate-pulse-slow`}
        >
          <div className="w-full h-full rounded-full bg-surface-950 flex items-center justify-center">
            {step.icon && (
               typeof step.icon === 'function' || typeof step.icon === 'object' 
               ? <step.icon className="w-6 h-6 text-white" />
               : <div className="w-6 h-6 text-white flex items-center justify-center">{step.icon}</div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className={`relative w-full md:w-5/12 pl-24 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'} group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle dotted connector line desktop */}
        <div className={`absolute top-7 hidden md:block w-16 border-t-2 border-dashed border-white/20 ${isLeft ? 'right-0' : 'left-0'}`} />
        
        {/* Subtle dotted connector line mobile */}
        <div className="absolute top-7 left-14 w-10 border-t-2 border-dashed border-white/20 md:hidden" />

        <div className={`bg-surface-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 transition-all duration-300 ${glow} ${border}`}>
          <h3 className="font-display font-semibold text-xl text-white mb-2">{step.title}</h3>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-surface-200/80 pt-2 border-t border-white/10 mt-2 font-sans">
                  {step.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default function AIJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-surface-200">AI Engineering </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 relative">
              Journey
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
            </span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 bg-surface-800">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-primary-500 via-accent-500 to-cyber-400 origin-top"
              style={{ scaleY }}
            />
          </div>

          <div className="pt-8">
            {journeySteps.map((step: any, index: number) => (
              <JourneyNode 
                key={index} 
                step={step} 
                index={index} 
                isLeft={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
