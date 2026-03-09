import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationMenu } from '../NavigationMenu';
import { HeaderNavigation } from '../HeaderNavigation';
import { HeaderTopBar } from '../HeaderTopBar';
import { SearchOverlay } from '../SearchOverlay';
import { MobileMenu } from '../MobileMenu';

export const SiteHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On homepage, the hero section includes its own header — hide this one
  if (isHome) return null;

  return (
    <>
      <div className="hidden md:block">
        <HeaderTopBar />
      </div>
      <header
        className={`sticky top-0 z-50 w-full flex items-center justify-between bg-white px-4 md:px-8 lg:px-12 transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="flex items-center py-3 md:py-4 min-w-max">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#059669] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-xl">S</span>
            </div>
            <span
              className="text-xl md:text-2xl font-black tracking-tighter text-[#111]"
              style={{ fontFamily: 'Unbounded' }}
            >
              FRESHCLEAN
            </span>
          </a>
        </div>

        <div className="hidden xl:flex items-center flex-1 justify-center px-4">
          <NavigationMenu />
        </div>

        <div className="flex items-center min-w-max">
          <div className="hidden md:block">
            <HeaderNavigation
              className="shadow-none py-0 px-0"
              onSearchClick={() => setIsSearchOpen(true)}
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden flex flex-col items-end justify-center w-[45px] h-[35px] gap-[5px] cursor-pointer"
            aria-label="Menu"
          >
            <span className="block h-[3px] bg-[#059669] w-[30px]" />
            <span className="block h-[3px] bg-[#059669] w-[35px]" />
            <span className="block h-[3px] bg-[#059669] w-[25px]" />
          </button>
        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
