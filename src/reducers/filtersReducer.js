export const initialFilters = {
  categories: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...initialFilters, categories: [action.payload] };
    default:
      return state;
  }
};
