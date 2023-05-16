import { createContext, useReducer } from "react";
import { filterReducer, initialFilters } from "../reducers/filtersReducer";

export const FilterContext = createContext({
  filterState: {},
  filterDispatch: () => {},
});

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilters
  );
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
