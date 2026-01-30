
import React, { useState } from 'react';

const PlanIcons = {
  essential: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 2 7a8 8 0 0 1-8 8v5"></path><path d="M12.7 16.2a13 13 0 0 0 8.1 1.9"></path></svg>,
  elite: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.5-1 1-4c2 1 2 1 4 4z"></path><path d="M12 15v5s1 .5 4 1c-1-2-1-2-4-4z"></path></svg>,
  pro: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"></path><path d="M11 3l-4 6 10 13"></path><path d="M13 3l4 6-10 13"></path></svg>,
  chevron: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
};

const PLANS = [
  {
    name: 'Essential',
    tagline: 'Peace of mind for active seniors.',
    price: '₹18,000',
    period: 'mo',
    color: 'border-slate-100',
    icon: PlanIcons.essential,
    features: [
      { text: '24/7 Emergency Support', included: true },
      { text: 'Assigned Care Manager', included: true },
      { text: 'Monthly Vital Checkup', included: true },
      { text: 'Medical Record Mgmt', included: true },
      { text: 'Specialist Referral', included: false },
      { text: 'Nursing Visits', included: false },
    ]
  },
  {
    name: 'Elite Plus',
    tagline: 'Complete medical monitoring.',
    price: '₹30,000',
    period: 'mo',
    featured: true,
    color: 'border-[#39D428]/30',
    icon: PlanIcons.elite,
    features: [
      { text: 'All Essential Features', included: true },
      { text: 'Bi-Weekly Nursing', included: true },
      { text: 'Priority Hospital Admission', included: true },
      { text: 'Pharmacy Discounts', included: true },
      { text: 'Physiotherapy Session', included: true },
      { text: 'Memory Care', included: false },
    ]
  },
  {
    name: 'Pro Max',
    tagline: 'Holistic lifestyle management.',
    price: '₹40,000',
    period: 'mo',
    color: 'border-indigo-100',
    icon: PlanIcons.pro,
    features: [
      { text: 'All Elite Plus Features', included: true },
      { text: 'Weekly Nursing Visits', included: true },
      { text: 'Chronic Condition Support', included: true },
      { text: 'Doctor Consultation (1/mo)', included: true },
      { text: 'Personal Wellness Coach', included: true },
      { text: 'Home Safety Audit', included: true },
    ]
  }
];

const SUCCESS_STORIES = [
  {
    name: "Dr. Arvind Gupta",
    role: "Son of Mr. S. Gupta",
    quote: "As a doctor myself, I appreciate the medical rigor HomeCare brings. Their digital record-keeping is professional and makes my life so much easier while I'm away from home.",
    avatar: "https://i.pravatar.cc/150?u=arvind"
  },
  {
    name: "Meera Nair",
    role: "Daughter of Mrs. Lakshmi",
    quote: "The companionship program changed my mom's outlook. She's now social, happy, and looks forward to her weekly outings with her Care Buddy Amit.",
    avatar: "https://i.pravatar.cc/150?u=meera"
  }
];

const PLAN_FAQS = [
  {
    question: "How am I billed for my chosen care plan?",
    answer: "Plans are billed monthly on the 1st of every month via your preferred payment method. We also offer an annual billing option which provides a 10% discount on the total membership fee."
  },
  {
    question: "Can I upgrade or customize the features in my plan later?",
    answer: "Yes, you can upgrade your plan at any time. Customizations (like adding extra physiotherapy sessions or nursing hours) can be coordinated directly with your assigned Care Manager."
  },
  {
    question: "What is the notice period for plan cancellation?",
    answer: "We require a 15-day notice for cancellations to ensure smooth staff scheduling and service handovers. There are no long-term lock-in contracts."
  },
  {
    question: "Are external medical costs like lab tests included?",
    answer: "No, our plans cover coordination and nursing services. External costs for medicines, consumables, and laboratory tests are separate, although Elite Plus and Pro Max members receive exclusive discounts from our partners."
  }
];

