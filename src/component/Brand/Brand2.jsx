import React from "react";
import Hero_brand_2 from "../Brands/Hero_brand_2.jsx";
import Story_brand_2 from "../Brands/Story_brand_2.jsx";
import website_brand_2 from "../Brands/website_brand_2.jsx";
import { useTheme } from '../../contexts/ThemeContext';

export default function Brand2() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <Hero_brand_2 />
     <Story_brand_2 />
     <website_brand_2 />
    </div>
  );
}