
import React, { useState, useRef, useEffect } from 'react';
import { getCareAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AICareAssistantProps {
  onClose?: () => void;
}

const AICareAssistant: React.FC<AICareAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello! I am your Care Assistant. How can I help you or your loved ones today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await getCareAdvice(input, history);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-slate-100 bg-[#0A2540] text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#39D428] rounded-full flex items-center justify-center text-white shadow-inner border-2 border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="8" width="16" height="12" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base leading-tight">Care Assistant</h3>
            <p className="text-[10px] text-[#39D428] font-black uppercase tracking-widest">Always Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onClose && (
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors text-white/70 hover:text-white"
              aria-label="Close Chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-[#F8FAFC]"
      >
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[90%] p-3.5 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-[#39D428] text-white rounded-br-none shadow-lg shadow-[#39D428]/20' 
                : 'bg-white text-slate-800 rounded-bl-none border border-slate-100 shadow-sm'
            }`}>
              <div className="text-xs md:text-sm leading-relaxed prose prose-slate max-w-none">
                {msg.text.split('\n').map((line, i) => <p key={i} className="mb-1 last:mb-0">{line}</p>)}
              </div>
              <p className={`text-[9px] mt-2 opacity-60 font-bold uppercase tracking-tighter ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1.5 items-center">
              <div className="w-1.5 h-1.5 bg-[#39D428] rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-[#39D428] rounded-full animate-bounce delay-150"></div>
              <div className="w-1.5 h-1.5 bg-[#39D428] rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="How can I help today?"
            className="flex-1 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0A2540] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#39D428] focus:bg-white transition-all placeholder:text-slate-400"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-[#39D428] text-white px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#2BA11E] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-[#39D428]/20"
          >
            Send
          </button>
        </div>
        <p className="text-[9px] text-slate-400 mt-3 text-center font-medium">
          Personalized advice powered by AI • Not medical diagnosis
        </p>
      </div>
    </div>
  );
};

export default AICareAssistant;
