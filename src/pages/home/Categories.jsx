import "../home/categories.css";
import { useEffect, useState } from "react";
import { getCategories } from "../../utils/categories/getCategories";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          const data = await response.json();
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("cat", error.message);
      }
    };
    fetchData();
  }, []);

  console.log(categories);

  return (
    <>
      <h3>Featured Categories</h3>
      <div className="category-container">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <p>{category.categoryName.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
