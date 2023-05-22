import { createContext, useContext, useReducer, useState } from "react";
import { cartInitial, cartReducer } from "../reducers/cartReducer";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { addItems } from "../utils/cart/addItems";
import { getItems } from "../utils/cart/getItems";

export const CartContext = createContext({
  cartState: {},
  cartDispatch: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitial);
  const [cartItems, setCartItems] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = async (product) => {
    if (token) {
      const addedItems = await addItems(product, token);
      setCartItems(addedItems);
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

  const removeFromCart = (selectId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: selectId });
  };

  const decreaseQuantity = (product) => {
    const { id, quantity } = product;
    cartDispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        quantity: quantity - 1,
      },
    });
  };
  const increaseQuantity = (product) => {
    const { id, quantity } = product;
    cartDispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        quantity: quantity + 1,
      },
    });
  };

  const value = {
    cartState,
    cartItems,
    addToCart,
    removeFromCart,
    getCartItems,
    decreaseQuantity,
    increaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
