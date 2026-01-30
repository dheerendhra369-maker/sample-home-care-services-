
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'My Dashboard', icon: '🏠' },
    { id: 'services', label: 'Care Services', icon: '🛠️' },
    { id: 'schedule', label: 'Care Calendar', icon: '📅' },
  ];

  const phoneNumber = "+919014663217";

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F4F7F9] overflow-hidden">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-[#0A2540] text-white">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-[#39D428] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg">H</div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">Home Care</span>
              <span className="text-[10px] uppercase tracking-widest text-[#39D428] font-semibold">For The Elderly</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#39D428] text-white shadow-md'
                    : 'text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter mb-3 font-bold">Assigned Care Manager</p>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?u=dheeren" alt="Care Manager" className="w-10 h-10 rounded-full border-2 border-[#39D428]" />
              <div>
                <p className="text-sm font-bold text-white">Dheeren</p>
                <a href={`tel:${phoneNumber}`} className="text-xs text-[#39D428] hover:underline">Connect Now</a>
              </div>
            </div>
          </div>
          
          <div className="w-full py-3 bg-white/5 rounded-xl text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Care Service for Seniors
          </div>
        </div>
      </aside>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl animate-slide-in-left flex flex-col">
            <div className="p-6 bg-[#0A2540] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#39D428] rounded-lg flex items-center justify-center text-white text-xl font-bold">H</div>
                <div className="flex flex-col">
                  <span className="text-md font-bold leading-tight">Home Care</span>
                  <span className="text-[8px] uppercase tracking-widest text-[#39D428] font-semibold">For Seniors</span>
                </div>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white/60 hover:text-white text-2xl">✕</button>
            </div>
            
            <nav className="p-6 flex-1 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-md font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#39D428]/10 text-[#39D428]'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-2xl">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>

            <div className="p-6 border-t border-slate-100 bg-slate-50">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 mb-4">
                <img src="https://i.pravatar.cc/100?u=dheeren" alt="Care Manager" className="w-12 h-12 rounded-full border-2 border-[#39D428]" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Care Manager</p>
                  <p className="text-sm font-black text-[#0A2540]">Dheeren</p>
                  <a href={`tel:${phoneNumber}`} className="text-xs text-[#39D428] font-bold">Call Now</a>
                </div>
              </div>
              <a 
                href={`tel:${phoneNumber}`}
                className="w-full block py-4 bg-rose-600 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest shadow-lg shadow-rose-200"
              >
                🆘 SOS EMERGENCY
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-50 text-[#0A2540]"
            >
              <div className="w-6 h-0.5 bg-current rounded-full"></div>
              <div className="w-6 h-0.5 bg-current rounded-full"></div>
              <div className="w-6 h-0.5 bg-current rounded-full"></div>
            </button>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#0A2540] capitalize tracking-tight leading-tight">
                {activeTab === 'dashboard' ? 'Overview' : activeTab.replace('-', ' ')}
              </h2>
              <p className="hidden md:block text-xs text-slate-500 font-medium">Care plan active for Mary Doe</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-slate-600">
              <span className="text-xs font-bold">Emergency 24/7:</span>
              <a href={`tel:${phoneNumber}`} className="text-sm font-black text-rose-600">{phoneNumber}</a>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-rose-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-sm font-black hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-200 flex items-center gap-1 md:gap-2 animate-pulse whitespace-nowrap"
            >
              <span className="hidden sm:inline">🆘 SOS EMERGENCY</span>
              <span className="sm:hidden">🆘 SOS</span>
            </a>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#F4F7F9]">
          {children}
        </div>
      </main>

      <style>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Layout;
