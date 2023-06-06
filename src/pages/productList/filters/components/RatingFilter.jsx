export const RatingFilter = ({ rating, filterDispatch }) => {
  const handleRating = (e) => {
    const value = e.target.value;
    filterDispatch({ type: "SET_RATING", payload: value });
  };
  console.log(rating);
  return (
    <>
      <div className="rating-main-container">
        <p className="filter-heading">Rating</p>
        <p>{rating} & above</p>
        <input
          type="range"
          min={2.5}
          max={4.5}
          step={0.5}
          value={rating}
          onChange={handleRating}
          // className="price-input"
        />
      </div>
    </>
  );
};
