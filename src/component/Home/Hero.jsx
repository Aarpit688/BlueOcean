import React, { useRef } from "react";
import Slider from "react-slick";

// Import your local images (updated paths to match available files)
import Fur1 from "../../assets/fur1.jpg"
import Fur2 from "../../assets/fur2.jpg"
import Fur3 from "../../assets/fur3.jpg"
import Fur4 from "../../assets/fur4.jpg"

// Import slick-carousel css files for default styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-container" style={{ width: "100%", padding: "0 20px", position: "relative" }}>
      <button 
        onClick={goToPrev} 
        style={{ 
          position: "absolute", 
          top: "50%", 
          left: "0", 
          transform: "translateY(-50%)", 
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          color: "white", 
          border: "none", 
          borderRadius: "50%", 
          width: "40px", 
          height: "40px", 
          zIndex: 1, 
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        &#10094;
      </button>
      
      <Slider ref={sliderRef} {...settings}>
        <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={Fur1} alt="Furniture 1" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={Fur2} alt="Furniture 2" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={Fur3} alt="Furniture 3" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={Fur4} alt="Furniture 4" style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
        </div>
      </Slider>
      
      <button 
        onClick={goToNext} 
        style={{ 
          position: "absolute", 
          top: "50%", 
          right: "0", 
          transform: "translateY(-50%)", 
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
          color: "white", 
          border: "none", 
          borderRadius: "50%", 
          width: "40px", 
          height: "40px", 
          zIndex: 1, 
          cursor: "pointer",
          fontSize: "18px"
        }}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Hero;