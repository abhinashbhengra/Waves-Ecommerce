import "../signup/signup.css";
import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { handleSignup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDummyCredentials = () => {
    setUser((curr) => ({
      ...curr,
      firstName: "Abhinash",
      lastName: "Bhengra",
      email: "abhinash@gmail.com",
      password: "abhinash@123",
      confirmPassword: "abhinash@123",
    }));
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    user.firstName !== "" &&
    user.lastName !== "" &&
    user.email !== "" &&
    user.password !== "" &&
    user.confirmPassword !== ""
      ? handleSignup(user)
      : toast.warning("Please fill your details", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    // handleSignup(user);
  };

  const showPasswordhandler = (type) => {
    type === "pwd"
      ? setShowPassword((curr) => ({ ...curr, password: !curr.password }))
      : setShowPassword((curr) => ({
          ...curr,
          confirmPassword: !curr.confirmPassword,
        }));
  };

  return (
    <>
      <Navbar />
      <div className="signup-main-container">
        <div className="signup-section">
          <p className="signup-heading">Sign up</p>
          <form onSubmit={handleSignupClick} className="signup-form">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={user.firstName}
              onChange={(e) =>
                setUser((curr) => ({ ...curr, firstName: e.target.value }))
              }
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={user.lastName}
              onChange={(e) =>
                setUser((curr) => ({ ...curr, lastName: e.target.value }))
              }
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={user.email}
              onChange={(e) =>
                setUser((curr) => ({ ...curr, email: e.target.value }))
              }
            />

            <div className="password-input">
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser((curr) => ({ ...curr, password: e.target.value }))
                }
              />

              <div
                className="show-hide-logo"
                onClick={() => showPasswordhandler("pwd")}
              >
                {showPassword.password ? (
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/lock-close-minus-round-715-svgrepo-com.svg?updatedAt=1686846630432"
                    alt="lock"
                  />
                ) : (
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/lock-circle-open-round-704-svgrepo-com.svg?updatedAt=1686846645881"
                    alt="unlock"
                  />
                )}
              </div>
            </div>
            <div className="password-input">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser((curr) => ({
                    ...curr,
                    confirmPassword: e.target.value,
                  }))
                }
              />

              <div
                className="show-hide-logo"
                onClick={() => showPasswordhandler("confirmPwd")}
              >
                {showPassword.confirmPassword ? (
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/lock-close-minus-round-715-svgrepo-com.svg?updatedAt=1686846630432"
                    alt="lock"
                  />
                ) : (
                  <img
                    src="https://ik.imagekit.io/u6itcrvxy/Nav_Icon/lock-circle-open-round-704-svgrepo-com.svg?updatedAt=1686846645881"
                    alt="unlock"
                  />
                )}
              </div>
            </div>
            <button type="submit" className="signup-button">
              CREATE ACCOUNT
            </button>

            <p
              onClick={() => navigate("/login")}
              className="signup-login-button"
            >
              Login
            </p>
            <p className="add-guest-button" onClick={handleDummyCredentials}>
              Dummy Credentials
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
