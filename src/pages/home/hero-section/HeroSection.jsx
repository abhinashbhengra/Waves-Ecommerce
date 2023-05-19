import { useNavigate } from "react-router-dom";
import "../hero-section/herosection.css";
export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-container">
        <div className="hero-cta">
          <span className="hero-heading">
            <p>Flagship Audiophile</p>
            <p>Headphones</p>
          </span>
          <span className="hero-description">
            <p>Explore the finest full-sized headphones for audiophiles</p>
          </span>
          <button className="hero-button" onClick={() => navigate("/products")}>
            EXPLORE{" "}
          </button>
        </div>
        <img
          className="hero-image"
          src="/images/hero2.png"
          alt="hero-section-image"
        />
      </div>
    </>
  );
};
