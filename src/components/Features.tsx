import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Layers, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Core AI Model Engineering',
    description: 'Custom ML & Deep Learning architectures optimized for high accuracy, real-time inference, and minimal computational overhead.',
    gradient: 'from-violet-500 to-indigo-600',
    accentColor: '#8b5cf6',
  },
  {
    icon: Cpu,
    title: 'Generative AI Pipelines',
    description: 'LLM integration, fine-tuning, prompt engineering, and RAG pipelines powering dynamic conversational AI interfaces.',
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
  },
  {
    icon: Layers,
    title: 'Full-Stack Architecture',
    description: 'End-to-end full stack web platforms built with React, TypeScript, Python, RESTful APIs, and modern cloud databases.',
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: '#10b981',
  },
  {
    icon: Zap,
    title: 'Real-Time Data Analytics',
    description: 'High-throughput data cleaning, feature extraction, real-time streaming, and interactive visualization dashboards.',
    gradient: 'from-amber-500 to-orange-600',
    accentColor: '#f59e0b',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" /> Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Engineering High-Performance <span className="gradient-text-static">AI Systems</span>
          </h2>
          <p className="text-surface-200/70 text-lg leading-relaxed">
            Delivering robust machine learning solutions, generative AI models, and scalable full-stack applications with state-of-the-art precision.
          </p>
        </motion.div>

        {/* Feature Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
                style={{ perspective: 1000 }}
                className="glass-card-hover p-8 md:p-10 relative group overflow-hidden border border-white/5 rounded-3xl"
              >
                {/* Background Accent Glow */}
                <div
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[90px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: feature.accentColor }}
                />

                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Icon Badge */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-[14px] bg-surface-950/80 backdrop-blur-md flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-surface-200/70 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-sm font-medium text-primary-400 group-hover:text-white transition-colors">
                    <span>Explore Architecture</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
