import "../wishlist/wishlist.css";

import { Navbar } from "../../components/navbar/Navbar";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";

export const wishlistDB = [
  {
    id: 1,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
  {
    id: 2,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
];

export const WishList = () => {
  const { wishlistState } = useContext(WishlistContext);
  const navigate = useNavigate();
  const { wishlist } = wishlistState;

  const handleExploreClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <Navbar />
      <div className="wishlist-container">
        <div>
          {wishlist.length < 1 ? (
            <div>
              <p>Oops !! No products</p>
              <button onClick={handleExploreClick}>Explore</button>
            </div>
          ) : (
            <div className="wishlist-products">
              {wishlist.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
