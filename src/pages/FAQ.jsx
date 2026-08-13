import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/mockData';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Clear Answers
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto font-sans">
            Everything you need to know about our fitting appointments, lead times, deposit policies, and self-measurement options.
          </p>
        </header>

        {/* Accordion List (Spec 4.6) */}
        <div className="space-y-4 mb-16">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-secondary border border-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-charcoal/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl text-charcoal font-medium">
                    {item.q}
                  </span>
                  <span className={`p-1 text-brass transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 font-sans text-sm text-charcoal/80 leading-relaxed border-t border-border/40 bg-muslin/30">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="bg-charcoal text-chalk p-8 border border-brass/30 text-center pattern-grid-bg">
          <h3 className="font-display text-2xl text-chalk mb-2">Have a question not listed here?</h3>
          <p className="font-sans text-xs text-chalk/70 mb-6 max-w-md mx-auto">
            Our tailors are available on WhatsApp to discuss custom fabric choices, fitting schedules, or group orders directly.
          </p>
          <div className="flex justify-center gap-4 font-mono text-xs">
            <Link to="/book" className="bg-maroon text-chalk px-6 py-3 uppercase tracking-wider hover:bg-[#5C1620]">
              Book a Fitting
            </Link>
            <Link to="/fabric-guide" className="bg-transparent border border-brass text-brass px-6 py-3 uppercase tracking-wider hover:bg-brass/10">
              Read Fabric Guide
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
