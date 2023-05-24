export const getItems = async (token) => {
  try {
    const response = await fetch("/api/user/wishlist", {
      method: "GET",
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
