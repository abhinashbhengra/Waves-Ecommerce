export const getCategories = async () => {
  try {
    const response = await fetch("/api/categories");
    return response;
  } catch (error) {
    return { message: "Something went wrong" };
  }
};
