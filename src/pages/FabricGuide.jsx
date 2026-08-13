import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fabricArticles } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const FabricGuide = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Buyer Education & Craftsmanship
          </span>
          {/* Spec Section 4.11 Framing text */}
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Fabric & Style Guide
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto font-sans leading-relaxed italic">
            "A few things worth knowing before your fitting."
          </p>
        </header>

        {/* Article Cards (Spec 4.11) */}
        <div className="space-y-8 mb-16">
          {fabricArticles.map((art) => {
            const isExpanded = expandedId === art.id;
            return (
              <div 
                key={art.id}
                className="pinned-swatch bg-secondary p-8 border border-border flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <span className="font-mono text-xs uppercase text-maroon tracking-widest block mb-2">
                    Master Tailor Guide
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-4">
                    {art.title}
                  </h2>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-6">
                    {art.teaser}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-border/80 text-sm font-sans text-charcoal leading-relaxed space-y-4 bg-muslin/50 p-4 mb-4"
                      >
                        <p>{art.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-border/60">
                  <button
                    onClick={() => toggleExpand(art.id)}
                    className="font-mono text-xs text-maroon hover:underline font-medium uppercase tracking-wider"
                  >
                    {isExpanded ? 'Collapse Article ▲' : 'Read Full Article ➔'}
                  </button>

                  <Link to="/book" className="font-mono text-[11px] text-muted hover:text-charcoal uppercase">
                    Discuss at fitting
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-charcoal text-chalk p-8 border border-brass/30 pattern-grid-bg">
          <h3 className="font-display text-2xl mb-2 text-chalk">Ready to select fabrics in person?</h3>
          <p className="font-sans text-xs text-chalk/70 mb-6 max-w-md mx-auto">
            Visit our Commercial Market shop to feel physical fabric swatches of Italian wool, velvet, raw silk, and jacquard.
          </p>
          <Link to="/book">
            <Button variant="primary">
              Book a Fitting Appointment
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FabricGuide;
