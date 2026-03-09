import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
}
const locations = ['Saudi Arabia', 'Bangladesh', 'Pakistan', 'Malaysia', 'Iran'];

// @component: EstimateForm
export const EstimateForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    location: 'You Location'
  });
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Links and submissions should be empty/prevented as per instructions
  };
  const handleLocationSelect = (loc: string) => {
    setFormData({
      ...formData,
      location: loc
    });
    setIsSelectOpen(false);
  };

  // @return
  return <div className="w-full max-w-[470px] bg-white border border-[#dfdfdf] p-5 sm:p-8 md:p-[40px_30px_50px_30px] shadow-sm">
      <div className="relative mb-5 sm:mb-[30px] text-center">
        <h2 className="text-[20px] sm:text-[24px] md:text-[26px] leading-tight font-normal text-[#111111] capitalize m-0" style={{
        fontFamily: "Unbounded"
      }}>
          Get your Estimate
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="relative box-border">
        <div className="flex flex-wrap -mx-[5px]">
          {/* First Name */}
          <div className="w-1/2 sm:w-1/2 px-[5px] mb-[10px]">
            <div className="relative">
              <input type="text" placeholder="First name" required value={formData.firstName} onChange={e => setFormData({
              ...formData,
              firstName: e.target.value
            })} className="w-full h-[48px] sm:h-[55px] bg-[#fbfbfb] border border-[#bfbfbf] px-3 sm:px-5 text-sm sm:text-base text-[#3c3c3c] focus:outline-none focus:border-[#059669] transition-colors" />
            </div>
          </div>

          {/* Last Name */}
          <div className="w-1/2 sm:w-1/2 px-[5px] mb-[10px]">
            <div className="relative">
              <input type="text" placeholder="Last name" required value={formData.lastName} onChange={e => setFormData({
              ...formData,
              lastName: e.target.value
            })} className="w-full h-[48px] sm:h-[55px] bg-[#fbfbfb] border border-[#bfbfbf] px-3 sm:px-5 text-sm sm:text-base text-[#3c3c3c] focus:outline-none focus:border-[#059669] transition-colors" />
            </div>
          </div>

          {/* Email */}
          <div className="w-full px-[5px] mb-[10px]">
            <div className="relative">
              <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full h-[48px] sm:h-[55px] bg-[#fbfbfb] border border-[#bfbfbf] px-3 sm:px-5 text-sm sm:text-base text-[#3c3c3c] focus:outline-none focus:border-[#059669] transition-colors" />
            </div>
          </div>

          {/* Custom Select */}
          <div className="w-full px-[5px] mb-[10px]">
            <div className="relative">
              <div onClick={() => setIsSelectOpen(!isSelectOpen)} className={cn("relative h-[48px] sm:h-[55px] leading-[48px] sm:leading-[55px] bg-[#fbfbfb] border border-[#bfbfbf] px-3 sm:px-5 text-sm sm:text-base text-[#3c3c3c] cursor-pointer flex items-center justify-between transition-all", isSelectOpen && "border-[#059669]")}>
                <span className="truncate">{formData.location}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isSelectOpen && "rotate-180")} />
              </div>

              {isSelectOpen && <motion.ul initial={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} transition={{
              duration: 0.2,
              ease: "easeOut"
            }} className="absolute left-0 right-0 top-[53px] z-[99] bg-[#059669] rounded-[5px] shadow-lg overflow-hidden py-0 m-0 list-none">
                  <li onClick={() => handleLocationSelect('You Location')} className={cn("px-[18px] py-2 leading-10 cursor-pointer text-white hover:bg-black/10 transition-colors text-left", formData.location === 'You Location' ? "font-bold" : "font-normal")}>
                    You Location
                  </li>
                  {locations.map(loc => <li key={loc} onClick={() => handleLocationSelect(loc)} className={cn("px-[18px] py-2 leading-10 cursor-pointer text-white hover:bg-black/10 transition-colors text-left", formData.location === loc ? "font-bold" : "font-normal")}>
                      {loc}
                    </li>)}
                </motion.ul>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-wrap -mx-[5px] mt-[10px]">
          <div className="w-full px-[5px]">
            <motion.button whileHover={{
            scale: 1.01
          }} whileTap={{
            scale: 0.98
          }} type="submit" className="group relative w-full h-[48px] sm:h-[55px] bg-[#059669] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center overflow-hidden transition-all duration-300 z-10">
              <span className="relative z-10 flex items-center gap-2" style={{
              fontFamily: "Unbounded"
            }}>
                Make An Appointment
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              
              {/* Hover effect overlays - replicating the specific sliced animation requested */}
              <div className="absolute inset-0 z-0 flex pointer-events-none">
                {[0, 1, 2, 3].map(i => <motion.div key={i} initial={{
                scaleY: 0,
                opacity: 0
              }} whileHover={{
                scaleY: 1,
                opacity: 1
              }} transition={{
                duration: 0.3,
                delay: i * 0.05
              }} className="h-full w-1/4 bg-[#111111]" style={{
                originY: 0
              }} />)}
              </div>
            </motion.button>
          </div>
        </div>
      </form>
    </div>;
};