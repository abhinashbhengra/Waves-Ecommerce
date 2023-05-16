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
  const { price, categories, rating, sortBy, best_seller, new_launch } =
    filterState;
  //   console.log(filterState);
  return (
    <div className="filters-container">
      <FilterHead filterDispatch={filterDispatch} />
      <PriceFilter price={price} filterDispatch={filterDispatch} />
      <CategoryFilter categories={categories} filterDispatch={filterDispatch} />
      <RatingFilter rating={rating} filterDispatch={filterDispatch} />
      <SortFilter sortBy={sortBy} filterDispatch={filterDispatch} />
      <CollectionFilter
        collections={{ best_seller, new_launch }}
        filterDispatch={filterDispatch}
      />
    </div>
  );
};
