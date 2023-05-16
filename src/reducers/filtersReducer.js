export const initialFilters = {
  categories: [],
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
    default:
      return state;
  }
};
