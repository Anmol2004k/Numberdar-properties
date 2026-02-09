
import React from 'react';
import { motion } from 'framer-motion';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold rounded-lg shadow-sm">
            {property.type}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-brand-500 text-white text-xs font-bold rounded-lg shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-brand-500 transition-colors">
          {property.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex items-center gap-1">
          <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.location}
        </p>

        <div className="flex items-center justify-between py-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{property.beds}</span>
              <span className="text-xs uppercase">Beds</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{property.baths}</span>
              <span className="text-xs uppercase">Baths</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">{property.sqft}</span>
              <span className="text-xs uppercase">Sqft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {formatCurrency(property.price)}
          </p>
          <button className="text-brand-500 font-bold text-sm hover:underline">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
