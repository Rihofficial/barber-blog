import instra1 from "../assets/Images/instra1.jpg";
import instra2 from "../assets/Images/instra2.jpg";
import instra3 from "../assets/Images/instra3.jpg";
import instra4 from "../assets/Images/instra4.jpg";
import instra5 from "../assets/Images/instra5.jpg";
import instra6 from "../assets/Images/instra6.jpg";
import hero3 from "../assets/Images/hero3.jpg";
import "./Gallery.css";



const Gallery = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-title">
          <h1>Gallery</h1>
        </div>
        <div className="hero-img">
          <img src={hero3} alt="" />
        </div>
      </div>
      <div className="gallery-image-section">
        <div className="gallery-head-section">
          <div className="gallery-border"></div>
          <h1> Gallery</h1>
        </div>
        <div className="gallery">
          <img src={instra1} alt="" />
          <img src={instra2} alt="" />
          <img src={instra3} alt="" />
          <img src={instra4} alt="" />
          <img src={instra5} alt="" />
          <img src={instra6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
