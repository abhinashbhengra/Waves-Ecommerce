import "../user/user.css";

import { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

import { AddressTab } from "../../components/addressTab/AddressTab";

export const User = () => {
  const { authState, handleLogout } = useContext(AuthContext);
  const { token } = authState;
  const [address, setAddress] = useState();
  const [tab, setTab] = useState("profile");
  const [displayAddressTab, setDisplayAddressTab] = useState(false);

  const formValue = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
  };
  const [addressForm, setAddressForm] = useState(formValue);

  const handleTab = (type) => {
    type === "address" ? setTab("address") : setTab("profile");
  };

  const editAddress = (
    _id,
    name,
    street,
    city,
    state,
    country,
    zipCode,
    mobile
  ) => {
    setDisplayAddressTab(true);
    setAddressForm((form) => ({
      ...form,
      _id,
      name,
      street,
      city,
      state,
      country,
      zipCode,
      mobile,
    }));
  };

  const deleteAddress = async (addressId) => {
    try {
      const response = await fetch(`/api/user/address/${addressId}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      setAddress(data.address);
    } catch (e) {
      console.log(e);
    }
  };

  const addAdressHandler = () => {
    setDisplayAddressTab(true);
    setAddressForm(formValue);
  };

  useEffect(() => {
    const fetchaddress = async () => {
      try {
        const response = await fetch("/api/user/address", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        const data = await response.json();
        setAddress(data.address);
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
          {displayAddressTab ? (
            <AddressTab
              token={token}
              addressForm={addressForm}
              setAddressForm={setAddressForm}
              formValue={formValue}
              setAddress={setAddress}
              setDisplayAddressTab={setDisplayAddressTab}
            />
          ) : (
            <div className="address-button-container">
              {token && (
                <div className="address-main-container">
                  {address.map(
                    ({
                      _id,
                      name,
                      street,
                      city,
                      state,
                      country,
                      zipCode,
                      mobile,
                    }) => (
                      <div key={_id} className="address-container">
                        <p className="add-user-name">{name}</p>
                        <p>{street}</p>
                        <p>
                          {zipCode} {city} {state}
                        </p>
                        <p>{country}</p>
                        <p>Mobile : {mobile}</p>
                        <div className="address-button">
                          <div className="edit-button">
                            <p
                              onClick={() =>
                                editAddress(
                                  _id,
                                  name,
                                  street,
                                  city,
                                  state,
                                  country,
                                  zipCode,
                                  mobile
                                )
                              }
                            >
                              Edit
                            </p>
                          </div>
                          <div
                            className="delete-button"
                            onClick={() => deleteAddress(_id)}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
              <div className="add-address-button" onClick={addAdressHandler}>
                <p>add address</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
