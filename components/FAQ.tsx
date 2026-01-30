
import React, { useState } from 'react';

const FreqIcons = {
  location: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  office: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="15" y1="22" x2="15" y2="2"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="14" x2="20" y2="14"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>,
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  arrow: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the Care Manager model work?",
    answer: "Every family is assigned a dedicated Care Manager who acts as the primary point of contact. They coordinate with nurses, doctors, and concierge staff, ensuring that all health records are updated and family members are kept in the loop 24/7."
  },
  {
    question: "What happens during a medical emergency at night?",
    answer: "Our 24/7 emergency response team is just one button away. We coordinate with priority ambulance partners and mapped hospitals to ensure immediate attention. Your Care Manager is alerted instantly to assist with hospital admission and documentation."
  },
  {
    question: "Do you offer membership plans?",
    answer: "Yes, we offer monthly and annual membership tiers that include regular doctor visits, health monitoring, and a set number of concierge services. Members also get priority access to our emergency support desk."
  },
  {
    question: "How do you verify the background of caregivers?",
    answer: "Every caregiver (nurses, buddies, drivers) undergoes a 3-step verification process: Professional certification check, criminal background verification, and a psychological empathy assessment to ensure they are fit for elder care."
  },
  {
    question: "Can services be started immediately?",
    answer: "Typically, we can initiate support within 24-48 hours after an initial home safety assessment. In urgent situations, nursing care can often be deployed faster."
  },
  {
    question: "Is social companionship included in all plans?",
    answer: "Companionship is a core pillar of our philosophy. While 'Essential' focuses on safety, our 'Elite' and 'Pro' plans include dedicated Care Buddy sessions for social engagement."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const externalMapLink = "https://www.google.com/maps?ll=16.517961,80.628725&z=14&t=m&hl=en-GB&gl=US&mapclient=embed&q=Nageswara+Rao+Pantulu+Rd+Vijayawada,+Andhra+Pradesh";

  return (
    <section className="mt-20 mb-12 max-w-7xl mx-auto px-6 space-y-24">
      {/* FAQ Split Section - Rearranged for Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Sticky Header Content */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39D428]/10 text-[#39D428] rounded-full text-[10px] font-black uppercase tracking-widest">
            Support Desk
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight">
            Answers For <br className="hidden lg:block"/> Families
          </h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            We understand that choosing care for your loved ones is a deeply personal decision. Here is what you need to know about our compassionate approach.
          </p>
          <div className="pt-4 hidden lg:block">
            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Still have questions?</p>
               <a href="tel:+919014663217" className="text-[#39D428] font-black hover:underline">+91 90146 63217</a>
            </div>
          </div>
        </div>

        {/* FAQ List Content */}
        <div className="lg:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 ${
                openIndex === index 
                ? 'border-[#39D428]/30 shadow-xl shadow-slate-200/50' 
                : 'border-slate-100 shadow-sm hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <span className={`font-black text-base md:text-lg leading-tight pr-4 transition-colors ${
                  openIndex === index ? 'text-[#39D428]' : 'text-[#0A2540]'
                }`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-[#39D428] transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-[#39D428] text-white' : ''}`}>
                  {FreqIcons.arrow}
                </span>
              </button>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 p-8 pt-0 border-t border-slate-50' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section - Full Width Design */}
      <div className="bg-white rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
        <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#39D428]/10 text-[#39D428] rounded-full text-[10px] font-black uppercase tracking-widest w-fit">
              {FreqIcons.location} <span className="ml-1">Our Center</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] leading-tight">Visit Us in <br/> Vijayawada</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Our coordination office is located in the heart of Vijayawada. Stop by to speak with a care manager in person or to learn more about our premium services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
              <span className="text-[#39D428] mt-1 shrink-0">{FreqIcons.office}</span>
              <div>
                <p className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Address</p>
                <p className="text-sm font-bold text-[#0A2540]">Nageswara Rao Pantulu Rd, Vijayawada</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
              <span className="text-[#39D428] mt-1 shrink-0">{FreqIcons.phone}</span>
              <div>
                <p className="font-black text-xs uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                <p className="text-sm font-bold text-[#0A2540]">+91 90146 63217</p>
              </div>
            </div>
          </div>

          <a 
            href={externalMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-[#0A2540] text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-[#39D428] transition-all w-full sm:w-fit shadow-xl shadow-slate-200"
          >
            Get Directions
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        <div className="lg:w-1/2 h-80 lg:h-auto min-h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.215504820894!2d80.62653631481358!3d16.517961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef0000000001%3A0x0!2zMTbCsDMxJzA0LjciTiA4MMKwMzcnNDMuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-l-8 border-white hidden lg:block"></div>
        </div>
      </div>

      {/* Footer CTA - Modern Box */}
      <div className="p-12 md:p-20 bg-[#0A2540] rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#39D428]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Have a specific <span className="text-[#39D428]">concern?</span></h2>
          <p className="text-slate-400 mb-8 font-medium text-lg max-w-2xl mx-auto">
            Our care team is ready to help you coordinate the best medical and emotional support for your elders. No obligation, just expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919014663217" className="bg-[#39D428] text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-[#39D428]/20 hover:scale-105 transition-all">
              Call Care Desk
            </a>
            <button className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
