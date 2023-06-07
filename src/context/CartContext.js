import { createContext, useContext, useReducer, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { addItems } from "../utils/cart/addItems";
import { getItems } from "../utils/cart/getItems";
import { deleteItem } from "../utils/cart/deleteItem";
import { changeQuantity } from "../utils/cart/changeQuantity";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext({
  cartState: {},
  cartDispatch: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = async (product) => {
    if (token) {
      const addedItems = await addItems(product, token);
      setCartItems(addedItems);
      toast.success("Added To Cart", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigate("/login");
    }
  };

  const getCartItems = async () => {
    if (token) {
      const cartItems = await getItems(token);
      setCartItems(cartItems);
    } else {
      console.log("something went wrong!!");
    }
  };

  const changeItemQuantity = async (selectedId, type) => {
    if (token) {
      const updatedCartItem = await changeQuantity(selectedId, type, token);
      setCartItems(updatedCartItem);
    } else {
      console.log("something went wrong!!!");
    }
  };

  const deleteFromCart = async (selectedId) => {
    if (token) {
      const updatedCartItem = await deleteItem(selectedId, token);
      setCartItems(updatedCartItem);
    } else {
      console.log("Something went wrong!!");
    }
  };

  const value = {
    cartItems,
    addToCart,
    deleteFromCart,
    getCartItems,
    changeItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
