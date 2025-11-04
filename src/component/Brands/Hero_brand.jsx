"use client";

import React from "react";
import Button from "../Button";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

export default function Hero_brand() {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      animationType="fadeUp"
      duration={0.8}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NhW0TD9ljdbypZR9YHGZrYJWIr0xJq.png)",
        }}
      ></div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/90' : 'bg-black/50'}`}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance ${isDarkMode ? 'text-white' : 'text-gray-100'}`}>
          Mindful Living, Beautifully Designed.
        </h1>

        <p className={`text-lg sm:text-xl mb-8 max-w-2xl text-balance ${isDarkMode ? 'text-gray-200' : 'text-gray-300'}`}>
          Discover sustainable home goods that bring tranquility and style to your personal space.
        </p>

        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-base"
          onClick={() => console.log("Learn More clicked")}
        >
          LEARN MORE
        </Button>
      </div>
    </MotionSection>
  );
}