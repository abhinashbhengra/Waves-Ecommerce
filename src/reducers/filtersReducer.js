export const initialFilters = {
  categories: [],
  rating: null,
  sortBy: null,
  collections: [],
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

    case "SET_COLLECTION":
      if (state.collections.include(action.payload)) {
        return {
          ...state,
          collections: state.collections.filter(
            (collection) => collection !== action.payload
          ),
        };
      }
      return { ...state, collections: [...state.collections, action.payload] };

    default:
      return state;
  }
};
