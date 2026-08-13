import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, occasions, products } from '../data/mockData';
import { Button } from '../components/ui/Button';

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeOccasion, setActiveOccasion] = useState('all');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  // Combined AND-logic filtering (Spec Section 4.2)
  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const occasionMatch = activeOccasion === 'all' || product.occasions.includes(activeOccasion);
    return categoryMatch && occasionMatch;
  });

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 border-b border-border pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Catalog & Customization Specs
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Bespoke Collections
          </h1>
          <p className="text-muted text-sm max-w-2xl">
            Select a garment silhouette and occasion below to explore custom options or initiate a fitting design inquiry.
          </p>
        </header>

        {/* TOP LEVEL NAV: Garment Types (Spec Section 4.2) */}
        <div className="mb-8">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-3 font-medium">
            1. Select Garment Type
          </span>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap border ${activeCategory === 'all' ? 'bg-charcoal text-chalk border-charcoal' : 'bg-secondary text-charcoal border-border hover:border-charcoal'}`}
            >
              All Types
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors whitespace-nowrap border ${activeCategory === cat.id ? 'bg-charcoal text-chalk border-charcoal' : 'bg-secondary text-charcoal border-border hover:border-charcoal'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* SECONDARY FILTER ROW: Occasion Tags (Spec Section 4.2) */}
        <div className="mb-12">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-3 font-medium">
            2. Filter by Occasion
          </span>
          <div className="flex flex-wrap gap-2">
            {occasions.map(occ => (
              <button
                key={occ.id}
                onClick={() => setActiveOccasion(occ.id)}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all rounded-full border ${activeOccasion === occ.id ? 'bg-bottle text-chalk border-bottle font-semibold' : 'bg-transparent text-charcoal border-border hover:border-bottle'}`}
              >
                {occ.name}
              </button>
            ))}
          </div>
        </div>

        {/* RESULT COUNT IN IBM PLEX MONO */}
        <div className="mb-8 flex justify-between items-center border-b border-border pb-4 font-mono text-xs text-muted">
          <span>
            Showing <strong className="text-maroon font-semibold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'garment' : 'garments'}
          </span>
          <Link to="/book" className="text-maroon hover:underline">
            Book a Fitting Appointment ➔
          </Link>
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-secondary border border-border">
            <p className="font-mono text-sm text-muted mb-4">No garments match the selected combination.</p>
            <Button variant="outline" size="sm" onClick={() => { setActiveCategory('all'); setActiveOccasion('all'); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group pinned-swatch bg-secondary p-4 border border-border flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div>
                  <div className="aspect-[3/4] overflow-hidden bg-charcoal/10 relative mb-4">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.88] group-hover:brightness-100" 
                    />
                    {/* Shadowy overlay until hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Occasion Tags (Bottle Green) */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {product.occasions.map(tag => (
                      <span key={tag} className="font-mono text-[9px] uppercase tracking-wider bg-bottle/10 text-bottle px-2 py-0.5 border border-bottle/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-display text-xl text-charcoal mb-1.5 group-hover:text-maroon transition-colors">{product.name}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80 flex gap-3">
                  <Link to={`/customize/${product.id}`} className="flex-1">
                    <Button variant="primary" size="sm" className="w-full">
                      Customize Specs
                    </Button>
                  </Link>
                  <Link to="/book" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Inquire Fitting
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Collections;
