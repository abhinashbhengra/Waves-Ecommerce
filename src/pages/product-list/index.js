import "../product-list/productList.css";

import Navbar from "../../components/navbar";
import Filters from "../../components/filters";

import { productDB } from "../../data/dummyDB";
import ProductCard from "../../components/product-card";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div className="products-container">
        <div>
          <Filters />
        </div>
        <div className="products-list">
          {productDB.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
