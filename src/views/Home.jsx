import React from "react";
import Hero from "../component/Home/Hero";
import Blue_ocean from "../component/Home/Blue_ocean";
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <Hero />
      <Blue_ocean />
    </div>
  );
}