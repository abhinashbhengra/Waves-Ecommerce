import "./productList.css";

import { Navbar } from "../../components/navbar/Navbar";
import { Filters } from "./filters/Filters";

import { ProductCard } from "../../components/product-card/ProductCard";
import { getFilteredData } from "../../utils/categories/getFilteredData";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../context/FilterContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { filterState } = useContext(FilterContext);
  const filteredData = getFilteredData(products, filterState);

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
    <div>
      <Navbar />
      <div className="products-container">
        <div>
          <Filters />
        </div>
        <div className="products-list">
          {filteredData.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
