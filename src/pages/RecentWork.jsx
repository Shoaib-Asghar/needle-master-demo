import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Grid, Film } from 'lucide-react';
import { recentWork, videoItems, categories } from '../data/mockData';
import { VideoPlayer } from '../components/ui/VideoPlayer';

const RecentWork = () => {
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'videos'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const filteredWork = activeCategory === 'all'
    ? recentWork
    : recentWork.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-muslin py-10 md:py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-10 border-b border-border pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-1">
            Workshop Showcase
          </span>
          <h1 className="text-3xl md:text-4xl font-display text-charcoal mb-2">
            Recent Work & Workshop Footage
          </h1>
          <p className="text-muted text-sm max-w-2xl font-sans leading-relaxed">
            Real garments cut, fitted, and completed in our Commercial Market shop, alongside behind-the-seams video footage from our cutting bench.
          </p>
        </header>

        {/* View Switcher: Photos vs Videos (Logical Merger) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto bg-secondary p-1 border border-border">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex justify-center items-center gap-2 px-4 py-3 sm:py-2 font-mono text-xs uppercase tracking-wider transition-colors w-full sm:w-auto ${activeTab === 'gallery' ? 'bg-charcoal text-chalk font-semibold' : 'text-charcoal hover:text-maroon'}`}
            >
              <Grid size={14} /> Completed Garments ({recentWork.length})
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex justify-center items-center gap-2 px-4 py-3 sm:py-2 font-mono text-xs uppercase tracking-wider transition-colors w-full sm:w-auto ${activeTab === 'videos' ? 'bg-charcoal text-chalk font-semibold' : 'text-charcoal hover:text-maroon'}`}
            >
              <Film size={14} /> Behind the Seams ({videoItems.length})
            </button>
          </div>

          {activeTab === 'gallery' && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider border transition-colors ${activeCategory === 'all' ? 'bg-maroon text-chalk border-maroon' : 'bg-transparent text-charcoal border-border hover:border-charcoal'}`}
              >
                All
              </button>
              {categories.slice(0, 4).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider border transition-colors ${activeCategory === cat.id ? 'bg-maroon text-chalk border-maroon' : 'bg-transparent text-charcoal border-border hover:border-charcoal'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TAB 1: Completed Garments Photo Gallery */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWork.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group pinned-swatch bg-secondary p-4 border border-border flex flex-col justify-between shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-4 bg-charcoal/10 relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.88] group-hover:brightness-100" 
                  />
                  {/* Shadowy overlay until hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                <div>
                  <span className="font-mono text-xs uppercase text-maroon tracking-wider block mb-1">
                    {item.category.replace('-', ' ')}
                  </span>
                  <h3 className="font-display text-lg text-charcoal mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted italic leading-relaxed bg-muslin/60 p-2.5 border-l-2 border-brass">
                    "{item.caption}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 2: Behind the Seams Video Footage */}
        {activeTab === 'videos' && (
          <div>
            <div className="mb-6 p-4 bg-secondary border border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-maroon font-semibold block mb-1">
                Cutting Bench Footage
              </span>
              <p className="font-sans text-sm text-charcoal/80">
                "See the stitching, not just the finish." Watch hand-piping, chalk marking, and full canvas chest assembly in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoItems.map((vItem, i) => (
                <motion.div
                  key={vItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-secondary border border-border p-4 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="aspect-video bg-charcoal overflow-hidden mb-3 relative cursor-pointer group shadow-sm border border-brass/30"
                    onClick={() => setActiveVideoModal(vItem)}
                  >
                    <img src={vItem.thumbnail} alt={vItem.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-brass text-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} fill="#2A211C" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-base text-charcoal mb-1 leading-snug">{vItem.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      {vItem.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Video Lightbox Modal */}
        {activeVideoModal && (
          <div 
            className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideoModal(null)}
          >
            <div 
              className="bg-charcoal border border-brass p-4 max-w-3xl w-full text-chalk relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-brass/30 font-mono text-xs text-brass uppercase">
                <span>{activeVideoModal.title}</span>
                <button onClick={() => setActiveVideoModal(null)} className="text-chalk hover:text-brass text-sm">✕ Close</button>
              </div>
              <div className="aspect-video w-full">
                <VideoPlayer src={activeVideoModal.videoUrl} title={activeVideoModal.title} autoPlay={true} />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default RecentWork;
