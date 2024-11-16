import React from "react";
import "../CSS/ImageGallery.css";

const images = [
  "./assets/instra-1-jpg.svg",
  "./assets/instra-2-jpg.svg",
  "./assets/instra-3-jpg.svg",
  "./assets/instra-4-jpg.svg",
  "./assets/instra-2-jpg-2.svg",
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
