import { useContext } from "react";
import "../single-product/singleProduct.css";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

export const SingleProduct = ({ product }) => {
  const { deleteFromCart, changeItemQuantity } = useContext(CartContext);
  const { wishlistItems, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div className="single-product">
      <div className="single-product-img-desc">
        <img src={product.image} className="single-product-img" />
      </div>
      <div>
        <div className="single-product-desc">
          <div className="single-product-heading">
            <h4>{product.title}</h4>
          </div>
          <div className="single-product-description">
            <p>{product.description}</p>
          </div>
          <div className="single-product-price">
            <p>₹ {product.price}</p>
          </div>
        </div>
      </div>
      <div className="single-product-quantity">
        <p className="quantity-heading">Quantity</p>
        <div className="quantity-button-container">
          <button
            className="quantity-button"
            onClick={() => changeItemQuantity(product._id, "decrement")}
            disabled={product.qty === 1}
          >
            -
          </button>
          <p className="quantity-detail">{product.qty}</p>
          <button
            className="quantity-button"
            onClick={() => changeItemQuantity(product._id, "increment")}
          >
            +
          </button>
        </div>
      </div>
      <div className="delete-wishlist-button">
        <div>
          <img
            className="single-product-delete-icon"
            src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/delete-svgrepo-com.svg?updatedAt=1685203851493"
            alt="delete_button"
            onClick={() => deleteFromCart(product._id)}
          />
        </div>

        <div className="singlecard-wishlist">
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
      </div>
    </div>
  );
};
