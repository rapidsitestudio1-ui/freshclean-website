import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeItem {
  text: string;
}

interface SlidingTextMarqueeProps {
  items?: MarqueeItem[];
  baseVelocity?: number;
  className?: string;
}

const MARQUEE_WORDS: MarqueeItem[] = [
  { text: 'Cleaning' },
  { text: 'Sanitizing' },
  { text: 'Polishing' },
  { text: 'Freshening' },
  { text: 'Organizing' },
  { text: 'Detailing' },
];

const StarSeparator = () => (
  <svg
    className="mx-6 flex-shrink-0 opacity-40"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z"
      fill="white"
    />
  </svg>
);

const MarqueeContent = ({
  items,
  baseVelocity = 0.8,
}: {
  items: MarqueeItem[];
  baseVelocity?: number;
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex flex-nowrap whitespace-nowrap overflow-hidden">
      <motion.div className="flex flex-nowrap whitespace-nowrap items-center" style={{ x }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, index) => (
              <div key={`${i}-${index}`} className="flex items-center">
                <h2
                  className={cn(
                    'text-[32px] md:text-[44px] leading-none font-bold uppercase',
                    'tracking-tight',
                    'text-transparent',
                    '[-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)]',
                    'hover:text-white hover:[-webkit-text-stroke:0px] transition-all duration-500',
                    'cursor-default select-none'
                  )}
                  style={{ fontFamily: 'Unbounded, sans-serif' }}
                >
                  {item.text}
                </h2>
                <StarSeparator />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SlidingTextMarquee = ({
  items = MARQUEE_WORDS,
  baseVelocity = -0.8,
  className,
}: SlidingTextMarqueeProps) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden bg-[#111111] py-6 z-[4]',
        className
      )}
    >
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="relative w-full">
        <MarqueeContent items={items} baseVelocity={baseVelocity} />
      </div>
    </section>
  );
};
