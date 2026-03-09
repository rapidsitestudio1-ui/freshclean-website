import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const pages = [
  { title: 'Home', path: '/', keywords: ['home', 'main', 'landing', 'freshclean'] },
  { title: 'About Us', path: '/about', keywords: ['about', 'company', 'team', 'history', 'who we are', 'story', 'values', 'mission'] },
  { title: 'Our Services', path: '/services', keywords: ['services', 'deep cleaning', 'office cleaning', 'move-in', 'move-out', 'carpet', 'window', 'maintenance'] },
  { title: 'Blog', path: '/blog', keywords: ['blog', 'articles', 'news', 'tips', 'guides', 'insights'] },
  { title: 'Contact Us', path: '/contact', keywords: ['contact', 'phone', 'email', 'location', 'address', 'quote', 'estimate', 'reach'] },
];

export const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const filtered = query.trim()
    ? pages.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.keywords.some((k) => k.includes(query.toLowerCase()))
      )
    : pages;

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#111111]/95 backdrop-blur-sm flex flex-col items-center justify-start pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="w-full max-w-2xl px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Close search"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Search input */}
            <div className="relative mb-10">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-[#059669]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages..."
                className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#059669] text-white text-2xl md:text-3xl font-light pl-10 pb-4 outline-none transition-colors duration-300 placeholder:text-white/30"
                style={{ fontFamily: 'Unbounded' }}
              />
            </div>

            {/* Results */}
            <div className="space-y-2">
              {filtered.map((page) => (
                <motion.button
                  key={page.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => handleNavigate(page.path)}
                  className="group w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                >
                  <span
                    className="text-white/80 group-hover:text-[#059669] text-lg font-medium transition-colors duration-300"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {page.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-[#059669] group-hover:translate-x-1 transition-all duration-300" />
                </motion.button>
              ))}

              {filtered.length === 0 && (
                <p
                  className="text-white/40 text-center py-8 text-lg"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  No results found
                </p>
              )}
            </div>

            {/* Hint */}
            <p className="text-white/20 text-xs text-center mt-10 uppercase tracking-widest">
              Press ESC to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
