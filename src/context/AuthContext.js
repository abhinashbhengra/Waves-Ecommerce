import { createContext, useReducer } from "react";
import { authInitial, authReducer } from "../reducers/authReducer";
import { login, signUp } from "../utils/authentication/authentication";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const AuthContext = createContext({ user: "", token: "" });

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitial);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    const response = await login(user);
    response.encodedToken &&
      toast.success("Successfully Logged In", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
    response.encodedToken &&
      toast.success("Successfully Logged In", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    authDispatch({
      type: "SIGNUP",
      payload: {
        user: response.createdUser,
        token: response.encodedToken,
      },
    });
    navigate("/");
  };

  const handleLogout = async () => {
    authDispatch({ type: "LOGOUT" });
    toast.error("Logged Out", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <AuthContext.Provider
      value={{ authState, handleLogin, handleSignup, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
