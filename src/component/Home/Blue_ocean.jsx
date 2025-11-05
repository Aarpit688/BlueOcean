import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../component/Button";
import WonderplastLogo from "../../assets/blue_lotus_logo.png"; // Replace with actual Wonderplast logo
import BangleBoutiqueLogo from "../../assets/blue_lotus_logo.png"; // Replace with actual Bangle Boutique logo
import { Meteors } from "../../registry/magicui/meteors";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

export default function Blue_ocean() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/brand1');
  };
  const handleExploreMore2 = () => {
    navigate('/brand2');
  };

  return (
    <div>
      <style>{`
        @keyframes shine-pulse {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .shine-border {
          position: relative;
          border-radius: 0.5rem;
          z-index: 0;
          overflow: hidden;
        }
        .shine-border::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          padding: 2px;
          background: conic-gradient(
            #A07CFE,
            #FE8FB5,
            #FFBE7B,
            #A07CFE
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          animation: shine-pulse 14s linear infinite;
        }
      `}</style>

      <main className={`relative min-h-screen overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Meteor animation background */}
        <Meteors number={30} className="absolute inset-0 z-0" />

        {/* Content container with higher z-index */}
        <div className="relative z-10">
          {/* Header Section */}
          <MotionSection 
            className="py-16 px-4 text-center"
            animationType="fadeUp"
            duration={0.8}
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Discover the World of <span className="text-blue-400">Blue Ocean</span>
            </h1>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We are a family of brands, each dedicated to providing unique products and exceptional quality. Explore our diverse companies, each a leader in their field.
            </p>
          </MotionSection>

          {/* Product Cards Section */}
          <MotionSection 
            className="px-4 pb-20"
            animationType="fadeUp"
            duration={0.8}
            delay={0.3}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Wonderplast Card */}
              <MotionSection
                className={`shine-border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-[5px] ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-blue-500/80' 
                    : 'bg-white border-gray-200 hover:shadow-blue-500/40'
                }`}
                animationType="fadeUp"
                duration={0.6}
                delay={0.2}
              >
                <div className="bg-blue-900 h-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                  <img
                    src={WonderplastLogo}
                    alt="Wonderplast"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="p-8 text-center">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Wonderplast
                  </h2>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    A leading name in high-quality PVC pipes, water tanks, and fittings. Discover durable and innovative solutions for all your water management needs.
                  </p>
                  <Button 
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={handleExploreMore}
                  >
                    Explore More
                  </Button>
                </div>
              </MotionSection>

              {/* Bangle Boutique Card */}
              <MotionSection
                className={`shine-border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-[5px] ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-pink-500/80' 
                    : 'bg-white border-gray-200 hover:shadow-pink-500/40'
                }`}
                animationType="fadeUp"
                duration={0.6}
                delay={0.4}
              >
                <div className="bg-pink-900 h-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                  <img
                    src={BangleBoutiqueLogo}
                    alt="Bangle Boutique"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="p-8 text-center">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
                    Bangle Boutique
                  </h2>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    An exclusive online destination for beautiful bangles. Explore a handpicked collection of bridal chura, kadas, and stylish everyday designs.
                  </p>
                  <Button 
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={handleExploreMore2}
                  >
                    Explore More
                  </Button>
                </div>
              </MotionSection>
            </div>
          </MotionSection>
        </div>
      </main>
    </div>
  );
}
