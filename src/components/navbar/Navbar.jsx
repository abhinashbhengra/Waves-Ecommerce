import { useContext, useState } from "react";
import "../navbar/navbar.css";

import { Link } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";

import { productDB } from "../../data/dummyDB";

export const Navbar = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [input, setInput] = useState("");
  const [searchProduct, setSearchProduct] = useState();

  const handleSearch = () => {
    const products = productDB.filter((prod) => prod.title.includes(input));
    setSearchProduct(products);
    setInput("");
  };

  const handleFilter = () => {
    filterDispatch({ type: "RESET" });
  };
  return (
    <div className="nav-main-container">
      <div className="nav-container">
        <div>
          <Link to="/" onClick={handleFilter}>
            Waves
          </Link>
        </div>
        <div className="search-container">
          <label htmlFor="input">
            <input
              type="text"
              name="input"
              placeholder="Search prouducts..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <button onClick={handleSearch}>search</button>
          <div className="display-search">
            {searchProduct &&
              searchProduct.map((product) => (
                <div key={product.id}>
                  <p>{product.title}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="links-contaiiner">
          <div>
            <div className="route-link">
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/wishlist">WishList</Link>
              <Link to="/profile">Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
