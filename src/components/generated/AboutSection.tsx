import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Play } from 'lucide-react';

const tabs = ['Mission', 'Service', 'Vision'] as const;
type Tab = (typeof tabs)[number];

const tabContent: Record<Tab, { checklist: string[]; image: string }> = {
  Mission: {
    checklist: [
      'Eco-Friendly Cleaning Solutions',
      'Healthier Homes & Workplaces',
      'Trusted Community Partners',
      'Sustainable Cleaning Practices',
    ],
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  Service: {
    checklist: [
      'One-Off Thorough Deep Clean',
      'Schedule A Cleaning Time',
      'Trained Professionals',
      'Flexible Service Plans',
    ],
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
  },
  Vision: {
    checklist: [
      'One-Off Thorough Deep Clean',
      'Schedule A Cleaning Time',
      'Trained Professionals',
      'Choose FreshClean Experts',
    ],
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
  },
};

// @component: AboutSection
export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Vision');

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const current = tabContent[activeTab];

  // @return
  return (
    <section className="relative z-10 w-full bg-white py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Column: Overlapping images with icon badge */}
          <motion.div
            className="w-full lg:w-[48%] relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            {/* Mobile: stacked single image */}
            <div className="block sm:hidden w-full">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80"
                  alt="Cleaning service in action"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Badge on mobile */}
                <div className="absolute bottom-4 right-4 z-[3]">
                  <div className="w-16 h-16 rounded-full bg-[#059669] flex items-center justify-center shadow-lg border-[2px] border-dashed border-white/50">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21h4L12 7l-2-4-7 18z" />
                      <path d="M14 3l-2 4" />
                      <path d="M17 6l-5 2" />
                      <path d="M20 9l-5 2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop/Tablet: overlapping images */}
            <div className="hidden sm:block relative h-[480px] md:h-[520px]">
              {/* Back image — left, slightly up */}
              <div className="absolute top-0 left-0 w-[55%] h-[85%] overflow-hidden rounded-sm shadow-lg z-[1]">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80"
                  alt="Cleaning service in action"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front image — right, overlapping with green border */}
              <div className="absolute bottom-0 right-0 w-[58%] h-[82%] z-[2]">
                <div className="relative w-full h-full border-[5px] border-[#059669] rounded-sm overflow-hidden shadow-xl">
                  <div className="absolute -top-[5px] right-8 w-16 h-[5px] bg-[#059669] z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80"
                    alt="Professional cleaner with supplies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Circular cleaning icon badge */}
              <div className="absolute left-[42%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-[3]">
                <div className="w-24 h-24 rounded-full bg-[#059669] flex items-center justify-center shadow-lg border-[3px] border-dashed border-white/50">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h4L12 7l-2-4-7 18z" />
                    <path d="M14 3l-2 4" />
                    <path d="M17 6l-5 2" />
                    <path d="M20 9l-5 2" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            className="w-full lg:w-[52%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                About Cleaning
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[26px] sm:text-[32px] md:text-[40px] font-bold text-[#111111] leading-[1.15] mb-5"
              style={{ fontFamily: 'Unbounded' }}
            >
              Our Cleaning{' '}
              <span className="text-[#059669]">Agency</span>
              <br />
              For Your City
            </h2>

            {/* Description */}
            <p
              className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: 'Unbounded' }}
            >
              At FreshClean, we bring nearly two decades of cleaning expertise
              to every project. Our certified team combines eco-friendly
              products with proven methods to deliver spotless results.
            </p>

            {/* Tabs */}
            <div className="flex items-center gap-0 mb-8 border border-gray-200 rounded-md w-full sm:w-fit overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 sm:flex-none px-4 sm:px-7 py-2.5 text-[12px] sm:text-[14px] font-semibold tracking-wide transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#059669] text-white'
                      : 'bg-white text-[#111111] hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content — video thumbnail + checklist */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              {/* Video thumbnail */}
              <div className="relative w-full sm:w-[55%] h-[180px] sm:h-[200px] rounded-md overflow-hidden flex-shrink-0 group">
                <img
                  src={current.image}
                  alt="Cleaning service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </button>
              </div>

              {/* Checklist */}
              <div className="flex flex-col justify-center gap-4">
                {current.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span
                      className="text-[#111111] text-[13px] sm:text-[14px] font-medium italic"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row: CTA button + founder */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* Read More button */}
              <a
                href="/about"
                className="group relative inline-flex items-center text-white text-sm font-bold bg-[#059669] px-8 py-4 uppercase tracking-wider overflow-hidden transition-colors duration-300"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </a>

              {/* Founder */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#059669] p-0.5 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="D.markwin"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <p
                    className="text-[#111111] text-[14px] font-bold"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    D.markwin
                  </p>
                  <p
                    className="text-[#059669] text-[12px] font-medium"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Co-founder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
