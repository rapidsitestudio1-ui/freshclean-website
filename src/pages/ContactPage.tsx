import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Send,
  MessageSquare,
  User,
  Building2,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import { RooferCTA } from '../components/generated/RooferCTA';
import { FAQSection } from '../components/generated/FAQSection';
import { SlidingTextMarquee } from '../components/generated/SlidingTextMarquee';

const ContactHero = () => {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-[#111111]/30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[300px] h-[300px] border border-[#059669]/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[250px] h-[250px] border border-[#059669]/5 rotate-45 hidden lg:block" />

      <div className="relative z-10 w-full container mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <a
              href="/"
              className="text-white/60 hover:text-[#059669] transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-[#059669] font-medium">Contact Us</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-[#059669] leading-[1.1]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Contact Us
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

const contactInfo = [
  {
    icon: 'mappin' as const,
    label: 'Visit Our Office',
    value: '2972 Westheimer Rd.\nSanta Ana, Illinois 8548',
    accent: 'Drop by anytime',
  },
  {
    icon: 'phone' as const,
    label: 'Call Us',
    value: '+1 (234) 567-890',
    accent: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: 'email' as const,
    label: 'Email Us',
    value: 'info@freshcleanservices.com',
    accent: 'We reply within 24hrs',
  },
  {
    icon: 'clock' as const,
    label: 'Business Hours',
    value: 'Mon – Fri: 8AM – 6PM\nSat: 9AM – 2PM',
    accent: 'Emergency 24/7',
  },
];

const ContactInfoCards = () => {
  return (
    <section className="relative z-[2] py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Contact Info
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#111] mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            How to Reach Us
          </h2>
          <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Unbounded' }}>
            We're always ready to help. Reach out through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white p-7 border border-gray-100 hover:border-[#059669]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#059669]/10 overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#059669]/[0.06] rounded-full blur-2xl pointer-events-none group-hover:bg-[#059669]/[0.15] transition-all duration-500" />
              <div className="relative w-14 h-14 bg-[#059669]/10 flex items-center justify-center mb-5 group-hover:bg-[#059669] transition-colors duration-500">
                {item.icon === 'mappin' ? (
                  <MapPin className="w-6 h-6 text-[#059669] group-hover:text-white transition-colors duration-500" />
                ) : item.icon === 'phone' ? (
                  <Phone className="w-6 h-6 text-[#059669] group-hover:text-white transition-colors duration-500" />
                ) : item.icon === 'email' ? (
                  <Mail className="w-6 h-6 text-[#059669] group-hover:text-white transition-colors duration-500" />
                ) : (
                  <Clock className="w-6 h-6 text-[#059669] group-hover:text-white transition-colors duration-500" />
                )}
              </div>
              <h3
                className="text-[15px] font-bold text-[#111] mb-2"
                style={{ fontFamily: 'Unbounded' }}
              >
                {item.label}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line mb-2">
                {item.value}
              </p>
              <span className="text-[#059669] text-xs font-semibold uppercase tracking-wider">
                {item.accent}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full h-[55px] bg-[#fbfbfb] border border-[#bfbfbf] px-5 text-base text-[#3c3c3c] focus:outline-none focus:border-[#059669] transition-colors';

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#059669]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-[#059669]/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="h-px w-8 bg-[#059669]" />
          <span
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Get In Touch
          </span>
          <div className="h-px w-8 bg-[#059669]" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <h2
              className="font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.12] text-[#111] mb-7"
              style={{ fontFamily: 'Unbounded' }}
            >
              Let's discuss your
              <br />
              cleaning project.
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-10 max-w-[500px]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Whether you need a regular clean, a deep cleaning session, or a
              free walk-through — we're here to help. Fill out the form and our team
              will get back to you within 24 hours.
            </p>

            {/* Quick contact highlights */}
            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: 'Free Consultation',
                  desc: 'Get expert advice at no cost, no strings attached.',
                },
                {
                  icon: User,
                  title: 'Dedicated Manager',
                  desc: 'A personal project manager assigned to your job.',
                },
                {
                  icon: Building2,
                  title: 'Licensed & Insured',
                  desc: 'Fully certified team with comprehensive coverage.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#059669]/10 flex items-center justify-center shrink-0 group-hover:bg-[#059669] transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-[#059669] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4
                      className="text-[#111] font-bold text-[15px] mb-1"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-[#fafaf8] border border-gray-100 p-5 sm:p-8 md:p-12">
              <h3
                className="text-[22px] font-bold text-[#111] mb-8"
                style={{ fontFamily: 'Unbounded' }}
              >
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`}
                  >
                    <option value="">Select Subject</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                    <option value="regular-cleaning">Regular Cleaning</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="walk-through">Free Walk-Through</option>
                    <option value="carpet-upholstery">Carpet & Upholstery</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#fbfbfb] border border-[#bfbfbf] px-5 py-4 text-base text-[#3c3c3c] focus:outline-none focus:border-[#059669] transition-colors resize-none"
                />

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative w-full h-[55px] bg-[#059669] text-white text-sm font-semibold uppercase tracking-wider flex items-center justify-center overflow-hidden transition-all duration-300"
                >
                  <span
                    className="relative z-10 flex items-center gap-2"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="relative bg-[#111111] py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#059669]/30 to-transparent" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Our Location
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            Find Us on the Map
          </h2>
          <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'Unbounded' }}>
            Visit our office or schedule a site visit — we serve the greater
            metropolitan area and surrounding counties.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-2 border-[#059669]/20 overflow-hidden"
        >
          <iframe
            title="FreshClean Services Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.272!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjkiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700 min-h-[280px] md:min-h-[350px]"
          />
          <div className="absolute inset-0 pointer-events-none border border-[#059669]/10" />
        </motion.div>
      </div>
    </section>
  );
};

export const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <SlidingTextMarquee
        items={[
          { text: 'Get In Touch' },
          { text: 'Free Quotes' },
          { text: '24/7 Support' },
          { text: 'Expert Advice' },
          { text: 'Fast Response' },
          { text: 'Quality Service' },
        ]}
        baseVelocity={-0.3}
      />
      <ContactInfoCards />
      <ContactFormSection />
      <MapSection />
      <FAQSection />
      <RooferCTA />
    </>
  );
};
