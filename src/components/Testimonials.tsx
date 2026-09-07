import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    quote: "Subhash demonstrated exceptional AI model understanding during his internship. His ability to preprocess complex datasets and implement data visualization pipelines was top-notch.",
    author: "APSCHE Mentor",
    role: "Data Analytics Program Coordinator",
    rating: 5,
  },
  {
    quote: "Subhash's full stack Python and web integration skills are impressive. He built robust full-stack features with precision, clean code standards, and great problem-solving agility.",
    author: "EDU Skills Supervisor",
    role: "Full Stack Development Lead",
    rating: 5,
  },
  {
    quote: "Winning 2nd place in the BLOCKTHON Hackathon showed Subhash's strong analytical thinking and capacity to execute practical blockchain & AI solutions under tight deadlines.",
    author: "Hackathon Jury Panel",
    role: "BLOCKTHON 2024 Evaluation Team",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Endorsements & <span className="gradient-text-static">Recommendations</span>
          </h2>
          <p className="text-surface-200/70 text-lg">
            Feedback from internship mentors, technical evaluation panels, and hackathon juries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col justify-between relative group hover:border-primary-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-primary-400 opacity-60" />
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-surface-200/80 leading-relaxed text-sm md:text-base italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="font-display font-bold text-white text-base">
                  {review.author}
                </h4>
                <p className="text-xs text-primary-400 mt-0.5">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
