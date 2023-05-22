import { createContext, useReducer } from "react";
import { authInitial, authReducer } from "../reducers/authReducer";
import { login, signUp } from "../utils/authentication/authentication";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext({ user: "", token: "" });

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    const response = await login(user);
    authDispatch({
      type: "LOGIN",
      payload: {
        user: response.foundUser,
        token: response.encodedToken,
      },
    });
    if (location?.state === null) {
      navigate("/");
    } else {
      navigate(location?.state?.from?.pathname);
    }
  };

  const handleSignup = async (user) => {
    const response = await signUp(user);

    authDispatch({
      type: "SIGNUP",
      payload: {
        user: response.createdUser,
        token: response.encodedToken,
      },
    });
    navigate("/");
  };

  const handleLogout = () => {
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ authState, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
