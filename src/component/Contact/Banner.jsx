import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

const Banner = ({
  backgroundImage,
  title,
  description,
  overlayBg,
}) => {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection
      className="relative h-[90vh] md:h-[86vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      animationType="fadeUp"
      duration={0.8}
    >
      <div className="h-full max-w-7xl mx-auto flex items-center justify-start px-10">
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayBg || (isDarkMode ? "bg-black/70" : "bg-black/50")}`}></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>{title}</h1>
          <p className={`text-lg md:text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-200'}`}>{description}</p>
        </div>
      </div>{" "}
    </MotionSection>
  );
};

export default Banner;