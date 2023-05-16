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
      <p>Collections</p>
      <div>
        <label>
          <input
            type="checkbox"
            name="best_seller"
            value="best_seller"
            checked={best_seller}
            onChange={handleCollections}
          />
          Best sellers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="new_launch"
            value="new_launch"
            checked={new_launch}
            onChange={handleCollections}
          />
          New Launches
        </label>
      </div>
    </>
  );
};
