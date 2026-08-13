import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { categories, occasions } from '../data/mockData';
import { sendToWhatsApp } from '../utils/whatsapp';
import { Plus, Trash2, Users } from 'lucide-react';

const GroupOrder = () => {
  const [eventData, setEventData] = useState({
    contactName: '',
    contactPhone: '',
    eventType: 'Barat',
    eventDate: ''
  });

  const [members, setMembers] = useState([
    { name: '', garmentType: 'Sherwani / Lehenga', role: 'Groom / Bride', notes: '' },
    { name: '', garmentType: 'Prince Coat / Maxi', role: 'Groomsman / Bridesmaid', notes: '' }
  ]);

  const handleEventChange = (e) => {
    setEventData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMemberChange = (index, field, value) => {
    setMembers(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const addMember = () => {
    setMembers(prev => [...prev, { name: '', garmentType: 'Waistcoat / Gown', role: 'Groomsman / Bridesmaid', notes: '' }]);
  };

  const removeMember = (index) => {
    if (members.length > 1) {
      setMembers(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMembers = members.map((m, i) => 
      `${i + 1}. ${m.name || 'Member'} (${m.role}) — ${m.garmentType}${m.notes ? ` [Notes: ${m.notes}]` : ''}`
    );

    sendToWhatsApp({
      'Order Category': "Wedding Party / Group Order Inquiry",
      'Contact Person': eventData.contactName,
      'Phone': eventData.contactPhone,
      'Event Type': eventData.eventType,
      'Event Date': eventData.eventDate || 'Not specified',
      'Total People': members.length,
      'Party Breakdown': formattedMembers
    }, "Group Order Inquiry");
  };

  return (
    <div className="w-full min-h-screen bg-muslin py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="mb-12 border-b border-border pb-8 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-maroon font-semibold block mb-2">
            Wedding Party Coordination
          </span>
          <h1 className="text-4xl md:text-6xl font-display text-charcoal mb-4">
            Group & Groom's Party Order
          </h1>
          {/* Spec Section 4.8 Framing text */}
          <p className="text-muted text-sm max-w-xl mx-auto font-sans leading-relaxed italic">
            "Ordering for the groom and his party together? Tell us everyone's details in one go."
          </p>
        </header>

        <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-12 border border-border shadow-sm space-y-10">
          
          {/* Section 1: Event Details */}
          <div>
            <h2 className="font-display text-2xl text-charcoal mb-6 border-b border-border pb-3 flex items-center gap-2">
              <Users size={22} className="text-brass" /> 1. Primary Contact & Event
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input 
                label="Contact Person Name *"
                name="contactName"
                placeholder="e.g. Ahmed Raza"
                value={eventData.contactName}
                onChange={handleEventChange}
                required
              />

              <Input 
                label="Phone / WhatsApp *"
                name="contactPhone"
                placeholder="e.g. 0333 1234567"
                value={eventData.contactPhone}
                onChange={handleEventChange}
                required
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={eventData.eventType}
                  onChange={handleEventChange}
                  className="h-12 border-b border-border bg-transparent text-sm text-charcoal font-sans focus:outline-none focus:border-maroon"
                >
                  {occasions.filter(o => o.id !== 'all').map(o => (
                    <option key={o.id} value={o.name}>{o.name}</option>
                  ))}
                </select>
              </div>

              <Input 
                type="date"
                label="Event Date"
                name="eventDate"
                value={eventData.eventDate}
                onChange={handleEventChange}
              />
            </div>
          </div>

          {/* Section 2: Repeatable Member Rows (Spec 4.8) */}
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-border pb-3">
              <h2 className="font-display text-2xl text-charcoal">2. Party Members & Garments</h2>
              <span className="font-mono text-xs text-brass uppercase font-semibold">
                {members.length} {members.length === 1 ? 'Person' : 'People'}
              </span>
            </div>

            <div className="space-y-6">
              {members.map((member, index) => (
                <div key={index} className="p-6 bg-muslin border border-border relative">
                  <div className="flex justify-between items-center mb-4 pb-2 border-b border-border/60">
                    <span className="font-mono text-xs uppercase font-bold text-maroon">
                      Person #{index + 1} {index === 0 ? '(Groom)' : ''}
                    </span>
                    {members.length > 1 && (
                      <button 
                        type="button" 
                        onClick={() => removeMember(index)}
                        className="text-muted hover:text-maroon text-xs font-mono flex items-center gap-1"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <Input 
                      label="Person Name"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                    />

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                        Role
                      </label>
                      <select
                        value={member.role}
                        onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                        className="h-12 border-b border-border bg-transparent text-sm text-charcoal font-sans focus:outline-none focus:border-maroon"
                      >
                        <option value="Groom">Groom</option>
                        <option value="Brother of Groom">Brother of Groom</option>
                        <option value="Groomsman">Groomsman</option>
                        <option value="Father">Father</option>
                        <option value="Guest">Guest</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-wider text-muted font-mono font-medium">
                        Garment Required
                      </label>
                      <select
                        value={member.garmentType}
                        onChange={(e) => handleMemberChange(index, 'garmentType', e.target.value)}
                        className="h-12 border-b border-border bg-transparent text-sm text-charcoal font-sans focus:outline-none focus:border-maroon"
                      >
                        {categories.map(c => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Input 
                    label="Notes / Preferred Color / Sizing"
                    placeholder="e.g. Navy blue preferred, chest 40"
                    value={member.notes}
                    onChange={(e) => handleMemberChange(index, 'notes', e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={addMember}
                className="w-full flex items-center justify-center gap-2 border-dashed"
              >
                <Plus size={16} /> + Add Another Person
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={!eventData.contactName || !eventData.contactPhone}>
              Compile Group Inquiry & Open WhatsApp ➔
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default GroupOrder;
