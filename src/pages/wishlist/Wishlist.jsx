import "../wishlist/wishlist.css";

import { Navbar } from "../../components/navbar/Navbar";
import { ProductCard } from "../../components/product-card/ProductCard";
import { useContext, useEffect } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { wishlistItems, getWishlistItem } = useContext(WishlistContext);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    getWishlistItem();
  }, []);
  console.log(wishlistItems);
  return (
    <div>
      <Navbar />
      <div className="wishlist-container">
        <div>
          {wishlistItems.length < 1 ? (
            <div>
              <p>Oops !! No products</p>
              <button onClick={handleExploreClick}>Explore</button>
            </div>
          ) : (
            <div className="wishlist-products">
              {wishlistItems.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
