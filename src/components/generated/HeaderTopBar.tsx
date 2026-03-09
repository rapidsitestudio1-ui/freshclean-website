import React from 'react';
// Custom SVG icons used instead of lucide-react
import { FacebookIcon, XTwitterIcon, LinkedInIcon } from './SocialIcons';
import { cn } from '@/lib/utils';

/**
 * HeaderTopBar Component
 * A responsive top header bar featuring social icons, a welcome message, 
 * business hours, and contact information.
 */

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}
const SocialLink = ({
  href,
  icon,
  ariaLabel
}: SocialLinkProps) => <a href={href} onClick={e => e.preventDefault()} aria-label={ariaLabel} className="group relative flex items-center justify-center h-[35px] w-[35px] text-white border border-white/40 rounded-full transition-all duration-400 overflow-hidden">
    <span className="absolute inset-0 bg-white scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 z-0" />
    <span className="relative z-10 group-hover:text-[#059669] transition-colors duration-400">
      {icon}
    </span>
  </a>;
interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  showDivider?: boolean;
}
const ContactItem = ({
  icon,
  text,
  href,
  showDivider
}: ContactItemProps) => <li className="relative flex items-center h-full group" style={{
  fontFamily: "Unbounded"
}}>
    {showDivider && <span className="hidden md:block absolute -left-[23px] top-[-3px] bottom-[2px] w-[1px] bg-white/30" />}
    <div className="flex items-center text-white mr-[10px]">
      {icon}
    </div>
    <div className="text-white text-base font-normal leading-none">
      {href ? <a href={href} onClick={e => e.preventDefault()} className="hover:opacity-80 transition-all duration-500">
          {text}
        </a> : <span>{text}</span>}
    </div>
  </li>;

// @component: HeaderTopBar
export const HeaderTopBar = () => {
  // @return
  return <div className="w-full bg-[#059669] px-4 lg:px-[55px] py-2 md:py-2.5 flex flex-wrap items-center justify-between gap-y-2 md:gap-y-4">
      {/* Social and Welcome Text Section */}
      <div className="flex flex-wrap items-center gap-x-4 lg:gap-x-8 gap-y-2">
        <div className="flex items-center gap-x-1.5">
          <SocialLink href="#" ariaLabel="Facebook" icon={<FacebookIcon size={14} />} />
          <SocialLink href="#" ariaLabel="Twitter" icon={<XTwitterIcon size={14} />} />
          <SocialLink href="#" ariaLabel="LinkedIn" icon={<LinkedInIcon size={14} />} />
        </div>

        <p className="hidden lg:block text-white text-sm lg:text-base font-normal capitalize leading-none m-0" style={{
        fontFamily: "Unbounded"
      }}>
          Ready for a spotless space?
        </p>
      </div>

      {/* Working Hours and Contact Section */}
      <div className="flex flex-wrap items-center gap-x-6 lg:gap-x-12 gap-y-2">
        {/* Working Hours - hidden on small screens */}
        <div className="hidden lg:flex items-center gap-x-3.5">
          <div className="flex items-center text-white">
            <img src="/clock-icon.svg" alt="" className="w-[20px] h-[20px] brightness-0 invert" />
          </div>
          <p className="text-white text-sm lg:text-base font-normal m-0" style={{
          fontFamily: "Unbounded"
        }}>
            Mon-Sat: 08:00-18:00
          </p>
        </div>

        {/* Contact List */}
        <ul className="flex flex-wrap items-center gap-x-4 lg:gap-x-12 list-none p-0 m-0">
          <ContactItem icon={<img src="/phone-icon.svg" alt="" className="w-[18px] h-[18px] brightness-0 invert" />} text="(+233) 456 79 08" href="tel:2334567908" />
        </ul>
        <ul className="hidden lg:flex flex-wrap items-center gap-x-12 list-none p-0 m-0">
          <ContactItem icon={<img src="/email-icon.svg" alt="" className="w-[18px] h-[18px] brightness-0 invert" />} text="needhelp@company.com" href="mailto:needhelp@company.com" showDivider />
        </ul>
      </div>
    </div>;
};