import React from "react";
import Brand1Component from "../component/Brand/Brand1.jsx";
import { useTheme } from '../contexts/ThemeContext';

export default function Brand1() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <Brand1Component />
    </div>
  );
}