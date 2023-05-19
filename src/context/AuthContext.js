import { createContext, useReducer } from "react";
import { authInitial, authReducer } from "../reducers/authReducer";
import { login } from "../utils/authentication/authentication";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({ user: "", token: "" });

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);
  const location = useLocation;
  const navigate = useNavigate();
  console.log(authState);
  const handleLogin = async (user) => {
    const response = await login(user);
    authDispatch({
      type: "LOGIN",
      payload: {
        user: response.foundUser,
        token: response.encodedToken,
      },
    });
    navigate(location?.state?.from?.pathname);
  };
  return (
    <AuthContext.Provider value={{ authState, authDispatch, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
