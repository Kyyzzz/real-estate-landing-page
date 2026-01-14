'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    console.log('Scrolling to section:', id); // Debug log
    setIsMobileMenuOpen(false); // Close menu first
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      console.log('Element found:', element); // Debug log
      if (element) {
        const headerOffset = 100; // Height of fixed header + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        console.log('Scrolling to position:', offsetPosition); // Debug log
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.error('Element not found with id:', id); // Debug log
      }
    }, 100);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'profile' },
    { label: 'Services', id: 'services' },
    { label: 'Properties', id: 'properties' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="text-2xl font-bold text-primary tracking-tight">
              <span className="text-primary font-serif">Pahrump</span>
              <span className="text-secondary font-serif"> Realtor</span>
            </div>
          </motion.div>

          {/* Desktop Navigation - hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary font-semibold transition-colors relative group whitespace-nowrap text-sm tracking-tight"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button - hidden on mobile/tablet */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex items-center space-x-2 bg-primary text-white px-4 xl:px-5 py-2 rounded-full hover:bg-primary-dark transition-all hover:shadow-lg whitespace-nowrap text-sm tracking-tight"
          >
            <FaPhone className="text-xs" />
            <span className="font-bold">Contact Us</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 overflow-visible"
            >
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    className="text-left text-gray-700 hover:text-primary font-semibold transition-colors py-2 border-b border-gray-100 tracking-tight w-full"
                    type="button"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection('contact');
                  }}
                  className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-all justify-center tracking-tight w-full"
                  type="button"
                >
                  <FaPhone className="text-sm" />
                  <span className="font-bold">Contact Us</span>
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
