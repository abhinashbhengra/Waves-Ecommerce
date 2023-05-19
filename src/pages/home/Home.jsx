import "../home/home.css";

import { Navbar } from "../../components/navbar/Navbar";
import Categories from "./Categories";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/product-card/ProductCard";
import { BestSellerCard } from "../../components/bestSeller_Card/BestSellerCard";
import { BestSeller } from "./best-seller/BestSeller";

const newLaunchDB = [
  {
    id: 1,
    title: "Audio-technica - ath - m50x",
    description: "Closed-Back Studio Headphone",
    price: 11999,
    rating: 4.5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "headphone",
    _isBestSeller: true,
    _isNewLaunch: true,
  },
  {
    id: 2,
    title: "Ibanez 7 String",
    description: "description",
    price: 40000,
    rating: 3,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/shure/Shure05.png?updatedAt=1682678150987",
    categoryName: "headphone",
    _isNewLaunch: true,
  },
  {
    id: 3,
    title: "Cort 6 String",
    description: "description",
    price: 30000,
    rating: 3.5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/sennheiser/Sennheiser05.png?updatedAt=1682678162340",
    categoryName: "in-ears",
  },
  {
    id: 4,
    title: "Cort 7 String",
    description: "description",
    price: 25000,
    rating: 4.2,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/kz_acoustics/KZAcoustics07.png?updatedAt=1682678143506",
    categoryName: "in-ears",
    rating: 4,
  },
];

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
      <BestSeller />
      <div className="new_launch-container">
        <span className="new_launch-heading">
          <p>New Launches</p>
        </span>
        <div className="new_launch-products">
          {newLaunchDB.map((product) => (
            <div key={product.id}>
              <BestSellerCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
