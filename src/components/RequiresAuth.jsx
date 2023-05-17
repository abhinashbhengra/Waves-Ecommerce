import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequiresAuth = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
