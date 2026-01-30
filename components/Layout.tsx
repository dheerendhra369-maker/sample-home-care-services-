
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Icons = {
  dashboard: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  services: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
  plans: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  schedule: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  about: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>,
  emergency: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
};

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: Icons.dashboard },
    { id: 'services', label: 'Services', icon: Icons.services },
    { id: 'plans', label: 'Care Plans', icon: Icons.plans },
    { id: 'schedule', label: 'Calendar', icon: Icons.schedule },
    { id: 'about', label: 'About Us', icon: Icons.about },
  ];

  const phoneNumber = "+919014663217";

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-100">
        <div className="p-8">
          <div className="flex flex-col mb-12">
            <span className="text-3xl font-black text-[#0A2540] tracking-tight">HomeCare</span>
            <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400 mt-1">For The Elderly</span>
          </div>
          
          <nav className="space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-[1.25rem] text-sm font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#39D428]/10 text-[#39D428] shadow-sm'
                    : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <span className={`transition-transform ${activeTab === tab.id ? 'scale-110' : ''}`}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <div className="bg-[#0A2540] rounded-[2rem] p-6 text-white shadow-2xl shadow-[#0A2540]/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <p className="text-[10px] text-[#39D428] uppercase tracking-widest mb-3 font-black">24/7 Support</p>
            <div className="flex items-center gap-3 relative z-10">
              <img src="https://i.pravatar.cc/100?u=dheeren" alt="Care Manager" className="w-10 h-10 rounded-full border-2 border-[#39D428]" />
              <div>
                <p className="text-sm font-black text-white">Dheeren</p>
                <p className="text-[10px] text-slate-400">Care Manager</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl animate-slide-in-left flex flex-col rounded-r-[3rem]">
            <div className="p-8 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0A2540]">HomeCare</span>
                <span className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">For The Elderly</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-2xl p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <nav className="p-8 flex-1 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] text-lg font-black transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#39D428] text-white shadow-xl shadow-[#39D428]/20'
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="p-8 border-t border-slate-50">
              <a 
                href={`tel:${phoneNumber}`}
                className="w-full flex items-center justify-center gap-3 py-5 bg-rose-500 text-white rounded-[2rem] text-center font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-200"
              >
                {Icons.emergency} SOS EMERGENCY
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white/80 backdrop-blur-md px-6 md:px-10 py-6 flex items-center justify-between sticky top-0 z-10 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 p-2 rounded-2xl bg-slate-50 text-[#0A2540]"
            >
              <div className="w-6 h-1 bg-current rounded-full"></div>
              <div className="w-6 h-1 bg-current rounded-full"></div>
              <div className="w-4 h-1 bg-current rounded-full self-start"></div>
            </button>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-black text-[#0A2540] tracking-tight">
                {tabs.find(t => t.id === activeTab)?.label || 'Overview'}
              </h1>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#39D428] rounded-full animate-pulse"></span>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Care Hub</p>
              </div>
            </div>
            <div className="sm:hidden flex flex-col">
               <span className="text-lg font-black text-[#0A2540]">HomeCare</span>
               <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Elderly Support</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end mr-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Help Desk</span>
              <a href={`tel:${phoneNumber}`} className="text-sm font-black text-[#0A2540]">{phoneNumber}</a>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-rose-500 text-white p-3 md:px-6 md:py-3.5 rounded-full text-xs font-black hover:bg-rose-600 transition-all shadow-xl shadow-rose-100 flex items-center gap-3 uppercase tracking-widest"
            >
              {Icons.emergency}
              <span className="hidden sm:inline">SOS Emergency</span>
            </a>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
          {children}
        </div>
      </main>

      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Layout;
