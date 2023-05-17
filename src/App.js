import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Cart } from "./pages/cart/Cart";
import Error from "./pages/error";
import HomePage from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import { WishList } from "./pages/wishlist/Wishlist";
import { User } from "./pages/user/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
