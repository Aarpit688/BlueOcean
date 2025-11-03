import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

export default function JourneySection() {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className={`text-4xl sm:text-5xl lg:text-5xl font-bold mb-8 text-balance ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Our Journey
        </h2>
        <p className={`text-base sm:text-lg leading-relaxed text-balance ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Founded in 2020 with a mission to redefine digital experiences, Innovate Co. started as a small group of
          friends with a big idea. We saw a gap in the market for user-centric design paired with powerful, scalable
          technology. Over the years, we've grown into a dynamic team, but our core philosophy remains the same: build
          products that people love to use.
        </p>
      </div>
    </section>
  );
}