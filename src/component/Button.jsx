import React from "react";
import { useTheme } from '../contexts/ThemeContext';

export const Button = ({ children, className = "", ...props }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <button
      className={`px-8 py-3 font-semibold rounded-full shadow-md focus:outline-none focus:ring-2 transition-all duration-300 ease-in-out ${
        isDarkMode 
          ? 'focus:ring-offset-gray-900' 
          : 'focus:ring-offset-gray-50'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;