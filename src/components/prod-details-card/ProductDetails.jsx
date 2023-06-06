import "../prod-details-card/productDetails.css";

import { LineWave } from "react-loader-spinner";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { Navbar } from "../navbar/Navbar";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { wishlistItems, removeFromWishlist, addToWishlist } =
    useContext(WishlistContext);
  const { cartItems, addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const { productId } = useParams();

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
    toast.success("Added To Wislist", {
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
    addToWishlist(productId);
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

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data.product);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="singleProduct-loader-container">
          <LineWave
            height="100"
            width="100"
            color="#3b08fe"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div>
      ) : (
        <div className="productDetails-main-container">
          <div className="productDetails-container">
            <div className="productDetails-image">
              <img src={product.image} />
            </div>
            <div className="productDetails-section">
              <div className="productDetails-brand">
                <p>AUDIO-TECHNICA</p>
              </div>
              <div className="productDetails-heading">
                <p>{product.title}</p>
              </div>
              <div className="productDetails-description">
                <p>{product.description}</p>
              </div>
              <div className="break"></div>
              <div className="price-rating-container">
                <div className="productDetails-price">
                  <p>₹ {product.price} </p>
                </div>
                <div className="productDetails-rating">
                  <p>{product.rating} </p>
                  <span>
                    <img
                      src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                      alt="star"
                    />
                  </span>
                </div>
              </div>

              <div>
                {cartItems.find(({ _id }) => _id === product._id) ? (
                  <button
                    onClick={() => navigate("/cart")}
                    className="prod-cart-button"
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="prod-cart-button"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              <div>
                {wishlistItems.find(({ _id }) => _id === product._id) ? (
                  <button
                    onClick={() => handleRemoveFromWishlist(product._id)}
                    className="prod-wishlist-button"
                  >
                    <p>Remove from wishlist</p>
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="prod-wishlist-button"
                  >
                    Add to Wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
