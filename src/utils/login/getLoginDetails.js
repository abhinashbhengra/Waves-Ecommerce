export const getLoginDetails = async (user) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const userDetails = response.json();
    return userDetails;
  } catch (e) {
    // return e.error;
    console.log(e);
  }
};
