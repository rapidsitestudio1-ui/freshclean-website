import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Sparkles, Building2, Home, Sun, Brush, CookingPot } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Interface for navigation items and sub-items.
 */
interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

/**
 * Sample menu data based on the provided HTML structure.
 */
const MENU_DATA: NavItem[] = [{
  id: 'home',
  label: 'Home',
  href: '/'
}, {
  id: 'about',
  label: 'About',
  href: '/about'
}, {
  id: 'services',
  label: 'Services',
  href: '/services',
  children: [
    { id: 'deep-cleaning', label: 'Deep Cleaning', href: '/services/deep-cleaning', icon: Sparkles },
    { id: 'office-cleaning', label: 'Office Cleaning', href: '/services/office-cleaning', icon: Building2 },
    { id: 'move-in-out', label: 'Move-In/Out Cleaning', href: '/services/move-in-out-cleaning', icon: Home },
    { id: 'window-cleaning', label: 'Window Cleaning', href: '/services/window-cleaning', icon: Sun },
    { id: 'carpet-cleaning', label: 'Carpet Cleaning', href: '/services/carpet-cleaning', icon: Brush },
    { id: 'kitchen-bath', label: 'Kitchen & Bath Cleaning', href: '/services/kitchen-bath-cleaning', icon: CookingPot },
  ],
}, {
  id: 'blog',
  label: 'Blog',
  href: '/blog'
}, {
  id: 'contact',
  label: 'Contact',
  href: '/contact'
}];

/**
 * Dropdown component for nested menu levels.
 */
const NavDropdown = ({
  items,
  isOpen,
  onNavigate,
}: {
  items: NavItem[];
  isOpen: boolean;
  onNavigate: (href: string) => void;
}) => {
  return <AnimatePresence>
      {isOpen && <motion.ul initial={{
      opacity: 0,
      y: 20,
      rotateX: -15
    }} animate={{
      opacity: 1,
      y: 0,
      rotateX: 0
    }} exit={{
      opacity: 0,
      y: 10,
      rotateX: -15
    }} transition={{
      duration: 0.3,
      ease: 'easeOut'
    }} className="absolute top-[100%] left-0 min-w-[280px] bg-white shadow-[0_10px_60px_0_rgba(0,0,0,0.07)] rounded-b-lg py-4 px-5 z-50 flex flex-col origin-top" style={{
      perspective: '1000px'
    }}>
          {items.map((subItem, idx) => {
            const Icon = subItem.icon;
            return <li key={subItem.id} className={cn("group/sub relative w-full", idx !== 0 && "border-t border-black/[0.06]")}>
              <a href={subItem.href} onClick={e => { e.preventDefault(); onNavigate(subItem.href); }} className="flex items-center gap-3 py-3.5 text-[15px] font-semibold text-[#111] hover:text-[#059669] transition-colors duration-200">
                {Icon && <span className="w-8 h-8 rounded bg-[#059669]/10 flex items-center justify-center shrink-0 group-hover/sub:bg-[#059669] transition-colors duration-300">
                  <Icon className="w-4 h-4 text-[#059669] group-hover/sub:text-white transition-colors duration-300" />
                </span>}
                <span className="flex-1">{subItem.label}</span>
                <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300 text-[#059669]" />
              </a>
            </li>;
          })}
        </motion.ul>}
    </AnimatePresence>;
};

// @component: NavigationMenu
export const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
    }
  };

  // Handle clicking outside to close any open menus (optional, since it's hover-based usually)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // @return
  return <nav className="w-full flex justify-center bg-white border-b border-gray-100">
      <ul ref={menuRef} className="flex items-center m-0 p-0 list-none">
        {MENU_DATA.map(item => {
        const hasChildren = item.children && item.children.length > 0;
        const isCurrent = item.href.startsWith('/') && (location.pathname === item.href || (item.children && location.pathname.startsWith(item.href + '/')));
        return <li key={item.id} className="relative py-10 px-5 first:pl-0 last:pr-0" onMouseEnter={() => setActiveMenu(item.id)} onMouseLeave={() => setActiveMenu(null)}>
              <a href={item.href} onClick={e => handleNavClick(e, item.href)} className={cn("relative flex items-center text-[16px] font-semibold uppercase transition-all duration-500 h-5 leading-5", isCurrent || activeMenu === item.id ? "text-[#059669]" : "text-[#111]")}>
                {/* Underline Decoration */}
                <motion.span initial={false} animate={{
              scaleX: isCurrent || activeMenu === item.id ? 1 : 0,
              opacity: isCurrent || activeMenu === item.id ? 1 : 0
            }} transition={{
              duration: 0.3
            }} className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#059669] origin-left z-[1]" />
                
                <span className="relative z-[2] flex items-center">
                  {item.label}
                  {hasChildren && <ChevronDown className={cn("ml-2 w-4 h-4 transition-transform duration-300", activeMenu === item.id && "rotate-180")} />}
                </span>
              </a>

              {hasChildren && <NavDropdown items={item.children!} isOpen={activeMenu === item.id} onNavigate={(href) => { setActiveMenu(null); navigate(href); }} />}
            </li>;
      })}
      </ul>
    </nav>;
};