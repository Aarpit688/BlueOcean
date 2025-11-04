import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';
import MotionSection from "../../MotionSection.jsx";

const ContactOptions = () => {
  const { isDarkMode } = useTheme();
  
  const contacts = [
    {
      icon: <MdEmail className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: "Email us",
      desc: "Email our support team for general queries or platform assistance.",
      action: (
        <a
          href="mailto:support@primeforexmarket.com"
          className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
        >
          support@primeforexmarket.com
        </a>
      ),
    },
    {
      icon: <MdCall className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: "Call us",
      desc: "Call us and speak to a member of our team. We are always happy to help.",
      action: (
        <a
          href="tel:+6495585142"
          className={`font-semibold hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
        >
          +64 9 558 5142
        </a>
      ),
    },
    {
      icon: <FaWhatsapp className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />,
      title: "WhatsApp",
      desc: "Get in touch with our team members over WhatsApp.",
      action: (
        <a
          href="https://wa.me/6495585142"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold px-4 py-1 rounded transition-all ${
            isDarkMode 
              ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900' 
              : 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
          }`}
        >
          WhatsApp
        </a>
      ),
    },
  ];

  return (
    <MotionSection 
      className={`py-16 px-6 md:px-20 text-center max-w-7xl mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      animationType="fadeUp"
      duration={0.8}
      delay={0.2}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {contacts.map((contact, index) => (
          <MotionSection
            key={index}
            className="flex flex-col items-center"
            animationType="fadeUp"
            duration={0.6}
            delay={0.1 * index}
          >
            <div className="flex justify-center mb-4">
              <div className={`p-4 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>{contact.icon}</div>
            </div>
            <h3 className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{contact.title}</h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{contact.desc}</p>
            <div>{contact.action}</div>
          </MotionSection>
        ))}
      </div>
    </MotionSection>
  );
};

export default ContactOptions;