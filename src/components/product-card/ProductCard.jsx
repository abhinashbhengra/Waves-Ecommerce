import { useContext, useState } from "react";
import "../product-card/productCard.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ProductCard = ({ product }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cartItems, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added To Cart", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success("Added To Wishlist", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    toast.error("Removed From Wishlist", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const showProductDetails = () => {
    console.log("product details");
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="productCard-container">
      <div className="productCard-wishlist">
        {wishlistItems.find(({ _id }) => _id === product._id) ? (
          <div onClick={() => handleRemoveFromWishlist(product._id)}>
            <img src="./images/filledheart.svg" alt="add_to_whislist" />
          </div>
        ) : (
          <div onClick={() => handleAddToWishlist(product)}>
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
            ₹ {product.price}{" "}
            <span className="prev-price">₹ {product.prevPrice}</span>
          </p>
        </div>
        <div className="productCard-rating">
          <p>
            {product.rating}{" "}
            <span>
              <img
                src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                alt="star"
              />
            </span>
          </p>
        </div>
      </div>
      <div>
        {cartItems.find(({ _id }) => _id === product._id) ? (
          <button onClick={() => navigate("/cart")} className="cart-button">
            Go to Cart
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(product)}
            className="cart-button"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
