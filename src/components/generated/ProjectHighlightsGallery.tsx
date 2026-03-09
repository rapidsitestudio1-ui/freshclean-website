import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface HighlightItem {
  id: number;
  title: string;
  image: string;
}

const highlightData: HighlightItem[] = [
  {
    id: 1,
    title: 'Kitchen Deep Clean',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Bathroom Refresh',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Window Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Residential Cleaning',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Office Cleaning',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Move-Out Deep Clean',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    title: 'Carpet Cleaning',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=600&q=80',
  },
];

const GalleryImage = ({
  item,
  className,
  delay = 0,
}: {
  item: HighlightItem;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-2xl ${className || ''}`}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-sm font-semibold">{item.title}</p>
    </div>
  </motion.div>
);

// @component: HighlightsGallery
export const ProjectHighlightsGallery = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-[120px]">
        {/* Section Header */}
        <div className="relative mb-14 z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Portfolio
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>

          <h2
            className="text-[24px] sm:text-[31px] md:text-[41px] leading-tight font-semibold text-[#111111] mb-1"
            style={{ fontFamily: 'Unbounded' }}
          >
            Our Recent Work
          </h2>
          <p className="text-[17px] leading-[26px] font-semibold text-[#059669]">
            Spotless spaces, proven results
          </p>
        </div>

        {/* Gallery Grid — Masonry-style bento layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[140px_140px] sm:grid-rows-[180px_180px] md:grid-rows-[210px_210px] gap-2 sm:gap-4">
          {/* Row 1 */}
          <GalleryImage
            item={highlightData[0]}
            className="col-span-1 row-span-1"
            delay={0}
          />
          <GalleryImage
            item={highlightData[1]}
            className="col-span-1 row-span-1"
            delay={0.1}
          />

          {/* CTA tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl"
          >
            <img
              src={highlightData[2].image}
              alt={highlightData[2].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#111111]/40" />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-7 h-7 text-white" />
              </div>
            </a>
          </motion.div>

          <GalleryImage
            item={highlightData[3]}
            className="col-span-1 row-span-1"
            delay={0.3}
          />

          {/* Row 2 */}
          <GalleryImage
            item={highlightData[4]}
            className="col-span-1 row-span-1"
            delay={0.1}
          />
          <GalleryImage
            item={highlightData[5]}
            className="col-span-2 row-span-1"
            delay={0.2}
          />
          <GalleryImage
            item={highlightData[6]}
            className="col-span-1 row-span-1"
            delay={0.3}
          />
        </div>

        {/* Action Button */}
        <div className="relative text-center mt-12">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative inline-flex items-center justify-center px-[35px] h-[55px] bg-[#059669] text-white text-[14px] font-semibold uppercase tracking-wider overflow-hidden z-10 transition-colors duration-300"
          >
            <span className="relative z-20 flex items-center gap-2">
              View More Work
              <ChevronRight size={18} className="font-bold stroke-[3px]" />
            </span>
            <div className="absolute inset-0 z-0 flex pointer-events-none">
              {[0, 50, 100, 150].map((delay) => (
                <div
                  key={delay}
                  className="h-full w-1/4 bg-[#111111] origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${delay}ms` }}
                />
              ))}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
