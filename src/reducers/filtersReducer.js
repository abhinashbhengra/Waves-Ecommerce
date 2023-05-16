export const initialFilters = {
  categories: [],
  rating: null,
  sortBy: null,
  best_seller: false,
  new_launch: false,
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...initialFilters, categories: [action.payload] };

    case "SET_CATEGORY":
      if (state.categories.includes(action.payload)) {
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category !== action.payload
          ),
        };
      }
      return { ...state, categories: [...state.categories, action.payload] };

    case "SET_RATING":
      return { ...state, rating: action.payload };

    case "SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "BEST_SELLER":
      return { ...state, best_seller: !state.best_seller };

    case "NEW_LAUNCH":
      return { ...state, new_launch: !state.new_launch };

    case "RESET":
      return initialFilters;

    default:
      return state;
  }
};
