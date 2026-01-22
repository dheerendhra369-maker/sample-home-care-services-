
import React, { useState } from 'react';
import { ServiceType } from '../types';

interface ServiceItem {
  type: ServiceType;
  title: string;
  description: string;
  icon: string;
  price: string;
  color: string;
}

const SERVICES: ServiceItem[] = [
  { type: ServiceType.PERSONAL_CARE, title: 'Personal Care', description: 'Assistance with bathing, dressing, and daily hygiene tasks.', icon: '🧼', price: 'From $25/hr', color: 'bg-blue-50 text-blue-600' },
  { type: ServiceType.NURSING, title: 'Skilled Nursing', description: 'Medical care provided by registered nurses (wound care, meds).', icon: '🩺', price: 'From $65/hr', color: 'bg-emerald-50 text-emerald-600' },
  { type: ServiceType.COMPANIONSHIP, title: 'Companionship', description: 'Emotional support and social engagement for seniors.', icon: '🤝', price: 'From $20/hr', color: 'bg-amber-50 text-amber-600' },
  { type: ServiceType.MEALS, title: 'Meal Preparation', description: 'Custom nutritional meal planning and cooking at home.', icon: '🍲', price: 'From $30/hr', color: 'bg-rose-50 text-rose-600' },
  { type: ServiceType.TRANSPORT, title: 'Transportation', description: 'Safe rides to doctors, grocery shopping, and social events.', icon: '🚗', price: 'From $15/trip', color: 'bg-indigo-50 text-indigo-600' },
  { type: ServiceType.CHORES, title: 'Light Housekeeping', description: 'Maintaining a clean and safe home environment.', icon: '🧹', price: 'From $22/hr', color: 'bg-slate-50 text-slate-600' },
];

const ServiceCatalog: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="w-full md:w-1/2 relative">
          <input 
            type="text" 
            placeholder="Search for services or needs..." 
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">🔍</span>
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
          {['All', 'Medical', 'Daily', 'Social'].map(filter => (
            <button key={filter} className="px-4 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium hover:bg-slate-100">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div 
            key={service.type} 
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
            onClick={() => setSelectedService(service.type)}
          >
            <div className="p-6">
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-2xl mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-900 font-bold">{service.price}</span>
                <button className="text-indigo-600 font-semibold text-sm hover:underline">
                  Book Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal (Simplified) */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Book {selectedService}</h3>
                  <p className="text-slate-500 text-sm">Fill in the details to request a caregiver</p>
                </div>
                <button onClick={() => setSelectedService(null)} className="text-slate-400 hover:text-slate-600 text-2xl">
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                  <input type="date" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Frequency</label>
                  <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>One-time visit</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                  <textarea rows={3} placeholder="Tell us about special requirements..." className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  Confirm Booking Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCatalog;
