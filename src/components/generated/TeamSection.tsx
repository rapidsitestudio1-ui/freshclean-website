import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Facebook, Instagram, Video } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    vimeo?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Shauk Reap',
    role: 'Lead Cleaning Specialist',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', vimeo: '#', instagram: '#' },
  },
  {
    id: 2,
    name: 'James Logan',
    role: 'Lead Cleaning Specialist',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', vimeo: '#', instagram: '#' },
  },
  {
    id: 3,
    name: 'Paul Steven',
    role: 'Lead Cleaning Specialist',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    socials: { facebook: '#', vimeo: '#', instagram: '#' },
  },
];

const TeamIcon = ({
  icon: Icon,
  href,
}: {
  icon: any;
  href: string;
}) => (
  <motion.li whileHover={{ y: -3 }} className="mb-1">
    <a
      href={href}
      onClick={(e) => e.preventDefault()}
      className="flex items-center justify-center w-14 h-14 bg-white text-[#059669] transition-all duration-300 hover:bg-[#059669] hover:text-white"
    >
      <Icon size={20} />
    </a>
  </motion.li>
);

// @component: TeamSection
export const TeamSection = () => {
  const [activeShare, setActiveShare] = useState<number | null>(null);

  // @return
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[105px] px-4 md:px-8 lg:px-0 w-full bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block mb-3"
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Our Team Members
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[26px] sm:text-[32px] md:text-[41px] font-semibold text-[#111111] mt-[11px] mb-8 sm:mb-[42px] leading-[1.2]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Meet Our Expert Team
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Social Share Button — bottom-right corner */}
                <div
                  className="absolute right-0 bottom-0 z-50 flex flex-col items-center"
                  onMouseEnter={() => setActiveShare(member.id)}
                  onMouseLeave={() => setActiveShare(null)}
                >
                  <AnimatePresence>
                    {activeShare === member.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex flex-col mb-0 list-none p-0"
                      >
                        <TeamIcon icon={Facebook} href="#" />
                        <TeamIcon icon={Video} href="#" />
                        <TeamIcon icon={Instagram} href="#" />
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <button
                    className="w-14 h-14 bg-[#059669] text-white flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#111111]"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Share2 size={22} />
                  </button>
                </div>
              </div>

              {/* Name & Role — below image */}
              <div className="pt-5 pb-2">
                <h4 className="m-0">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-[20px] sm:text-[22px] font-bold text-[#111111] leading-tight transition-colors hover:text-[#059669]"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {member.name}
                  </a>
                </h4>
                <span className="text-[14px] text-[#4D4E4F] font-normal mt-1 block">
                  {member.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
