import "../home/home.css";

import { Navbar } from "../../components/navbar/Navbar";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
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
      <Categories />
      <div className="feature-container">
        <div className="feature-left">
          <div className="feature-one">section 01</div>
        </div>
        <div className="feature-right">
          <div className="feature-two">section 02</div>
          <div className="feature-two">section 03</div>
        </div>
      </div>
      <div className="launches-container">
        <div className="category">section 01</div>
        <div className="category">section 02</div>
        <div className="category">section 03</div>
        <div className="category">section 04</div>
        <div className="category">section 05</div>
      </div>
    </div>
  );
};

export default HomePage;
