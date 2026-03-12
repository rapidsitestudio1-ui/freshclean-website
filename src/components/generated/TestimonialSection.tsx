import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
type Testimonial = {
  id: string;
  quote: string;
  author: string;
  position: string;
};
const testimonials: Testimonial[] = [{
  id: '1',
  quote: "“I couldn't be happier with the cleaning service provided! From the initial consultation to the final walk-through, the team was professional, punctual, and incredibly thorough. I highly recommend them to anyone looking for trustworthy cleaning experts.”",
  author: "Kevin Yang",
  position: "Product Management Instapage"
}, {
  id: '2',
  quote: "“The attention to detail and craftsmanship displayed by the team was truly remarkable. They transformed our neglected home into a sparkling showpiece. The process was seamless and communication was top-notch throughout.”",
  author: "Sarah Jenkins",
  position: "Marketing Director at CreativeFlow"
}, {
  id: '3',
  quote: "“Exceptional service from start to finish. They handled everything with care and stayed exactly on budget. It's rare to find such transparency and professionalism in the cleaning industry these days.”",
  author: "Michael Chen",
  position: "Operations Lead, TechSolutions"
}];

// @component: TestimonialSection
export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  }, []);
  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  // @return
  return <section className="relative bg-[#f0fdf4] py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      <div className="w-full mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="relative mb-14 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: "Unbounded" }}
            >
              Testimonial
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-[24px] sm:text-[31px] md:text-[41px] font-bold text-[#111111] leading-tight mb-2" style={{
              fontFamily: "Unbounded"
            }}>
                Trusted Voices
              </h2>
              <p className="text-[#059669] text-[15px] md:text-[17px] font-semibold" style={{
              fontFamily: "Unbounded"
            }}>
                What our clients say about us
              </p>
            </div>
          </div>
          
          {/* Decorative bar on top-left of header section */}
          <div className="absolute top-0 left-0 w-11 h-px bg-[#BFBFBF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image Container */}
          <div className="lg:col-span-5 relative">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:mx-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80" alt="Happy client in clean home" className="w-full h-full object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right: Content Carousel */}
          <div className="lg:col-span-7 relative flex flex-col justify-between min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
            <div className="relative">
              {/* Quote Icon */}
              <div className="flex justify-end mb-4">
                <Quote className="w-14 h-14 md:w-16 md:h-16 text-[#BFBFBF] rotate-180 opacity-60" strokeWidth={1.5} />
              </div>

              {/* Slider Content */}
              <div className="relative overflow-hidden min-h-[200px] sm:min-h-[280px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div key={activeIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  },
                  opacity: {
                    duration: 0.2
                  }
                }} className="w-full">
                    <p className="text-[15px] sm:text-[17px] md:text-[22px] lg:text-[26px] leading-relaxed md:leading-[1.6] text-[#111111] font-normal italic">
                      {testimonials[activeIndex].quote}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Author Info & Navigation */}
            <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between border-t border-[#BFBFBF] pt-6 sm:pt-8">
              <motion.div key={`author-${activeIndex}`} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="mb-8 md:mb-0">
                <h3 className="text-[17px] md:text-[20px] font-bold text-[#111111] mb-1" style={{
                fontFamily: "Unbounded"
              }}>
                  {testimonials[activeIndex].author}
                </h3>
                <p className="text-gray-500 text-[12px] md:text-[14px]" style={{
                fontFamily: "Unbounded"
              }}>
                  {testimonials[activeIndex].position}
                </p>
              </motion.div>

              {/* Controls */}
              <div className="flex gap-3">
                <button onClick={prevTestimonial} className="group relative w-14 h-14 rounded-full border border-black flex items-center justify-center transition-all duration-300 hover:border-[#059669] hover:bg-[#059669] overflow-hidden" aria-label="Previous testimonial">
                  <ChevronLeft className="relative z-10 w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" />
                </button>
                <button onClick={nextTestimonial} className="group relative w-14 h-14 rounded-full border border-black flex items-center justify-center transition-all duration-300 hover:border-[#059669] hover:bg-[#059669] overflow-hidden" aria-label="Next testimonial">
                  <ChevronRight className="relative z-10 w-6 h-6 text-black transition-colors duration-300 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};