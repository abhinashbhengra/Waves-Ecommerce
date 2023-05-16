import "../filters/filters.css";

const Filters = () => {
  const categories = [
    "Headphones",
    "In Ears",
    "Wireless",
    "Accessories",
    "Home Audio",
  ];
  // console.log(categories);
  return (
    <div className="filters-container">
      <div>
        <p>Filter</p>
        <button>Clear</button>
      </div>
      <div>
        <p>Prices</p>
        <input type="range" />
      </div>
      <div>
        <p>Category</p>
        {categories.map((category, key) => (
          <div>
            <label key={key}>
              <input type="checkbox" />
              {category}
            </label>
          </div>
        ))}
      </div>
      <div>
        <p>Rating</p>
        <div>
          <label>
            <input type="radio" />
            4.5 stars & above
          </label>
        </div>
        <div>
          <label>
            <input type="radio" />4 stars & above
          </label>
        </div>
        <div>
          <label>
            <input type="radio" />3 stars & above
          </label>
        </div>
      </div>
      <div>
        <p>Sort by</p>
        <div>
          <label>
            <input type="radio" />
            Price - Low To High
          </label>
        </div>
        <div>
          <label>
            <input type="radio" />
            Price - High to Low
          </label>
        </div>
      </div>
      <div>
        <p>Collections</p>
        <div>
          <label>
            <input type="checkbox" />
            Best sellers
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            New Launches
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
