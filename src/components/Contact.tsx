import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Let's Build Something Intelligent
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-surface-200/60 max-w-2xl mx-auto text-lg"
          >
            Have an opportunity, project idea, or collaboration in mind? Let's connect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <motion.a 
              variants={itemVariants}
              href={`mailto:${personalInfo.email}`}
              className="group glass-card p-5 flex items-center gap-4 hover:translate-x-1 hover:border-primary-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Mail className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white mb-1">Email</h3>
                <p className="text-sm text-surface-200/50">{personalInfo.email}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-surface-200/30 group-hover:text-primary-500 transition-colors" />
            </motion.a>

            <motion.a 
              variants={itemVariants}
              href={`tel:${personalInfo.phone}`}
              className="group glass-card p-5 flex items-center gap-4 hover:translate-x-1 hover:border-primary-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Phone className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white mb-1">Phone</h3>
                <p className="text-sm text-surface-200/50">{personalInfo.phone}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-surface-200/30 group-hover:text-primary-500 transition-colors" />
            </motion.a>

            <motion.a 
              variants={itemVariants}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-5 flex items-center gap-4 hover:translate-x-1 hover:border-primary-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white mb-1">LinkedIn Profile</h3>
                <p className="text-sm text-surface-200/50">Connect with me</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-surface-200/30 group-hover:text-primary-500 transition-colors" />
            </motion.a>

            <motion.a 
              variants={itemVariants}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-5 flex items-center gap-4 hover:translate-x-1 hover:border-primary-500/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Github className="w-6 h-6 text-primary-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white mb-1">GitHub Profile</h3>
                <p className="text-sm text-surface-200/50">Check out my repos</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-surface-200/30 group-hover:text-primary-500 transition-colors" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-surface-900/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-surface-900/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-surface-900/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="w-full bg-surface-900/50 border border-white/10 rounded-xl px-5 py-3 text-white placeholder:text-surface-200/40 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
