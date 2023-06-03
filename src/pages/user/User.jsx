import "../user/user.css";

import { useContext, useEffect } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { authState, handleLogout } = useContext(AuthContext);
  const { token } = authState;

  useEffect(() => {
    const fetchaddress = async () => {
      try {
        console.log("address");
        const response = await fetch("/api/user/address", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        console.log("add", response);
        const data = await response.json();

        console.log("address", data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchaddress();
  }, []);
  return (
    <>
      <Navbar />
      <div className="user-main-container">
        <div className="user">
          {token && (
            <div>
              <p>Hello! {authState.user.firstName}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
