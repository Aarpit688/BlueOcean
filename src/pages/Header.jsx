import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/blue_lotus_logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Brands', path: '/brands' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const waterFlowVariants = {
  animate: {
    backgroundPositionX: [0, 100],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 3,
      ease: 'linear',
    },
  },
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const rippleVariant = {
  initial: {
    opacity: 0.4,
    scale: 0,
  },
  animate: {
    opacity: 0,
    scale: 4,
    transition: {
      duration: 1.2, // Slowed duration for ripple effect
      ease: 'easeOut',
    },
  },
};

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBgAnimating, setIsBgAnimating] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleHeaderClick = (e) => {
    if (e.target === e.currentTarget && !isBgAnimating) {
      setIsBgAnimating(true);
    }

    // Add ripple at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { id: Date.now(), x, y, size };
    setRipples((old) => [...old, newRipple]);
  };

  useEffect(() => {
    let timer;
    if (isBgAnimating) {
      timer = setTimeout(() => {
        setIsBgAnimating(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isBgAnimating]);

  // Remove ripples after animation
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((old) => old.slice(1));
      }, 1200); // Match duration for ripple fade out
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <header
      onClick={handleHeaderClick}
      className={`relative overflow-hidden transition-all duration-300 shadow-lg ${
        isDarkMode 
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 text-white' 
          : 'bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-900'
      }`}
    >
      {/* Loading Bar Animation */}
      <div className="absolute top-0 left-0 w-full h-0.5 animate-loading-bar overflow-hidden"></div>

      {/* Water Flow Overlay with fade animation */}
      <AnimatePresence>
        {isBgAnimating && (
          <motion.div
            key="waterFlow"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  120deg,
                  rgba(255, 255, 255, 0.08) 0,
                  rgba(255, 255, 255, 0.08) 5px,
                  rgba(255, 255, 255, 0.04) 6px,
                  rgba(255, 255, 255, 0.04) 10px
                ),
                repeating-linear-gradient(
                  60deg,
                  rgba(255, 255, 255, 0.06) 0,
                  rgba(255, 255, 255, 0.06) 5px,
                  rgba(255, 255, 255, 0.02) 6px,
                  rgba(255, 255, 255, 0.02) 10px
                ),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))
              `,
              backgroundSize: '100px 100%, 50px 50%, auto',
              backgroundRepeat: 'repeat',
              backgroundPositionX: 0,
            }}
            variants={waterFlowVariants}
            initial="hidden"
            animate="animate"
            exit="hidden"
          />
        )}
      </AnimatePresence>

      {/* Cursor Ripples */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {ripples.map(({ id, x, y, size }) => (
          <motion.span
            key={id}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
            }}
            variants={rippleVariant}
            initial="initial"
            animate="animate"
            onAnimationComplete={() => {
              setRipples((old) => old.filter((r) => r.id !== id));
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">Blue Ocean</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-300 ease-in-out ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-blue-800 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-blue-100 hover:bg-blue-200'
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-yellow-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-blue-800" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* Dark Mode Toggle Button for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-blue-100 hover:bg-blue-200'
              }`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-yellow-300" />
              ) : (
                <FiMoon className="w-5 h-5 text-blue-800" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-700 focus:ring-white' 
                  : 'text-blue-800 hover:bg-blue-100 focus:ring-blue-500'
              }`}
            >
              <img src={logo} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full z-20 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-900 to-gray-800' 
            : 'bg-gradient-to-r from-blue-50 to-cyan-50'
        }`}>
          <nav className="px-6 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'text-blue-800 hover:bg-blue-100 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;