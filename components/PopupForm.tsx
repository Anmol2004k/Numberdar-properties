import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PropertyType, LeadFormData } from '../types';

const PopupForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    budget: '',
    propertyType: 'Apartment'
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('hasSeenPopup');
      if (!hasSeen) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', formData);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-y-auto max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] shadow-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4">
                🏠
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Tell Us Your Needs</h3>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">Our agents will find the perfect property for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <input
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <select
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-brand-500 dark:text-white appearance-none"
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                >
                  {Object.values(PropertyType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <input
                  placeholder="Budget (₹)"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/20 transition-all active:scale-[0.98] mt-2"
              >
                Send Requirements
              </button>
              
              <p className="text-center text-[10px] sm:text-xs text-slate-400">
                By submitting, you agree to our [Terms](https://www.google.com) and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
