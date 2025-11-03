import React from "react";
import HeroSection2 from "../Brands/Hero_brand_2.jsx";
import StorySection2 from "../Brands/Story_brand_2.jsx";
import CTASection from "../Brands/website_brand_2.jsx";
import { useTheme } from '../../contexts/ThemeContext';

export default function Brand2() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <HeroSection2 />
     <StorySection2 />
     <CTASection />
    </div>
  );
}