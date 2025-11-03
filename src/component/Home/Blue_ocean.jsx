import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "../../component/Button";
import Cardimg1 from "../../assets/blue_lotus_logo.png";
import { Meteors } from "../../registry/magicui/meteors";
import { useTheme } from '../../contexts/ThemeContext';

export default function BlueOcean() {
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
          <section className="py-16 px-4 text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Discover the World of{" "}
              <span className="text-blue-400">Blue Ocean</span>
            </h1>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We are a family of brands inspired by the beauty and power of the sea.
              Explore our innovative products designed to enhance your life.
            </p>
          </section>

          {/* Product Cards Section */}
          <section className="px-4 pb-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* AQUA PURE Card */}
              <div className={`shine-border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-[5px] ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-orange-500/80' 
                  : 'bg-white border-gray-200 hover:shadow-orange-500/40'
              }`}>
                <div className="bg-orange-900 h-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                  <img
                    src={Cardimg1}
                    alt="Tidal Wave"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="p-8 text-center">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                    TIDAL WAVE
                  </h2>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Embrace the energy of the ocean. Tidal Wave creates
                    high-performance surfwear and gear for the adventurous spirit in
                    everyone.
                  </p>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={handleExploreMore}
                  >
                    Explore More
                  </Button>
                </div>
              </div>

              {/* TIDAL WAVE Card */}
              <div className={`shine-border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 p-[5px] ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:shadow-orange-500/80' 
                  : 'bg-white border-gray-200 hover:shadow-orange-500/40'
              }`}>
                <div className="bg-orange-900 h-100 flex items-center justify-center overflow-hidden rounded-t-lg">
                  <img
                    src={Cardimg1}
                    alt="Tidal Wave"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="p-8 text-center">
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                    TIDAL WAVE
                  </h2>
                  <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Embrace the energy of the ocean. Tidal Wave creates
                    high-performance surfwear and gear for the adventurous spirit in
                    everyone.
                  </p>
                   <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={handleExploreMore2}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}