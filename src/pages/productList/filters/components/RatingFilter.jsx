export const RatingFilter = ({ rating, filterDispatch }) => {
  const handleRating = (e) => {
    const value = e.target.value;
    filterDispatch({ type: "SET_RATING", payload: +value });
  };
  return (
    <>
      <div className="rating-main-container">
        <p className="filter-heading">Rating</p>
        <div className="rating">
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                value={4.5}
                checked={rating === 4.5}
                onChange={handleRating}
              />
              <p className="rating-detail">4.5 stars & above</p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                value={4}
                checked={rating === 4}
                onChange={handleRating}
              />
              <p className="rating-detail">4 stars & above</p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                value={3}
                checked={rating === 3}
                onChange={handleRating}
              />
              <p className="rating-detail">3 stars & above</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
