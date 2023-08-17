export const RatingFilter = ({ rating, filterDispatch }) => {
  const handleRating = (e) => {
    switch (e.target.id) {
      case "four-star":
        filterDispatch({ type: "RATING", payload: 4 });
        break;
      case "three-star":
        filterDispatch({ type: "RATING", payload: 3 });
        break;
      case "two-star":
        filterDispatch({ type: "RATING", payload: 2 });
        break;
      case "one-star":
        filterDispatch({ type: "RATING", payload: 1 });
        break;
      default:
        filterDispatch({ type: "RATING", type: null });
    }
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
                id="four-start"
                checked={rating === 4}
                onChange={handleRating}
              />
              <p className="rating-detail">4 stars and above</p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="three-start"
                checked={rating === 3}
                onChange={handleRating}
              />
              <p className="rating-detail">3 stars and above</p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="two-start"
                checked={rating === 2}
                onChange={handleRating}
              />
              <p className="rating-detail">2 stars and above</p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="one-start"
                checked={rating === 1}
                onChange={handleRating}
              />
              <p className="rating-detail">1 stars and above</p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
