import "../new-launch/newLaunch.css";

import { BestSellerCard } from "../../../components/bestSeller_Card/BestSellerCard";
import { useState } from "react";

import { productDB } from "../../../data/dummyDB";

export const NewLaunch = () => {
  // const [products, setProducts] = useState([])  // use for mockbee
  const newLaunch = productDB.filter((product) => product._isNewLaunch);
  const displayNewLaunch = [
    newLaunch[0],
    newLaunch[1],
    newLaunch[2],
    newLaunch[3],
  ];

  return (
    <>
      <div className="new_launch-container">
        <span className="new_launch-heading">
          <p>New Launches</p>
        </span>
        <div className="new_launch-products">
          {displayNewLaunch.map((product) => (
            <div key={product.id}>
              <BestSellerCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
