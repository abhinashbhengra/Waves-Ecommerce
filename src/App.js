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
import { ProductDetails } from "./components/prod-details-card/ProductDetails";
import { Checkout } from "./pages/checkout/Checkout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Sucessfull } from "./pages/sucessfull/Succesfull";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route element={<RequiresAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/profile" element={<User />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/succesfull" element={<Sucessfull />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
