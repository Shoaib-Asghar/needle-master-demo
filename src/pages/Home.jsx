import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { StitchDivider } from '../components/ui/StitchDivider';
import { categories, products, recentWork, reviews } from '../data/mockData';

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO (Spec Section 1.5 & 4.1) */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-charcoal pt-20 pb-24 md:py-32 px-4 md:px-12 border-b border-border"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        {/* Muslin tint overlay to maintain theme and legibility */}
        <div className="absolute inset-0 bg-muslin/90" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block font-mono text-xs text-maroon uppercase tracking-widest mb-4 px-3 py-1 border border-maroon/30 bg-maroon/5">
              Commercial Market · Rawalpindi
            </span>
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-5xl font-display text-charcoal mb-5 leading-tight"
          >
            “Cut once. Fitted for life.”
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-charcoal/85 text-sm md:text-base font-sans max-w-xl mx-auto mb-8 leading-relaxed"
          >
            Men and women's customised designer wear, crafted by hand in Rawalpindi. Sherwanis, prince coats, tuxedos, tailored suits, lehengas, and luxury formals measured and cut for your body alone.
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <Link to="/book" className="w-full sm:w-auto block">
              <Button variant="primary" size="lg" className="w-full bg-maroon text-chalk hover:bg-[#5C1620]">
                Book a Fitting
              </Button>
            </Link>
            <Link to="/recent-work" className="w-full sm:w-auto block">
              <Button variant="outline" size="lg" className="w-full text-charcoal border-charcoal/50 hover:bg-charcoal/5">
                See Our Work
              </Button>
            </Link>
          </motion.div>

          {/* Turnaround Lead Note (E2) */}
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}
            className="mt-8 text-xs font-mono text-muted italic"
          >
            Most orders are ready in 3–4 weeks — a little longer during peak wedding season (Nov–Feb). Book early to be safe.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: GARMENT STRIP (Spec Section 4.1 - Pinned Swatch Cards) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold">Our Specialties</span>
            <h2 className="text-3xl md:text-5xl font-display text-charcoal">Bespoke Categories</h2>
          </div>
          <Link to="/collections" className="font-mono text-xs text-maroon hover:underline uppercase tracking-wider">
            Explore All Collections ➔
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.slice(0, 4).map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group pinned-swatch bg-secondary p-4 border border-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <Link to={`/collections?cat=${cat.id}`} className="block">
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-charcoal/10 relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.88] group-hover:brightness-100"
                  />
                  {/* Shadowy overlay until hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  <div className="absolute top-2 right-2 bg-charcoal/90 text-brass text-xs font-mono px-2 py-0.5 uppercase tracking-wider">
                    Hand Cut
                  </div>
                </div>
                <h3 className="font-display text-xl text-charcoal mb-1 group-hover:text-maroon transition-colors">{cat.name}</h3>
                <span className="font-mono text-xs text-muted uppercase tracking-wider">View Custom Specs ➔</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <StitchDivider className="max-w-7xl mx-auto" />

      {/* SECTION 3: FEATURED POSTS / FROM THE SHOP FLOOR (Spec Section 4.1 & F2) */}
      <section className="py-20 bg-charcoal text-chalk px-4 md:px-8 pattern-grid-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-brass uppercase tracking-widest block mb-2">Curated Workshop Gallery</span>
            <h2 className="text-3xl md:text-5xl font-display text-chalk">From the Shop Floor</h2>
            <p className="text-chalk/70 text-sm max-w-xl mx-auto mt-3">
              Unfiltered photos of recently completed orders, ready for customer fittings in Rawalpindi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWork.slice(0, 6).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal/80 border border-brass/30 p-4 flex flex-col justify-between"
              >
                <div className="aspect-[4/5] overflow-hidden mb-4 bg-black/40">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase text-brass tracking-wider block mb-1">
                    {item.category.replace('-', ' ')}
                  </span>
                  <p className="font-sans text-sm text-chalk/90 leading-relaxed italic">
                    "{item.caption}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/recent-work">
              <Button variant="outline" className="text-chalk border-brass/50 hover:bg-brass/10">
                View Full Work Archive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: REVIEWS CONDENSED (Spec Section 4.1 & B1) */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold">Client Feedback</span>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-3">Google Reviews</h2>
          <div className="flex justify-center items-center gap-1 text-brass text-sm font-mono">
            ★★★★★ <span className="text-charcoal text-xs ml-2">5.0 Star Rating in Commercial Market</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.id} className="bg-secondary p-6 border border-border flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-display font-medium text-charcoal">{r.author}</span>
                  <span className="font-mono text-xs text-muted">{r.date}</span>
                </div>
                <div className="text-brass text-xs font-mono mb-3">★★★★★</div>
                <p className="font-sans text-sm text-charcoal/80 italic leading-relaxed">
                  "{r.text}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-xs font-mono text-muted uppercase">
                Verified Customer Review
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/reviews" className="font-mono text-xs text-maroon hover:underline uppercase tracking-wider">
            Read More Customer Feedback ➔
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
