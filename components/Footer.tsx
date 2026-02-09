
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold"></div>
              <span className="text-xl font-bold tracking-tight text-white">NUMBERDAR PROPERTIES</span>
            </div>
            <p className="text-sm leading-relaxed">
              We provide the most exclusive real estate deals. Our platform is built on trust, transparency and technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">LI</a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">TW</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Home</a></li>
              <li><a href="#properties" className="hover:text-brand-500 transition-colors">Properties</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Agent Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Legal Notices</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-sm mb-6 leading-relaxed">Join our weekly newsletter for the best property insights.</p>
            <div className="flex gap-2">
              <input
                placeholder="Email address"
                className="w-full bg-slate-800 border-none px-4 py-3 rounded-xl text-sm outline-none focus:ring-1 focus:ring-brand-500"
              />
              <button className="bg-brand-500 text-white px-4 py-3 rounded-xl hover:bg-brand-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 NUMBERDAR PROPERTIES. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">🌐 English (US)</span>
            <span className="flex items-center gap-1">💰 IND</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
