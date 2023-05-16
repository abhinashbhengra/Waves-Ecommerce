export const SortFilter = () => {
  return (
    <>
      <p>Sort by</p>
      <div>
        <label>
          <input type="radio" />
          Price - Low To High
        </label>
      </div>
      <div>
        <label>
          <input type="radio" />
          Price - High to Low
        </label>
      </div>
    </>
  );
};
