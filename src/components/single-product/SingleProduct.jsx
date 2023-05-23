import { useContext } from "react";
import "../single-product/singleProduct.css";
import { CartContext } from "../../context/CartContext";

export const SingleProduct = ({ product }) => {
  const { deleteFromCart, changeItemQuantity } = useContext(CartContext);

  return (
    <div className="single-product">
      <div className="image">
        <img src={product.image} />
      </div>
      <div>
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
        <div className="quantity">
          <button
            onClick={() => changeItemQuantity(product._id, "decrement")}
            disabled={product.qty === 1}
          >
            -
          </button>
          <p>{product.qty}</p>
          <button onClick={() => changeItemQuantity(product._id, "increment")}>
            +
          </button>
        </div>
      </div>
      <div>
        <button onClick={() => deleteFromCart(product._id)}>delete</button>
      </div>
    </div>
  );
};
