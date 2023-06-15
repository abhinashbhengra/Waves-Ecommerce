import "../new-launch/newLaunch.css";

import { BestSellerCard } from "../../../components/bestSeller_Card/BestSellerCard";
import { useState, useEffect } from "react";
import { LineWave } from "react-loader-spinner";

export const NewLaunch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const newLaunch = products.filter((product) => product._isNewLaunch);
  const displayNewLaunch = [
    newLaunch[0],
    newLaunch[1],
    newLaunch[2],
    newLaunch[3],
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="new_launch-container">
        <span className="new_launch-heading">
          <p>New Launches</p>
        </span>
        {loading ? (
          <div className="loader-container">
            <LineWave
              height="100"
              width="100"
              color="#3b08fe"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          </div>
        ) : (
          <div className="new_launch-products">
            {displayNewLaunch.map((product) => (
              <div key={product?._id}>
                <BestSellerCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
