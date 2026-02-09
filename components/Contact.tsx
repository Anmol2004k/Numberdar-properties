
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending contact form...', formData);
    // Mock API call
    setTimeout(() => {
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-brand-500 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="mb-10 text-brand-100">Have questions? We're here to help you find your perfect home.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">📍</div>
                  <div>
                    <h4 className="font-bold">Head Office</h4>
                    <p className="text-sm text-brand-100">Railway road Ganuar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">📞</div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-sm text-brand-100">+91 75033 00060</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">✉️</div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-sm text-brand-100">numberdar-properties@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">WA</div>
              </div>
            </div>

            <div className="lg:w-2/3 p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-brand-500 outline-none transition-all dark:text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSent}
                  className={`w-full md:w-auto px-12 py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 ${
                    isSent ? 'bg-green-500' : 'bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20'
                  }`}
                >
                  {isSent ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
