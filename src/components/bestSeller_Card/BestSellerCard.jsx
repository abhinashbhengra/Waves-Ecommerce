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
      <div className="productCard-image">
        <img src={product?.image} />
      </div>
      <div>
        <div className="sellerCard-heading">
          <p>{product?.title}</p>
        </div>
        <div className="sellerCard-description">
          <p>{product?.description}</p>
        </div>
        <div className="sellerCard-price">
          <p>
            ₹ {product?.price} <span className="prev-price">₹ 12399</span>
          </p>
        </div>
        <div className="sellerCard-rating">
          <p className="rating-text">{product?.rating}</p>
          <img
            src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
            alt="star"
            className="rating-logo"
          />
        </div>
      </div>
    </div>
  );
};
