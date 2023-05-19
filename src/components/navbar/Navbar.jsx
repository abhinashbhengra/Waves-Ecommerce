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
            <img className="logo" src="./images/wave-logo.png" alt="logo" />
          </Link>
        </div>
        <div className="search-container">
          <div>
            <label htmlFor="input">
              <input
                type="text"
                name="input"
                placeholder="Search prouducts..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </div>
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
              <Link to="/products">
                <img
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/headphones-svgrepo-com.svg?updatedAt=1684520864475"
                  alt="products-logo"
                  className="products-logo"
                />
              </Link>
              <Link to="/cart">
                <img
                  className="cart-logo"
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/cart-shopping-shop-svgrepo-com.svg?updatedAt=1684518260440"
                  alt="cart"
                />
              </Link>
              <Link to="/wishlist">
                <img
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/wii.svg?updatedAt=1684519353432"
                  alt="wishlist-logo"
                  className="wishlist-logo"
                />
              </Link>
              <Link to="/profile">
                <img
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/user-svgrepo-com__1_.svg?updatedAt=1684520054955"
                  alt="profile-logo"
                  className="profile-logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
