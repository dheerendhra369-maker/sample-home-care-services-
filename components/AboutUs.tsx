
import React, { useEffect, useState, useRef } from 'react';

const AboutIcons = {
  mission: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
  vision: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  values: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>,
  arrow: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
};

const MilestoneIcons = {
  h: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  cap: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>,
  chat: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  brain: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1-2.78-3.06 2.5 2.5 0 0 1 .52-4.82 2.5 2.5 0 0 1 2.78-3.06 2.5 2.5 0 0 1 4.72-1z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0 2.78-3.06 2.5 2.5 0 0 0-.52-4.82 2.5 2.5 0 0 0-2.78-3.06 2.5 2.5 0 0 0-4.72-1z"/></svg>,
  vid: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="m8 21 4-4 4 4"/></svg>,
  users: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  gear: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  heartHand: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
  home: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  gold: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 8h8z"/></svg>,
  joy: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M9 10l.01 0"/><path d="M15 10l.01 0"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></svg>,
};

const DIFFERENTIATORS = [
  {
    title: "Clinical Rigor",
    description: "Our care plans are led by senior geriatricians, ensuring medical accuracy and hospital-grade safety protocols at home.",
    icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="#39D428" strokeWidth="2" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
  {
    title: "24/7 Priority SOS",
    description: "Vijayawada's first dedicated elder-emergency network with real-time coordination and priority hospital admissions.",
    icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="#39D428" strokeWidth="2" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  },
  {
    title: "Digital Transparency",
    description: "Families get instant access to emotional wellness logs, vital monitoring, and caregiver shift notes via our secure portal.",
    icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="#39D428" strokeWidth="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  },
  {
    title: "Empathy Training",
    description: "Beyond clinical skills, every staff member completes our 'Heart-First' empathy simulation training program.",
    icon: <svg viewBox="0 0 24 24" width="32" height="32" stroke="#39D428" strokeWidth="2" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  }
];

const VALUES = [
  {
    title: "Dignity First",
    description: "We believe every senior deserves to live with respect and autonomy in their own home environment.",
    icon: AboutIcons.values
  },
  {
    title: "Medical Excellence",
    description: "Our care protocols are designed by geriatric specialists and delivered by certified professionals.",
    icon: AboutIcons.mission
  },
  {
    title: "Compassionate Tech",
    description: "We bridge the gap between families with smart monitoring that feels human, not clinical.",
    icon: AboutIcons.vision
  }
];

const STRATEGIC_PHASES = [
  {
    title: "PHASE 1: DEFINING QUALITY & TRUST",
    timeline: "(2016 – 2018)",
    footer: "Building the Pillars of TRUST & QUALITY",
    milestones: [
      { year: "2016", title: "Foundational Excellence & Service Launch", desc: "Milestone: Person-Centered Care Protocols", focus: "Humanizer Focus: 90% Client Trust Score", icon: MilestoneIcons.h },
      { year: "2017", title: "Advanced Caregiver Certification", desc: "Milestone: Empathy & Conflict Resolution Training", focus: "Humanizer Focus: Reduced Staff Turnover", icon: MilestoneIcons.cap },
      { year: "2018", title: "Transparent Family Communication", desc: "Milestone: Secure Digital Portal", focus: "Humanizer Focus: Emotional Wellness Log", icon: MilestoneIcons.chat }
    ]
  },
  {
    title: "PHASE 2: SPECIALIZATION & INTEGRATION",
    timeline: "(2019 – 2021)",
    footer: "Enhancing Care Through INNOVATION",
    milestones: [
      { year: "2019", title: "Specialized Memory Care", desc: "Milestone: Dementia-Specific Care Programs", focus: "Humanizer Focus: Client Engagement", icon: MilestoneIcons.brain },
      { year: "2020", title: "Safe Remote Health Services", desc: "Milestone: RPM & Tele-Wellness", focus: "Humanizer Focus: Combat Senior Isolation", icon: MilestoneIcons.vid },
      { year: "2021", title: "Meaningful Social Connection", desc: "Milestone: Intergenerational Programs", focus: "Humanizer Focus: 5+ Social Interactions/Week", icon: MilestoneIcons.users }
    ]
  },
  {
    title: "PHASE 3: AUTONOMY & SUSTAINABILITY",
    timeline: "(2022 – 2024)",
    footer: "Empowering Lives Through COMPASSION",
    milestones: [
      { year: "2022", title: "Data-Informed Personalization", desc: "Milestone: AI-assisted analytics", focus: "Humanizer Focus: Natural Rhythms", icon: MilestoneIcons.gear },
      { year: "2023", title: "Caregiver Wellbeing", desc: "Milestone: Invest in staff development", focus: "Humanizer Focus: Mental health support", icon: MilestoneIcons.heartHand },
      { year: "2024", title: "Technology for Independence", desc: "Milestone: Aging in Place Tech", focus: "Humanizer Focus: Empowerment & Safety", icon: MilestoneIcons.home }
    ]
  },
  {
    title: "PHASE 4: SETTING THE GOLD STANDARD",
    timeline: "(2025 – 2026)",
    footer: "Leading the Future of Compassionate Longevity",
    milestones: [
      { year: "2025", title: "Dignity and Joy Audit", desc: "Milestone: Independent Audit Measures for Happiness", focus: "Humanizer Focus: Formalize 'Joy Budget'", icon: MilestoneIcons.joy },
      { year: "2026", title: "Holistic Longevity Ecosystem", desc: "Milestone: Collaborative Community Hubs & Preventive Health", focus: "Humanizer Focus: Zero-Isolation Neighborhoods", icon: MilestoneIcons.gold }
    ]
  }
];

const TEAM = [
  { 
    name: "Dr. Sarah Varma", 
    role: "Chief Medical Officer", 
    bio: "With over 15 years in geriatric medicine, Dr. Varma oversees our clinical standards. She is a pioneer in home-based recovery programs and ensures every patient receives hospital-grade care.", 
    img: "https://i.pravatar.cc/150?u=sarah" 
  },
  { 
    name: "Rajesh Iyer", 
    role: "Head of Care Operations", 
    bio: "As a former hospital administrator, Rajesh brings rigorous operational safety to home care. He manages our network of 500+ caregivers with focus on continuous training.", 
    img: "https://i.pravatar.cc/150?u=rajesh" 
  },
  { 
    name: "Ananya Rao", 
    role: "Family Liaison Lead", 
    bio: "An expert in elderly psychological support, Ananya bridges the communication gap between seniors and their families, advocating for social engagement as a core pillar of health.", 
    img: "https://i.pravatar.cc/150?u=ananya" 
  }
];

const AboutUs: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const parallaxOffset = scrollY * 0.1;

  return (
    <div className="max-w-7xl mx-auto space-y-24 py-12 px-6">
      {/* Hero Section */}
      <section ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
        <div className="space-y-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39D428]/10 text-[#39D428] rounded-full text-xs font-black uppercase tracking-widest">
              Our Legacy
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-[#0A2540] leading-[1.1]">
              Redefining How We <span className="text-[#39D428] relative">Care For Our Elders
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 10.5C50.5 3 149.5 3 199 10.5" stroke="#39D428" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              HomeCare was founded with a single mission: to provide the same quality of care for our elders as we would for our own parents. Based in Vijayawada, we combine clinical rigor with local compassion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="group relative px-10 py-6 bg-[#39D428] text-white rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#39D428]/30 hover:scale-105 transition-all flex items-center justify-center gap-4 overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">{AboutIcons.arrow}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
            <div className="flex items-center gap-4 px-8 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" />)}
               </div>
               <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Trusted by 1,200+ families</span>
            </div>
          </div>
        </div>

        <div className="relative group animate-on-scroll opacity-0 translate-x-10 transition-all duration-1000 delay-300 ease-out">
          <div 
            className="aspect-[4/5] bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
             <img 
               src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
               alt="Elderly male with female caregiver" 
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#39D428] rounded-[3rem] -z-0 opacity-20 blur-3xl animate-float"></div>
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-indigo-500 rounded-full -z-0 opacity-15 blur-[100px] animate-float-delayed"></div>
        </div>
      </section>

      {/* Strategic Roadmap: Goals We Achieved */}
      <section className="space-y-16 animate-on-scroll opacity-0 translate-y-20 transition-all duration-1000">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#0A2540]">Goals We Achieved</h2>
          <p className="text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Our Strategic Roadmap (2016 – 2026)</p>
          <div className="w-32 h-2 bg-[#39D428] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGIC_PHASES.map((phase, pIdx) => (
            <div key={pIdx} className="bg-gradient-to-br from-[#E9F7EF] to-[#F1F8FD] rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-xl flex flex-col min-h-[600px] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <div className="mb-8 text-center border-b border-slate-200/50 pb-6">
                <p className="text-[10px] md:text-[11px] font-black text-[#0A2540] tracking-tighter mb-1 leading-tight uppercase">
                  {phase.title}
                </p>
                <p className="text-[9px] font-bold text-slate-500">{phase.timeline}</p>
              </div>

              <div className="flex-1 space-y-8">
                {phase.milestones.map((m, mIdx) => (
                  <div key={mIdx} className="relative pl-12 group/m">
                    {/* Vertical connector line */}
                    {mIdx !== phase.milestones.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-[-2rem] w-0.5 bg-slate-200"></div>
                    )}
                    
                    <div className="absolute left-0 top-0 w-10 h-10 bg-white rounded-full border-2 border-[#39D428] flex items-center justify-center text-[#39D428] shadow-sm group-hover/m:bg-[#39D428] group-hover/m:text-white transition-colors">
                      {m.icon}
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-black text-[#39D428]">{m.year}</p>
                      <h4 className="text-xs font-black text-[#0A2540] leading-tight">{m.title}</h4>
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-400">• {m.desc}</p>
                        <p className="text-[9px] font-black text-[#39D428] bg-[#39D428]/5 px-2 py-1 rounded-md inline-block uppercase tracking-tighter italic">
                          {m.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200/50">
                <p className="text-[11px] font-black text-[#0A2540] text-center uppercase leading-snug tracking-tighter">
                  {phase.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-16 animate-on-scroll opacity-0 translate-y-20 transition-all duration-1000">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#0A2540]">Why Choose Us?</h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">What sets us apart in delivering exceptional care and peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIATORS.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-[#39D428]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#0A2540] mb-4 group-hover:text-[#39D428] transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0A2540] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden animate-on-scroll opacity-0 translate-y-20 transition-all duration-1000">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#39D428]/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-8 group">
            <div className="w-20 h-20 bg-[#39D428] rounded-3xl flex items-center justify-center text-white shadow-xl shadow-[#39D428]/20 group-hover:scale-110 transition-transform">
              {AboutIcons.mission}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black">Our Mission</h2>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To empower seniors to lead fulfilling, safe, and dignified lives in their own homes by providing world-class medical support and companionship.
              </p>
            </div>
          </div>
          <div className="space-y-8 group">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white border border-white/5 group-hover:scale-110 transition-transform">
              {AboutIcons.vision}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black">Our Vision</h2>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                To be the most trusted name in elderly home care, setting new standards for clinical quality and emotional well-being across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="space-y-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-6xl font-black text-[#0A2540]">Meet Our Leaders</h2>
            <p className="text-slate-500 font-medium max-w-xl text-xl leading-relaxed">A multidisciplinary team dedicated to clinical excellence and family satisfaction.</p>
          </div>
          <button className="px-10 py-5 bg-[#39D428]/10 text-[#39D428] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#39D428] hover:text-white transition-all shadow-lg shadow-[#39D428]/10 whitespace-nowrap">
            Join Our Team
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <div key={i} className="bg-white rounded-[4rem] overflow-hidden border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col">
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-10 space-y-4 flex-1">
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-[#0A2540]">{member.name}</h4>
                  <p className="text-[10px] text-[#39D428] font-black uppercase tracking-[0.2em]">{member.role}</p>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed leading-7">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translate(0) !important;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 10s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
