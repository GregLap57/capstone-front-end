import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = ({ homeData }) => {
  return (
    <section className="hero">
      <div className="hero__div--left">
        <h1 className="hero__quote">{homeData.quote}</h1>
        <p className="hero__description">{homeData.description}</p>
        <Link to="/menu">
          <button className="hero__button">
            <span className="hero__button--menu">Menu</span>
          </button>
        </Link>
      </div>
      <div className="hero__image hero__div--right">
        <img className="hero__image--featured" src={homeData.image} alt="" />
      </div>
    </section>
  );
};

export default Hero;
