
import React from 'react';
import { Appointment, ServiceType } from '../types';

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', serviceType: ServiceType.NURSING, date: 'Nov 20, 2023', time: '09:00 AM', caregiverName: 'Dr. Ramesh Kumar', status: 'upcoming' },
  { id: '2', serviceType: ServiceType.COMPANIONSHIP, date: 'Nov 21, 2023', time: '04:00 PM', caregiverName: 'Care Buddy Amit', status: 'upcoming' },
];

const DashIcons = {
  heart: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  oxygen: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.7 16.5"></path></svg>,
  temp: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>,
  steps: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v-2a2 2 0 0 1 2-2h2l4-4m4-2v2a2 2 0 0 1-2 2h-2l-4 4m0 0l-2 2"></path></svg>,
  user: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
};

const Dashboard: React.FC = () => {
  const phoneNumber = "+919014663217";

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-12">
      {/* Welcome Banner with Background Image */}
      <div className="relative bg-[#0A2540] rounded-[3.5rem] p-10 md:p-14 overflow-hidden shadow-2xl shadow-[#0A2540]/10 min-h-[320px] flex items-center">
        {/* Real Human Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1600" 
            alt="Caregiver helping senior" 
            className="w-full h-full object-cover opacity-20 grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl border-4 border-white/20 shrink-0">
            {DashIcons.user}
          </div>
          <div className="text-center md:text-left space-y-3 flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">Patient Overview</h2>
            <p className="text-slate-300 text-lg font-medium max-w-xl">System active. Your loved one is monitored by our Vijayawada team.</p>
          </div>
          <div className="md:ml-auto flex gap-4 w-full md:w-auto shrink-0">
            <a href={`tel:${phoneNumber}`} className="flex-1 md:flex-none bg-[#39D428] text-white px-10 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-[#39D428]/20 hover:scale-105 transition-transform text-center">
              Call Support
            </a>
          </div>
        </div>
      </div>

      {/* Health Vitals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Heart Rate', val: '72', unit: 'bpm', color: 'text-rose-500', bg: 'bg-rose-50', icon: DashIcons.heart },
          { label: 'Blood Oxygen', val: '98', unit: '%', color: 'text-blue-500', bg: 'bg-blue-50', icon: DashIcons.oxygen },
          { label: 'Body Temp', val: '98.6', unit: '°F', color: 'text-orange-500', bg: 'bg-orange-50', icon: DashIcons.temp },
          { label: 'Active Steps', val: '5,240', unit: 'steps', color: 'text-emerald-500', bg: 'bg-emerald-50', icon: DashIcons.steps },
        ].map((m, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="flex items-center justify-between mb-8">
              <span className={`w-14 h-14 flex items-center justify-center ${m.bg} ${m.color} rounded-[1.5rem] group-hover:scale-110 transition-transform`}>{m.icon}</span>
              <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full tracking-widest">Normal</span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{m.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#0A2540]">{m.val}</span>
                <span className="text-xs font-bold text-slate-400">{m.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Services Section */}
      <div className="space-y-6">
        <div className="flex items-end justify-between px-2">
          <div>
            <h3 className="text-2xl font-black text-[#0A2540]">Our Core Services</h3>
            <p className="text-sm text-slate-400 font-medium">Professional care solutions for every need.</p>
          </div>
          <button className="text-[10px] font-black text-[#39D428] uppercase tracking-widest hover:underline">View All Services</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Nursing Care', desc: 'Post-surgery & chronic care', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400' },
            { title: 'Physiotherapy', desc: 'In-home mobility therapy', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400' },
            { title: 'Daily Assistance', desc: 'Grooming, meals & hygiene', img: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=400' },
          ].map((s, i) => (
            <div key={i} className="group relative h-64 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-500">
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-black mb-1">{s.title}</h4>
                <p className="text-xs text-slate-300 font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Schedule Card */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col">
          <div className="mb-10 flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-black text-[#0A2540]">Next Visits</h3>
              <p className="text-sm text-slate-400 font-medium">Care team members arriving soon.</p>
            </div>
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
          </div>
          
          <div className="space-y-8 flex-1">
            {MOCK_APPOINTMENTS.map((appt) => (
              <div key={appt.id} className="flex gap-5 group items-center p-4 hover:bg-slate-50 rounded-[2rem] transition-colors">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 shadow-md">
                   <img 
                    src={appt.caregiverName.includes('Amit') ? 'https://i.pravatar.cc/100?u=amit' : 'https://i.pravatar.cc/100?u=ramesh'} 
                    alt={appt.caregiverName} 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-[10px] font-black text-[#39D428] uppercase tracking-widest">{appt.date} • {appt.time}</p>
                  <h4 className="font-black text-[#0A2540]">{appt.serviceType}</h4>
                  <p className="text-xs text-slate-400 font-medium">{appt.caregiverName}</p>
                </div>
                <div className="hidden sm:block">
                   <span className="px-4 py-2 bg-emerald-50 text-emerald-500 text-[10px] font-black uppercase rounded-full tracking-widest">Confirmed</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="w-full sm:w-auto px-12 py-5 bg-[#0A2540] text-white rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-[#0A2540]/10 hover:bg-[#1a3d5e] transition-all">
              Schedule New Support
            </button>
          </div>
        </div>

        {/* Informational Card with Image */}
        <div className="bg-[#39D428] rounded-[3rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-[#39D428]/10">
          <img 
            src="https://images.unsplash.com/photo-1516703056313-04fd3a866718?auto=format&fit=crop&q=80&w=800" 
            alt="Helping hand" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-[2s]"
          />
          <div className="relative z-10 h-full flex flex-col justify-end gap-4">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
             </div>
             <h4 className="text-2xl font-black leading-tight uppercase">Home Safety Audit</h4>
             <p className="text-white/80 text-sm font-medium">Prevent falls and ensure absolute safety with our specialized home audit. Free for Pro Max members.</p>
             <button className="mt-4 py-4 px-8 bg-white text-[#0A2540] rounded-2xl text-[10px] font-black uppercase tracking-widest w-fit hover:scale-105 transition-transform shadow-lg">Request Audit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
