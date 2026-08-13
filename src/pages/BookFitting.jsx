import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { categories, occasions } from '../data/mockData';
import { sendToWhatsApp } from '../utils/whatsapp';
import { MessageCircle, Upload, CheckCircle2 } from 'lucide-react';

const BookFitting = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form Fields (C1 + C2)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    visitDate: '',
    garmentType: 'Sherwani',
    eventType: 'Barat',
    eventDate: '',
    roughHeight: '',
    roughWeight: '',
    shirtSize: '',
    fabricPreference: '',
    specialNotes: ''
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  // Quick Shortcut Submit (C1 - Step 1 Only)
  const handleQuickWhatsAppSubmit = () => {
    sendToWhatsApp({
      'Inquiry Type': 'Quick Fitting Request',
      'Name': formData.name || 'Not provided',
      'Phone': formData.phone || 'Not provided',
      'Preferred Visit Date': formData.visitDate || 'Asap',
      'Garment Interest': formData.garmentType
    }, 'Fitting Appointment Inquiry (Quick)');
    setSubmitted(true);
  };

  // Full Two-Step Submit (C1 + C2)
  const handleFullWhatsAppSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp({
      'Inquiry Type': 'Detailed Fitting Request (Pre-Visit Prep)',
      'Customer Name': formData.name,
      'Phone Number': formData.phone,
      'Preferred Visit Date': formData.visitDate,
      'Garment Interest': formData.garmentType,
      'Event Type': formData.eventType,
      'Event Date': formData.eventDate,
      'Rough Height': formData.roughHeight,
      'Rough Weight': formData.roughWeight,
      'Usual Shirt Size': formData.shirtSize,
      'Fabric Preference': formData.fabricPreference,
      'Reference Photo': photoPreview ? '[Reference Image Attached / Selected]' : 'None',
      'Special Notes': formData.specialNotes
    }, 'Fitting Appointment Inquiry (Full)');
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            In-Person Workshop Visit
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Book a Fitting
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Reserve your fitting appointment at our Commercial Market, Rawalpindi shop. We measure, cut, and fit on-site.
          </p>
        </header>

        {submitted ? (
          <div className="bg-secondary border-2 border-brass p-10 text-center shadow-lg my-12">
            <div className="w-16 h-16 rounded-full bg-maroon/10 text-maroon flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={36} />
            </div>
            <h2 className="font-display text-3xl text-charcoal mb-3">Opening WhatsApp...</h2>
            <p className="font-sans text-sm text-charcoal/80 max-w-md mx-auto mb-6 leading-relaxed">
              Just hit <strong>Send</strong> on the pre-filled message in your WhatsApp app, and our shop manager will confirm your fitting time slot!
            </p>
            <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
              Book Another Appointment
            </Button>
          </div>
        ) : (
          <div className="bg-secondary p-8 md:p-12 border border-border shadow-sm">
            
            {/* Step Indicators */}
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border font-mono text-xs uppercase tracking-wider">
              <span className={`px-3 py-1 ${step === 1 ? 'bg-charcoal text-chalk font-semibold' : 'text-muted'}`}>
                1. Quick Details
              </span>
              <span className="text-border">/</span>
              <span className={`px-3 py-1 ${step === 2 ? 'bg-charcoal text-chalk font-semibold' : 'text-muted'}`}>
                2. Pre-Visit Prep (Optional)
              </span>
            </div>

            {/* STEP 1: Quick Inquiry (C1) */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-display text-2xl text-charcoal mb-6">Step 1: Your Contact Information</h2>

                <Input 
                  label="Your Name *"
                  name="name"
                  placeholder="e.g. Ahmed Raza"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input 
                  label="Phone Number (WhatsApp) *"
                  name="phone"
                  placeholder="e.g. 0333 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input 
                    type="date"
                    label="Preferred Visit Date *"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                      Garment Interest *
                    </label>
                    <select
                      name="garmentType"
                      value={formData.garmentType}
                      onChange={handleChange}
                      className="h-12 border-b border-border bg-transparent text-sm text-charcoal font-sans focus:outline-none focus:border-maroon"
                    >
                      {categories.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Button 
                    type="button" 
                    variant="primary" 
                    onClick={() => setStep(2)}
                    disabled={!formData.name || !formData.phone}
                    className="w-full sm:w-auto"
                  >
                    Continue to Pre-Visit Details ➔
                  </Button>

                  {/* WhatsApp Quick Shortcut (Spec 4.7 requirement) */}
                  <button
                    type="button"
                    onClick={handleQuickWhatsAppSubmit}
                    disabled={!formData.name || !formData.phone}
                    className="font-mono text-xs text-maroon hover:underline flex items-center gap-1.5 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={14} /> Send now, skip extra details ➔
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Pre-Visit Prep (C2 Optional) */}
            {step === 2 && (
              <form onSubmit={handleFullWhatsAppSubmit} className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-display text-2xl text-charcoal">Step 2: Pre-Visit Event & Design Preferences</h2>
                  <button type="button" onClick={() => setStep(1)} className="font-mono text-xs text-muted hover:text-charcoal underline">
                    ← Back to Step 1
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="h-12 border-b border-border bg-transparent text-sm text-charcoal font-sans focus:outline-none focus:border-maroon"
                    >
                      {occasions.filter(o => o.id !== 'all').map(o => (
                        <option key={o.id} value={o.name}>{o.name}</option>
                      ))}
                    </select>
                  </div>

                  <Input 
                    type="date"
                    label="Actual Event Date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Rough Sizing Section (Spec 4.7 explicitly labeled) */}
                <div className="p-4 bg-muslin border border-border/80 my-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-maroon font-semibold block mb-1">
                    Rough Sizing Estimate
                  </span>
                  <p className="font-mono text-[11px] text-muted italic mb-4">
                    "Just a rough idea, we'll take real measurements at the shop."
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <Input 
                      label="Height (e.g. 5'10)"
                      name="roughHeight"
                      placeholder="Height"
                      value={formData.roughHeight}
                      onChange={handleChange}
                    />
                    <Input 
                      label="Weight (kg)"
                      name="roughWeight"
                      placeholder="Weight"
                      value={formData.roughWeight}
                      onChange={handleChange}
                    />
                    <Input 
                      label="Shirt Collar Size"
                      name="shirtSize"
                      placeholder="e.g. 15.5 or M"
                      value={formData.shirtSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Input 
                  label="Fabric / Color Preference"
                  name="fabricPreference"
                  placeholder="e.g. Deep maroon velvet or raw silk"
                  value={formData.fabricPreference}
                  onChange={handleChange}
                />

                {/* Reference Photo Upload (Client-side preview per Spec 4.7) */}
                <div className="flex flex-col gap-2 pt-2">
                  <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                    Add a photo of a design you like (optional)
                  </label>

                  {photoPreview ? (
                    <div className="flex items-center gap-4 p-3 bg-muslin border border-border">
                      <img src={photoPreview} alt="Reference" className="w-16 h-16 object-cover border border-brass" />
                      <div className="flex-1">
                        <span className="font-mono text-xs text-charcoal block">Reference Image Loaded</span>
                        <span className="font-mono text-xs text-muted">Will be attached in WhatsApp chat</span>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setPhotoPreview(null)}
                        className="text-xs text-maroon hover:underline font-mono"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-border p-6 text-center bg-muslin cursor-pointer hover:border-brass transition-colors block">
                      <Upload size={24} className="mx-auto text-brass mb-2" />
                      <span className="font-mono text-xs text-charcoal uppercase tracking-wider block">Choose Image File</span>
                      <span className="font-mono text-xs text-muted">Client-side preview only</span>
                      <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                    </label>
                  )}
                </div>

                <div className="pt-6 border-t border-border">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full disabled:cursor-not-allowed"
                    disabled={!formData.name || !formData.phone}
                  >
                    Complete Booking Request ➔
                  </Button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default BookFitting;
