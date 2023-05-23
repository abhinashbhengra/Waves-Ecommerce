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

  // const changeItemQuantity = () =>{
  //   const
  // }

  const deleteFromCart = async (selectedId) => {
    console.log("delete", selectedId);
    if (token) {
      try {
        const response = await fetch(`/api/user/cart/${selectedId}`, {
          method: "DELETE",
          headers: {
            authorization: token,
          },
        });
        const data = await response.json();
        console.log("delte item", data);
        setCartItems(data.cart);
      } catch (e) {
        console.log(e);
      }
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
    removeFromCart,
    deleteFromCart,
    getCartItems,
    decreaseQuantity,
    increaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
