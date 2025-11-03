import React from "react";
import Hero_about from "../component/About/Hero_about_1.jsx";
import Our_journey from "../component/About/Journay.jsx";
import Our_team from "../component/About/Team_section.jsx";
import Value_section from "../component/About/Value_about.jsx";
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}>
      <Hero_about/>
      <Our_journey/>
      <Our_team/>
      <Value_section/>
    </div>
  );
}