import React from "react";
import Banner from "../component/Contact/Banner";
import ContactOptions from "../component/Contact/ContactOptions";
import MapSection from "../component/Contact/MapSection";
import WhySection from "../component/Contact/WhySection";
import Img1 from "../assets/blue_lotus_logo.png";
import { useTheme } from '../contexts/ThemeContext';
import MotionSection from "../MotionSection.jsx";

const ContactUs = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <MotionSection 
      className={isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}
      animationType="fadeUp"
      duration={0.8}
    >
      <Banner
        overlayBg={isDarkMode ? "bg-black/60" : "bg-black/30"}
        backgroundImage={Img1}
        title="Contact Us"
        description="Our team are here to support 24/7 via Phone, Email, or WhatsApp."
      />
      <ContactOptions />
      <MapSection />
      <WhySection
        reverse={true}
        image={Img1}
        title="How can we help you?"
        bgColor={isDarkMode ? "bg-gray-900" : "bg-gray-100"}
        marginY="my-5"
        content={[
          "At ElliteFX, our traders and partners always come first. Our 24/7 multilingual Customer Support is here to make sure that no matter where you are or what language you speak, we can provide you with the answers and assistance you're looking for.",
          "To stay up to date on our products, news and events you can also connect with us on Facebook, Twitter, LinkedIn and Instagram.",
          "Whether you are an experienced trader or just starting out, we've built a support system that can give you the help you require when you require it.",
        ]}
      />
    </MotionSection>
  );
};

export default ContactUs;