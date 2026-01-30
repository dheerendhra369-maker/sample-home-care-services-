
import React, { useState } from 'react';

const Svgs = {
  health: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
  concierge: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  emergency: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  social: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  brain: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1 .52-4.82 2.5 2.5 0 0 1 2.78-3.06 2.5 2.5 0 0 1 4.72-1z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0-.52-4.82 2.5 2.5 0 0 0-2.78-3.06 2.5 2.5 0 0 0-4.72-1z"></path></svg>,
  tools: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  arrowRight: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const CATEGORIES = [
  { id: 'Clinical', icon: Svgs.health },
  { id: 'Specialized', icon: Svgs.brain },
  { id: 'Concierge', icon: Svgs.concierge },
  { id: 'Emergency', icon: Svgs.emergency },
  { id: 'Social', icon: Svgs.social },
  { id: 'Supportive', icon: Svgs.tools },
];

const DETAILED_SERVICES: ServiceItem[] = [
  { 
    id: 'h1', 
    category: 'Clinical', 
    title: 'Post-Surgery Nursing', 
    description: 'Expert medical care for recovery after major operations, ensuring safe transitions back to home.', 
    icon: Svgs.health,
    features: ['Wound dressing', 'Vital monitoring', 'Medication management']
  },
  { 
    id: 'h2', 
    category: 'Clinical', 
    title: 'Physiotherapy', 
    description: 'Personalized exercise regimens to restore mobility, strength, and balance.', 
    icon: Svgs.health,
    features: ['Range of motion', 'Fall prevention', 'Stroke rehab']
  },
  { 
    id: 's1', 
    category: 'Specialized', 
    title: 'Dementia Care', 
    description: 'Compassionate, specialized support for seniors living with memory loss or cognitive decline.', 
    icon: Svgs.brain,
    features: ['Cognitive activities', 'Safe environment management', 'Emotional support']
  },
  { 
    id: 's2', 
    category: 'Specialized', 
    title: 'Palliative Care', 
    description: 'Dedicated comfort care focusing on quality of life and symptom management.', 
    icon: Svgs.brain,
    features: ['Pain management', 'Spiritual support', 'Family counseling']
  },
  { 
    id: 'c1', 
    category: 'Concierge', 
    title: 'Daily Errand Helper', 
    description: 'Assistance with errands, utility payments, and banking tasks to maintain independence.', 
    icon: Svgs.concierge,
    features: ['Grocery delivery', 'Bill payments', 'General errands']
  },
  { 
    id: 'e1', 
    category: 'Emergency', 
    title: 'SOS Coordination', 
    description: 'Priority ambulance dispatch and hospital admission support in critical moments.', 
    icon: Svgs.emergency,
    features: ['24/7 Response team', 'Hospital mapping', 'Family alert system']
  },
  { 
    id: 'sc1', 
    category: 'Social', 
    title: 'Care Buddies', 
    description: 'Companionship for walks, conversations, and social outings to fight isolation.', 
    icon: Svgs.social,
    features: ['Walk assistance', 'Hobby engagement', 'Social networking']
  },
  { 
    id: 'su1', 
    category: 'Supportive', 
    title: 'Medical Equipment', 
    description: 'Rental and sales of hospital-grade equipment for home recovery.', 
    icon: Svgs.tools,
    features: ['Oxygen concentrators', 'Hospital beds', 'Wheelchair rental']
  },
];

const ServiceCatalog: React.FC = () => {
  const [activeCat, setActiveCat] = useState('Clinical');
  const phoneNumber = "+919014663217";

  return (
    <div className="max-w-7xl mx-auto space-y-10 md:space-y-16 pb-12">
      {/* Service Hero - Responsive Height */}
      <section className="relative h-[320px] md:h-[450px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex items-center p-8 md:p-24 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1600" 
          alt="Caregiver and senior man" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 md:via-[#0A2540]/60 to-transparent"></div>
        <div className="relative z-10 max-w-2xl space-y-4 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest text-[#39D428]">
             Our Expert Care
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-white leading-[1.1]">
            Comprehensive <br className="hidden md:block"/>
            <span className="text-[#39D428]">Care Solutions</span>
          </h2>
          <p className="text-slate-200 font-medium text-sm md:text-lg leading-relaxed max-w-md md:max-w-lg">
            From clinical nursing to social companionship, we provide the support your family needs to live with dignity and safety.
          </p>
          <div className="flex gap-4">
             <div className="flex -space-x-2 md:-space-x-3">
               <img src="https://i.pravatar.cc/100?u=1" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" alt="Caregiver" />
               <img src="https://i.pravatar.cc/100?u=2" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" alt="Caregiver" />
               <img src="https://i.pravatar.cc/100?u=3" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" alt="Caregiver" />
             </div>
             <div className="flex flex-col justify-center">
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest">500+ Certified Staff</span>
               <span className="text-slate-400 text-[8px] md:text-[10px] font-bold">In Vijayawada Hub</span>
             </div>
          </div>
        </div>
      </section>

      <div className="space-y-8 md:space-y-10">
        {/* Category Filter - Rearranged as a grid on mobile for better access */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-3 md:gap-4 items-center px-2 md:px-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`flex items-center justify-center lg:justify-start gap-2 md:gap-3 px-4 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-sm ${
                activeCat === cat.id 
                  ? 'bg-[#39D428] text-white shadow-[#39D428]/20 ring-4 ring-[#39D428]/10' 
                  : 'bg-white text-[#0A2540] border border-slate-100 hover:bg-slate-50'
              }`}
            >
              <span className="shrink-0">{cat.icon}</span>
              <span className="truncate">{cat.id}</span>
            </button>
          ))}
        </div>

        {/* Service Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DETAILED_SERVICES.filter(s => s.category === activeCat).map((s) => (
            <div key={s.id} className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-slate-50 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6 md:mb-8 p-4 md:p-5 bg-slate-50 rounded-2xl md:rounded-[1.5rem] inline-block group-hover:bg-[#39D428] group-hover:text-white transition-all duration-500 text-[#39D428] shadow-inner">
                  {s.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-[#0A2540] mb-3 md:mb-4">{s.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium mb-6 md:mb-8 leading-relaxed">
                  {s.description}
                </p>
                <div className="space-y-2 md:space-y-3 mb-8 md:mb-10 flex-1">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs font-bold text-slate-400">
                      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#39D428]"></div>
                      {f}
                    </div>
                  ))}
                </div>
                
                {/* Improved Enquire & Book Button - Centered on Mobile/Tab for better touch-target focus */}
                <a 
                  href={`tel:${phoneNumber}`}
                  className="group/btn relative w-full flex items-center justify-center md:justify-between px-6 md:px-8 py-5 md:py-5 bg-[#0A2540] text-white rounded-full md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#39D428] hover:shadow-2xl hover:shadow-[#39D428]/30 overflow-hidden active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="p-2 bg-white/10 rounded-full group-hover/btn:bg-white/20 transition-colors">
                      {Svgs.phone}
                    </span>
                    Enquire & Book
                  </span>
                  <span className="relative z-10 hidden md:block transition-transform duration-300 group-hover/btn:translate-x-1">
                    {Svgs.arrowRight}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          ))}
          {DETAILED_SERVICES.filter(s => s.category === activeCat).length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400 font-bold uppercase tracking-widest text-sm md:text-base">
               Stay tuned for more {activeCat} services
            </div>
          )}
        </div>
      </div>

      {/* Special Offer / Supportive Banner - Responsive Layout */}
      <div className="bg-[#0A2540] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#39D428]/5 rounded-full -mb-32 -mr-32 md:-mb-48 md:-mr-48 blur-3xl"></div>
        <div className="space-y-4 md:space-y-6 max-w-xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#39D428] mx-auto lg:mx-0">
             Family First
          </div>
          <h2 className="text-2xl md:text-5xl font-black leading-tight uppercase">Respite Care for <br className="hidden md:block"/> <span className="text-[#39D428]">Family Caregivers</span></h2>
          <p className="text-slate-400 font-medium text-sm md:text-lg">Taking care of an elder is rewarding but demanding. Let us step in for a few hours so you can rest and recharge.</p>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 shrink-0 w-full lg:w-auto">
          <a 
            href={`tel:${phoneNumber}`} 
            className="group/respite relative flex items-center justify-center gap-3 md:gap-4 bg-[#39D428] text-white px-8 md:px-12 py-5 md:py-6 rounded-full md:rounded-[2.5rem] font-black text-[10px] md:text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#39D428]/30 overflow-hidden"
          >
            <span className="relative z-10">Book Respite Care</span>
            <span className="relative z-10 group-hover/respite:translate-x-1 transition-transform">
              {Svgs.arrowRight}
            </span>
          </a>
          <button className="text-white text-[9px] md:text-xs font-black uppercase tracking-[0.2em] hover:text-[#39D428] transition-colors">Learn more about our team</button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServiceCatalog;
