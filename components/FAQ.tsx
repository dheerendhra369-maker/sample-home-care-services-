
import React, { useState } from 'react';

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
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.215504820894!2d80.62653631481358!3d16.517961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef0000000001%3A0x0!2zMTbCsDMxJzA0LjciTiA4MMKwMzcnNDMuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const externalMapLink = "https://www.google.com/maps?ll=16.517961,80.628725&z=14&t=m&hl=en-GB&gl=US&mapclient=embed&q=Nageswara+Rao+Pantulu+Rd+Vijayawada,+Andhra+Pradesh";

  return (
    <section className="mt-20 mb-12 max-w-5xl mx-auto px-6 space-y-16">
      {/* FAQ Header and List */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-black text-[#0A2540] mb-4">Answers For Families</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            We understand that choosing care for your loved ones is a deeply personal decision. Here is what you need to know about our approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-[#0A2540] leading-tight pr-4">{faq.question}</span>
                <span className={`text-[#39D428] font-black transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 p-6 pt-0 border-t border-slate-50' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden flex flex-col lg:flex-row">
        <div className="p-10 lg:w-1/2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#39D428]/10 text-[#39D428] rounded-full text-[10px] font-black uppercase tracking-widest mb-4 w-fit">
            📍 Our Center
          </div>
          <h2 className="text-3xl font-black text-[#0A2540] mb-4">Visit Us in Vijayawada</h2>
          <p className="text-slate-500 font-medium mb-6 leading-relaxed">
            Our coordination office is located in the heart of Vijayawada. Stop by to speak with a care manager in person or to learn more about our premium elder care services.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-xl">🏢</span>
              <div>
                <p className="font-bold text-[#0A2540]">Address</p>
                <p className="text-sm text-slate-500">Nageswara Rao Pantulu Rd, Vijayawada, Andhra Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-bold text-[#0A2540]">Phone</p>
                <p className="text-sm text-slate-500">+91 90146 63217</p>
              </div>
            </div>
          </div>
          <a 
            href={externalMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0A2540] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#1a3d5e] transition-all w-fit"
          >
            Get Directions ↗
          </a>
        </div>
        <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.215504820894!2d80.62653631481358!3d16.517961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35ef0000000001%3A0x0!2zMTbCsDMxJzA0LjciTiA4MMKwMzcnNDMuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-10 bg-[#0A2540] rounded-[2.5rem] text-center shadow-xl">
        <p className="text-white text-xl font-black mb-2">Have a specific concern?</p>
        <p className="text-slate-400 mb-8 font-medium">Our care team is ready to help you coordinate the best support for your elders.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="tel:+919014663217" className="bg-[#39D428] text-white px-12 py-4 rounded-full font-black text-sm shadow-lg hover:shadow-[#39D428]/20">Call Care Desk: +91 90146 63217</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
