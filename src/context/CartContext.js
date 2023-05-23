import { createContext, useContext, useReducer, useState } from "react";
import { cartInitial, cartReducer } from "../reducers/cartReducer";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { addItems } from "../utils/cart/addItems";
import { getItems } from "../utils/cart/getItems";
import { deleteItem } from "../utils/cart/deleteItem";

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

  // const changeItemQuantity = () =>{
  //   const
  // }

  const deleteFromCart = async (selectedId) => {
    // console.log("delete", selectedId);
    if (token) {
      const updatedCartItem = await deleteItem(selectedId, token);
      setCartItems(updatedCartItem);
    } else {
      console.log("Something went wrong!!");
    }
  };
  const decreaseQuantity = (product) => {
    console.log(product);
    const { id, quantity } = product;
    cartDispatch({
      type: "CHANGE_QUANTITY",
      payload: {
        id,
        quantity: quantity - 1,
      },
    });
    // console.log(id, quantity);
  };
  const increaseQuantity = (product) => {
    const { id, qty } = product;
    // const selectedProduct = cartItems.find(({ id }) => id === product.id);
    const updatedProduct = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    console.log(updatedProduct);
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
    deleteFromCart,
    getCartItems,
    decreaseQuantity,
    increaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
