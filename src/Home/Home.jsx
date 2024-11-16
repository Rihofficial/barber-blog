import AboutUs from "../components/AboutUs";
import ImageGallery from "../components/ImageGallery";
import OurPrices from "../components/OurPrices";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import WhatWe from "../components/WhatWE";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurPrices />
      <WhatWe />
      <Section />
      <ImageGallery />
      <Testimonials />
    </div>
  );
};

export default Home;
