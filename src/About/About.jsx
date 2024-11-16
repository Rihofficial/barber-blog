import AboutUs from "../components/AboutUs";
import hero1 from "../assets/Images/Hero.jpg";
import WhatWe from "../components/WhatWE";
import Section from "../components/Section";
import ImageGallery from "../components/ImageGallery";
import Testimonials from "../components/Testimonials";
import './About.css'

const About = () => {
  return (
    <div>
      <div>
        <div className="containers">
          <div className="hero1">
            <p>About Us</p>
          </div>
          <div className="image-rows">
            <img src={hero1} alt="" />
          </div>
        </div>
      </div>
      <AboutUs />
      <WhatWe />
      <Section />
      <ImageGallery />
      <Testimonials />
    </div>
  );
};

export default About;
