// import "../filters/filters.css";

import { FilterContext } from "../../../context/FilterContext";

import { useContext } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { CollectionFilter } from "./components/CollectionFilter";
import { FilterHead } from "./components/FilterHead";
import { PriceFilter } from "./components/PriceFilter";
import { RatingFilter } from "./components/RatingFilter";
import { SortFilter } from "./components/SortFilter";

export const Filters = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const { categories } = filterState;
  return (
    <div className="filters-container">
      <FilterHead />
      <PriceFilter />
      <CategoryFilter categories={categories} filterDispatch={filterDispatch} />
      <RatingFilter />
      <SortFilter />
      <CollectionFilter />
    </div>
  );
};
