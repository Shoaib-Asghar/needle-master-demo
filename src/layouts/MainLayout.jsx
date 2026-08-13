import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { PRIMARY_WHATSAPP_NUMBER } from '../utils/whatsapp';

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Recent Work', path: '/recent-work' },
    { name: 'Measurements', path: '/measurements' },
    { name: 'Fabric Guide', path: '/fabric-guide' },
    { name: 'Group Orders', path: '/group-order' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-muslin text-charcoal relative">

      {/* Sticky Dark Header */}
      <header className="sticky top-0 z-50 bg-charcoal text-chalk border-b border-brass/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-22 flex items-center justify-between relative">
          
          {/* Left: Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-xs uppercase tracking-wider font-mono font-medium text-chalk/80">
            {navLinks.slice(0, 4).map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`hover:text-brass transition-colors py-1 ${location.pathname === link.path ? 'text-brass border-b-2 border-brass font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Center: Crest Logo Image (Inverted for Dark Header) */}
          <Link to="/" className="flex items-center gap-2 group lg:absolute lg:left-1/2 lg:-translate-x-1/2 py-1">
            <img 
              src="/images/needlemaster_crest_logo.png" 
              alt="Needle Master Crest Logo" 
              className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform invert brightness-0 opacity-90 group-hover:opacity-100" 
            />
          </Link>

          {/* Right: Action CTAs & Secondary Links */}
          <div className="flex items-center gap-4">
            <nav className="hidden xl:flex items-center gap-5 text-xs uppercase tracking-wider font-mono font-medium text-chalk/80 mr-2">
              {navLinks.slice(4).map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`hover:text-brass transition-colors py-1 ${location.pathname === link.path ? 'text-brass border-b-2 border-brass font-bold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Link 
              to="/book" 
              className="hidden sm:inline-block bg-maroon text-chalk hover:bg-[#5C1620] px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
            >
              Book a Fitting
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="p-2 text-chalk hover:text-brass xl:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-charcoal border-t border-brass/20 px-6 py-6 space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 ${location.pathname === link.path ? 'text-brass font-bold' : 'text-chalk/80'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-brass/20">
              <Link 
                to="/book" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-maroon text-chalk py-2.5 text-xs font-mono uppercase tracking-wider"
              >
                Book a Fitting
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal text-chalk pt-12 pb-10 border-t border-brass/30 text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div>
            <h3 className="font-display text-xl tracking-wider text-chalk mb-2">NEEDLE MASTER</h3>
            <p className="font-mono text-xs text-brass uppercase tracking-widest mb-3">
              Men & Women Customised Designer Wear · Rawalpindi
            </p>
            <p className="text-chalk/70 leading-relaxed">
              Hand-cut and fitted designer wear for men and women in Commercial Market. Specializing in bespoke formalwear, suits, tuxedos, sherwanis, bridal wear, and wardrobe coordination.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brass mb-3">Explore</h4>
            <ul className="space-y-2 text-chalk/80 font-sans">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brass transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Address & Contact */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brass mb-3">Workshop Location</h4>
            <p className="text-chalk/80 leading-relaxed mb-2 font-sans">
              Shop #3, Khan Plaza, 5th Road,<br />
              Commercial Market, Rawalpindi,<br />
              Punjab, Pakistan
            </p>
            <a 
              href="https://maps.google.com/?q=Commercial+Market+Rawalpindi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-brass hover:underline uppercase tracking-wider"
            >
              ➔ View on Google Maps
            </a>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brass mb-3">Shop Hours & Direct</h4>
            <p className="text-chalk/80 mb-2 font-mono">
              Mon – Sat: 11:00 AM – 9:00 PM<br />
              Sunday: Closed
            </p>
            <p className="text-chalk/80 font-mono mb-3">
              Phone: 0333 5115170
            </p>
            <a 
              href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to inquire about a custom fitting.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bottle text-chalk px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider hover:bg-[#152A1D] transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp Us Directly
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-chalk/10 flex flex-col sm:flex-row justify-between items-center text-chalk/50 font-mono gap-2 text-[11px]">
          <p>© {new Date().getFullYear()} Needle Master Tailors Rawalpindi. All rights reserved.</p>
          <p className="text-brass/70">// DEMO VERSION — Static Front-End Preview</p>
        </div>
      </footer>

      {/* Floating Action Cluster */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5">
        <a 
          href="tel:03335115170"
          className="w-10 h-10 rounded-full bg-charcoal border border-brass text-brass flex items-center justify-center shadow-lg hover:bg-brass hover:text-charcoal transition-all"
          title="Call Shop Directly"
          aria-label="Call Shop"
        >
          <Phone size={18} />
        </a>

        <a 
          href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to ask about a custom order')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] border-2 border-brass text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform relative group"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default MainLayout;
