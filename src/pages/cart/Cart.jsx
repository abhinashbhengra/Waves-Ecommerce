import "../cart/cart.css";

import { Navbar } from "../../components/navbar/Navbar";
import { SingleProduct } from "../../components/single-product/SingleProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export const cartDB = [
  {
    id: 1,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
  {
    id: 2,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/200",
  },
];
export const Cart = () => {
  const { cartState } = useContext(CartContext);
  const navigate = useNavigate();
  const { cart } = cartState;

  const total = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const handleExploreClick = () => {
    navigate("/products");
  };
  console.log(total);
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {cart.length < 1 ? (
            <div>
              <p>Oops! Empty cart.</p>
              <button onClick={handleExploreClick}>Explore</button>
            </div>
          ) : (
            <div>
              {cart.map((product) => (
                <SingleProduct product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
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
