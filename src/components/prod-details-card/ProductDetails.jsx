import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { Navbar } from "../navbar/Navbar";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { wishlistItems, removeFromWishlist, addToWishlist } =
    useContext(WishlistContext);
  const { cartItems, addToCart } = useContext(CartContext);

  const { productId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data.product);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      {product && product.image && (
        <div className="productCard-container">
          <div className="productCard-wishlist">
            {wishlistItems.find(({ _id }) => _id === product._id) ? (
              <div onClick={() => removeFromWishlist(product._id)}>
                <img src="/images/filledheart.svg" alt="add_to_whislist" />
              </div>
            ) : (
              <div onClick={() => addToWishlist(product)}>
                <img src="/images/heart.svg" alt="add_to_whislist" />
              </div>
            )}
          </div>
          <div className="productCard-image">
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
              <button
                onClick={() => addToCart(product)}
                className="cart-button"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
