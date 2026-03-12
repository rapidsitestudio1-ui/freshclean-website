import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}
const DEFAULT_FAQ_DATA: FAQItem[] = [{
  id: '1',
  number: '01',
  question: 'What does a standard cleaning service include?',
  answer: 'Our standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning kitchens and bathrooms, wiping down counters, and taking out trash. We also offer add-ons like oven cleaning and window washing.'
}, {
  id: '2',
  number: '02',
  question: 'How long does a cleaning session take?',
  answer: 'A standard home cleaning typically takes 2-4 hours depending on the size of your space. Deep cleans and move-in/out services can take 4-8 hours depending on the scope and condition of the property.'
}, {
  id: '3',
  number: '03',
  question: 'What cleaning products do you use?',
  answer: 'We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. Our professional-grade solutions are tough on dirt and grime but gentle on your surfaces and indoor air quality.'
}, {
  id: '4',
  number: '04',
  question: 'How much does a cleaning service cost?',
  answer: 'Costs vary by service: regular cleaning starts around $100-$200, deep cleans range $200-$500, and move-in/out services can cost $300-$800+ depending on size. We offer free quotes for all projects.'
}];

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

// @component: FAQSection
export const FAQSection = ({ items, title, subtitle }: FAQSectionProps) => {
  const [activeId, setActiveId] = useState<string | null>('2');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Links should be empty (don't redirect)
    console.log('Form submitted:', {
      email,
      message
    });
  };

  // @return
  return <section className="relative overflow-hidden bg-white py-12 md:py-24 w-full">
      <div className="w-full mx-auto px-4 max-w-[1440px]">
        {/* Section Header */}
        <div className="relative mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: "Unbounded" }}
            >
              FAQ
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          
          <h2 className="text-[24px] sm:text-[31px] md:text-[41px] font-semibold leading-tight text-[#111111] mb-1" style={{ fontFamily: "Unbounded" }}>
            {title || 'Frequently Asked Questions'}
          </h2>
          <p className="text-[17px] font-semibold text-[#059669] m-0">
            {subtitle || 'Answers to common questions'}
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* FAQ Column */}
          <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
            <div className="space-y-0">
              {(items || DEFAULT_FAQ_DATA).map(item => {
              const isActive = activeId === item.id;
              return <div key={item.id} className={cn("relative border-b border-[#BFBFBF] overflow-hidden transition-all duration-500 ease-in-out", isActive ? "bg-[#059669] border-[#059669]" : "bg-white")}>
                    <button onClick={() => toggleAccordion(item.id)} className="w-full relative px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex items-center justify-between cursor-pointer focus:outline-none">
                      <h3 className={cn("text-[14px] sm:text-[15px] md:text-[20px] font-medium text-left flex items-center gap-3 sm:gap-4 md:gap-12 transition-colors duration-500", isActive ? "text-white" : "text-[#111111]")}>
                        <span className="inline-block flex-shrink-0">{item.number}</span>
                        <span>{item.question}</span>
                      </h3>
                      <div className={cn("w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500", isActive ? "bg-white text-[#111111]" : "bg-[#111111] text-white")}>
                        {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }} transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}>
                          <div className="px-4 sm:px-6 md:pl-[110px] md:pr-8 pb-4 sm:pb-6">
                            <p className="text-white text-base leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>}
                    </AnimatePresence>
                  </div>;
            })}
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-5/12 px-4">
            <div className="relative mx-auto lg:ml-auto max-w-[420px]">
              {/* Triangle Accent */}
              <span className="absolute hidden lg:block left-[-34px] top-[75px] w-[35px] h-[65px] bg-[#111111]" style={{
              clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 100% 100%)'
            }}></span>
              
              <div className="bg-[#111111] p-8 md:p-12 h-full lg:h-[475px] flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-[24px] md:text-[27px] font-normal leading-tight text-white capitalize">
                    Get a free quote from <br /> FreshClean
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2.5">
                  <div className="relative">
                    <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full h-[55px] bg-[#3C3C3C] text-white px-5 border-none focus:outline-none focus:ring-1 focus:ring-white transition-all font-normal placeholder:text-gray-400" />
                  </div>
                  
                  <div className="relative">
                    <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} className="w-full h-[115px] bg-[#3C3C3C] text-white px-5 py-4 border-none focus:outline-none focus:ring-1 focus:ring-white transition-all font-normal resize-none placeholder:text-gray-400"></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="group relative w-full h-[55px] bg-[#059669] text-white text-[14px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 overflow-hidden transition-all duration-300" style={{ fontFamily: "Unbounded" }}>
                      <span className="relative z-10 flex items-center gap-2">Submit <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                      <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};