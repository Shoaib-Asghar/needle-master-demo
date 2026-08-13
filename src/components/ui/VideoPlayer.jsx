import React, { useRef, useState, useEffect } from 'react';
import { cn } from './Button';

const VideoPlayer = ({ src, poster, title, className, autoPlay = true, source = 'local', credit, startTime, endTime }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (source === 'local' && videoRef.current && autoPlay) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
  }, [src, autoPlay, source]);

  const togglePlay = () => {
    if (source === 'YouTube') return; // Cannot easily control standard iframe play state without YT API
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };



  return (
    <div className={cn("relative group overflow-hidden bg-secondary w-full h-full", className)}>
      
      {/* Permanent Title Overlay */}
      {title && (
        <div className="absolute top-6 left-6 z-20 pointer-events-none">
          <span className="text-sm font-medium tracking-wide uppercase bg-primary text-white px-4 py-2 shadow-xl border border-white/10">
            {title}
          </span>
        </div>
      )}



      {source === 'YouTube' ? (
        <div className="w-full h-full pointer-events-auto bg-black relative">
          <iframe 
            src={`https://www.youtube.com/embed/${src}?autoplay=${autoPlay ? 1 : 0}&mute=1&loop=1&playlist=${src}&controls=0&modestbranding=1&rel=0&showinfo=0${startTime ? `&start=${startTime}` : ''}${endTime ? `&end=${endTime}` : ''}`}
            title={title}
            className="absolute inset-0 w-full h-full object-cover scale-[1.35] pointer-events-none opacity-90" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Overlay to catch clicks and prevent interaction with youtube player UI directly */}
          <div className="absolute inset-0 z-10"></div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          onClick={togglePlay}
        />
      )}
      
      {/* Overlay controls - for local videos */}
      {source === 'local' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 z-10 pointer-events-none">
          <div className="flex items-center justify-between pointer-events-auto mt-auto">
            <button 
              onClick={togglePlay} 
              className="text-xs uppercase tracking-widest font-mono font-medium text-chalk bg-charcoal/80 px-3 py-1.5 border border-brass/40 hover:bg-brass hover:text-charcoal transition-colors"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { VideoPlayer };
