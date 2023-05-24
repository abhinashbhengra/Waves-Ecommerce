import { createContext, useContext, useReducer, useState } from "react";
import { getItems } from "../utils/wishlist/getItems";
import { AuthContext } from "./AuthContext";
import { addItems } from "../utils/wishlist/addItems";
import { useNavigate } from "react-router-dom";
import { delteItem } from "../utils/wishlist/deleteItem";

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
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlist = async (selectId) => {
    if (token) {
      const updatedItems = await delteItem(selectId, token);
      setWishListItems(updatedItems);
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
  console.log(wishlistItems);
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
