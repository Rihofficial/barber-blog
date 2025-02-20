import "../CSS/AboutUs.css";
import about1 from "../assets/Images/about1.jpg";
import { FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="section">
      <div className="left-column">
        <p>
          <ListSection />
        </p>
      </div>
      <div className="center-image">
        <img src={about1} alt="About" />
      </div>
      <div className="right-column">
        <h2 className="header">
          <span className="header-background"></span>
          ABOUT OUR STORY
        </h2>
        <p className="description">
          There are many variations of passages of Lorem Ipsum available be the
          majority have suffered alteration in some form, by injected humour or
          randomised words.
        </p>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );

  function ListSection() {
    const items = [
      "Be the majority have suffered alteration in some form, by injected humour.",
      "Psum available be the majority have suffered alteration in some form, by injected humour.",
      "Available be the majority have suffered alteration in some form, by injected humour.",
      "Humour available be the majority have suffered alteration in some form, by injected.",
    ];

    return (
      <ul className="list-section">
        {items.map((item, index) => (
          <li key={index}>
            <span className="bullet">
              <FaCheck />
            </span>
            {item}
          </li>
        ))}
      </ul>
    );
  }
};

export default AboutUs;
