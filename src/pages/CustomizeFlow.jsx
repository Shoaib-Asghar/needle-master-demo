import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Check, MessageCircle } from 'lucide-react';
import { products, customizationOptions } from '../data/mockData';
import { Button } from '../components/ui/Button';
import MeasurementFlow from './MeasurementFlow';
import { sendToWhatsApp } from '../utils/whatsapp';

const steps = [
  { id: 'fabric', title: 'Choose Fabric', key: 'fabric' },
  { id: 'color', title: 'Choose Color', key: 'color' },
  { id: 'neckline', title: 'Lapel / Collar Style', key: 'neckline' },
  { id: 'sleeves', title: 'Fit & Sleeve Cut', key: 'sleeves' },
  { id: 'length', title: 'Button & Hardware Style', key: 'length' },
  { id: 'trouser', title: 'Trouser / Pajama Style', key: 'trouser' },
  { id: 'measurements', title: 'Add Anatomical Measurements', key: 'measurements' },
  { id: 'reference', title: 'Upload Reference Photo', key: 'reference' },
  { id: 'review', title: 'Review Custom Specs', key: 'review' }
];

const CustomizeFlow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id) || products[0];

  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    fabric: null,
    color: null,
    neckline: null,
    sleeves: null,
    length: null,
    trouser: null,
    measurements: null,
    referenceImage: null,
    specialInstructions: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    // Auto-advance for simple options
    if (['fabric', 'color', 'neckline', 'sleeves', 'length', 'trouser'].includes(key)) {
      setTimeout(() => {
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      }, 300);
    }
  };

  const handleSendWhatsAppInquiry = () => {
    sendToWhatsApp({
      'Inquiry Category': 'Custom Design Configurator Specs',
      'Base Garment': product.name,
      'Fabric Choice': selections.fabric ? selections.fabric.name : 'Standard',
      'Color Choice': selections.color ? selections.color.name : 'Standard',
      'Lapel/Collar Style': selections.neckline ? selections.neckline.name : 'Standard',
      'Fit Style': selections.sleeves ? selections.sleeves.name : 'Standard',
      'Buttons/Hardware': selections.length ? selections.length.name : 'Standard',
      'Bottom / Trouser': selections.trouser ? selections.trouser.name : 'Standard',
      'Self Measurements': selections.measurements ? selections.measurements : 'Will measure in person',
      'Special Instructions': selections.specialInstructions || 'None'
    }, `Custom Design Inquiry — ${product.name}`);

    setSubmitted(true);
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    if (step.key === 'measurements') {
      return (
        <MeasurementFlow 
          onComplete={(measurements) => {
            setSelections(prev => ({ ...prev, measurements }));
            setCurrentStep(prev => prev + 1);
          }} 
        />
      );
    }

    if (step.key === 'reference') {
      return (
        <div className="flex flex-col max-w-xl">
          <span className="font-mono text-xs text-maroon uppercase tracking-widest block mb-2 font-semibold">
            Customization Step 8 of 9
          </span>
          <h2 className="text-3xl md:text-4xl font-display text-charcoal mb-2">Have a specific design in mind?</h2>
          <p className="text-muted text-sm mb-8 font-sans">Upload a reference photo or specify collar/embroidery preferences for our master tailor.</p>
          
          <div className="border-2 border-dashed border-border p-8 text-center mb-8 bg-secondary hover:border-brass transition-colors cursor-pointer">
            <span className="text-charcoal font-mono text-xs tracking-wider uppercase block">Upload Reference Image</span>
            <span className="text-muted font-mono text-xs block mt-1">Client-side preview only</span>
            <input type="file" className="hidden" />
          </div>

          <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium mb-2">
            Special Instructions / Custom Embroidery Notes
          </label>
          <textarea 
            rows={4}
            className="w-full border border-border bg-transparent p-4 text-sm font-sans focus:outline-none focus:border-maroon mb-8"
            placeholder="E.g., I want heavy zari embroidery on the collar similar to the reference photo..."
            value={selections.specialInstructions}
            onChange={(e) => setSelections(prev => ({ ...prev, specialInstructions: e.target.value }))}
          />

          <Button variant="primary" onClick={() => setCurrentStep(prev => prev + 1)}>
            Review Custom Specifications ➔
          </Button>
        </div>
      );
    }

    if (step.key === 'review') {
      return (
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-maroon uppercase tracking-widest block mb-2 font-semibold">
            Final Step
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-8">Review Custom Specifications</h2>
          
          {submitted ? (
            <div className="bg-secondary border-2 border-brass p-8 text-center shadow-lg mb-8">
              <h3 className="font-display text-2xl text-charcoal mb-2">Opening WhatsApp...</h3>
              <p className="font-sans text-xs text-muted mb-6">
                Just hit send in your WhatsApp chat and our tailor will confirm fabric availability and pricing for your custom specs!
              </p>
              <Button variant="outline" size="sm" onClick={() => navigate('/collections')}>
                Return to Collections
              </Button>
            </div>
          ) : (
            <div className="bg-secondary p-8 mb-8 border border-border">
              <div className="flex gap-6 mb-8 border-b border-border pb-8 items-center">
                <img src={product.images[0]} alt={product.name} className="w-24 h-32 object-cover border border-brass/50" />
                <div>
                  <h3 className="font-display text-2xl text-charcoal mb-1">{product.name}</h3>
                  <p className="text-maroon font-mono text-xs uppercase tracking-wider mb-2">Custom-Bespoke Order</p>
                  <p className="font-mono text-xs text-muted">
                    Final price confirmed during in-person fitting or WhatsApp consultation based on fabric weight.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-mono mb-8">
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Fabric</span>
                  <span className="font-semibold text-charcoal">{selections.fabric?.name || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Color</span>
                  <span className="font-semibold text-charcoal">{selections.color?.name || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Lapel / Collar</span>
                  <span className="font-semibold text-charcoal">{selections.neckline?.name || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Fit & Sleeve Cut</span>
                  <span className="font-semibold text-charcoal">{selections.sleeves?.name || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Buttons / Hardware</span>
                  <span className="font-semibold text-charcoal">{selections.length?.name || 'Standard'}</span>
                </div>
                <div>
                  <span className="text-muted block uppercase text-xs mb-1">Trouser / Bottom</span>
                  <span className="font-semibold text-charcoal">{selections.trouser?.name || 'Standard'}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted block uppercase text-xs mb-1">Measurements</span>
                  <span className="font-semibold text-bottle">
                    {selections.measurements ? 'Self Measurements Attached' : 'In-Person Fitting Recommended'}
                  </span>
                </div>
              </div>

              <Button variant="primary" className="w-full flex items-center justify-center gap-2" onClick={handleSendWhatsAppInquiry}>
                <MessageCircle size={18} /> Inquire This Design on WhatsApp ➔
              </Button>
            </div>
          )}

        </div>
      );
    }

    // Standard Option Selection (Fabric, Color, Lapel, etc.)
    const options = customizationOptions[step.key] || [];
    
    return (
      <div className="max-w-4xl">
        <span className="font-mono text-xs text-maroon uppercase tracking-widest block mb-2 font-semibold">
          Step {currentStep + 1} of {steps.length}
        </span>
        <h2 className="text-3xl md:text-5xl font-display text-charcoal mb-8">{step.title}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {options.map((opt) => {
            const isSelected = selections[step.key]?.id === opt.id;
            return (
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                key={opt.id}
                onClick={() => handleSelect(step.key, opt)}
                className={`text-left p-4 border transition-all ${isSelected ? 'border-maroon bg-maroon/10 shadow-md ring-1 ring-maroon' : 'shadow-card hover:border-brass'}`}
              >
                {step.key === 'color' ? (
                  <div className="w-full aspect-square mb-3 border border-border" style={{ backgroundColor: opt.hex }}></div>
                ) : step.key === 'fabric' && opt.image ? (
                  <div className="w-full aspect-square mb-3 overflow-hidden border border-border">
                    <img src={opt.image} alt={opt.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-square mb-3 bg-muslin flex items-center justify-center text-xs font-mono text-muted uppercase">
                    Tailor Option
                  </div>
                )}
                
                <div className="flex justify-between items-start">
                  <span className="font-sans font-medium text-xs text-charcoal">{opt.name}</span>
                  {isSelected && <Check size={16} className="text-maroon shrink-0" />}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-muslin flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="h-20 border-b border-brass/30 flex items-center justify-between px-6 bg-charcoal text-chalk shrink-0">
        <button onClick={() => navigate('/collections')} className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <div className="p-2 group-hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={24} />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider hidden md:block text-brass">Back to Collections</span>
        </button>
        <div className="text-xl font-display tracking-widest text-chalk uppercase">NEEDLE MASTER</div>
        <div className="w-20"></div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-12 md:px-16 md:py-20 no-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar: Order Summary */}
        <div className="hidden lg:flex w-80 xl:w-96 bg-secondary flex-col border-l border-border">
          <div className="p-8 flex-1 overflow-y-auto">
            <h3 className="font-display text-xl mb-6 uppercase tracking-wider text-charcoal border-b border-border pb-3">
              Design Summary
            </h3>
            
            <div className="space-y-5 font-mono text-xs">
              <div>
                <span className="text-muted block uppercase text-xs mb-1">Base Garment</span>
                <span className="font-semibold text-charcoal">{product.name}</span>
              </div>
              
              {steps.map(step => {
                if (['measurements', 'reference', 'review'].includes(step.key)) return null;
                const selection = selections[step.key];
                return (
                  <div key={step.key}>
                    <span className="text-muted block uppercase text-xs mb-1">{step.title.replace('Choose ', '')}</span>
                    <span className={selection ? 'font-semibold text-charcoal' : 'text-muted/60 italic'}>
                      {selection ? selection.name : 'Pending'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="p-6 bg-charcoal text-chalk">
            <p className="font-mono text-xs text-brass uppercase tracking-wider mb-4">
              All specs compiled for WhatsApp inquiry
            </p>
            {currentStep < steps.length - 1 && (
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => setCurrentStep(prev => prev + 1)}
              >
                Next Customization Step ➔
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomizeFlow;
