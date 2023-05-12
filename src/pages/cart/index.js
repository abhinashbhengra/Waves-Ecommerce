import React from "react";
import Navbar from "../../components/navbar";
import SingleProduct from "../../components/single-product";

export const cartDB = [
  {
    id: 1,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/300",
  },
  {
    id: 2,
    title: "Heading",
    description: "description",
    price: 4000,
    rating: 4.5,
    image: "https://dummyimage.com/300",
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
        <div>checkout section</div>
      </div>
    </div>
  );
};

export default Cart;
