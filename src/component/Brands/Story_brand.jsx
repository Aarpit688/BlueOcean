"use client";

import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

export default function Story_brand() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Story
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Founded on the principles of sustainability and mindful design, Blue Ocean began as a small workshop 
              with a big vision: to create beautiful, functional home goods that respect both people and planet.
            </p>
            <p className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Our journey started with a simple idea – that the objects surrounding us should enhance our daily 
              lives while contributing positively to the environment. Today, we're proud to offer a curated 
              collection of products that embody this philosophy.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Each piece in our collection is thoughtfully designed and crafted with sustainable materials, 
              reflecting our commitment to quality, longevity, and environmental responsibility.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className={`border-2 rounded-xl w-full h-80 flex items-center justify-center ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-400' : 'bg-gray-200 border-gray-300 text-gray-600'}`}>
              Brand Story Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}