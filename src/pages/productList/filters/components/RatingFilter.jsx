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
        <p className="rating-range">
          {rating}{" "}
          <span>
            <img
              src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
              alt="star"
            />
          </span>{" "}
          & above
        </p>
        <input
          type="range"
          min={2.5}
          max={4.5}
          step={0.5}
          value={rating}
          onChange={handleRating}
        />
      </div>
    </>
  );
};
