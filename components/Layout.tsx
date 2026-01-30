
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'My Dashboard', icon: '🏠' },
    { id: 'services', label: 'Care Services', icon: '🛠️' },
    { id: 'care-assistant', label: 'Support Chat', icon: '💬' },
    { id: 'schedule', label: 'Care Calendar', icon: '📅' },
  ];

  const phoneNumber = "+919014663217";

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F4F7F9]">
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
                onClick={() => setActiveTab(tab.id)}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0A2540] capitalize tracking-tight">
              {activeTab === 'dashboard' ? 'Welcome Back, John' : activeTab.replace('-', ' ')}
            </h2>
            {activeTab === 'dashboard' && <p className="text-xs text-slate-500 font-medium">Care plan active for Mary Doe • Membership: Premium</p>}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-slate-600">
              <span className="text-xs font-bold">Emergency 24/7:</span>
              <a href={`tel:${phoneNumber}`} className="text-sm font-black text-rose-600">{phoneNumber}</a>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-black hover:bg-rose-700 transition-all shadow-lg hover:shadow-rose-200 flex items-center gap-2 animate-pulse"
            >
              🆘 SOS EMERGENCY
            </a>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8 bg-[#F4F7F9]">
          {children}
        </div>

        {/* Bottom Nav for Mobile */}
        <nav className="md:hidden flex bg-white border-t border-slate-200 sticky bottom-0 z-50 px-2 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-2 gap-1 rounded-lg transition-colors ${
                activeTab === tab.id ? 'text-[#39D428] bg-[#39D428]/10' : 'text-slate-400'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
};

export default Layout;
