import { useEffect, useState } from "react";
import { getCategories } from "../../../../utils/categories/getCategories";

export const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          const { categories } = await response.json();
          setCategories(categories);
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
      {categories.map((category) => (
        <div key={category._id}>
          <label htmlFor={category.categoryName}>
            <input type="checkbox" />
            {category.categoryName}
          </label>
        </div>
      ))}
    </>
  );
};
