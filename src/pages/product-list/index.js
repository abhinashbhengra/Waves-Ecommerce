import "../product-list/productList.css";

import Navbar from "../../components/navbar";
import Filters from "../../components/filters";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div className="products-container">
        <div>
          <Filters />
        </div>
        <div className="products-list">Product List</div>
      </div>
    </div>
  );
};

export default ProductList;
