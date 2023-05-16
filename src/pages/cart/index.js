import "../cart/cart.css";

import { Navbar } from "../../components/navbar/Navbar";
import SingleProduct from "../../components/single-product";

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
const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {cartDB.map((product) => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
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
            <div>400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
