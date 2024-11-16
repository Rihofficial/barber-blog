import hero from "../assets/Images/h1_hero1.jpg";
import ContactForm from "../components/ContactForm";
import EmbeddedMap from "../components/EmbeddedMap";

const Contact = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-title">
          <p>Contact Us</p>
        </div>
        <div className="hero-img">
          <img src={hero} alt="Hero Image" />
        </div>
      </div>
       <EmbeddedMap />
        <ContactForm />
    
    </div>
  );
};

export default Contact;
