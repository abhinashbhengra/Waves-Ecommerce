import { useContext } from "react";
import "../product-card/productCard.css";
import { WishlistContext } from "../../context/WishlistContext";

export const ProductCard = ({ product }) => {
  const { wishlistState, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div className="product-container">
      <div className="image">
        <img src={product.image} />
      </div>
      <div>
        <div className="heading">
          <h4>{product.title}</h4>
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <div className="price">
          <p>{product.price}</p>
        </div>
        <div className="rating">
          <p>{product.rating}</p>
        </div>
      </div>
      <div>
        <button>Add to cart</button>
        {wishlistState.wishlist.includes(product) ? (
          <button onClick={() => removeFromWishlist(product.id)}>
            Remove from wishlist
          </button>
        ) : (
          <button onClick={() => addToWishlist(product)}>
            Add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};
