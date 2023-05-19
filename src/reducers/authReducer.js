export const authInitial = { user: "", token: "" };

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        token: action.payload.token,
      };
    default:
      return state;
  }
};
