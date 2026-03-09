import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight, Clock } from 'lucide-react';
import { FacebookIcon, XTwitterIcon, LinkedInIcon } from './SocialIcons';

// Helper: Social Link Component
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={(e) => e.preventDefault()}
    className="group relative flex items-center justify-center w-10 h-10 border border-white/15 transition-all duration-300 hover:border-transparent"
  >
    <span className="absolute inset-0 bg-[#059669] scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
    <span className="relative z-10 text-white/70 transition-colors duration-300 group-hover:text-white">
      {icon}
    </span>
  </a>
);

// Helper: Nav Link Component
const FooterNavLink = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => (
  <li className="mb-3.5 last:mb-0">
    <a
      href={href}
      className="group flex items-center text-white/60 text-[14px] transition-colors duration-300 hover:text-white"
    >
      <ChevronRight className="w-0 h-0 text-[#059669] transition-all duration-300 opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:mr-2" />
      {label}
    </a>
  </li>
);

// @component: FooterSection
export const FooterSection = () => {
  // @return
  return (
    <footer className="relative bg-[#111111] overflow-hidden w-full font-sans text-white">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#059669] to-transparent" />

      {/* Main Footer Content */}
      <div className="pt-16 sm:pt-20 md:pt-24 pb-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
            {/* About Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="max-w-[320px]">
                {/* Logo text */}
                <div className="mb-6">
                  <a
                    href="/"
                    className="inline-block"
                  >
                    <span
                      className="text-[24px] font-bold text-white"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      Fresh<span className="text-[#059669]">Clean</span>
                    </span>
                  </a>
                </div>
                <p className="text-white/50 text-[14px] leading-relaxed mb-7">
                  Keeping homes and businesses spotless with expert cleaning
                  solutions since 2006. Quality service, reliable results, and a
                  fresh space every time.
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                  <SocialLink href="#" icon={<FacebookIcon size={15} />} />
                  <SocialLink href="#" icon={<XTwitterIcon size={15} />} />
                  <SocialLink href="#" icon={<LinkedInIcon size={15} />} />
                </div>
              </div>
            </motion.div>

            {/* Company Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4
                className="text-[15px] font-bold mb-6 uppercase tracking-wider text-white"
                style={{ fontFamily: 'Unbounded' }}
              >
                Company
              </h4>
              <ul className="list-none p-0 m-0">
                <FooterNavLink href="/" label="Home" />
                <FooterNavLink href="/about" label="About Us" />
                <FooterNavLink href="/services" label="Services" />
                <FooterNavLink href="/blog" label="Blog" />
                <FooterNavLink href="/contact" label="Contact" />
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4
                className="text-[15px] font-bold mb-6 uppercase tracking-wider text-white"
                style={{ fontFamily: 'Unbounded' }}
              >
                Services
              </h4>
              <ul className="list-none p-0 m-0">
                <FooterNavLink href="/services/deep-cleaning" label="Deep Cleaning" />
                <FooterNavLink href="/services/window-cleaning" label="Window Cleaning" />
                <FooterNavLink href="/services/office-cleaning" label="Office Cleaning" />
                <FooterNavLink href="/services/carpet-cleaning" label="Carpet & Upholstery" />
                <FooterNavLink href="/services/move-in-out-cleaning" label="Move-In/Out Cleaning" />
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4
                className="text-[15px] font-bold mb-6 uppercase tracking-wider text-white"
                style={{ fontFamily: 'Unbounded' }}
              >
                Get in Touch
              </h4>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#059669]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#059669]" />
                  </div>
                  <span className="text-white/50 text-[14px] leading-relaxed">
                    2972 Westheimer Rd. Santa Ana, Illinois 8548
                  </span>
                </div>
                <a
                  href="tel:+8528525285505"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded bg-[#059669]/15 flex items-center justify-center shrink-0 group-hover:bg-[#059669] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#059669] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white/50 text-[14px] group-hover:text-white transition-colors duration-300">
                    +85 2852 5285 505
                  </span>
                </a>
                <a
                  href="mailto:example@gmail.com"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded bg-[#059669]/15 flex items-center justify-center shrink-0 group-hover:bg-[#059669] transition-colors duration-300">
                    <Mail className="w-4 h-4 text-[#059669] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-white/50 text-[14px] group-hover:text-white transition-colors duration-300">
                    example@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded bg-[#059669]/15 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#059669]" />
                  </div>
                  <span className="text-white/50 text-[14px]">
                    Mon – Sat: 8:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-[13px]">
                &copy; 2025 FreshClean. All rights reserved.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-6">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-white/40 text-[13px] hover:text-white transition-colors"
                >
                  Support
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-white/40 text-[13px] hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-white/40 text-[13px] hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
