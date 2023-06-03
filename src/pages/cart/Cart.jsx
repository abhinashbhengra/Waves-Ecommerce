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

  const discount = 99;

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
        <p className="cart-main-heading">Cart</p>
        <div className="cart-product-details">
          {cartItems.length < 1 ? (
            <div className="empty-carty-descriptio">
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

          {cartItems.length > 0 && (
            <div className="checkout">
              <div className="p-flex">
                <div>
                  <p className="checkout-subtotal-heading">Subtotal</p>
                </div>
                <div>
                  <p className="checkout-subtotal-price">₹ {total}</p>
                </div>
              </div>
              <div className="p-flex">
                <div>
                  <p className="checkout-discount-heading">Discount</p>
                </div>
                <div>
                  <p className="checkout-discount-price">-99</p>
                </div>
              </div>
              <div className="p-flex">
                <div>
                  <p className="checkout-total-heading">Total</p>
                </div>
                <div>
                  <p className="checkout-total-price">₹ {total - discount}</p>
                </div>
              </div>
              <button className="checkout-button">
                <p>checkout</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
