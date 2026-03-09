import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Building2,
  Home,
  Sun,
  Brush,
  CookingPot,
  LucideIcon,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
  children?: NavLink[];
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Deep Cleaning', href: '/services/deep-cleaning', icon: Sparkles },
      { label: 'Office Cleaning', href: '/services/office-cleaning', icon: Building2 },
      { label: 'Move-In/Out Cleaning', href: '/services/move-in-out-cleaning', icon: Home },
      { label: 'Window Cleaning', href: '/services/window-cleaning', icon: Sun },
      { label: 'Carpet Cleaning', href: '/services/carpet-cleaning', icon: Brush },
      { label: 'Kitchen & Bath', href: '/services/kitchen-bath-cleaning', icon: CookingPot },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleNav = (href: string) => {
    onClose();
    setServicesOpen(false);
    navigate(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-black/50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[95] w-[300px] max-w-[85vw] bg-[#111111] flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#059669] rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-base">F</span>
                </div>
                <span
                  className="text-lg font-black tracking-tighter text-white"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  FRESHCLEAN
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 px-6 py-6">
              <ul className="space-y-1">
                {navLinks.map((link, i) => {
                  const isActive =
                    location.pathname === link.href ||
                    (link.children &&
                      location.pathname.startsWith(link.href + '/'));
                  const hasChildren = link.children && link.children.length > 0;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    >
                      {/* Main link */}
                      <div className="flex items-center">
                        <button
                          onClick={() => {
                            if (hasChildren) {
                              setServicesOpen(!servicesOpen);
                            } else {
                              handleNav(link.href);
                            }
                          }}
                          className={`flex-1 flex items-center justify-between py-4 px-3 text-left text-[15px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            isActive
                              ? 'text-[#059669] bg-white/[0.05]'
                              : 'text-white/80 hover:text-[#059669] hover:bg-white/[0.03]'
                          }`}
                          style={{ fontFamily: 'Unbounded' }}
                        >
                          {link.label}
                          {hasChildren ? (
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                servicesOpen ? 'rotate-180 text-[#059669]' : ''
                              }`}
                            />
                          ) : (
                            <ArrowRight
                              className={`w-4 h-4 transition-all duration-300 ${
                                isActive
                                  ? 'text-[#059669] opacity-100'
                                  : 'opacity-0'
                              }`}
                            />
                          )}
                        </button>
                      </div>

                      {/* Sub-links */}
                      {hasChildren && (
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-3"
                            >
                              {/* View all services link */}
                              <li>
                                <button
                                  onClick={() => handleNav('/services')}
                                  className="w-full flex items-center gap-3 py-3 px-3 text-[13px] font-semibold text-[#059669] hover:bg-white/[0.03] transition-colors cursor-pointer"
                                  style={{ fontFamily: 'Unbounded' }}
                                >
                                  <span className="w-7 h-7 rounded bg-[#059669]/20 flex items-center justify-center shrink-0">
                                    <ArrowRight className="w-3.5 h-3.5 text-[#059669]" />
                                  </span>
                                  All Services
                                </button>
                              </li>
                              {link.children!.map((child) => {
                                const Icon = child.icon;
                                const isChildActive =
                                  location.pathname === child.href;
                                return (
                                  <li key={child.href}>
                                    <button
                                      onClick={() => handleNav(child.href)}
                                      className={`w-full flex items-center gap-3 py-3 px-3 text-[13px] font-medium transition-colors cursor-pointer ${
                                        isChildActive
                                          ? 'text-[#059669]'
                                          : 'text-white/60 hover:text-white'
                                      }`}
                                    >
                                      {Icon && (
                                        <span
                                          className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                            isChildActive
                                              ? 'bg-[#059669] text-white'
                                              : 'bg-white/[0.07] text-white/40'
                                          }`}
                                        >
                                          <Icon className="w-3.5 h-3.5" />
                                        </span>
                                      )}
                                      {child.label}
                                    </button>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="px-6 py-6 border-t border-white/10 space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#059669]" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@freshclean.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#059669]" />
                <span className="text-sm">info@freshclean.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="px-6 pb-8">
              <button
                onClick={() => handleNav('/contact')}
                className="group relative w-full bg-[#059669] text-white font-bold text-sm uppercase tracking-wider py-4 flex items-center justify-center gap-2 overflow-hidden transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                <span className="absolute inset-0 flex items-center justify-center text-[#111] font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20 pointer-events-none">
                  <span
                    className="flex items-center gap-2"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </span>
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
