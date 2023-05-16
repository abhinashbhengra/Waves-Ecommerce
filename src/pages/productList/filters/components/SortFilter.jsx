export const SortFilter = ({ sortBy, filterDispatch }) => {
  const handleSort = (e) => {
    const value = e.target.value;
    value === "LOW_TO_HIGH"
      ? filterDispatch({ type: "SORT_BY", payload: value })
      : filterDispatch({ type: "SORT_BY", payload: value });
    console.log(value);
  };
  return (
    <>
      <p>Sort by</p>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="LOW_TO_HIGH"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={handleSort}
          />
          Price - Low To High
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="sort"
            value="HIGH_TO_LOW"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={handleSort}
          />
          Price - High to Low
        </label>
      </div>
    </>
  );
};
