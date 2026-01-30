
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { HealthMetric, Appointment, ServiceType } from '../types';

const MOCK_HEALTH_DATA: HealthMetric[] = [
  { time: '08:00', heartRate: 72, steps: 400, sleep: 0 },
  { time: '10:00', heartRate: 78, steps: 1200, sleep: 0 },
  { time: '12:00', heartRate: 85, steps: 2500, sleep: 0 },
  { time: '14:00', heartRate: 82, steps: 3100, sleep: 0 },
  { time: '16:00', heartRate: 76, steps: 4200, sleep: 0 },
  { time: '18:00', heartRate: 74, steps: 4800, sleep: 0 },
  { time: '20:00', heartRate: 70, steps: 5200, sleep: 0 },
];

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', serviceType: ServiceType.NURSING, date: '2023-11-20', time: '09:00 AM', caregiverName: 'Dr. Ramesh Kumar', status: 'upcoming' },
  { id: '2', serviceType: ServiceType.COMPANIONSHIP, date: '2023-11-21', time: '04:00 PM', caregiverName: 'Care Buddy Amit', status: 'upcoming' },
];

const Dashboard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const siteUrl = window.location.href;
  const phoneNumber = "+919014663217";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      {/* Care Status Banner */}
      <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#39D428]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="flex items-center gap-6 z-10">
          <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-4 border-white">👵</div>
          <div>
            <h3 className="text-2xl font-black text-[#0A2540]">Everything is Stable</h3>
            <p className="text-slate-500 font-medium">Last vital check: 15 mins ago • All metrics within safe range.</p>
          </div>
        </div>
        <div className="flex gap-4 w-full lg:w-auto z-10">
          <a href={`tel:${phoneNumber}`} className="flex-1 lg:flex-none py-4 px-10 bg-[#0A2540] text-white rounded-2xl font-bold text-sm shadow-xl hover:bg-[#1a3d5e] transition-all flex items-center justify-center gap-2">
            📞 Contact Care Team
          </a>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Heart Rate', val: '72', unit: 'BPM', color: 'text-rose-500', bg: 'bg-rose-50', icon: '❤️' },
          { label: 'SpO2 Level', val: '98', unit: '%', color: 'text-blue-500', bg: 'bg-blue-50', icon: '💨' },
          { label: 'Sleep Score', val: '88', unit: '/100', color: 'text-indigo-500', bg: 'bg-indigo-50', icon: '🌙' },
          { label: 'Activity', val: '5.2', unit: 'k steps', color: 'text-emerald-500', bg: 'bg-emerald-50', icon: '🚶' },
        ].map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className={`p-3 ${m.bg} ${m.color} rounded-2xl text-xl`}>{m.icon}</span>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Normal</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 mb-1">{m.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-[#0A2540]">{m.val}</span>
                <span className="text-xs font-bold text-slate-400">{m.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-[#0A2540]">Health Trends</h3>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 bg-[#F4F7F9] text-[#0A2540] text-xs font-bold rounded-full">Heart Rate</button>
              <button className="px-4 py-1.5 text-slate-400 text-xs font-bold rounded-full hover:bg-slate-50">Steps</button>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_HEALTH_DATA}>
                <defs>
                  <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#39D428" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#39D428" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="heartRate" stroke="#39D428" strokeWidth={4} fillOpacity={1} fill="url(#colorHr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-[#0A2540] text-white p-8 rounded-[2rem] shadow-xl">
          <h3 className="text-xl font-black mb-6">Upcoming Visits</h3>
          <div className="space-y-6">
            {MOCK_APPOINTMENTS.map((appt) => (
              <div key={appt.id} className="relative pl-6 border-l-2 border-[#39D428]/30 hover:border-[#39D428] transition-colors pb-4">
                <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-[#39D428]"></div>
                <p className="text-[10px] font-black text-[#39D428] uppercase mb-1">{appt.date} • {appt.time}</p>
                <h4 className="font-bold text-sm mb-1">{appt.serviceType}</h4>
                <p className="text-xs text-slate-400">Assigned: {appt.caregiverName}</p>
              </div>
            ))}
            <button className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              Schedule New Support
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-[#39D428] to-[#2BA11E] p-10 rounded-[2.5rem] text-white shadow-2xl shadow-[#39D428]/20">
          <h2 className="text-3xl font-black mb-4">Dedicated Care Manager</h2>
          <p className="text-emerald-50 font-medium mb-8 leading-relaxed">Your family has a single point of contact for all medical and lifestyle coordination. We manage the details so you can focus on time together.</p>
          <div className="flex gap-4">
            <a href={`tel:${phoneNumber}`} className="bg-[#0A2540] text-white px-10 py-3 rounded-full font-black text-sm shadow-lg hover:scale-105 transition-transform">Call Manager Now</a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-center">
          <h3 className="text-2xl font-black text-[#0A2540] mb-2">Invite Other Family</h3>
          <p className="text-slate-500 mb-8 text-sm font-medium">Add siblings or family members to this dashboard to keep everyone updated on care progress and health vitals.</p>
          
          <div className="flex gap-2 p-1.5 bg-[#F4F7F9] rounded-2xl border border-slate-200">
            <input readOnly value={siteUrl} className="flex-1 bg-transparent px-4 text-xs font-bold text-[#0A2540] outline-none" />
            <button 
              onClick={handleCopyLink}
              className={`px-8 py-3 rounded-xl text-xs font-black transition-all ${
                copied ? 'bg-emerald-500 text-white' : 'bg-[#0A2540] text-white hover:bg-[#1a3d5e]'
              }`}
            >
              {copied ? 'Link Copied!' : 'Copy Invitation'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
