import { FaHome } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import "../CSS/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-main-container">
      <h2 className=" header-text">Get in Touch</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <textarea
            name="message"
            placeholder="Enter Message"
            className="contact-form-textarea"
          />
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-form-input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject"
            className="contact-form-input-full"
          />
          <button type="submit" className="contact-form-button">
            SEND
          </button>
        </form>
        <div className="contact-info">
          <div className="contact-item">
            <FaHome className="icon" />
            <div>
              <h6 className="h6">Buttonwood, California.</h6>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMobileAlt className="icon" />
            <div>
              <h6 className="h6">+1 253 565 2365</h6>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="contact-item">
            <FaRegEnvelope className="icon" />
            <div>
              <h6 className="h6">support@colorlib.com</h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
