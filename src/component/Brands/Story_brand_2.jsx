"use client";

import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

export default function Story_brand_2() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Bangle Story
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Our jewelry collection began with a passion for creating timeless pieces that celebrate the elegance of the ocean. 
              Each design is inspired by the fluid movements and natural beauty of marine life.
            </p>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Handcrafted by skilled artisans using sustainable materials, our pieces are designed to be cherished for generations. 
              We believe that jewelry should not only enhance your beauty but also tell a story of conscious creation.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              From delicate necklaces to statement pieces, our collection offers something for every occasion, 
              reflecting our commitment to quality, craftsmanship, and environmental responsibility.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className={`border-2 rounded-xl w-full h-80 flex items-center justify-center ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-gray-200 border-gray-300 text-gray-600'}`}>
              Jewelry Story Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}