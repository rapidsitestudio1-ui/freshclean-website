import React from 'react';
import { motion } from 'framer-motion';

export const ClientsSection = () => {
  const clients = [
    'Method', 'Seventh Generation', "Mrs. Meyer's", 'Dyson', 'Bissell', 'Miele',
  ];

  const marqueeItems = [...clients, ...clients];

  return (
    <section className="relative bg-[#fafaf8] py-10 md:py-14 overflow-hidden">
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#059669]" />
          <span
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Trusted By Industry Leaders
          </span>
          <div className="h-px w-8 bg-[#059669]" />
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafaf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafaf8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((name, i) => (
            <span
              key={i}
              className="text-gray-300 text-2xl md:text-[28px] font-bold tracking-tight select-none whitespace-nowrap shrink-0 hover:text-[#059669] transition-colors duration-500"
              style={{ fontFamily: 'Unbounded' }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 mt-10">
        <div className="h-px bg-gray-200" />
      </div>
    </section>
  );
};