const CarePlans: React.FC = () => {
  const phoneNumber = "+919014663217";
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-8 space-y-24">
      {/* Hero Header */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39D428]/10 text-[#39D428] rounded-full text-xs font-black uppercase tracking-widest mb-2">
          Flexible Memberships
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#0A2540] tracking-tight leading-[1.1]">
          Tailored Support for <br/> Every <span className="text-[#39D428]">Stage of Aging</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
          From basic safety monitoring to comprehensive clinical care, our plans are designed 
          by geriatric specialists to provide dignity and security at home.
        </p>
      </section>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PLANS.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col bg-white rounded-[3.5rem] p-10 border-2 shadow-2xl shadow-slate-200/50 transition-all hover:scale-105 duration-500 ${plan.color} ${plan.featured ? 'scale-105 z-10' : ''}`}
          >
            {plan.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#39D428] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#39D428]/20">
                Recommended
              </div>
            )}
            
            <div className="flex justify-between items-start mb-8">
              <span className="text-[#39D428]">{plan.icon}</span>
              <div className="text-right">
                <span className="text-4xl font-black text-[#0A2540]">{plan.price}</span>
                <span className="text-slate-400 font-bold text-sm block">/{plan.period}</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-[#0A2540] mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm font-bold mb-10 h-10">{plan.tagline}</p>

            <div className="space-y-5 mb-12 flex-1">
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className={`flex items-center gap-4 text-sm font-bold ${feature.included ? 'text-slate-600' : 'text-slate-300'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${feature.included ? 'bg-[#39D428]/10 text-[#39D428]' : 'bg-slate-50 text-slate-200'}`}>
                    {feature.included ? '✓' : '✕'}
                  </div>
                  {feature.text}
                </div>
              ))}
            </div>

            <button 
              onClick={() => window.location.href = `tel:${phoneNumber}`}
              className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest text-center transition-all ${
                plan.featured 
                  ? 'bg-[#39D428] text-white shadow-xl shadow-[#39D428]/20 hover:bg-[#2BA11E]' 
                  : 'bg-[#0A2540] text-white hover:bg-[#1a3d5e]'
              }`}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* Success Stories Section */}
      <section className="bg-white rounded-[4rem] p-12 md:p-20 shadow-sm border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-[#0A2540] tracking-tight">Stories of <br/><span className="text-[#39D428]">Compassion</span></h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We take pride in the trust families place in us. Every story is a testament to our commitment 
              to making senior years truly golden.
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-50 px-6 py-4 rounded-3xl">
                <p className="text-2xl font-black text-[#0A2540]">1,200+</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Happy Families</p>
              </div>
              <div className="bg-slate-50 px-6 py-4 rounded-3xl">
                <p className="text-2xl font-black text-[#39D428]">12min</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Avg SOS Response</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {SUCCESS_STORIES.map((story, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[3rem] relative hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-slate-100">
                <p className="text-slate-600 font-bold leading-relaxed mb-8 italic">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={story.avatar} alt={story.name} className="w-14 h-14 rounded-full border-2 border-white shadow-lg" />
                  <div>
                    <h4 className="font-black text-[#0A2540]">{story.name}</h4>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan-Specific FAQ Section */}
      <section className="bg-[#F8FAFC] rounded-[4rem] p-12 md:p-20 shadow-inner border border-slate-100">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540]">Plan Details & Billing</h2>
            <p className="text-slate-500 font-medium">Frequently asked questions specifically about our care plans.</p>
          </div>

          <div className="space-y-4">
            {PLAN_FAQS.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-[#0A2540] leading-tight pr-4">{faq.question}</span>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-[#39D428] font-black transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    {PlanIcons.chevron}
                  </span>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openFaqIndex === index ? 'max-h-96 opacity-100 p-8 pt-0 border-t border-slate-50' : 'max-h-0 opacity-0 overflow-hidden'
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
      </section>

      {/* Trust CTA */}
      <section className="bg-[#0A2540] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full"></div>
        </div>
        <div className="relative z-10 space-y-10">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">Start Your Care <br/> Journey <span className="text-[#39D428]">Today</span></h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
            Our geriatric care managers are ready to guide you through a free assessment. 
            No pressure, just compassionate guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto px-16 py-6 bg-[#39D428] text-white rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-2xl shadow-[#39D428]/30 hover:scale-110 transition-transform">
              Free Consultation
            </a>
            <button className="text-white font-black text-sm uppercase tracking-widest border-b-2 border-[#39D428] pb-1">
              Download Full Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarePlans;
