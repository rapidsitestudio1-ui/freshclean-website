import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: number;
  className?: string;
  initialPosition?: number;
}

// @component: ComparisonSlider
export const ComparisonSlider = ({
  beforeImage = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1170&q=80',
  afterImage = 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1170&q=80',
  beforeAlt = 'Before cleaning',
  afterAlt = 'After cleaning',
  aspectRatio = 1170 / 500,
  className = '',
  initialPosition = 50,
}: ComparisonSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  const xPercent = useMotionValue(initialPosition);

  const springConfig = {
    damping: 25,
    stiffness: 200,
    mass: 0.5,
  };
  const smoothXPercent = useSpring(xPercent, springConfig);

  const clipPath = useTransform(
    smoothXPercent,
    (v) => `inset(0 ${100 - v}% 0 0)`
  );

  const handleLeft = useTransform(smoothXPercent, (v) => `${v}%`);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const nextPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(nextPercent);
      xPercent.set(nextPercent);
    },
    [xPercent]
  );

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };
    const onEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onEnd);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, handleMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      const next = Math.max(0, position - 5);
      setPosition(next);
      xPercent.set(next);
    } else if (e.key === 'ArrowRight') {
      const next = Math.min(100, position + 5);
      setPosition(next);
      xPercent.set(next);
    }
  };

  // @return
  return (
    <section
      className={cn(
        'relative w-full py-12 sm:py-16 md:py-20 lg:py-[120px] bg-[#111111] overflow-hidden',
        className
      )}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px] relative z-10">
        {/* Section Header */}
        <div className="relative mb-8 md:mb-14 z-10">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Before & After
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-[24px] sm:text-[31px] md:text-[41px] leading-tight font-semibold text-white mb-1"
                style={{ fontFamily: 'Unbounded' }}
              >
                See the Difference
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
                className="text-[14px] sm:text-[15px] md:text-[17px] leading-[26px] font-semibold text-[#059669]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Drag to reveal the transformation
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-white/60 text-[14px] md:text-[15px] leading-relaxed max-w-md"
            >
              Our expert team transforms dirty, neglected spaces into fresh,
              sparkling environments you'll love. See real results from our
              recent cleaning projects.
            </motion.p>
          </div>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            ref={containerRef}
            className="relative group overflow-hidden rounded-sm shadow-2xl cursor-ew-resize select-none touch-none bg-neutral-900"
            style={{ aspectRatio: `${aspectRatio}` }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-label="Image comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={position}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={afterImage}
                alt={afterAlt}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-6 bg-[#111111]/70 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/10">
                After
              </div>
            </div>

            {/* Before Image (Clipped Overlay) */}
            <motion.div
              className="absolute inset-0 w-full h-full z-10"
              style={{ clipPath }}
            >
              <img
                src={beforeImage}
                alt={beforeAlt}
                className="w-full h-full object-cover"
                draggable={false}
                style={{ width: containerRef.current?.offsetWidth }}
              />
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 bg-[#111111]/70 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/10">
                Before
              </div>
            </motion.div>

            {/* Handle Line */}
            <motion.div
              className="absolute top-0 bottom-0 z-20 w-[3px] bg-[#059669] -translate-x-1/2"
              style={{ left: handleLeft }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 w-full h-full bg-[#059669] blur-[6px] opacity-50" />

              {/* Handle Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#059669] shadow-[0_0_20px_rgba(5,150,105,0.4)] flex items-center justify-center border-[3px] sm:border-4 border-white transition-transform duration-200 group-hover:scale-110">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-3 sm:h-3 md:w-4 md:h-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-3 sm:h-3 md:w-4 md:h-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:bg-black/[0.03]" />
          </div>
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { value: '48hrs', label: 'Average turnaround' },
            { value: '100%', label: 'Satisfaction rate' },
            { value: '25yr', label: 'Satisfaction guarantee' },
            { value: '$0', label: 'Free walk-throughs' },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 px-4 sm:px-6 py-4 sm:py-5"
            >
              <p
                className="text-[#059669] text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-none mb-1"
                style={{ fontFamily: 'Unbounded' }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-[11px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
