export const FilterHead = ({ filterDispatch }) => {
  const handleClearFilter = () => {
    filterDispatch({ type: "RESET" });
  };
  return (
    <>
      <div className="filterhead">
        <p className="filter-heading">Filter</p>
        <button className="filter-clear-button" onClick={handleClearFilter}>
          Clear
        </button>
      </div>
    </>
  );
};
