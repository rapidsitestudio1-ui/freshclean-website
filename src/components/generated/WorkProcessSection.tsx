import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, SprayCan, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Book & Assess',
    description:
      'Schedule your free consultation online or by phone. We visit your space, understand your needs, and build a custom cleaning plan — no cookie-cutter quotes.',
  },
  {
    id: 2,
    icon: <SprayCan className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'We Clean, You Relax',
    description:
      'Our vetted, uniformed team arrives on time with professional-grade equipment and eco-friendly products. Every surface is cleaned to our exacting standard.',
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: 'Inspect & Enjoy',
    description:
      "We do a final walk-through with you to make sure every detail is perfect. Not satisfied? We'll re-clean it free — that's our 100% happiness guarantee.",
  },
];

// @component: WorkProcessSection
export const WorkProcessSection = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-[#f0fdf4] font-sans overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                How It Works
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
            <h2
              className="text-[24px] sm:text-[36px] md:text-[46px] leading-[1.1] font-bold text-[#111]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Three Simple Steps to a{' '}
              <span className="text-[#059669]">Spotless</span> Space
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-gray-500 leading-relaxed text-base lg:text-right"
          >
            No complicated contracts. No hidden fees. Just a clear process that
            gets your home or office sparkling — every single time.
          </motion.p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left: Steps */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-5 sm:space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative flex gap-4 sm:gap-6 items-start"
                >
                  {/* Timeline connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[23px] sm:left-[31px] top-[60px] sm:top-[76px] w-px h-[calc(100%-24px)] sm:h-[calc(100%-40px)] bg-gradient-to-b from-[#059669]/30 to-transparent" />
                  )}

                  {/* Step number circle */}
                  <div className="relative shrink-0">
                    <div className="w-[48px] h-[48px] sm:w-[62px] sm:h-[62px] rounded-full bg-[#059669] flex items-center justify-center text-white text-base sm:text-lg font-bold shadow-lg shadow-[#059669]/20 group-hover:scale-110 transition-transform duration-300">
                      0{step.id}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-gray-100 p-5 sm:p-6 md:p-8 rounded-lg group-hover:shadow-xl group-hover:shadow-[#059669]/8 group-hover:border-[#059669]/15 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#059669] group-hover:bg-[#059669] group-hover:text-white transition-colors duration-300">
                        {step.icon}
                      </div>
                      <h3
                        className="text-base sm:text-lg md:text-xl font-bold text-[#111]"
                        style={{ fontFamily: 'Unbounded' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed sm:pl-[52px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA below steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 pl-0 sm:pl-[86px]"
            >
              <a
                href="/contact"
                className="group/btn relative inline-flex items-center gap-2 bg-[#059669] text-white text-[13px] sm:text-sm font-bold uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 overflow-hidden transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover/btn:scale-x-100 z-0" />
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-500 hover:text-[#059669] transition-colors justify-center sm:justify-start w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">or call +1 (234) 567-890</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Image with stats overlay — hidden on mobile */}
          <div className="hidden lg:block w-full lg:w-5/12 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80"
                  alt="Professional cleaner at work"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#059669]/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-2xl shadow-black/10 border border-gray-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold text-[#111]"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      100%
                    </div>
                    <div className="text-gray-500 text-sm">Satisfaction Rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-[#059669] text-white px-5 py-3 rounded-xl shadow-lg shadow-[#059669]/30"
              >
                <div
                  className="text-xl font-bold"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  30+
                </div>
                <div className="text-white/80 text-xs">Years Experience</div>
              </motion.div>

              {/* Background accent */}
              <div className="absolute -z-10 top-8 -right-4 w-full h-full rounded-2xl border-2 border-[#059669]/15" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
