
import React from 'react';

const FooterIcons = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  ),
  x: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16H20L8.267 4H4z" /><path d="M4 20l6.768-6.768m2.46-2.46L20 4" /></svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  reddit: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12c0-1.1-.9-2-2-2a2 2 0 0 0-1.85 1.26c-1.79-1.07-4.23-1.74-6.9-1.88l1.25-5.83 4.14.9a1.75 1.75 0 1 0 .35-.7l-4.5-.98a.5.5 0 0 0-.59.39l-1.38 6.42c-2.73.08-5.23.75-7.07 1.84a2 2 0 1 0-1.13 3.6 5.86 5.86 0 0 0 0 1.15c0 2.76 3.58 5 8 5s8-2.24 8-5c0-.4-.08-.78-.21-1.15A2 2 0 1 0 20 12zM8.5 13.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm7.25 4.5c-1 1.5-3 2-3.75 2s-2.75-.5-3.75-2a.25.25 0 0 1 .43-.25c.82 1.23 2.52 1.64 3.32 1.64s2.5-.41 3.32-1.64a.25.25 0 0 1 .43.25zm-.75-2a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path></svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  ),
};

const Footer: React.FC = () => {
  const phoneNumber = "+91 90146 63217";
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FooterIcons.facebook, href: "https://www.facebook.com/anath123", label: "Facebook" },
    { icon: FooterIcons.x, href: "https://x.com/", label: "X" },
    { icon: FooterIcons.instagram, href: "https://www.instagram.com/dheeren369/", label: "Instagram" },
    { icon: FooterIcons.linkedin, href: "https://www.linkedin.com/in/akurathi-dheeredhranath-2799b13a0/", label: "LinkedIn" },
    { icon: FooterIcons.reddit, href: "https://www.reddit.com/user/Sure_Detail5888/", label: "Reddit" },
  ];

  return (
    <footer className="bg-[#0A2540] text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#39D428]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#39D428] rounded-[1rem] flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-[#39D428]/20">H</div>
              <div className="flex flex-col">
                <span className="text-xl font-black leading-tight tracking-tight">HomeCare</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#39D428] font-black">Elderly Services</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Providing premium, compassionate home care services for seniors. Our mission is to ensure dignity, safety, and happiness for your loved ones in the comfort of their own home.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-[#39D428] hover:text-white hover:border-[#39D428] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-[0.2em] text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-[#39D428] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#39D428] scale-0 group-hover:scale-100 transition-transform"></span> My Dashboard</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#39D428] scale-0 group-hover:scale-100 transition-transform"></span> Care Services</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#39D428] scale-0 group-hover:scale-100 transition-transform"></span> About Us</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#39D428] scale-0 group-hover:scale-100 transition-transform"></span> Emergency SOS</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-[0.2em] text-[10px] mb-8">Our Services</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-[#39D428] transition-colors">24/7 Nursing Care</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors">Elderly Companionship</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors">Medical Coordination</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors">Post-Surgery Rehab</a></li>
              <li><a href="#" className="hover:text-[#39D428] transition-colors">Home Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#39D428] font-black uppercase tracking-[0.2em] text-[10px] mb-8">Contact Support</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#39D428] group-hover:bg-[#39D428] group-hover:text-white transition-all">
                  {FooterIcons.location}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  Nageswara Rao Pantulu Rd,<br />
                  Vijayawada, Andhra Pradesh
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#39D428] group-hover:bg-[#39D428] group-hover:text-white transition-all">
                  {FooterIcons.phone}
                </div>
                <a href={`tel:${phoneNumber}`} className="text-sm font-black text-white hover:text-[#39D428] transition-colors pt-2">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#39D428] group-hover:bg-[#39D428] group-hover:text-white transition-all">
                  {FooterIcons.mail}
                </div>
                <p className="text-sm text-slate-400 font-bold pt-2 group-hover:text-white transition-colors">support@homecare.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] font-bold text-center md:text-left tracking-tight">
            © {year} Home Care Services for the Elderly. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-[#39D428] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#39D428] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#39D428] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
