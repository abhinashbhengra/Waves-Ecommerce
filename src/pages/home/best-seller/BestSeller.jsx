import { useState, useEffect } from "react";
import "../best-seller/bestSeller.css";

export const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const bestproducts = products.filter((product) => product._isBestSeller);
  const displayBestProducts = [bestproducts[18], bestproducts[21]];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="best-main">
        <span className="best-heading">
          <p>Best Sellers</p>
        </span>
        <div className="best-container">
          {displayBestProducts.map((product) => (
            <div className="best_seller-product" key={product?._id}>
              <div>
                <img
                  className="best_seller-image"
                  src={product?.image}
                  alt="best-seller"
                />
              </div>
              <div className="best_seller-text">
                <p>{product?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
