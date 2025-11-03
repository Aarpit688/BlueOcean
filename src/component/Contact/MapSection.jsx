import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

const MapSection = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`py-12 px-4 md:px-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex flex-col md:flex-row items-stretch max-w-7xl mx-auto">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[350px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19819.306315117383!2d-0.1351433!3d51.5143166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb1fbb2e91%3A0x36e9adf8f58df9f5!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1721499695942!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>

        {/* Address Section */}
        <div className={`w-full md:w-1/2 flex flex-col justify-center p-10 xl:pl-44 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
        }`}>
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 md:leading-14 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Our Office
          </h2>
          <p className={`text-xl mb-2 text-left ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            71-75 Shelton Street, <br />
            London, WC2H 9JQ, UK
          </p>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Phone: +44 20 7946 0958</p>
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Email: contact@company.com</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;