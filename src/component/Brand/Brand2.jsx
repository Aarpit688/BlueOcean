import React from "react";
import Hero_brand_2 from "../Brands/Hero_brand_2";
import Story_brand_2 from "../Brands/Story_brand_2";
import Website_brand_2 from "../Brands/website_brand_2";
import { useTheme } from '../../contexts/ThemeContext';
import ScrollToTop from "../scrolltotop";
export default function Brand2() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
        <ScrollToTop/>
     <Hero_brand_2 />
     <Story_brand_2 />
     <Website_brand_2 />
    </div>
  );
}