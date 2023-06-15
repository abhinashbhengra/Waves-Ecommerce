import { useState, useEffect } from "react";
import "../best-seller/bestSeller.css";
import { useNavigate } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

export const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const bestproducts = products.filter((product) => product._isBestSeller);
  const displayBestProducts = [bestproducts[18], bestproducts[21]];

  const navigate = useNavigate();

  const showProdDetails = (productId) => {
    navigate(`/products/${productId}`);
  };
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
      <div className="best-main">
        <span className="best-heading">
          <p>Best Sellers</p>
        </span>
        <div className="best-container">
          {displayBestProducts.map((product) => (
            <div className="best_seller-product" key={product?._id}>
              <div>
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
                  <img
                    className="best_seller-image"
                    src={product?.image}
                    alt="best-seller"
                    onClick={() => showProdDetails(product._id)}
                  />
                )}
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
