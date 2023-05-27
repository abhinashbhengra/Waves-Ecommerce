import { useContext } from "react";
import "../single-product/singleProduct.css";
import { CartContext } from "../../context/CartContext";

export const SingleProduct = ({ product }) => {
  const { deleteFromCart, changeItemQuantity } = useContext(CartContext);

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
      </div>
      <div>
        <button onClick={() => deleteFromCart(product._id)}>delete</button>
        <button onClick={() => deleteFromCart(product._id)}>whislist</button>
      </div>
    </div>
  );
};
