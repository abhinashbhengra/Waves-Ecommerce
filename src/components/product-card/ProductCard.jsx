import { useContext, useState } from "react";
import "../product-card/productCard.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cartItems, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const showProductDetails = () => {
    console.log("product details");
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="productCard-container">
      <div className="productCard-wishlist">
        {wishlistItems.find(({ _id }) => _id === product._id) ? (
          <div onClick={() => removeFromWishlist(product._id)}>
            <img src="./images/filledheart.svg" alt="add_to_whislist" />
          </div>
        ) : (
          <div onClick={() => addToWishlist(product)}>
            <img src="./images/heart.svg" alt="add_to_whislist" />
          </div>
        )}
      </div>
      <div className="productCard-image" onClick={showProductDetails}>
        <img src={product.image} />
      </div>
      <div>
        <div className="productCard-heading">
          <p>{product.title}</p>
        </div>
        <div className="productCard-description">
          <p>{product.description}</p>
        </div>
        <div className="productCard-price">
          <p>
            ₹ {product.price} <span className="prev-price">₹ 12399</span>
          </p>
        </div>
        <div className="productCard-rating">
          <p>{product.rating}</p>
        </div>
      </div>
      <div>
        {cartItems.find(({ _id }) => _id === product._id) ? (
          <button onClick={() => navigate("/cart")} className="cart-button">
            Go to Cart
          </button>
        ) : (
          <button onClick={() => addToCart(product)} className="cart-button">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
