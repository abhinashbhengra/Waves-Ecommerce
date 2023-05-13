import "./App.css";

import { Routes, Route } from "react-router-dom";

import Cart from "./pages/cart";
import Error from "./pages/error";
import HomePage from "./pages/home";
import ProductList from "./pages/product-list";
import WishList from "./pages/wishlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
