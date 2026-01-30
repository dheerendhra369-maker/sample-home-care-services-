
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AICareAssistant from './components/AICareAssistant';
import ServiceCatalog from './components/ServiceCatalog';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'care-assistant':
        return <AICareAssistant />;
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
      <div className="flex flex-col min-h-full">
        <div className="flex-1">
          {renderContent()}
        </div>
        <FAQ />
      </div>
    </Layout>
  );
};

export default App;
