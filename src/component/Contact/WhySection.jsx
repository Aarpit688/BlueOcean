import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

const WhySection = ({
  image,
  title,
  content,
  contentWidth = "",
  reverse = false,
  bgColor,
  marginY = "0",
  headColor,
  paraColor,
  maxWidth = "max-w-7xl",
  imgWidth = "w-full",
}) => {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection 
      className={`${bgColor || (isDarkMode ? "bg-gray-900" : "bg-gray-100")} ${marginY} ${maxWidth} mx-auto`}
      animationType="fadeUp"
      duration={0.8}
      delay={0.4}
    >
      <div
        className={`flex flex-col md:flex-row items-center ${contentWidth} ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Image */}
        <MotionSection
          className="md:w-1/2 w-full"
          animationType="fadeUp"
          duration={0.6}
          delay={0.1}
        >
          <img
            src={image}
            alt={title}
            className={`object-cover ${imgWidth} h-full`}
          />
        </MotionSection>

        {/* Right: Text */}
        <MotionSection
          className={`flex flex-col justify-center items-center rounded-xl p-10 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
          }`}
          animationType="fadeUp"
          duration={0.6}
          delay={0.2}
        >
          <h2
            className={`text-3xl md:text-5xl font-bold mb-8 md:leading-14 ${
              headColor || (isDarkMode ? "text-blue-400" : "text-blue-600")
            }`}
          >
            {title}
          </h2>
          {content.map((para, idx) => (
            <MotionSection
              key={idx}
              className={`mb-4 leading-relaxed ${
                paraColor || (isDarkMode ? "text-gray-300" : "text-gray-600")
              }`}
              animationType="fadeUp"
              duration={0.6}
              delay={0.1 * idx}
            >
              {para}
            </MotionSection>
          ))}
        </MotionSection>
      </div>
    </MotionSection>
  );
};

export default WhySection;