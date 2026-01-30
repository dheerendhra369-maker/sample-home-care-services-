
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AICareAssistant from './components/AICareAssistant';
import ServiceCatalog from './components/ServiceCatalog';
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
      case 'schedule':
        return (
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-6">🗓️</div>
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
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[200] flex flex-col items-end gap-4 pointer-events-none">
          {/* Chat Window Overlay */}
          {isChatOpen && (
            <div className="pointer-events-auto w-[calc(100vw-2rem)] sm:w-[380px] md:w-[400px] h-[500px] max-h-[70vh] md:max-h-[80vh] shadow-2xl rounded-[2rem] overflow-hidden animate-slide-up-fade origin-bottom-right">
              <AICareAssistant onClose={() => setIsChatOpen(false)} />
            </div>
          )}
          
          {/* FAB Toggle Button */}
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`pointer-events-auto group w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              isChatOpen 
                ? 'bg-[#0A2540] text-white' 
                : 'bg-[#39D428] text-white'
            }`}
          >
            {isChatOpen ? (
              <span className="text-xl md:text-2xl">✕</span>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl">💬</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-rose-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-rose-500 rounded-full border-2 border-white"></span>
              </div>
            )}
            
            {/* Tooltip on Hover (Desktop only) */}
            {!isChatOpen && (
              <div className="hidden md:block absolute right-20 bg-[#0A2540] text-white px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                Need Help? Ask AI Assistant
              </div>
            )}
          </button>
        </div>

        <style>{`
          @keyframes slide-up-fade {
            from { 
              opacity: 0; 
              transform: translateY(20px) scale(0.95); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          .animate-slide-up-fade {
            animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default App;
