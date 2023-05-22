export const getItems = async (token) => {
  try {
    const response = await fetch("/api/user/cart", {
      method: "GET",
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    console.log(data.cart);
    return data.cart;
  } catch (e) {
    console.log(e);
    return e;
  }
};
