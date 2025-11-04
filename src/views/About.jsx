import React from "react";
import Hero_about_1 from "../component/About/Hero_about_1.jsx";
import Journay from "../component/About/Journay.jsx";
import Team_section from "../component/About/Team_section.jsx";
import Value_about from "../component/About/Value_about.jsx";
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <Hero_about_1/>
      <Journay/>
      <Team_section/>
      <Value_about/>
    </div>
  );
}