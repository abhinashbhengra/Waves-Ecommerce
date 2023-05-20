import { useEffect, useState } from "react";
import { getCategories } from "../../../../utils/categories/getCategories";

export const CategoryFilter = ({ categories, filterDispatch }) => {
  const [allCategories, setAllCategories] = useState([]);

  const handleCategory = (e) => {
    filterDispatch({ type: "SET_CATEGORY", payload: e.target.name });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          const { categories } = await response.json();
          setAllCategories(categories);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="category-main-container">
        <p className="filter-heading">Category</p>
        <div className="category">
          {allCategories.map((category) => (
            <div key={category._id}>
              <label htmlFor={category.categoryName} className="category-label">
                <input
                  type="checkbox"
                  name={category.categoryName}
                  checked={categories.includes(category.categoryName)}
                  onChange={handleCategory}
                />
                <p className="category-name">{category.categoryName}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
