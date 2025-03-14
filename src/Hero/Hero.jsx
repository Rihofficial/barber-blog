import "./Hero.css";
import hero1 from "../assets/Images/h1_hero1.jpg";
import sicssors from "../assets/Images/Icon/scissors.svg";
import Button from "../components/Button";
const Hero = () => {
  return (
    <>
      <header>
        <div className="hero-sections">
          <div className="hero-titles">
            <h1>
              <span>
                <img src={sicssors} alt="" />
              </span>
              WE'RE THE
              <br />
              LAST OF
              <br />
              BREED.
            </h1>
            <p>Achieve your Dream Style</p>
            <div className="btn-jsx">
              <Button />
            </div>
          </div>
          <div className="hero-imgs">
            <img src={hero1} alt="Hero Image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
