import { useContext, useEffect, useState } from "react";
import "../navbar/navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";

import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { WishlistContext } from "../../context/WishlistContext";

export const Navbar = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState();
  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchedProduct = products.filter((prod) =>
      prod.title.toLowerCase().includes(input.toLowerCase())
    );

    setSearchProduct(searchedProduct);

    // setInput("");
  };

  const handleFilter = () => {
    filterDispatch({ type: "RESET" });
  };

  const showProductDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

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

  useEffect(() => {
    let id;
    id = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [input]);

  console.log(token);

  return (
    <div className="nav-main-container">
      <div className="nav-container">
        <div>
          <Link to="/" onClick={handleFilter}>
            <img className="logo" src="/images/wave-logo.png" alt="logo" />
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
          {input.length !== 0 && (
            <div className="display-search">
              {searchProduct.length !== 0
                ? searchProduct.map((product) => (
                    <div
                      key={product._id}
                      className="search-product-section"
                      onClick={() => showProductDetails(product._id)}
                    >
                      <div className="image-title-search">
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                      </div>
                      <div className="search-product-price">
                        <p>₹ {product.price}</p>
                      </div>
                    </div>
                  ))
                : "No result"}
            </div>
          )}
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
              <Link to="/cart" className="cart-logo-quantity">
                <img
                  className="cart-logo"
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/cart-shopping-shop-svgrepo-com.svg?updatedAt=1684518260440"
                  alt="cart"
                />
                <div className="cart-quantity">
                  {token ? <p>{cartItems.length}</p> : <p>0</p>}
                </div>
              </Link>
              <Link to="/wishlist" className="wishlist-logo-quantity">
                <img
                  src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/wii.svg?updatedAt=1684519353432"
                  alt="wishlist-logo"
                  className="wishlist-logo"
                />
                <div className="wishlist-quantity">
                  {token ? <p>{wishlistItems.length}</p> : <p>0</p>}
                </div>
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
