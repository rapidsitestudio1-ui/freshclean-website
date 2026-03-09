import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavigationMenu } from './NavigationMenu';
import { HeaderNavigation } from './HeaderNavigation';
import { EstimateForm } from './EstimateForm';
import { HeaderTopBar } from './HeaderTopBar';
import { SearchOverlay } from './SearchOverlay';
import { MobileMenu } from './MobileMenu';

/**
 * EnergyHeroSection Component
 * A high-impact hero section featuring a headline, description, and call-to-action buttons.
 * Inspired by the provided HTML capture for a cleaning services slider.
 */

// @component: EnergyHeroSection
export const EnergyHeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  const buttonHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  // @return
  return <div className="relative w-full min-h-[auto] sm:min-h-screen bg-[#111111] overflow-hidden flex flex-col">
      {/* Top Bar - hidden on mobile */}
      <div className="hidden md:block">
        <HeaderTopBar />
      </div>

      {/* Header Container */}
      <header className={`sticky top-0 z-50 w-full flex items-center justify-between bg-white px-4 md:px-8 lg:px-12 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        {/* Logo Section */}
        <div className="flex items-center py-3 md:py-4 min-w-max">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#059669] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-xl">F</span>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#111]" style={{
            fontFamily: "Unbounded"
          }}>FRESHCLEAN</span>
          </div>
        </div>

        {/* Navigation Menu (Hidden on mobile/tablet) */}
        <div className="hidden xl:flex items-center flex-1 justify-center px-4">
          <NavigationMenu />
        </div>

        {/* Header Actions - simplified on mobile */}
        <div className="flex items-center min-w-max">
          <div className="hidden md:block">
            <HeaderNavigation className="shadow-none py-0 px-0" onSearchClick={() => setIsSearchOpen(true)} />
          </div>
          {/* Mobile/tablet menu trigger */}
          <button onClick={() => setIsMobileMenuOpen(true)} className="xl:hidden flex flex-col items-end justify-center w-[45px] h-[35px] gap-[5px] cursor-pointer" aria-label="Menu">
            <span className="block h-[3px] bg-[#059669] w-[30px]" />
            <span className="block h-[3px] bg-[#059669] w-[35px]" />
            <span className="block h-[3px] bg-[#059669] w-[25px]" />
          </button>
        </div>
      </header>

      {/* Hero Content Section */}
      <div className="relative flex-1 flex flex-col lg:flex-row items-end lg:items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 pt-24 pb-[10vh] sm:pt-40 sm:pb-16 md:pt-44 md:pb-20 lg:py-0">
        {/* Background with an overlay for depth */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2058&auto=format&fit=crop')`,
        filter: 'brightness(0.7)'
      }} />

        {/* Main Content Container */}
        <motion.div className="relative z-10 max-w-2xl w-full" variants={containerVariants} initial="hidden" animate="visible">
          {/* Subtitle */}
          <motion.h4 variants={itemVariants} className="text-[#fefefe] text-[14px] sm:text-[14px] md:text-[17px] lg:text-[20px] font-medium tracking-tight mb-5 md:mb-7" style={{
          fontFamily: "Unbounded",
          fontWeight: "600"
        }}>--Welcome to FreshClean</motion.h4>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[58px] xl:text-[60px] font-semibold leading-[1.12]" style={{
            fontFamily: "Unbounded",
            fontWeight: "800"
          }}>
              <span className="sm:whitespace-nowrap" style={{ color: "#059669" }}>A Spotless Home</span>
              <br />
              <span className="md:whitespace-nowrap">With Expert Cleaning</span>{' '}
              Services
            </h1>
          </motion.div>

          {/* Description Paragraph */}
          <motion.p variants={itemVariants} className="text-white/90 text-[16px] sm:text-[16px] md:text-[15px] leading-relaxed mt-10 md:mt-10 mb-12 md:mb-12 max-w-[580px] font-normal" style={{ fontFamily: "Unbounded" }}>
            Your home deserves to shine. From deep cleans to regular maintenance, our certified team delivers spotless results that keep your space fresh and healthy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-4 items-stretch sm:items-center">
            {/* Primary Button */}
            <a href="/services" className="group relative overflow-hidden bg-[#059669] text-white px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-300" style={{ fontFamily: "Unbounded" }}>
              <span className="relative z-10 flex items-center gap-2">
                Our Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-[#111111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
            </a>

            {/* Secondary Button */}
            <a href="/contact" className="group/secondary relative overflow-hidden border-2 border-[#059669] bg-transparent text-white px-5 sm:px-7 py-3 sm:py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-300" style={{ fontFamily: "Unbounded" }}>
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover/secondary:text-white">
                Free Estimate <ArrowRight className="w-4 h-4 transition-transform group-hover/secondary:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-[#059669] transform scale-x-0 origin-left transition-transform duration-500 group-hover/secondary:scale-x-100 z-0" />
            </a>
          </motion.div>
        </motion.div>

        {/* Estimate Form - desktop only (inside hero) */}
        <motion.div initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="relative z-10 !hidden lg:!block lg:mt-0 lg:w-auto">
          <EstimateForm />
        </motion.div>

        {/* Decorative side accent (optional visual enhancement) */}
        <div className="absolute right-0 bottom-0 w-1/4 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`
      }} />
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>;
};