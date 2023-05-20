export const CollectionFilter = ({ collections, filterDispatch }) => {
  const { best_seller, new_launch } = collections;

  const handleCollections = (e) => {
    const value = e.target.value;
    value === "best_seller"
      ? filterDispatch({ type: "BEST_SELLER" })
      : filterDispatch({ type: "NEW_LAUNCH" });
  };
  return (
    <>
      <div className="collection-main-container">
        <p className="filter-heading">Collections</p>
        <div className="collection">
          <div>
            <label className="collection-label">
              <input
                type="checkbox"
                name="best_seller"
                value="best_seller"
                checked={best_seller}
                onChange={handleCollections}
              />
              <p className="collection-detail">Best sellers</p>
            </label>
          </div>
          <div>
            <label className="collection-label">
              <input
                type="checkbox"
                name="new_launch"
                value="new_launch"
                checked={new_launch}
                onChange={handleCollections}
              />
              <p className="collection-detail">New Launches</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
