
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';
import FilterPanel from './FilterPanel';

const PropertyList: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const typeMatch = selectedType === 'All' || p.type === selectedType;
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory;
      return typeMatch && catMatch;
    });
  }, [selectedType, selectedCategory]);

  return (
    <section id="properties" className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Explore Our Latest Properties
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Discover the most exclusive real estate listings. From city apartments to beachfront villas, find your next sanctuary.
          </p>
        </div>

        <FilterPanel
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center"
              >
                <div className="text-slate-400 text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">No Properties Found</h3>
                <p className="text-slate-500">Try adjusting your filters to find more options.</p>
                <button
                  onClick={() => { setSelectedType('All'); setSelectedCategory('All'); }}
                  className="mt-6 text-brand-500 font-bold"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyList;
