
import React from 'react';
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
  { id: '1', serviceType: ServiceType.NURSING, date: '2023-10-25', time: '10:00 AM', caregiverName: 'Sarah Jenkins', status: 'upcoming' },
  { id: '2', serviceType: ServiceType.COMPANIONSHIP, date: '2023-10-26', time: '02:00 PM', caregiverName: 'Michael Chen', status: 'upcoming' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-rose-50 text-rose-600 rounded-lg">❤️</span>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Heart Rate</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-800">72</span>
            <span className="text-slate-500 text-sm">BPM</span>
          </div>
          <div className="mt-4 h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_HEALTH_DATA}>
                <Area type="monotone" dataKey="heartRate" stroke="#e11d48" fill="#fff1f2" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">👣</span>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Steps Today</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-800">5,200</span>
            <span className="text-slate-500 text-sm">/ 6,000</span>
          </div>
          <div className="mt-4 bg-slate-100 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '86%' }}></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">🛌</span>
            <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Sleep</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-800">7.5</span>
            <span className="text-slate-500 text-sm">Hours</span>
          </div>
          <p className="mt-2 text-xs text-emerald-600 font-medium">↑ 12% better than yesterday</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Daily Activity Trend</h3>
            <select className="text-sm border-none bg-slate-50 rounded-lg p-2 focus:ring-0">
              <option>Today</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_HEALTH_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="heartRate" stroke="#6366f1" strokeWidth={3} dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff' }} />
                <Line type="monotone" dataKey="steps" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Upcoming Visits</h3>
            <button className="text-sm text-indigo-600 font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {MOCK_APPOINTMENTS.map((appt) => (
              <div key={appt.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-slate-100">
                  {appt.serviceType === ServiceType.NURSING ? '👩‍⚕️' : '🤝'}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">{appt.serviceType}</h4>
                  <p className="text-xs text-slate-500 mb-1">{appt.caregiverName}</p>
                  <div className="flex gap-2 items-center text-[10px] font-medium uppercase tracking-tighter text-slate-400">
                    <span>📅 {appt.date}</span>
                    <span>•</span>
                    <span>⏰ {appt.time}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 text-sm font-medium hover:border-indigo-300 hover:text-indigo-500 transition-colors">
              + Schedule New Service
            </button>
          </div>
        </div>
      </div>

      {/* Wellness Tips Card */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-2xl font-bold mb-2">Afternoon Wellness Tip</h2>
          <p className="text-indigo-100 mb-6">"Staying hydrated is key to maintaining cognitive function and energy levels. Try drinking a glass of water now!"</p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Ask AI Assistant
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-400/20 rounded-full mr-10 -mb-10 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;
