export const PriceFilter = ({ price, filterDispatch }) => {
  const handlePrice = (e) => {
    filterDispatch({ type: "SET_PRICE", payload: e.target.value });
  };
  return (
    <>
      <div className="price-container">
        <p className="filter-heading">Price</p>
        <div className="price">
          <div className="price-range">
            <p>1K</p>
            <p>50K</p>
          </div>
          <input
            type="range"
            min={1000}
            max={50000}
            value={price}
            onChange={handlePrice}
            className="price-input"
          />
        </div>
      </div>
    </>
  );
};
