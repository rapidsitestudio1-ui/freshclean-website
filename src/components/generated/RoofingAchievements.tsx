import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const AnimatedCounter = ({ value, suffix = '+', label, icon }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const spring = useSpring(0, { mass: 1, stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative text-center"
    >
      <div className="relative bg-white/[0.07] backdrop-blur-sm border border-white/10 p-8 md:p-10 hover:bg-white/[0.12] hover:border-[#059669]/30 transition-all duration-500 overflow-hidden">
        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#059669]/40 group-hover:border-[#059669] transition-colors duration-500" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#059669]/40 group-hover:border-[#059669] transition-colors duration-500" />

        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-5 bg-[#059669]/15 flex items-center justify-center group-hover:bg-[#059669] transition-colors duration-500">
          <div className="text-[#059669] group-hover:text-white transition-colors duration-500">
            {icon}
          </div>
        </div>

        {/* Number */}
        <div className="flex items-center justify-center">
          <motion.h2
            className="text-[40px] md:text-[52px] font-bold leading-tight text-white"
            style={{ fontFamily: 'Unbounded' }}
          >
            {displayValue}
          </motion.h2>
          <span
            className={cn(
              'text-[40px] md:text-[52px] font-bold leading-tight text-[#059669] ml-1 relative',
              suffix === '%' ? 'top-[-2px]' : 'top-[-4px]'
            )}
          >
            {suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-white/70 text-[13px] md:text-[14px] font-medium mt-1 uppercase tracking-wider">
          {label}
        </p>

        {/* Hover glow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#059669]/[0.08] rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

// @component: RoofingAchievements
export const RoofingAchievements = () => {
  const stats = [
    {
      value: 200,
      suffix: '+',
      label: 'Homes Cleaned',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      value: 97,
      suffix: '%',
      label: 'Satisfaction Rate',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ),
    },
    {
      value: 34,
      suffix: '+',
      label: 'Team Members',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
    },
    {
      value: 100,
      suffix: '+',
      label: 'Happy Clients',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
          filter: 'brightness(0.15)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111111]/80" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Our Progress
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          <h2
            className="text-[26px] sm:text-[34px] md:text-[44px] font-bold leading-[1.15] text-white mb-5"
            style={{ fontFamily: 'Unbounded' }}
          >
            Cleaning Achievements{' '}
            <span className="text-[#059669]">in Numbers</span>
          </h2>
          <p
            className="text-white/60 text-[15px] leading-relaxed"
            style={{ fontFamily: 'Unbounded' }}
          >
            With 19+ years serving homeowners and businesses, our track record
            speaks for itself. Every project reflects our commitment to spotless
            quality and lasting freshness.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
