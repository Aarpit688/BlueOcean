import React from "react";
import Hero_brand from "../Brands/Hero_brand.jsx";
import Story_brand from "../Brands/Story_brand.jsx";
import website_brand from "../Brands/website_brand_2.jsx";
import { useTheme } from '../../contexts/ThemeContext';

export default function Brand1() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <Hero_brand />
     <Story_brand />
     <website_brand />
    </div>
  );
}