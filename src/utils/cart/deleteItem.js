export const deleteItem = async (selectedId, token) => {
  try {
    const response = await fetch(`/api/user/cart/${selectedId}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    return data.cart;
  } catch (e) {
    console.log(e);
  }
};
