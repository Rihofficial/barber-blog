import hero from "../assets/Images/h1_hero1.jpg";
import ContactForm from "../components/ContactForm";
import EmbeddedMap from "../components/EmbeddedMap";
import { useEffect, useState } from "react";

const Contact = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleMenuChange = () => {
  //   setMenu(menu);
  //   if (isMobile) {
  //     setMenuOpen(false);
  //   }
  // };
  return (
    <div>
      <div className="hero-section">
        <div className="hero-title">
          <h1>Contact Us</h1>
        </div>
        <div className="hero-img">
          <img src={hero} alt="Hero Image" />
        </div>
      </div>
      {!isMobile && <EmbeddedMap />}
      <ContactForm />
    </div>
  );
};

export default Contact;
