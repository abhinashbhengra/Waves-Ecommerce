export const cartInitial = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((product) =>
          product.id === action.payload.id
            ? (product.quantity = action.payload.quantity)
            : product.quantity
        ),
      };
    default:
      return state;
  }
};
