
import React from 'react';
import { PropertyType, PriceCategory } from '../types';

interface FilterPanelProps {
  selectedType: string | 'All';
  setSelectedType: (type: string) => void;
  selectedCategory: string | 'All';
  setSelectedCategory: (cat: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory
}) => {
  const types = ['All', ...Object.values(PropertyType)];
  const categories = ['All', ...Object.values(PriceCategory)];

  return (
    <div className="mb-12 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
      <div className="w-full md:w-auto">
        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Property Type</label>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedType === type
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:w-auto">
        <label className="block text-xs font-bold text-slate-400 uppercase mb-3">Budget Range</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
