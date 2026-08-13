import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoPlayer } from '../components/ui/VideoPlayer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { measurementVideos } from '../data/measurementVideos';

const measurementsList = [
  { id: 'chest', name: 'Chest Circumference', videoKey: 'chest', desc: 'Measure horizontally around the fullest part of your chest, keeping tape level under arms.' },
  { id: 'waist', name: 'Waist Circumference', videoKey: 'waist', desc: 'Measure around your natural waistline, where your trousers sit.' },
  { id: 'shoulder', name: 'Shoulder Width', videoKey: 'shoulder', desc: 'Measure from one shoulder tip to the other across the top of your back.' },
  { id: 'sleeve', name: 'Sleeve Length', videoKey: 'sleeve', desc: 'Measure from the tip of the shoulder down to the wrist bone.' },
  { id: 'length', name: 'Coat / Sherwani Length', videoKey: 'length', desc: 'Measure from the base of the collar seam down to the desired bottom hem.' },
  { id: 'trouser', name: 'Trouser Inseam / Length', videoKey: 'trouser', desc: 'Measure from the crotch seam straight down to the ankle bone.' }
];

const MeasurementFlow = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [unit, setUnit] = useState('INCH');
  const [values, setValues] = useState({});

  const currentMeasurement = measurementsList[currentIdx];
  const videoData = measurementVideos[currentMeasurement.videoKey] || {
    title: `How to measure ${currentMeasurement.name}`,
    videoUrl: '/images/video-1.mp4',
    source: 'local',
    credit: 'Needle Master'
  };

  const progress = ((currentIdx) / measurementsList.length) * 100;

  const handleNext = () => {
    if (currentIdx < measurementsList.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      if (onComplete) {
        onComplete({ ...values, unit });
      }
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto h-full flex flex-col font-sans">
      <div className="mb-8">
        <span className="font-mono text-xs text-maroon uppercase tracking-widest block mb-2 font-semibold">
          Anatomical Measurements
        </span>
        <h2 className="text-3xl md:text-4xl font-display mb-4 text-charcoal">Guided Self-Measurement Guide</h2>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-border rounded-none overflow-hidden">
            <motion.div 
              className="h-full bg-maroon"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="text-xs uppercase font-mono tracking-wider text-muted">
            Step {currentIdx + 1} of {measurementsList.length} ({Math.round(progress)}%)
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1">
        
        {/* LEFT: Video */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="aspect-[4/3] bg-charcoal overflow-hidden relative shadow-md border border-brass/40">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMeasurement.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <VideoPlayer 
                  src={videoData.videoUrl} 
                  source={videoData.source}
                  credit={videoData.credit}
                  startTime={videoData.startTime}
                  endTime={videoData.endTime}
                  title={`How to measure: ${currentMeasurement.name}`}
                  autoPlay={true}
                  className="w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT: Form Input */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-4">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-display text-charcoal">{currentMeasurement.name}</h3>
              
              {/* Unit Toggle */}
              <div className="flex bg-secondary p-1 border border-border">
                <button 
                  onClick={() => setUnit('INCH')}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${unit === 'INCH' ? 'bg-maroon text-chalk' : 'text-muted hover:text-charcoal'}`}
                >
                  Inch
                </button>
                <button 
                  onClick={() => setUnit('CM')}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-colors ${unit === 'CM' ? 'bg-maroon text-chalk' : 'text-muted hover:text-charcoal'}`}
                >
                  CM
                </button>
              </div>
            </div>
            
            <p className="text-sm text-charcoal/80 mb-8 font-sans leading-relaxed">{currentMeasurement.desc}</p>
            
            <div className="max-w-xs mb-8">
              <Input 
                type="number"
                label={`${currentMeasurement.name} (${unit})`}
                placeholder={`Enter measurement in ${unit.toLowerCase()}`}
                value={values[currentMeasurement.id] || ''}
                onChange={(e) => setValues(prev => ({ ...prev, [currentMeasurement.id]: e.target.value }))}
                className="text-xl font-mono"
                autoFocus
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <Button variant="secondary" onClick={handleBack} disabled={currentIdx === 0} className="w-1/3">
              Previous
            </Button>
            <Button variant="primary" onClick={handleNext} className="w-2/3">
              {currentIdx === measurementsList.length - 1 ? 'Save & Attach Measurements' : 'Next Measurement ➔'}
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeasurementFlow;
