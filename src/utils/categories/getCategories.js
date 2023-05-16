export const getCategories = async () => {
  try {
    const response = await fetch("/api/categories");
    return response;
  } catch (error) {
    return { message: "Something went wrong" };
  }
};

export const getCategory = async (categoryId) => {
  try {
    const response = await fetch(`/api/products/${categoryId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
