import { useContext } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { authState, handleLogout } = useContext(AuthContext);
  const { token } = authState;

  return (
    <>
      <Navbar />

      {token && (
        <div>
          <p>Hello! {authState.user.firstName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
