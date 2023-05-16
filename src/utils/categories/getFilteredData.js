export const getFilteredData = (products, filterState) => {
  const { price, categories, rating, sortBy, best_seller, new_launch } =
    filterState;

  const filteredByCategory = (products, categories) => {
    if (categories.length < 1) {
      return products;
    }
    return products.filter((product) =>
      categories.includes(product.categoryName)
    );
  };
  const categorizedProducts = filteredByCategory(products, categories);

  const filteredByRating = (products, rating) => {
    return products.filter((prod) => prod.rating >= rating);
  };
  const ratedProducts = filteredByRating(categorizedProducts, rating);

  const filteredBySort = (products, sortBy) => {
    if (!sortBy) {
      return products;
    }
    return sortBy === "LOW_TO_HIGH"
      ? products.sort((a, b) => a.price - b.price)
      : products.sort((a, b) => b.price - a.price);
  };

  const sortedProducts = filteredBySort(ratedProducts, sortBy);

  const filteredByPrice = (products, price) => {
    return products.filter((product) => product.price <= price);
  };

  const pricedProducts = filteredByPrice(sortedProducts, price);

  const filteredByBestSeller = (products, best_seller) => {
    return best_seller
      ? products.filter((product) => product._isBestSeller)
      : products;
  };

  const bestSellerFiltered = filteredByBestSeller(pricedProducts, best_seller);

  const filteredByNewLaunch = (products, new_launch) => {
    return new_launch
      ? products.filter((product) => product._isNewLaunch)
      : products;
  };

  const filteredData = filteredByNewLaunch(bestSellerFiltered, new_launch);

  return filteredData;
};
