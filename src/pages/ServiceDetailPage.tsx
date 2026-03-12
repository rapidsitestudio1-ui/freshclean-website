import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Building2,
  Home,
  Sun,
  CookingPot,
  Brush,
  LucideIcon,
} from 'lucide-react';
import { RooferCTA } from '../components/generated/RooferCTA';

interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  heroImage: string;
  mainImage: string;
  secondaryImage: string;
  description: string[];
  includes: string[];
}

const servicesData: ServiceData[] = [
  {
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    subtitle: 'A thorough, top-to-bottom clean for every corner of your space.',
    icon: Sparkles,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    description: [
      "Our deep cleaning service goes far beyond a regular tidy-up. We tackle every hidden corner, built-up grime, and overlooked surface to restore your space to its freshest, most hygienic state. From baseboards and light fixtures to behind appliances and inside cabinets — nothing is missed.",
      "Using professional-grade equipment and eco-friendly cleaning solutions, our trained specialists methodically work through each room. We pay special attention to kitchens and bathrooms where bacteria and residue build up fastest, ensuring every surface is sanitized and sparkling.",
      "Whether you're preparing for a special event, moving into a new home, or simply resetting your space after months of daily wear, our deep cleaning service delivers a noticeable, lasting difference you can see and feel.",
    ],
    includes: [
      'Full sanitization of all surfaces',
      'Inside cabinet and appliance cleaning',
      'Baseboard, trim, and light fixture detailing',
      'Bathroom grout and tile deep scrub',
      'Kitchen degreasing and polish',
      'Window sill and track cleaning',
    ],
  },
  {
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    subtitle: 'Keep your workspace spotless, healthy, and productive.',
    icon: Building2,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: [
      "A clean office is a productive office. Our commercial cleaning service is tailored to keep your workplace fresh, organized, and free from allergens and bacteria that can impact employee health and morale. We work around your schedule — early mornings, evenings, or weekends — so your team is never disrupted.",
      "From open-plan floors and private offices to break rooms, restrooms, and reception areas, we handle it all with professional-grade equipment and non-toxic products. High-touch surfaces like door handles, desks, keyboards, and light switches receive extra attention to minimize the spread of germs.",
      "We offer flexible plans — daily, weekly, or bi-weekly — with a dedicated account manager who ensures consistent quality on every visit. Our bonded and insured team members undergo background checks, so you can trust us with your space.",
    ],
    includes: [
      'Desk and workstation sanitization',
      'Break room and kitchen cleaning',
      'Restroom deep clean and restocking',
      'Floor vacuuming, mopping, and polishing',
      'Trash removal and recycling',
      'High-touch surface disinfection',
    ],
  },
  {
    slug: 'move-in-out-cleaning',
    title: 'Move-In/Out Cleaning',
    subtitle: 'Start fresh or leave spotless — we handle the heavy cleaning.',
    icon: Home,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    description: [
      "Moving is stressful enough without worrying about cleaning. Our move-in/move-out service ensures every inch of the property is spotless — whether you're leaving a place you've called home or preparing to settle into a new one. We help you make a great impression on landlords, buyers, or yourself.",
      "Our team focuses on the areas that matter most during a transition: inside closets and cabinets, appliance interiors, window tracks, baseboards, and bathroom fixtures. We remove scuff marks, dust buildup, and any signs of previous occupancy so the space feels brand new.",
      "This service is perfect for renters wanting their deposit back, homeowners preparing a property for sale, or anyone moving into a new space who wants to start completely fresh. We guarantee a move-in ready result.",
    ],
    includes: [
      'Full interior cleaning of all rooms',
      'Inside closet and cabinet wipe-down',
      'Appliance interior cleaning (oven, fridge)',
      'Wall spot cleaning and scuff removal',
      'Bathroom and kitchen deep sanitization',
      'Final walkthrough quality check',
    ],
  },
  {
    slug: 'window-cleaning',
    title: 'Window Cleaning',
    subtitle: 'Crystal-clear windows that let the light shine through.',
    icon: Sun,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    description: [
      "Dirty windows don't just look bad — they block natural light and make your entire space feel dull. Our professional window cleaning service restores clarity and shine to every pane, inside and out. We use streak-free solutions and professional squeegee techniques for a flawless finish.",
      "We handle all types of windows — single-hung, double-hung, casement, bay, and skylights — at any height. Our team is equipped with extension poles, ladders, and water-fed systems to safely reach even the most challenging windows without damaging your property.",
      "Regular window cleaning also extends the life of your glass by removing corrosive contaminants like hard water stains, mineral deposits, and oxidation. We recommend quarterly cleaning for homes and monthly for commercial properties to maintain that pristine look year-round.",
    ],
    includes: [
      'Interior and exterior glass cleaning',
      'Window frame and sill wiping',
      'Screen removal, cleaning, and reinstallation',
      'Hard water stain and mineral deposit removal',
      'Skylight and high-reach window service',
      'Streak-free guaranteed finish',
    ],
  },
  {
    slug: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    subtitle: 'Revive your carpets with professional deep extraction.',
    icon: Brush,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    description: [
      "Carpets trap dirt, allergens, dust mites, and bacteria deep within their fibers — regular vacuuming only scratches the surface. Our professional carpet cleaning service uses hot water extraction and eco-friendly solutions to lift embedded grime, neutralize odors, and restore your carpet's original color and texture.",
      "Our technicians pre-treat high-traffic areas and stubborn stains before performing a thorough deep extraction that removes up to 98% of allergens and bacteria. The result is carpets that look, feel, and smell fresh — extending their lifespan and improving your indoor air quality.",
      "We service all carpet types including Berber, plush, frieze, and commercial-grade. Whether it's a single room refresh or a whole-home treatment, we bring the equipment and expertise to deliver exceptional results with fast drying times.",
    ],
    includes: [
      'Pre-treatment of stains and high-traffic zones',
      'Hot water extraction deep cleaning',
      'Eco-friendly deodorizing treatment',
      'Allergen and dust mite removal',
      'Fast-dry technology (4-6 hour dry time)',
      'Furniture moving and replacement',
    ],
  },
  {
    slug: 'kitchen-bath-cleaning',
    title: 'Kitchen & Bath Cleaning',
    subtitle: 'Sparkling kitchens and bathrooms — sanitized to perfection.',
    icon: CookingPot,
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80',
    mainImage:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    secondaryImage:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80',
    description: [
      "Kitchens and bathrooms are the hardest-working rooms in your home — and the ones that need the most thorough cleaning. Grease splatter, soap scum, mold, mildew, and bacteria thrive in these wet, high-use environments. Our specialized service targets these problem areas with hospital-grade sanitization.",
      "In the kitchen, we degrease stovetops, clean inside microwaves and ovens, sanitize countertops, scrub sinks, and polish fixtures. In the bathroom, we deep-clean showers, tubs, toilets, vanities, and tile grout — eliminating mold and buildup that regular cleaning can't reach.",
      "We use eco-friendly, non-toxic products that are tough on grime but safe for your family and pets. After our visit, your kitchen and bathrooms will be hygienically clean, fresh-smelling, and sparkling from top to bottom.",
    ],
    includes: [
      'Stovetop, oven, and microwave degreasing',
      'Countertop and backsplash sanitization',
      'Shower, tub, and tile grout deep scrub',
      'Toilet and vanity disinfection',
      'Fixture polishing (faucets, handles, mirrors)',
      'Mold and mildew treatment',
    ],
  },
];

