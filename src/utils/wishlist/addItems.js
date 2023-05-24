export const addItems = async (product, token) => {
  try {
    const response = await fetch("/api/user/wishlist", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({
        product: product,
      }),
    });
    const data = await response.json();
    return data.wishlist;
  } catch (e) {
    console.log(e);
  }
};
