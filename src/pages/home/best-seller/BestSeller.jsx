import { useState } from "react";
import "../best-seller/bestSeller.css";
import { productDB } from "../../../data/dummyDB";

export const BestSeller = () => {
  //   const [products, setProducts] = useState([]); // use for mockbee
  const bestproducts = productDB.filter((product) => product._isBestSeller);
  const displayBestProducts = [bestproducts[0], bestproducts[1]];

  return (
    <>
      <div className="best-main">
        <span className="best-heading">
          <p>Best Sellers</p>
        </span>
        <div className="best-container">
          {displayBestProducts.map((product) => (
            <div className="best_seller-product" key={product._id}>
              <div>
                <img
                  className="best_seller-image"
                  src={product.image}
                  alt="best-seller"
                />
              </div>
              <div className="best_seller-text">
                <p>{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
