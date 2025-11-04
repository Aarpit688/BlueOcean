import React from "react";
import { FaLightbulb, FaUsers, FaBullseye, FaBolt } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

const values = [
  {
    icon: <FaLightbulb className="w-8 h-8 text-blue-400" />,
    title: "Innovation",
    description:
      "We constantly seek better ways to solve problems and are not afraid to challenge the status quo.",
  },
  {
    icon: <FaUsers className="w-8 h-8 text-blue-400" />,
    title: "Collaboration",
    description:
      "We believe the best results come from working together, sharing ideas, and supporting each other.",
  },
  {
    icon: <FaBullseye className="w-8 h-8 text-blue-400" />,
    title: "Customer-Centric",
    description:
      "Our customers are at the heart of everything we do. Their success is our success.",
  },
  {
    icon: <FaBolt className="w-8 h-8 text-blue-400" />,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, striving for quality and polish in every detail.",
  },
];

export default function Value_about() {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection 
      className={`relative py-20 px-4 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      animationType="fadeUp"
      duration={0.8}
      delay={0.4}
    >
      {/* Polygon background with bottom diagonal cut (shape is custom!) */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[340px] ${isDarkMode ? 'bg-white' : 'bg-gray-200'}`}
        style={{
          zIndex: 1,
          clipPath:
            "polygon(0% 30%, 50% 0%, 100% 100%, 100% 100%)", // Diagonal bottom cut, adjust for desired effect
        }}
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header inside main content */}
        <MotionSection 
          className="text-center mb-16"
          animationType="fadeUp"
          duration={0.6}
          delay={0.2}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            What We Stand For
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Our core values guide everything we do.
          </p>
        </MotionSection>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <MotionSection
              key={index}
              className={`text-center p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-xl' 
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
              animationType="fadeUp"
              duration={0.6}
              delay={0.1 * index}
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {value.title}
              </h3>
              {/* Description */}
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {value.description}
              </p>
            </MotionSection>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}