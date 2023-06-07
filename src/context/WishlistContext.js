import { createContext, useContext, useReducer, useState } from "react";
import { getItems } from "../utils/wishlist/getItems";
import { AuthContext } from "./AuthContext";
import { addItems } from "../utils/wishlist/addItems";
import { useNavigate } from "react-router-dom";
import { delteItem } from "../utils/wishlist/deleteItem";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const WishlistContext = createContext({
  wishlistState: {},
  wishlistDispatch: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishListItems] = useState([]);
  const { authState } = useContext(AuthContext);
  const { token } = authState;

  const navigate = useNavigate();

  const addToWishlist = async (product) => {
    if (token) {
      const updatedItems = await addItems(product, token);
      setWishListItems(updatedItems);
      toast.success("Added To Wishlist", {
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

  const removeFromWishlist = async (selectId) => {
    if (token) {
      const updatedItems = await delteItem(selectId, token);
      setWishListItems(updatedItems);
      toast.error("Removed From Wishlist", {
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
      console.log("something went wrong");
    }
  };

  const getWishlistItem = async () => {
    if (token) {
      const wishlistItems = await getItems(token);
      setWishListItems(wishlistItems);
    } else {
      console.log("something went wrong!!");
    }
  };

  const value = {
    wishlistItems,
    setWishListItems,
    addToWishlist,
    removeFromWishlist,
    getWishlistItem,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
