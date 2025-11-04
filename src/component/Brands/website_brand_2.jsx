import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

export default function website_brand_2() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`w-full py-20 px-4 sm:py-24 md:py-32 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-800'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-balance ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>
          Explore Our Full Collection
        </h2>

        <p className={`text-lg sm:text-xl mb-12 text-balance ${isDarkMode ? 'text-gray-200' : 'text-gray-300'}`}>
          Discover more sustainable designs and shop our latest arrivals on our official website.
        </p>

        <button className={`inline-block font-bold py-3 px-8 rounded-full transition-colors duration-200 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
          VISIT OUR bangle WEBSITE
        </button>
      </div>
    </section>
  );
}