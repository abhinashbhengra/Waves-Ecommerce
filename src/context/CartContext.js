import { createContext, useReducer } from "react";
import { cartInitial, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext({
  cartState: {},
  cartDispatch: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitial);

  const addToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: product });
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
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
