import { createContext, useReducer } from "react";
import { wishlistInitial, wishlistReducer } from "../reducers/wishlistReducer";

export const WishlistContext = createContext({
  wishlistState: {},
  wishlistDispatch: () => {},
});

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    wishlistInitial
  );

  const addToWishlist = (product) => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (selectId) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: selectId });
  };

  const value = { wishlistState, addToWishlist, removeFromWishlist };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
