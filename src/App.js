import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Cart } from "./pages/cart/Cart";
import Error from "./pages/error";
import HomePage from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import { WishList } from "./pages/wishlist/Wishlist";
import { User } from "./pages/user/User";
import { Login } from "./pages/login/Login";
import { RequiresAuth } from "./components/RequiresAuth";
import { SignUp } from "./pages/signup/SignUp";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route element={<RequiresAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<User />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
