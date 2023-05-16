export const RatingFilter = ({ rating, filterDispatch }) => {
  const handleRating = (e) => {
    const value = e.target.value;
    filterDispatch({ type: "SET_RATING", payload: +value });
  };
  return (
    <>
      <p>Rating</p>
      <div>
        <label>
          <input
            type="radio"
            name="rating"
            value={4.5}
            checked={rating === 4.5}
            onChange={handleRating}
          />
          4.5 stars & above
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="rating"
            value={4}
            checked={rating === 4}
            onChange={handleRating}
          />
          4 stars & above
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="rating"
            value={3}
            checked={rating === 3}
            onChange={handleRating}
          />
          3 stars & above
        </label>
      </div>
    </>
  );
};
