import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Image1 from "../../assets/Person1.jpg";
import Image2 from "../../assets/Person2.jpg";
import Image3 from "../../assets/Person3.jpg";
import Image4 from "../../assets/Person4.jpg";
import { useTheme } from '../../contexts/ThemeContext';

export default function Team_section({ members }) {
  const { isDarkMode } = useTheme();
  const defaultMembers = [
    {
      id: "1",
      name: "Jane Doe",
      title: "CEO & Founder",
      image: Image1,
      linkedin: "#",
      twitter: "#",
    },
    {
      id: "2",
      name: "John Smith",
      title: "Chief Technology Officer",
      image: Image2,
      linkedin: "#",
      twitter: "#",
    },
    {
      id: "3",
      name: "Emily White",
      title: "Head of Design",
      image: Image3,
      linkedin: "#",
      twitter: "#",
    },
    {
      id: "4",
      name: "Michael Brown",
      title: "VP of Marketing",
      image: Image4,
      linkedin: "#",
      twitter: "#",
    },
  ];

  const teamMembers = members || defaultMembers;

  return (
    <section className={`relative w-full py-16 md:py-24 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Slanted clipped background shape with header text */}
      <div
        className={`absolute top-0 left-0 w-full h-[340px] ${isDarkMode ? 'bg-white' : 'bg-gray-200'}`}
        style={{
          zIndex: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0% 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full pt-12">
          <h2 className={`mb-4 text-4xl font-bold md:text-5xl z-10 ${isDarkMode ? 'text-black' : 'text-gray-900'}`}>
            Meet Our Leadership
          </h2>
          <p className={`text-lg z-10 ${isDarkMode ? 'text-gray-800' : 'text-gray-600'}`}>
            The driving force behind our success.
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mt-[220px]">
        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`flex flex-col items-center rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              {/* Profile Image */}
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Name */}
              <h3 className={`mb-2 text-center text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h3>
              {/* Title */}
              <p className={`mb-6 text-center font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {member.title}
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    aria-label={`${member.name} Twitter`}
                    className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-[340px] ${isDarkMode ? 'bg-white' : 'bg-gray-200'}`}
        style={{
          zIndex: 1,
          clipPath:
            "polygon(0% 10%, 10% 0%, 100% 100%, -10% 40%)", // Diagonal bottom cut, adjust for desired effect
        }}
      />
    </section>
  );
}