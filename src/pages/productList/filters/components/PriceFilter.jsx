export const PriceFilter = ({ price, filterDispatch }) => {
  const handlePrice = (e) => {
    filterDispatch({ type: "SET_PRICE", payload: e.target.value });
  };
  return (
    <>
      <p>Prices</p>
      <div>
        <p>1K</p>
        <p>50K</p>
      </div>
      <input
        type="range"
        min={1000}
        max={50000}
        value={price}
        onChange={handlePrice}
      />
    </>
  );
};
