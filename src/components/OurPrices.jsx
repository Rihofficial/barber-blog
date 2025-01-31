import "../CSS/OurPrices.css";
import barber1 from "../assets/Images/barber1.jpg";
import barber2 from "../assets/Images/barber2.jpg";
import barber3 from "../assets/Images/barber3.jpg";
import barber4 from "../assets/Images/barber4.jpg";
import barber5 from "../assets/Images/barber5.jpg";
import barber6 from "../assets/Images/barber6.jpg";
const OurPrices = () => {
  return (
    <div className="container">
      <div className="image-row">
        <img src={barber1} alt="Barber 1" className="image" />
        <img src={barber2} alt="Barber 2" className="image" />
        <img src={barber3} alt="Barber 3" className="image" />
        <img src={barber4} alt="Barber 4" className="image" />
        <img src={barber5} alt="Barber 5" className="image" />
        <img src={barber6} alt="Barber 6" className="image" />
      </div>
      <div className="pricing-section">
        <div className="pricing-heading">
          <div className="heading-background"></div>
          <h2>OUR TOP PRICES</h2>
        </div>
        <ul className="pricing-list">
          {[
            { service: "Special Beard Treatment", price: "$40" },
            { service: "Special Beard Treatment", price: "$40" },
            { service: "Color your Beard", price: "$40" },
            { service: "Wax your Beard", price: "$40" },
            { service: "Move your Beard", price: "$40" },
          ].map((item, index) => (
            <li key={index} className="pricing-item">
              <span className="service">{item.service}</span>
              <p className="from">From</p>
              <span className="price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurPrices;
