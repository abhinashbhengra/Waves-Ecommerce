import { useContext } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const { token } = authState;
  const handleClick = () => {
    // setIsLoggedIn(!isLoggedIn);
    authDispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <Navbar />
      {token && (
        <p>
          Hello! {authState.user.firstName} {authState.user.lastName}
        </p>
      )}
      <button onClick={handleClick}>{token ? "logout" : "login"}</button>
    </>
  );
};
