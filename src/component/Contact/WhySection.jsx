import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

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
    <section className={`${bgColor || (isDarkMode ? "bg-gray-900" : "bg-gray-100")} ${marginY} ${maxWidth} mx-auto`}>
      <div
        className={`flex flex-col md:flex-row items-center ${contentWidth} ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={image}
            alt={title}
            className={`object-cover ${imgWidth} h-full`}
          />
        </div>

        {/* Right: Text */}
        <div className={`flex flex-col justify-center items-center rounded-xl p-10 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
        }`}>
          <h2
            className={`text-3xl md:text-5xl font-bold mb-8 md:leading-14 ${
              headColor || (isDarkMode ? "text-blue-400" : "text-blue-600")
            }`}
          >
            {title}
          </h2>
          {content.map((para, idx) => (
            <p key={idx} className={`mb-4 leading-relaxed ${
              paraColor || (isDarkMode ? "text-gray-300" : "text-gray-600")
            }`}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;