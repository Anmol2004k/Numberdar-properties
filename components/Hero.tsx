
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-50/50 dark:bg-brand-950/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold mb-6">
              Ganuar's Premier Real Estate Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Find Your <span className="text-brand-500">Dream Properties</span> In Ganuar.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
              We provide a complete service for the sale, purchase or rental of real estate. We have more than 3,000+ premium listings across major location of NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-xl font-bold shadow-lg shadow-brand-500/20 transition-all transform hover:-translate-y-1">
                Browse Properties
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all transform hover:-translate-y-1">
                Contact Agent
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">15k+</p>
                <p className="text-sm text-slate-500">Premium Properties</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">10+</p>
                <p className="text-sm text-slate-500">Awards Won</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">2k+</p>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Indian Home"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl shadow-xl border border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">The Devine City Mansion</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">NH-1 highway, Ganuar</p>
                  </div>
                  <p className="text-xl font-bold text-brand-500">₹20,00,00,000</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-500 rounded-full blur-2xl opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
