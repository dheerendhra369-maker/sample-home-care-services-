
import React from 'react';

const Footer: React.FC = () => {
  const phoneNumber = "+91 90146 63217";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#39D428] rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">H</div>
              <div className="flex flex-col">
                <span className="text-md font-bold leading-tight">Home Care</span>
                <span className="text-[8px] uppercase tracking-widest text-[#39D428] font-semibold">For The Elderly</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing premium, compassionate home care services for seniors. Our mission is to ensure dignity, safety, and happiness for your loved ones in the comfort of their own home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39D428] transition-colors">
                <span className="text-xs">FB</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39D428] transition-colors">
                <span className="text-xs">TW</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39D428] transition-colors">
                <span className="text-xs">IG</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39D428] transition-colors">
                <span className="text-xs">LI</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-widest text-[10px] mb-4 md:mb-6">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-sm font-medium text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">My Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency SOS</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-widest text-[10px] mb-4 md:mb-6">Our Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm font-medium text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">24/7 Nursing Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elderly Companionship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Coordination</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post-Surgery Rehab</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-widest text-[10px] mb-4 md:mb-6">Contact Support</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <p className="text-sm text-slate-400 leading-tight">
                  Nageswara Rao Pantulu Rd,<br />
                  Vijayawada, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <a href={`tel:${phoneNumber}`} className="text-sm font-bold text-white hover:text-[#39D428] transition-colors">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">✉️</span>
                <p className="text-sm text-slate-400">support@homecare.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[11px] font-medium text-center md:text-left">
            © {year} Home Care Services for the Elderly. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-[11px] font-medium text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
