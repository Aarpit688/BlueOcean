import React from "react";
import Brand2 from "../component/Brand/Brand2.jsx";
import { useTheme } from '../contexts/ThemeContext';

export default function Brand2View() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-gray-50 text-gray-900'}>
     <Brand2 />
    </div>
  );
}