import React from "react";
import HeroSection from "../Brands/Hero_brand.jsx";
import StorySection from "../Brands/Story_brand.jsx";
import CTASection from "../Brands/website_brand_3.jsx";
import { useTheme } from '../../contexts/ThemeContext';

export default function Brand1() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <HeroSection />
     <StorySection />
     <CTASection />
    </div>
  );
}