import instra1 from "../assets/Images/instra1.jpg"
import instra2 from "../assets/Images/instra2.jpg"
import instra3 from "../assets/Images/instra3.jpg"
import instra4 from "../assets/Images/instra4.jpg"
import instra5 from "../assets/Images/instra5.jpg"
import instra6 from "../assets/Images/instra6.jpg"
import "../CSS/ImageGallery.css";

const images = [
 instra1, instra2,instra3,instra4,instra5,instra6
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
