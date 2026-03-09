import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Sparkles, Building2, Home, Sun, BrushCleaning, CookingPot } from 'lucide-react';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  slug: string;
}

const services: ServiceItem[] = [{
  id: 1,
  title: 'Deep Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
  icon: Sparkles,
  slug: 'deep-cleaning'
}, {
  id: 2,
  title: 'Office Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  icon: Building2,
  slug: 'office-cleaning'
}, {
  id: 3,
  title: 'Move-In/Out Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  icon: Home,
  slug: 'move-in-out-cleaning'
}, {
  id: 4,
  title: 'Window Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  icon: Sun,
  slug: 'window-cleaning'
}, {
  id: 5,
  title: 'Carpet Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
  icon: BrushCleaning,
  slug: 'carpet-cleaning'
}, {
  id: 6,
  title: 'Kitchen & Bath Cleaning',
  description: 'Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.',
  image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  icon: CookingPot,
  slug: 'kitchen-bath-cleaning'
}];

const ServiceCard = ({
  service
}: {
  service: ServiceItem;
}) => {
  const Icon = service.icon;
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: service.id * 0.1
  }} className="group relative mb-[30px]">
      <div className="overflow-hidden relative">
        <img src={service.image} alt={service.title} className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 z-10 bg-[#059669] p-4 rounded-tr-lg">
          <Icon size={40} className="text-white transform transition-transform duration-300 group-hover:rotate-12" />
        </div>
      </div>
      <div className="border-x-2 border-b-2 border-[#059669]/15 p-5 sm:p-[35px] transition-colors duration-300 group-hover:bg-[#059669]/5">
        <h3 className="font-sans font-bold text-2xl leading-6 text-[#111]">
          <a href={`/services/${service.slug}`} className="hover:text-[#059669] transition-colors">
            {service.title}
          </a>
        </h3>
      </div>
    </motion.div>;
};

// @component: ServicesSection
export const ServicesSection = () => {
  return <section className="bg-[#f0fdf4] py-[95px] pb-[70px] min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[1200px] w-full px-[15px] mx-auto">
        <div className="flex flex-wrap -mx-[15px] mb-12">
          <div className="w-full px-[15px] text-center">
            <div className="mb-[45px]">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-8 bg-[#059669]" />
                <span
                  className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  What We Offer
                </span>
                <div className="h-px w-8 bg-[#059669]" />
              </div>
              <h1 className="font-sans font-bold text-[28px] sm:text-[36px] md:text-[50px] leading-[1.2] text-[#111] mb-4">
                Our Cleaning Services
              </h1>
              <p className="font-sans font-bold text-gray-500 text-base max-w-[600px] mx-auto leading-relaxed">
                Professional cleaning solutions tailored to keep your space spotless and healthy, backed by years of trusted service.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-[15px]">
          {services.map(service => <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 px-[15px]">
              <ServiceCard service={service} />
            </div>)}
        </div>
      </div>
    </section>;
};
