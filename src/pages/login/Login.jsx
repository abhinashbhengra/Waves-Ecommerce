import { useContext } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  return (
    <>
      <Navbar />
      <p>Please Login to continue</p>
      <button onClick={handleClick}>{isLoggedIn ? "log out" : "login"}</button>
    </>
  );
};
