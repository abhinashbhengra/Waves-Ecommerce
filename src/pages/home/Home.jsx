import "../home/home.css";

import { Navbar } from "../../components/navbar/Navbar";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import { BestSeller } from "./best-seller/BestSeller";
import { NewLaunch } from "./new-launch/NewLaunch";
import { HeroSection } from "./hero-section/HeroSection";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Navbar />
      <HeroSection />
      <Categories />
      <BestSeller />
      <NewLaunch />
    </div>
  );
};

export default HomePage;
