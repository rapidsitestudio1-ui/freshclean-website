import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

// @component: RooferCTA
export const RooferCTA = () => {
  return (
    <section className="relative overflow-hidden mb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
          filter: 'brightness(0.2)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111111]/70" />

      <div className="relative container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Ready to Get Started?
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
            <h2
              className="font-bold text-[26px] sm:text-[32px] md:text-[44px] leading-[1.2] text-white mb-4"
              style={{ fontFamily: 'Unbounded' }}
            >
              Transform Your Space
              <br />
              with Expert Cleaning
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[520px] mx-auto mb-8">
              Get a free walk-through and quote from our certified cleaning professionals. No obligation, no pressure — just honest advice.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-[#059669] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300 overflow-hidden"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Estimate
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-white/50">Call Us Now</span>
                  <span className="block text-base font-semibold">+1 (234) 567-890</span>
                </div>
              </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
