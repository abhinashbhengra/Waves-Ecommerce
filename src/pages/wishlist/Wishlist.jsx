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
        <p className="wishlist-main-heading">Wishlist</p>
        <div>
          {wishlistItems.length < 1 ? (
            <div className="empty-cart">
              <p className="">Your wishlist is empty</p>
              <button
                onClick={handleExploreClick}
                className="continue-shopping-button"
              >
                <p>Continue Shopping</p>
              </button>
            </div>
          ) : (
            <div className="wishlist-products">
              <div className="wishlist-products">
                {wishlistItems.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
