export const RatingFilter = ({ rating, filterDispatch }) => {
  const handleRating = (e) => {
    switch (e.target.id) {
      case "four-star":
        filterDispatch({ type: "SET_RATING", payload: 4 });
        break;
      case "three-star":
        filterDispatch({ type: "SET_RATING", payload: 3 });
        break;
      case "two-star":
        filterDispatch({ type: "SET_RATING", payload: 2 });
        break;
      case "one-star":
        filterDispatch({ type: "SET_RATING", payload: 1 });
        break;
      default:
        filterDispatch({ type: "SET_RATING", type: null });
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
                id="four-star"
                checked={rating === 4}
                onChange={handleRating}
              />
              <p className="rating-detail">
                4
                <span>
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                    alt="star"
                  />{" "}
                </span>
                & above
              </p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="three-star"
                checked={rating === 3}
                onChange={handleRating}
              />
              <p className="rating-detail">
                3
                <span>
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                    alt="star"
                  />{" "}
                </span>
                & above
              </p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="two-star"
                checked={rating === 2}
                onChange={handleRating}
              />
              <p className="rating-detail">
                2
                <span>
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                    alt="star"
                  />{" "}
                </span>
                & above
              </p>
            </label>
          </div>
          <div>
            <label className="rating-label">
              <input
                type="radio"
                name="rating"
                id="one-star"
                checked={rating === 1}
                onChange={handleRating}
              />
              <p className="rating-detail">
                1
                <span>
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/star-c.png?updatedAt=1684993521625"
                    alt="star"
                  />{" "}
                </span>
                & above
              </p>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
