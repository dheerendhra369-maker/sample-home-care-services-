
import React, { useState } from 'react';
import { ServiceType } from '../types';

interface ServiceItem {
  id: string;
  category: 'Health' | 'Concierge' | 'Emergency' | 'Social';
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const CATEGORIES = [
  { id: 'Health', icon: '🩺' },
  { id: 'Concierge', icon: '🛍️' },
  { id: 'Emergency', icon: '🆘' },
  { id: 'Social', icon: '🤝' },
];

const DETAILED_SERVICES: ServiceItem[] = [
  { 
    id: 'h1', 
    category: 'Health', 
    title: 'Nursing & Physio', 
    description: 'Specialized at-home medical support for chronic conditions or post-surgery recovery.', 
    icon: '👩‍⚕️',
    features: ['Wound dressing', 'IV fluid mgmt', 'Mobility training']
  },
  { 
    id: 'c1', 
    category: 'Concierge', 
    title: 'Elder Concierge', 
    description: 'Personalized assistance for daily errands, utility bill payments, and banking support.', 
    icon: '👤',
    features: ['Grocery shopping', 'Banking tasks', 'Home maintenance']
  },
  { 
    id: 'e1', 
    category: 'Emergency', 
    title: 'Emergency Coordination', 
    description: '24/7 priority support for ambulances and hospital admissions in case of crisis.', 
    icon: '🚑',
    features: ['Priority ambulance', 'Hospitalization support', '24/7 SOS desk']
  },
  { 
    id: 's1', 
    category: 'Social', 
    title: 'Social Engagement', 
    description: 'Keeping seniors active and happy through events, companionship, and hobby groups.', 
    icon: '🎭',
    features: ['Companion walks', 'Social outings', 'Technology training']
  },
  { 
    id: 'h2', 
    category: 'Health', 
    title: 'Doctor Visits', 
    description: 'General health checkups by certified medical practitioners in the comfort of home.', 
    icon: '👨‍⚕️',
    features: ['Biannual checkups', 'Medication reviews', 'Specialist referrals']
  },
  { 
    id: 'c2', 
    category: 'Concierge', 
    title: 'Dementia Care', 
    description: 'Empathetic support for seniors living with memory loss or cognitive decline.', 
    icon: '🧠',
    features: ['Memory exercises', 'Safety monitoring', 'Family counseling']
  },
];

const ServiceCatalog: React.FC = () => {
  const [activeCat, setActiveCat] = useState('Health');
  const phoneNumber = "+919014663217";

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-sm ${
              activeCat === cat.id 
                ? 'bg-[#39D428] text-white shadow-[#39D428]/20' 
                : 'bg-white text-[#0A2540] border border-slate-100 hover:border-[#39D428]/30'
            }`}
          >
            <span>{cat.icon}</span>
            {cat.id}
          </button>
        ))}
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DETAILED_SERVICES.filter(s => s.category === activeCat).map((s) => (
          <div key={s.id} className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
            <div className="text-4xl mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-[#39D428]/10 group-hover:scale-110 transition-all duration-500">
              {s.icon}
            </div>
            <h3 className="text-xl font-black text-[#0A2540] mb-3">{s.title}</h3>
            <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
              {s.description}
            </p>
            <div className="space-y-2 mb-8 flex-1">
              {s.features.map((f, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <span className="text-[#39D428]">✓</span> {f}
                </div>
              ))}
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="w-full py-4 bg-[#0A2540] text-white rounded-2xl font-black text-xs uppercase tracking-widest text-center hover:bg-[#39D428] transition-all"
            >
              Enquire & Book
            </a>
          </div>
        ))}
      </div>

      {/* Newsletter / Contact Promo */}
      <div className="bg-[#0A2540] rounded-[2.5rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
        <div>
          <h2 className="text-3xl font-black mb-2">Need a Custom Care Plan?</h2>
          <p className="text-slate-400 font-medium">Talk to our care managers to design a plan that fits your family's needs perfectly.</p>
        </div>
        <a 
          href={`tel:${phoneNumber}`} 
          className="bg-[#39D428] text-white px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-[#39D428]/20"
        >
          Call For Consultation
        </a>
      </div>
    </div>
  );
};

export default ServiceCatalog;
