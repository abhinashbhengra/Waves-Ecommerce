// import "../filters/filters.css";

import { CategoryFilter } from "./components/CategoryFilter";
import { CollectionFilter } from "./components/CollectionFilter";
import { FilterHead } from "./components/FilterHead";
import { PriceFilter } from "./components/PriceFilter";
import { RatingFilter } from "./components/RatingFilter";
import { SortFilter } from "./components/SortFilter";

export const Filters = () => {
  // console.log(categories);
  return (
    <div className="filters-container">
      <FilterHead />
      <PriceFilter />
      <CategoryFilter />
      <RatingFilter />
      <SortFilter />
      <CollectionFilter />
    </div>
  );
};
