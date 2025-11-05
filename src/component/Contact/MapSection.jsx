import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

const MapSection = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection 
      className={`py-12 px-4 md:px-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      animationType="fadeUp"
      duration={0.8}
      delay={0.3}
    >
      <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto">
        {/* Map Section */}
        <MotionSection
          className="w-full md:w-1/2 h-[350px]"
          animationType="fadeUp"
          duration={0.6}
          delay={0.1}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.3786335691172!2d77.354739102261!3d28.387311965613236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdda36bdf15af%3A0x6533d319787c348d!2sAirtel%20Store%20-%20Sec%2079%20Faridabad!5e0!3m2!1sen!2sin!4v1762334827570!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </MotionSection>

        {/* Address Section */}
        <MotionSection
          className={`w-full md:w-1/2 flex flex-col justify-center p-10 xl:pl-44 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
          }`}
          animationType="fadeUp"
          duration={0.6}
          delay={0.2}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:leading-14 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Our Office
          </h2>
          <p className={`text-xl mb-2 text-left ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            H.No.970, Escorts Nagar, Sector14, <br />
            Near-Manav Rachana School <br/>
            Faridabad-121005, Haryana, India
          </p>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Phone: +91 9310040234</p>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Email: contact@wonderplast.in</p>
        </MotionSection>
      </div>
    </MotionSection>
  );
};

export default MapSection;
