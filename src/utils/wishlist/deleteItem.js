export const delteItem = async (selectedId, token) => {
  try {
    const response = await fetch(`/api/user/wishlist/${selectedId}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    return data.wishlist;
  } catch (e) {
    console.log(e);
  }
};
