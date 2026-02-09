
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                alt="Our Office"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-500/10 rounded-full -z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100 dark:border-slate-800">
                <p className="text-4xl font-bold text-brand-500">25+</p>
                <p className="text-slate-600 dark:text-slate-400 font-semibold uppercase text-xs tracking-widest mt-1">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              We Are The Most Trusted <br /> Real Estate Company
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              At LuxeEstate, we don't just sell properties; we find homes where memories are built. Our team of expert agents brings together decades of local knowledge and global reach.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Unmatched local market expertise",
                "Personalized property matching algorithm",
                "End-to-end legal and financial assistance",
                "Exclusive access to off-market listings"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-500">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="px-8 py-3 border-2 border-brand-500 text-brand-500 rounded-xl font-bold hover:bg-brand-500 hover:text-white transition-all">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
