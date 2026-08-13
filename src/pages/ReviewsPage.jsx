import React from 'react';
import { reviews } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const ReviewsPage = () => {
  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Verified Customer Feedback
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Customer Reviews
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Real feedback from grooms, brothers, and wedding guests fitted at our Commercial Market shop in Rawalpindi.
          </p>
        </header>

        {/* Mocked Google Reviews Widget (Spec Section 4.12 B1) */}
        <div className="bg-secondary p-8 border border-border shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              {/* Google G Badge Icon */}
              <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center font-bold text-lg font-serif text-charcoal shadow-sm">
                G
              </div>
              <div>
                <h2 className="font-display text-xl text-charcoal">Needle Master Tailors</h2>
                <span className="font-mono text-xs text-muted">Google Business Profile Listing</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-brass text-lg font-mono">
                ★★★★★ <span className="text-charcoal font-bold text-sm ml-2">5.0</span>
              </div>
              <span className="font-mono text-xs text-muted uppercase">Based on customer ratings</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map(r => (
              <div key={r.id} className="shadow-card bg-muslin p-6 border border-border flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-display font-medium text-charcoal text-base">{r.author}</h3>
                      <span className="font-mono text-xs text-muted">Local Guide · Commercial Market</span>
                    </div>
                    <span className="font-mono text-xs text-muted">{r.date}</span>
                  </div>

                  <div className="text-brass text-xs font-mono mb-3">★★★★★</div>
                  
                  <p className="font-sans text-sm text-charcoal/90 leading-relaxed italic">
                    "{r.text}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 text-[9px] font-mono text-muted uppercase">
                  Verified Google Review
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-border text-center">
            <span className="font-mono text-xs text-maroon uppercase tracking-widest block">
              // DEMO PLACEHOLDER — Replace with real Google Reviews embed (e.g. Trustindex) once shop Google Business listing is set up
            </span>
          </div>
        </div>

        <div className="text-center">
          <Link to="/book">
            <Button variant="primary" size="lg">
              Book Your Fitting Appointment ➔
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ReviewsPage;
