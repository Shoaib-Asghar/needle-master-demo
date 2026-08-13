import React from 'react';
import { motion } from 'framer-motion';
import { StitchDivider } from '../components/ui/StitchDivider';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const About = () => {
  const steps = [
    { step: '01', title: 'Measure & Consult', desc: 'We take 14 precise anatomical body measurements at our Commercial Market shop.' },
    { step: '02', title: 'Draft & Cut', desc: 'Master tailors draw chalk lines directly on heavy kraft pattern paper before cutting fabric.' },
    { step: '03', title: 'Baste Fitting', desc: 'You return for a baste fitting where seams are pinned to ensure precise shoulder drape.' },
    { step: '04', title: 'Hand Finish', desc: 'Buttonholes, lapel piping, and lining are hand-stitched before final steam pressing.' }
  ];

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Craftsmanship & Origin
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            The Cutting Table Story
          </h1>
          <p className="font-mono text-xs text-brass uppercase tracking-widest">
            Commercial Market · Rawalpindi
          </p>
        </header>

        {/* Story Content Block (Spec 4.5) */}
        <section className="bg-secondary p-8 md:p-12 border border-border mb-16 shadow-sm">
          <p className="font-display text-xl md:text-2xl text-charcoal leading-relaxed mb-6">
            <span className="font-mono text-sm text-maroon font-semibold uppercase tracking-wider block mb-2">
              [Founder & Master Tailor Note]
            </span>
            Needle Master has been stitching and fitting men and women's customised designer wear in Rawalpindi's Commercial Market for decades. What started as a dedicated tailoring cutting bench has grown into a shop built around one core idea: <strong className="text-maroon">a garment made for exactly one body will always sit better than one made for anybody.</strong>
          </p>
          
          <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-6">
            Every sherwani, prince coat, tuxedo, and waistcoat that leaves our shop is cut, fitted, and finished by hand, following traditional tailoring sequences passed down through generations of master craftsman.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/80 text-xs font-mono text-charcoal">
            <div>
              <span className="text-muted block uppercase mb-1">Location</span>
              <span>Shop #3, Khan Plaza, 5th Road, Commercial Market</span>
            </div>
            <div>
              <span className="text-muted block uppercase mb-1">Specialization</span>
              <span>Wedding Grooms & Party Wardrobe Coordination</span>
            </div>
            <div>
              <span className="text-muted block uppercase mb-1">Construction</span>
              <span>Full Canvas & Hand Basted</span>
            </div>
          </div>
        </section>

        <StitchDivider />

        {/* Process Mini-Section (01-04 Sequence per Spec 4.5) */}
        <section className="py-12">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
              Sequential Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-charcoal">How a Garment is Crafted</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div 
                key={s.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary p-6 border border-border relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl text-brass font-bold block mb-3">{s.step}</span>
                  <h3 className="font-display text-lg text-charcoal mb-2">{s.title}</h3>
                  <p className="font-sans text-xs text-muted leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <Link to="/book">
            <Button variant="primary" size="lg">
              Book an In-Person Fitting
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
