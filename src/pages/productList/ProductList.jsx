import "./productList.css";

import { Navbar } from "../../components/navbar/Navbar";
import { Filters } from "./filters/Filters";

import { productDB } from "../../data/dummyDB";
import { ProductCard } from "../../components/product-card/ProductCard";
import { getFilteredData } from "../../utils/categories/getFilteredData";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

const ProductList = () => {
  const { filterState } = useContext(FilterContext);
  const filteredData = getFilteredData(productDB, filterState);
  return (
    <div>
      <Navbar />
      <div className="products-container">
        <div>
          <Filters />
        </div>
        <div className="products-list">
          {filteredData.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