// Sidebar service link
const SidebarLink = ({
  service,
  isActive,
}: {
  service: ServiceData;
  isActive: boolean;
}) => (
  <Link
    to={`/services/${service.slug}`}
    className={`group flex items-center justify-between px-5 py-4 text-[14px] font-semibold transition-all duration-300 ${
      isActive
        ? 'bg-[#059669] text-white'
        : 'bg-white text-[#111] hover:bg-[#059669]/5 hover:text-[#059669]'
    }`}
    style={{ fontFamily: 'Unbounded' }}
  >
    {service.title}
    <ArrowRight
      className={`w-4 h-4 transition-transform duration-300 ${
        isActive
          ? 'text-white'
          : 'text-gray-400 group-hover:text-[#059669] group-hover:translate-x-1'
      }`}
    />
  </Link>
);

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  // Fallback to first service if slug not found
  const current = service || servicesData[0];
  const Icon = current.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${current.heroImage}')`, filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-[#111111]/70" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
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
              <Link
                to="/"
                className="text-white/60 hover:text-[#059669] transition-colors duration-300"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <Link
                to="/services"
                className="text-white/60 hover:text-[#059669] transition-colors duration-300"
              >
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#059669] font-medium">{current.title}</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[28px] sm:text-[40px] md:text-[50px] font-bold text-white leading-[1.1]"
              style={{ fontFamily: 'Unbounded' }}
            >
              {current.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-28">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Service Links */}
                <div>
                  <h3
                    className="text-[18px] font-bold text-[#111] mb-5"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    All Services
                  </h3>
                  <div className="border border-gray-100 divide-y divide-gray-100 overflow-hidden">
                    {servicesData.map((s) => (
                      <SidebarLink
                        key={s.slug}
                        service={s}
                        isActive={s.slug === current.slug}
                      />
                    ))}
                  </div>
                </div>

                {/* Get in Touch Card */}
                <div className="relative bg-[#059669] p-7 overflow-hidden">
                  <div className="absolute top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-white/20" />
                  <div className="absolute bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-white/20" />

                  <h4
                    className="text-[16px] font-bold text-white mb-2"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Get in Touch
                  </h4>
                  <p className="text-white/70 text-[13px] leading-relaxed mb-6">
                    Have questions about this service? Reach out and we'll get
                    back to you within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="block text-white/60 text-[11px] uppercase tracking-wider">
                          Call Us
                        </span>
                        <span className="block text-white text-[14px] font-semibold">
                          +1 (234) 567-890
                        </span>
                      </div>
                    </a>
                    <a
                      href="mailto:info@freshclean.com"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors duration-300">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="block text-white/60 text-[11px] uppercase tracking-wider">
                          Email
                        </span>
                        <span className="block text-white text-[14px] font-semibold">
                          info@freshclean.com
                        </span>
                      </div>
                    </a>
                  </div>

                  <Link
                    to="/contact"
                    className="group relative mt-6 inline-flex items-center text-[#059669] text-[13px] font-bold bg-white px-6 py-3 uppercase tracking-wider overflow-hidden transition-colors duration-300 w-full justify-center"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                    <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold text-[13px] uppercase tracking-wider" style={{ fontFamily: 'Unbounded' }}>
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden mb-10"
              >
                <img
                  src={current.mainImage}
                  alt={current.title}
                  className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>

              {/* Title + Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2
                  className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#111] leading-tight mb-3"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {current.title}
                </h2>
                <p
                  className="text-[#059669] text-[15px] sm:text-[16px] font-semibold"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {current.subtitle}
                </p>
              </motion.div>

              {/* Description Paragraphs */}
              <div className="space-y-5 mb-14">
                {current.description.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="text-gray-600 text-[15px] leading-[1.8]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              {/* Services Include */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#f0fdf4] border border-[#059669]/10 p-7 sm:p-10"
              >
                <h3
                  className="text-[18px] sm:text-[22px] font-bold text-[#111] mb-6"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  Services{' '}
                  <span className="text-[#059669]">Include</span>
                </h3>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Checklist */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-4">
                      {current.includes.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                          <span className="text-[#111] text-[14px] sm:text-[15px] font-medium">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Secondary Image */}
                  <div className="w-full md:w-[45%] shrink-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={current.secondaryImage}
                        alt={`${current.title} detail`}
                        className="w-full h-[220px] sm:h-[260px] object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#059669]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center text-white text-[13px] font-bold bg-[#059669] px-8 py-4 uppercase tracking-wider overflow-hidden transition-colors duration-300"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                </Link>
                <Link
                  to="/services"
                  className="text-gray-500 text-[14px] font-medium hover:text-[#059669] transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Back to All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <RooferCTA />
    </>
  );
};
