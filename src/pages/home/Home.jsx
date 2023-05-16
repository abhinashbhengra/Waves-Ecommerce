import "../home/home.css";

import { Navbar } from "../../components/navbar/Navbar";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-container">Hero Section</div>
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
