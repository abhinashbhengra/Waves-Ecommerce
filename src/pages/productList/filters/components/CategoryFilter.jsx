export const CategoryFilter = () => {
  const categories = [
    "Headphones",
    "In Ears",
    "Wireless",
    "Accessories",
    "Home Audio",
  ];
  return (
    <>
      <p>Category</p>
      {categories.map((category, key) => (
        <div>
          <label key={key}>
            <input type="checkbox" />
            {category}
          </label>
        </div>
      ))}
    </>
  );
};
