import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequiresAuth = () => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  const { token } = authState;
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
