import React from "react";
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ').map((word, wordIndex) => {
    if (word === '') return null;

    const letters = word.split('').map((char, charIndex) => (
      <span
        key={`${char}-${charIndex}`}
        className="animate-fade-in inline-block"
        style={{ animationDelay: `${charIndex * 80}ms` }}
      >
        {char}
      </span>
    ));

    return (
      <span
        key={wordIndex}
        className="animate-fade-in-up inline-block"
        style={{ animationDelay: `${wordIndex * 300}ms` }}
      >
        {letters}
      </span>
    );
  });

  return (
    <h1
      className={`font-bold tracking-widest uppercase flex flex-wrap gap-x-6 justify-center transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
    >
      {words}
    </h1>
  );
};

const CombinedComponent = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-xl opacity-20"></div>
        <div className="relative p-8 bg-black rounded-lg">
          <AnimatedText
            text="BLUE OCEAN"
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cyan-400 hover:text-cyan-300"
          />
        </div>
      </div>
    </main>
  );
};

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`mt-20 border-t ${
      isDarkMode
        ? 'bg-gray-900 text-gray-300 border-gray-800'
        : 'bg-gray-100 text-gray-600 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Blue Ocean</span>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              A family of brands inspired by the beauty and power of the sea.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Brand1" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  Wonderplast
                </Link>
              </li>
              <li>
                <Link to="/Brand2" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  Bangle Boutique
                </Link>
              </li>
              <li>
                <Link to="/brands" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  About Us
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t pt-8 ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19h6" />
              </svg>
            </a>

            <a href="#" className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 11.37A4 4 0 1112.63 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className={`text-center text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            <p>&copy; 2025 Blue Ocean. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* CombinedComponent added here */}
      <div className="relative p-0 m-0 bg-transparent">
          <AnimatedText
            text="BLUE OCEAN"
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-cyan-400 hover:text-cyan-300"
          />
        </div>
    </footer>
  );
}
