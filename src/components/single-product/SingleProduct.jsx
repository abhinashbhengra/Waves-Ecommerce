import { useContext } from "react";
import "../single-product/singleProduct.css";
import { CartContext } from "../../context/CartContext";

export const SingleProduct = ({ product }) => {
  const { removeFromCart, decreaseQuantity, increaseQuantity } =
    useContext(CartContext);
  // console.log(product);

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
            onClick={() => decreaseQuantity(product)}
            disabled={product.quantity === 1}
          >
            -
          </button>
          <p>{product.quantity}</p>
          <button onClick={() => increaseQuantity(product)}>+</button>
        </div>
      </div>
      <div>
        <button onClick={() => removeFromCart(product.id)}>delete</button>
      </div>
    </div>
  );
};
