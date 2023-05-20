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
      <div className="sort-main-container">
        <p className="filter-heading">Sort By</p>
        <div className="sort">
          <div>
            <label className="sort-label">
              <input
                type="radio"
                name="sort"
                value="LOW_TO_HIGH"
                checked={sortBy === "LOW_TO_HIGH"}
                onChange={handleSort}
              />
              <p className="sort-detail">Price - Low To High</p>
            </label>
          </div>
          <div>
            <label className="sort-label">
              <input
                type="radio"
                name="sort"
                value="HIGH_TO_LOW"
                checked={sortBy === "HIGH_TO_LOW"}
                onChange={handleSort}
              />
              <p className="sort-detail">Price - High to Low</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
