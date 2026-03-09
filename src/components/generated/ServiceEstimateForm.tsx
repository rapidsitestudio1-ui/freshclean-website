import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';

type ServiceType =
  | 'Residential Cleaning'
  | 'Commercial Cleaning'
  | 'Construction Cleaning'
  | 'Windows Cleaning';
type CleanType =
  | 'Full Cleaning'
  | 'One Time Cleaning'
  | 'Weekly Cleaning'
  | 'Monthly Cleaning';

interface FormData {
  serviceType: ServiceType;
  cleanType: CleanType;
  floorArea: string;
  clientName: string;
  zipCode: string;
  emailAddress: string;
}

const SERVICE_OPTIONS: ServiceType[] = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Construction Cleaning',
  'Windows Cleaning',
];
const CLEAN_OPTIONS: CleanType[] = [
  'Full Cleaning',
  'One Time Cleaning',
  'Weekly Cleaning',
  'Monthly Cleaning',
];

// @component: ServiceEstimateForm
export const ServiceEstimateForm = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceType: 'Residential Cleaning',
    cleanType: 'Full Cleaning',
    floorArea: '',
    clientName: '',
    zipCode: '',
    emailAddress: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses =
    'w-full bg-white/[0.07] border border-white/10 px-4 h-[52px] text-[14px] text-white focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]/30 transition-all duration-300 placeholder:text-white/30';

  const selectClasses = cn(
    inputClasses,
    'appearance-none pr-10 cursor-pointer'
  );

  const labelClasses =
    "text-[13px] font-semibold text-white/80 uppercase tracking-wider mb-2 block";

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111111]/92" />
      {/* Green gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/10 via-transparent to-[#059669]/5" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left — Header content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Free Estimate
              </span>
            </div>

            <h2
              className="text-[26px] sm:text-[34px] md:text-[44px] font-bold leading-[1.12] text-white mb-6"
              style={{ fontFamily: 'Unbounded' }}
            >
              Get Your Cleaning{' '}
              <span className="text-[#059669]">Cost Estimate</span>
            </h2>

            <p
              className="text-white/50 text-[15px] leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: 'Unbounded' }}
            >
              Fill in a few details about your space and we'll send you a
              personalized quote — completely free, no strings attached.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col gap-4">
              {[
                'No hidden fees or obligations',
                'Response within 24 hours',
                'Accurate pricing guaranteed',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#059669]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  </div>
                  <span className="text-white/60 text-[14px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative bg-white/[0.05] backdrop-blur-sm border border-white/10 p-7 sm:p-10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#059669]/40" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#059669]/40" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Row 1 — Service & Clean type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          Choose a Service
                        </label>
                        <div className="relative">
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            className={selectClasses}
                          >
                            {SERVICE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#111] text-white">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          Type of Clean
                        </label>
                        <div className="relative">
                          <select
                            name="cleanType"
                            value={formData.cleanType}
                            onChange={handleInputChange}
                            className={selectClasses}
                          >
                            {CLEAN_OPTIONS.map((opt) => (
                              <option key={opt} value={opt} className="bg-[#111] text-white">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 2 — Floor area & Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          Total Floor Area
                        </label>
                        <input
                          type="text"
                          name="floorArea"
                          placeholder="e.g. 1,590 sq ft"
                          value={formData.floorArea}
                          onChange={handleInputChange}
                          required
                          className={inputClasses}
                        />
                      </div>

                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          placeholder="Full name"
                          value={formData.clientName}
                          onChange={handleInputChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Row 3 — ZIP & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          placeholder="Your area code"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className={inputClasses}
                        />
                      </div>

                      <div>
                        <label className={labelClasses} style={{ fontFamily: 'Unbounded' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          placeholder="your@email.com"
                          value={formData.emailAddress}
                          onChange={handleInputChange}
                          required
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center justify-center text-white text-[13px] font-bold bg-[#059669] px-10 py-4 uppercase tracking-wider overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                        style={{ fontFamily: 'Unbounded' }}
                      >
                        <span className="relative z-10 flex items-center gap-2.5">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Calculating...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Get Cost Estimate
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                      </button>

                      <p className="text-white/30 text-[13px] leading-relaxed italic max-w-xs">
                        We'll send you a detailed cost breakdown within 24 hours.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-20 h-20 bg-[#059669]/20 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-[#059669]" />
                    </motion.div>
                    <h3
                      className="text-[22px] sm:text-[26px] font-bold text-white mb-3"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      Estimate Request Sent!
                    </h3>
                    <p className="text-white/50 max-w-md mx-auto mb-8 text-[15px] leading-relaxed">
                      Thank you,{' '}
                      <span className="text-[#059669] font-semibold">
                        {formData.clientName}
                      </span>
                      . We've received your request for a{' '}
                      {formData.cleanType.toLowerCase()} estimate. Our team will
                      get back to you within 24 hours with a detailed quote.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          serviceType: 'Residential Cleaning',
                          cleanType: 'Full Cleaning',
                          floorArea: '',
                          clientName: '',
                          zipCode: '',
                          emailAddress: '',
                        });
                      }}
                      className="group relative inline-flex items-center text-white text-[13px] font-bold bg-[#059669] px-8 py-3.5 uppercase tracking-wider overflow-hidden transition-all duration-300"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Submit Another Request
                      </span>
                      <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
