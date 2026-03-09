import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  Sun,
  Home,
  Phone,
  Shield,
  Clock,
  Award,
  Sparkles,
  Building2,
  BrushCleaning,
  CookingPot,
  LucideIcon,
} from 'lucide-react';
import { SlidingTextMarquee } from '../components/generated/SlidingTextMarquee';
import { WorkProcessSection } from '../components/generated/WorkProcessSection';
import { TestimonialSection } from '../components/generated/TestimonialSection';
import { RooferCTA } from '../components/generated/RooferCTA';
import { FAQSection, FAQItem } from '../components/generated/FAQSection';
import { ClientsSection } from '../components/generated/ClientsSection';
import { RoofingAchievements } from '../components/generated/RoofingAchievements';

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1920&q=80')",
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
            <span className="text-[#059669] font-medium">Our Services</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-[#059669] leading-[1.1]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Our Services
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  image: string;
  icon: LucideIcon;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    title: 'Window Cleaning',
    slug: 'window-cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    icon: Sun,
  },
  {
    id: 2,
    title: 'Kitchen & Bath Cleaning',
    slug: 'kitchen-bath-cleaning',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    icon: CookingPot,
  },
  {
    id: 3,
    title: 'Carpet Cleaning',
    slug: 'carpet-cleaning',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    icon: BrushCleaning,
  },
  {
    id: 4,
    title: 'Deep Cleaning',
    slug: 'deep-cleaning',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    icon: Sparkles,
  },
  {
    id: 5,
    title: 'Office Cleaning',
    slug: 'office-cleaning',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    icon: Building2,
  },
  {
    id: 6,
    title: 'Move-In/Out Cleaning',
    slug: 'move-in-out-cleaning',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    icon: Home,
  },
];

const ServicesGrid = () => {
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              What We Offer
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#111] mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            Comprehensive Cleaning Solutions
          </h2>
          <p
            className="text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Unbounded' }}
          >
            From deep cleans and regular maintenance to move-out services, we deliver
            expert cleaning services built on trust and attention to detail.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[240px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 via-[#111]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10 bg-[#059669] p-3">
                  <service.icon className="w-[30px] h-[30px] text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-[#111] mb-4 group-hover:text-[#059669] transition-colors duration-300"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {service.title}
                </h3>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#059669] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Licensed & Insured',
      desc: 'Fully licensed, bonded, and insured for your complete peace of mind on every clean.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'On-Time Delivery',
      desc: 'We respect your time. Every clean is completed on schedule with no hidden delays.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Satisfaction Guarantee',
      desc: 'Our work is backed by our satisfaction guarantee because we stand behind every clean.',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: '24/7 Support',
      desc: 'Round-the-clock availability for urgent cleaning needs and last-minute bookings.',
    },
  ];

  return (
    <section className="relative bg-[#111] py-20 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Why FreshClean
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Unbounded' }}
            >
              The FreshClean <br />
              Difference
            </h2>
            <p
              className="text-white/60 leading-relaxed mb-8"
              style={{ fontFamily: 'Unbounded' }}
            >
              With over 30 years of experience and thousands of satisfied
              clients, we have built a reputation for excellence that speaks
              for itself. Every space we clean reflects our unwavering
              commitment to quality.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#059669] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden"
              style={{ fontFamily: 'Unbounded' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Estimate
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
            </a>
          </motion.div>

          {/* Right: Reasons grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/[0.05] border border-white/10 p-8 hover:bg-white/[0.08] hover:border-[#059669]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#059669]/60 via-[#059669]/20 to-transparent group-hover:from-[#059669] group-hover:via-[#059669]/50 group-hover:to-[#059669]/10 transition-all duration-500" />
                <div className="text-[#059669] mb-5 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#059669]/[0.05] rounded-full blur-2xl pointer-events-none group-hover:bg-[#059669]/[0.12] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCTA = () => {
  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#059669]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#059669] p-6 sm:p-10 md:p-16 overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-black/[0.08] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rotate-45 hidden lg:block" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: 'Unbounded' }}
              >
                Not Sure Which Service You Need?
              </h2>
              <p className="text-white/80 leading-relaxed text-lg" style={{ fontFamily: 'Unbounded' }}>
                Our experts will assess your space for free and recommend the
                perfect cleaning solution tailored to your needs and budget.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-white text-[#111] font-bold text-sm uppercase tracking-wider px-8 py-4 transition-all duration-300 overflow-hidden"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Walk-Through
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs sm:text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20 pointer-events-none" style={{ fontFamily: 'Unbounded' }}>
                  <span className="flex items-center gap-2">Schedule Walk-Through <ArrowRight className="w-4 h-4" /></span>
                </span>
              </a>
              <a
                href="tel:+1234567890"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs uppercase tracking-wider text-white/60">
                    Call Us
                  </span>
                  <span className="block text-base font-semibold">
                    +1 (234) 567-890
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const servicesFAQ: FAQItem[] = [
  {
    id: '1',
    number: '01',
    question: 'What types of cleaning services do you offer?',
    answer: 'We offer residential cleaning, commercial janitorial, deep cleaning, move-in/out cleaning, carpet care, and window washing. Our team will help you choose the best plan for your property, needs, and budget.',
  },
  {
    id: '2',
    number: '02',
    question: 'How quickly can you schedule a cleaning?',
    answer: 'We offer flexible scheduling to meet your needs. For regular cleaning, we can usually book you within a few days. For urgent requests like move-out cleans or post-event cleanups, our team can often accommodate same-day or next-day service.',
  },
  {
    id: '3',
    number: '03',
    question: 'How long does a deep cleaning take?',
    answer: 'A standard deep clean for a 3-bedroom home typically takes 4-6 hours depending on condition. Larger homes or heavily soiled spaces may require additional time. We always provide a clear timeline before work begins.',
  },
  {
    id: '4',
    number: '04',
    question: 'Do you offer recurring cleaning plans?',
    answer: 'Yes, we offer weekly, bi-weekly, and monthly cleaning plans with priority scheduling and discounted rates. Regular cleaning keeps your space consistently fresh and maintains a healthy environment.',
  },
];

export const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <SlidingTextMarquee
        items={[
          { text: 'Window Cleaning' },
          { text: 'Window Washing' },
          { text: 'Carpet Care' },
          { text: 'Office Cleaning' },
          { text: 'Office Cleaning' },
          { text: 'Sanitization' },
        ]}
        baseVelocity={-0.3}
      />
      <div className="h-[8vh] sm:h-[15vh] bg-white" />
      <ServicesGrid />
      <WhyChooseUs />
      <WorkProcessSection />
      <PricingCTA />
      <RoofingAchievements />
      <TestimonialSection />
      <FAQSection
        items={servicesFAQ}
        title="Service Questions"
        subtitle="Common questions about our cleaning services"
      />
      <RooferCTA />
    </>
  );
};
