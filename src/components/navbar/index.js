import { useContext } from "react";
import "../navbar/navbar.css";

import { Link } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";

const Navbar = () => {
  const { filterDispatch } = useContext(FilterContext);

  const handleFilter = () => {
    filterDispatch({ type: "RESET" });
  };
  return (
    <div className="nav-container">
      <div>
        <Link to="/" onClick={handleFilter}>
          Waves
        </Link>
      </div>
      <div>
        <label>
          <input type="text" placeholder="Search prouducts..." />
        </label>
      </div>
      <div className="links-contaiiner">
        <div>
          <div className="route-link">
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">WishList</Link>
          </div>
        </div>
        <div>
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
