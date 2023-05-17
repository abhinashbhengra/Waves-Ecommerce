import { useContext } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <Navbar />
      {isLoggedIn && "Hello Abhinash"}
      <button onClick={handleClick}>{isLoggedIn ? "logout" : "login"}</button>
    </>
  );
};
