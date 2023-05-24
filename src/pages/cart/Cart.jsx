import "../cart/cart.css";

import { Navbar } from "../../components/navbar/Navbar";
import { SingleProduct } from "../../components/single-product/SingleProduct";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
  const handleExploreClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {cartItems.length < 1 ? (
            <div>
              <p>Oops! Empty cart.</p>
              <button onClick={handleExploreClick}>Explore</button>
            </div>
          ) : (
            <div>
              {cartItems.map((product) => (
                <SingleProduct product={product} key={product._id} />
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="checkout">
            <div>
              <h4>Price Details</h4>
            </div>
            <div className="p-flex">
              <div>Price</div>
              <div>499</div>
            </div>
            <div className="p-flex">
              <div>Discount</div>
              <div>-99</div>
            </div>
            <div className="p-flex">
              <div>
                <b>Total</b>
              </div>
              <div>{total}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
