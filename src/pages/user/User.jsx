import "../user/user.css";

import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const User = () => {
  const { authState, handleLogout } = useContext(AuthContext);
  const { token } = authState;
  const [address, setAddress] = useState();
  const [tab, setTab] = useState("profile");

  const handleTab = (type) => {
    // console.log(type);
    type === "address" ? setTab("address") : setTab("profile");
  };

  useEffect(() => {
    const fetchaddress = async () => {
      try {
        console.log(token);
        const response = await fetch("/api/user/address", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        const data = await response.json();

        console.log("address", data.address[0]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchaddress();
  }, []);
  return (
    <>
      <Navbar />
      <div className="tab-container">
        <div
          className="profile-tab"
          onClick={() => handleTab("profile")}
          style={{ borderBottom: tab === "profile" ? "2px solid grey" : "" }}
        >
          Profile
        </div>
        <div
          className="address-tab"
          onClick={() => handleTab("address")}
          style={{ borderBottom: tab !== "profile" ? "2px solid grey" : "" }}
        >
          Address
        </div>
      </div>
      {tab === "profile" ? (
        <div className="user-main-container">
          <div className="user">
            {token && (
              <div className="profile-section">
                <div className="profile-heading">
                  <p>Hello {authState.user.firstName}</p>
                </div>
                <div className="profile-details">
                  <p>First Name : {authState.user.firstName}</p>
                  <p>Last Name : {authState.user.lastName}</p>
                  <p>Email : {authState.user.email}</p>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="user-main-container">
          <div className="user">
            {token && (
              <div>
                <p>Address {authState.user.firstName}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
