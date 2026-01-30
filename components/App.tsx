
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AICareAssistant from './components/AICareAssistant';
import ServiceCatalog from './components/ServiceCatalog';
import CarePlans from './components/CarePlans';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'services':
        return <ServiceCatalog />;
      case 'plans':
        return <CarePlans />;
      case 'about':
        return <AboutUs />;
      case 'schedule':
        return (
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 text-[#39D428]">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Detailed Schedule Coming Soon</h2>
            <p className="text-slate-500 max-w-md">We are currently integrating with your local calendar to provide a more seamless experience.</p>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className="mt-8 px-8 py-3 bg-[#39D428] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2BA11E] transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="flex flex-col min-h-full relative">
        <div className="flex-1">
          {renderContent()}
        </div>
        <FAQ />
        <Footer />

        {/* Floating Support Chat FAB Container */}
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] flex flex-col items-end gap-4 pointer-events-none">
          {/* Chat Window Overlay */}
          {isChatOpen && (
            <div className="pointer-events-auto w-[calc(100vw-3rem)] sm:w-[380px] md:w-[400px] h-[500px] max-h-[70vh] md:max-h-[80vh] shadow-2xl rounded-[2.5rem] overflow-hidden animate-slide-up-fade origin-bottom-right mb-2">
              <AICareAssistant onClose={() => setIsChatOpen(false)} />
            </div>
          )}
          
          {/* FAB Toggle Button */}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`pointer-events-auto group w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-4 ${
              isChatOpen 
                ? 'bg-[#0A2540] text-white border-white/10' 
                : 'bg-[#39D428] text-white border-white/20'
            }`}
          >
            {isChatOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <div className="flex flex-col items-center relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 border-2 border-white"></span>
                </span>
              </div>
            )}
            
            {!isChatOpen && (
              <div className="hidden lg:block absolute right-20 bg-[#0A2540] text-white px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/5 whitespace-nowrap">
                Care Assistant
              </div>
            )}
          </button>
        </div>

        <style>{`
          @keyframes slide-up-fade {
            from { 
              opacity: 0; 
              transform: translateY(30px) scale(0.9); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          .animate-slide-up-fade {
            animation: slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default App;
