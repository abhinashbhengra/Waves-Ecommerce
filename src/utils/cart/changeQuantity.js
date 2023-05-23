export const changeQuantity = async (selectedId, type, token) => {
  try {
    const response = await fetch(`/api/user/cart/${selectedId}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({
        action: {
          type: type,
        },
      }),
    });
    const data = await response.json();
    return data.cart;
  } catch (e) {
    console.log(e);
  }
};
