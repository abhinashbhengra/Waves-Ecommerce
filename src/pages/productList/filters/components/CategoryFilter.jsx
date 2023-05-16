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
      <p>Category</p>
      {allCategories.map((category) => (
        <div key={category._id}>
          <label htmlFor={category.categoryName}>
            <input
              type="checkbox"
              name={category.categoryName}
              checked={categories.includes(category.categoryName)}
              onChange={handleCategory}
            />
            {category.categoryName}
          </label>
        </div>
      ))}
    </>
  );
};
