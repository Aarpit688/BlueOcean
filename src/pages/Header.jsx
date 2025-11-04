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
    backgroundPositionX: [0, 120],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 4,
      ease: 'linear',
    },
  },
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const rippleVariant = {
  initial: {
    opacity: 0.5,
    scale: 0,
  },
  animate: {
    opacity: 0,
    scale: 5,
    transition: {
      duration: 1.5,
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
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isBgAnimating]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((old) => old.slice(1));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  return (
    <header
      onClick={handleHeaderClick}
      className={`
        relative overflow-hidden transition-all duration-500 shadow-xl
        backdrop-blur-md bg-opacity-60
        ${isDarkMode 
          ? 'bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 text-white' 
          : 'bg-gradient-to-r from-white/60 via-blue-50/40 to-cyan-50/60 text-blue-900'
        }
        border-b border-white/20
      `}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      {/* Loading Bar Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-loading-bar-gloss"></div>

      {/* Water Flow Overlay */}
      <AnimatePresence>
        {isBgAnimating && (
          <motion.div
            key="waterFlow"
            className="absolute inset-0 pointer-events-none rounded-b-2xl"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  120deg,
                  rgba(255, 255, 255, 0.09) 0,
                  rgba(255, 255, 255, 0.09) 6px,
                  rgba(255, 255, 255, 0.05) 8px,
                  rgba(255, 255, 255, 0.05) 14px
                ),
                repeating-linear-gradient(
                  60deg,
                  rgba(255, 255, 255, 0.07) 0,
                  rgba(255, 255, 255, 0.07) 6px,
                  rgba(255, 255, 255, 0.03) 8px,
                  rgba(255, 255, 255, 0.03) 14px
                ),
                linear-gradient(90deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0))
              `,
              backgroundSize: '110px 110%, 55px 55%, auto',
              backgroundRepeat: 'repeat',
              backgroundPositionX: 0,
              filter: 'brightness(1.2) saturate(1.1)',
              borderRadius: '0 0 16px 16px'
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
            className="absolute rounded-full bg-white/70 shadow-lg"
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
              mixBlendMode: isDarkMode ? 'screen' : 'multiply'
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

      <div className="container mx-auto px-6 py-5 relative z-10 flex items-center justify-between">
        {/* Logo with pulse effect */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer select-none"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <img src={logo} alt="Logo" className="w-8 h-8 drop-shadow-md" />
          <span className="text-2xl font-extrabold tracking-wide drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">Blue Ocean</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`
                transition-colors duration-300 ease-in-out relative
                ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-blue-800 hover:text-cyan-600'}
                before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:rounded-full
                before:bg-gradient-to-r before:from-blue-400 before:via-cyan-400 before:to-blue-400
                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
              `}
            >
              {link.name}
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full shadow-md transition-colors duration-300 hover:scale-110 transform ${
              isDarkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-blue-100 hover:bg-cyan-200'
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-blue-800" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className={`p-2 mr-2 rounded-full shadow-md transition-colors duration-300 hover:scale-110 transform ${
              isDarkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-blue-100 hover:bg-cyan-200'
            }`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <FiSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-blue-800" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`
              p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-transform duration-300
              ${isMenuOpen ? 'rotate-90' : 'rotate-0'}
              ${isDarkMode 
                ? 'text-gray-300 hover:bg-gray-700 focus:ring-white' 
                : 'text-blue-800 hover:bg-blue-100 focus:ring-blue-500'}
            `}
          >
            <img src={logo} alt="Menu" className="w-6 h-6 drop-shadow-md" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden absolute top-full left-0 w-full z-20 border-t border-white/10 
              ${isDarkMode 
                ? 'bg-gradient-to-r from-gray-900/85 to-gray-800/85' 
                : 'bg-gradient-to-r from-white/80 to-cyan-50/80'}
              backdrop-blur-lg
            `}
          >
            <nav className="px-6 pt-4 pb-5 space-y-2 font-semibold tracking-wide">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-2 rounded-md text-base transition-all duration-300 
                    ${isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                      : 'text-blue-900 hover:bg-blue-100 hover:text-cyan-700'}
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
