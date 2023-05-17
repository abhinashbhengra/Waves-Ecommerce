import { useContext } from "react";
import "../bestSeller_Card/bestSeller.css";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const BestSellerCard = ({ product }) => {
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const { cartState, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="sellerCard-container">
      <div className="sellerCard-wishlist">
        {wishlistState.wishlist.includes(product) ? (
          <div onClick={() => removeFromWishlist(product.id)}>
            <img src="./images/filledheart.svg" alt="add_to_whislist" />
          </div>
        ) : (
          <div onClick={() => addToWishlist(product)}>
            <img src="./images/heart.svg" alt="add_to_whislist" />
          </div>
        )}
      </div>
      <div className="productCard-image">
        <img src={product.image} />
      </div>
      <div>
        <div className="sellerCard-heading">
          <p>{product.title}</p>
        </div>
        <div className="sellerCard-description">
          <p>{product.description}</p>
        </div>
        <div className="sellerCard-price">
          <p>
            ₹ {product.price} <span className="prev-price">₹ 12399</span>
          </p>
        </div>
        <div className="sellerCard-rating">
          <p>{product.rating}</p>
        </div>
      </div>
    </div>
  );
};
