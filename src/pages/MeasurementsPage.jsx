import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import MeasurementFlow from './MeasurementFlow';
import { ShieldCheck, Video, MapPin } from 'lucide-react';
import { sendToWhatsApp } from '../utils/whatsapp';

const MeasurementsPage = () => {
  const [activeTab, setActiveTab] = useState('d1'); // 'd1' = In person, 'd2' = Remote Video
  const [completedData, setCompletedData] = useState(null);

  const handleRemoteComplete = (measurements) => {
    setCompletedData(measurements);
    sendToWhatsApp({
      'Inquiry Type': 'Self-Submitted Measurements (Remote)',
      'Units': measurements.unit || 'INCH',
      'Measurements': measurements
    }, 'Self-Submitted Body Measurements');
  };

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Anatomical Fitting Options
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Getting Your Measurements
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Every garment at Needle Master is cut to your exact body dimensions. Select your preferred fitting method below.
          </p>
        </header>

        {/* Tab Switcher (D1 vs D2 per Spec 4.10) */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('d1')}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider border transition-all ${activeTab === 'd1' ? 'bg-charcoal text-chalk border-charcoal font-semibold shadow-sm' : 'bg-secondary text-charcoal border-border hover:border-charcoal'}`}
          >
            <MapPin size={16} className="text-brass" /> 1. In-Person Fitting (Recommended)
          </button>
          <button
            onClick={() => setActiveTab('d2')}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-wider border transition-all ${activeTab === 'd2' ? 'bg-charcoal text-chalk border-charcoal font-semibold shadow-sm' : 'bg-secondary text-charcoal border-border hover:border-charcoal'}`}
          >
            <Video size={16} className="text-brass" /> 2. Guided Video Guide (Remote)
          </button>
        </div>

        {/* D1: Primary Recommended Path (Spec 4.10) */}
        {activeTab === 'd1' && (
          <div className="bg-secondary p-8 md:p-12 border border-border shadow-sm text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-maroon/10 text-maroon flex items-center justify-center mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-maroon font-bold block mb-2">
              Primary Recommended Method
            </span>
            <h2 className="font-display text-3xl text-charcoal mb-4">The Right Way: In Person</h2>
            <p className="font-sans text-sm text-charcoal/80 leading-relaxed mb-8 max-w-xl mx-auto">
              A proper fitting at our Commercial Market shop gives the most accurate result. Our master tailors check shoulder pitch, neck posture, and fabric drape in real time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-charcoal mb-8 text-left bg-muslin p-4 border border-border">
              <div>
                <span className="text-muted block text-xs uppercase">Step 01</span>
                <span className="font-semibold">Book Fitting Slot</span>
              </div>
              <div>
                <span className="text-muted block text-xs uppercase">Step 02</span>
                <span className="font-semibold">Visit Workshop</span>
              </div>
              <div>
                <span className="text-muted block text-xs uppercase">Step 03</span>
                <span className="font-semibold">Baste Fitting Session</span>
              </div>
            </div>

            <Link to="/book">
              <Button variant="primary" size="lg">
                Book Your In-Person Fitting Appointment ➔
              </Button>
            </Link>
          </div>
        )}

        {/* D2: Secondary Remote Guided Path (Spec 4.10) */}
        {activeTab === 'd2' && (
          <div className="bg-secondary p-6 md:p-10 border border-border shadow-sm">
            
            {/* Reassuring framing banner required by Spec Section 4.10 & Section 6 */}
            <div className="bg-bottle/10 border-l-4 border-bottle p-4 mb-8 text-bottle">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-bold mb-1">
                <ShieldCheck size={16} /> Human Double-Check Guarantee
              </div>
              <p className="font-sans text-sm text-charcoal/90 leading-relaxed">
                "We'll call or WhatsApp you to double-check every measurement before we start — nothing is cut on guesswork."
              </p>
            </div>

            {completedData ? (
              <div className="text-center py-12 bg-muslin border border-border">
                <h3 className="font-display text-2xl text-charcoal mb-2">Measurements Submitted!</h3>
                <p className="font-sans text-sm text-muted max-w-md mx-auto mb-6">
                  Your self-measurement data has been compiled into a WhatsApp message. Our master tailor will review each number with you directly.
                </p>
                <Button variant="outline" size="sm" onClick={() => setCompletedData(null)}>
                  Re-enter Measurements
                </Button>
              </div>
            ) : (
              <MeasurementFlow onComplete={handleRemoteComplete} />
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default MeasurementsPage;
