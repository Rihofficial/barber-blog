import ImageGallery from "../components/ImageGallery";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import WhatWe from "../components/WhatWE";
import "./Services.css";
import hero4 from "../assets/Images/h1_hero1.jpg";

const Services = () => {
  return (
    <div>
      <div className="services-hero-section">
        <div className="services-hero-title">
          <p>Services</p>
        </div>
        <div className="services-hero-img">
          <img src={hero4} alt="Hero Image" />
        </div>
      </div>
      <WhatWe />
      <Section />
      <ImageGallery />
      <Testimonials />
    </div>
  );
};

export default Services;
