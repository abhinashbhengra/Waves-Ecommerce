import "../home/categories.css";
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../../utils/categories/getCategories";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../context/FilterContext";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const { filterDispatch } = useContext(FilterContext);

  const handleCategoryClick = (categoryName) => {
    filterDispatch({ type: "SELECT_CATEGORY", payload: categoryName });
    navigate("/products");
  };

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

  return (
    <>
      <h3>Featured Categories</h3>
      <div className="category-container">
        {categories.map((category) => (
          <div
            className="category"
            key={category.id}
            onClick={(e) => handleCategoryClick(category.categoryName)}
          >
            <p>{category.categoryName.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
