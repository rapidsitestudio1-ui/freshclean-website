import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Shield, Users, Award, CheckCircle, Check, BadgeCheck, Heart, FileCheck, ThumbsUp } from 'lucide-react';
import { TeamSection } from '../components/generated/TeamSection';
import { RoofingAchievements } from '../components/generated/RoofingAchievements';
import { TestimonialSection } from '../components/generated/TestimonialSection';
import { RooferCTA } from '../components/generated/RooferCTA';
import { SlidingTextMarquee } from '../components/generated/SlidingTextMarquee';
import { ClientsSection } from '../components/generated/ClientsSection';
import { FAQSection, FAQItem } from '../components/generated/FAQSection';

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-[#111111]/30" />

      {/* Decorative accent elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />

      {/* Decorative geometric shapes */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[300px] h-[300px] border border-[#059669]/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[250px] h-[250px] border border-[#059669]/5 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Breadcrumb */}
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
            <span className="text-[#059669] font-medium">About Us</span>
          </motion.nav>

          {/* Centered heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-[#059669] leading-[1.1]"
            style={{ fontFamily: 'Unbounded' }}
          >
            About Us
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

const AboutCommitment = () => {
  return (
    <section className="relative z-[1] py-16 md:py-[100px] w-full overflow-hidden bg-white">
      {/* Subtle background decoration */}
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
            About Us
          </span>
          <div className="h-px w-8 bg-[#059669]" />
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          {/* Left Column: Images & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full xl:w-[48%]"
          >
            <div className="relative">
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-4 right-0 sm:-right-4 md:right-6 bg-[#059669] z-20 px-4 sm:px-6 py-4 sm:py-5 shadow-xl shadow-[#059669]/20"
              >
                <div className="flex items-baseline gap-1">
                  <h2
                    className="font-bold text-[36px] leading-none text-white"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    30
                  </h2>
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
                <h3
                  className="font-semibold text-[15px] text-white/90 mt-1"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  Years Experience
                </h3>
              </motion.div>

              {/* Main Image */}
              <div className="relative overflow-hidden group">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional cleaner at work"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Overlapping secondary image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 left-0 sm:-left-4 md:left-8 z-10 border-[3px] sm:border-[5px] border-white shadow-2xl"
              >
                <div className="relative overflow-hidden group">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                    alt="Spotless bathroom after cleaning"
                    className="w-[160px] sm:w-[220px] md:w-[280px] h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Vertical accent stripe */}
              <div className="absolute top-24 -right-4 md:right-0 bottom-0 w-[5px] bg-gradient-to-b from-[#059669] via-[#059669]/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full xl:w-[52%] pt-4 xl:pt-0">
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Why Choose FreshClean
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </motion.div>

            {/* Large heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-bold text-[28px] sm:text-[36px] md:text-[44px] leading-[1.12] text-[#111] mb-7"
              style={{ fontFamily: 'Unbounded' }}
            >
              Expert cleaning
              <br />
              ensures lasting freshness.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 leading-relaxed mb-10 max-w-[580px]"
              style={{ fontFamily: 'Unbounded' }}
            >
              With over three decades of hands-on experience, we've built a reputation
              for reliability and excellence. Every project we take on reflects our
              dedication to clean, healthy spaces and delivering results that stand the test
              of time, clean after clean.
            </motion.p>

            {/* Checkmark list — 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12"
            >
              {[
                'Premium Eco-Friendly Products',
                'Certified Cleaning Specialists',
                'Satisfaction Guarantee Included',
                'Seamless Booking Workflow',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#059669]/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#059669]" />
                  </div>
                  <span className="text-[#111] text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA + Author */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="/services"
                className="group relative inline-flex items-center text-white text-sm font-bold bg-[#111] px-8 py-4 uppercase tracking-wider overflow-hidden transition-colors duration-300"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-[#059669] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </a>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                    alt="Michael King"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[#111] text-[15px] font-bold leading-tight"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Michael King
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">Founder &amp; CEO</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionValues = () => {
  const values = [
    {
      icon: BadgeCheck,
      title: 'Quality First',
      desc: 'Premium eco-friendly products and proven methods for spaces that stay fresh.',
    },
    {
      icon: Heart,
      title: 'Client Focused',
      desc: 'Your satisfaction drives every decision we make.',
    },
    {
      icon: FileCheck,
      title: 'Certified Experts',
      desc: 'Industry-leading certifications and latest cleaning technologies.',
    },
    {
      icon: ThumbsUp,
      title: 'Guaranteed Work',
      desc: 'Comprehensive satisfaction guarantee on every clean we deliver.',
    },
  ];

  return (
    <section className="relative bg-[#fafaf8] py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[400px] h-[400px] bg-[#059669]/[0.15] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[400px] h-[400px] bg-[#059669]/[0.15] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Our Values
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#111] mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            What Drives Us Forward
          </h2>
          <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Unbounded' }}>
            Our core values shape every project, every interaction, and every cleaning
            solution we deliver.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white p-8 border border-gray-100 hover:border-[#059669]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#059669]/10 overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 w-44 h-44 bg-[#059669]/[0.12] rounded-full blur-3xl pointer-events-none group-hover:bg-[#059669]/[0.2] transition-all duration-500" />
              <div className="relative w-16 h-16 bg-[#059669]/10 flex items-center justify-center mb-6 group-hover:bg-[#059669] transition-colors duration-500">
                <item.icon className="w-8 h-8 text-[#059669] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3
                className="text-lg font-bold text-[#111] mb-3"
                style={{ fontFamily: 'Unbounded' }}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed line-clamp-3" style={{ fontFamily: 'Unbounded' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StoryTimeline = () => {
  const milestones = [
    { year: '2006', title: 'Founded', desc: 'FreshClean Services was established with a small team of 3 passionate roofers.' },
    { year: '2012', title: 'Regional Expansion', desc: 'Expanded operations to serve 5 additional counties and doubled our cleaning crew.' },
    { year: '2018', title: 'Green Cleaning', desc: 'Pioneered eco-friendly cleaning solutions, combining effectiveness with environmental responsibility.' },
    { year: '2024', title: 'Industry Leader', desc: 'Recognized as a top-rated cleaning company with over 2,500 happy clients served.' },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Section intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Our Journey
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#111] mb-6 leading-tight"
              style={{ fontFamily: 'Unbounded' }}
            >
              A Legacy of <br />
              Cleaning Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Unbounded' }}>
              From humble beginnings to becoming a trusted name in cleaning, our story is
              one of dedication, growth, and unwavering commitment to quality.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#059669] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 overflow-hidden"
            >
              <span
                className="relative z-10 flex items-center"
                style={{ fontFamily: 'Unbounded' }}
              >
                Get a Free Estimate
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
            </a>
          </motion.div>

          {/* Right: Timeline */}
          <div className="lg:w-7/12">
            <div className="relative pl-8 border-l-2 border-gray-200">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Dot */}
                  <div className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 bg-white border-2 border-[#059669] rounded-full group-hover:bg-[#059669] transition-colors duration-300" />

                  <span
                    className="text-[#059669] text-sm font-bold uppercase tracking-wider"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="text-xl font-bold text-[#111] mt-1 mb-2"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Unbounded' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutFAQ: FAQItem[] = [
  {
    id: '1',
    number: '01',
    question: 'How long has FreshClean been in business?',
    answer: 'FreshClean Services was founded in 2006 and has been serving homeowners for nearly two decades. Over the years we have completed over 2,500 projects and built a reputation as one of the most trusted cleaning companies in the region.',
  },
  {
    id: '2',
    number: '02',
    question: 'Are your cleaners licensed and insured?',
    answer: 'Absolutely. Every member of our team is fully licensed, bonded, and insured. We also hold certifications from leading industry organizations, ensuring top-quality service and safety on every job.',
  },
  {
    id: '3',
    number: '03',
    question: 'What makes FreshClean different from other cleaning companies?',
    answer: 'We combine over 30 years of hands-on experience with a client-first approach. Every project gets a dedicated cleaning coordinator, transparent pricing with no hidden fees, and a satisfaction guarantee. We treat every home like it is our own.',
  },
  {
    id: '4',
    number: '04',
    question: 'Do you offer guarantees on your work?',
    answer: "Yes, we back every clean with our 100% satisfaction guarantee. If you're not completely happy with our work, we'll come back and re-clean the area at no extra charge. Your satisfaction is our top priority.",
  },
];

export const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <SlidingTextMarquee
        items={[
          { text: 'Integrity' },
          { text: 'Thoroughness' },
          { text: 'Reliability' },
          { text: 'Excellence' },
          { text: 'Freshness' },
          { text: 'Innovation' },
        ]}
        baseVelocity={-0.3}
      />
      <div className="h-[8vh] sm:h-[15vh] bg-white" />
      <MissionValues />
      <AboutCommitment />
      <StoryTimeline />
      <ClientsSection />
      <RoofingAchievements />
      <TeamSection />
      <FAQSection
        items={aboutFAQ}
        title="About FreshClean"
        subtitle="Learn more about who we are"
      />
      <TestimonialSection />
      <RooferCTA />
    </>
  );
};
