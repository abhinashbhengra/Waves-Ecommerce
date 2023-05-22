export const addItems = async (product, token) => {
  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product: product }),
    });
    const data = await response.json();
    return data.cart;
  } catch (e) {
    console.log(e);
  }
};
