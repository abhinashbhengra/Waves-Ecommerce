import "../login/login.css";

import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleGuestCredentials = () => {
    setUser((curr) => ({
      ...curr,
      email: "abhinashbhengra@gmail.com",
      password: "abhinashbhengra@123",
    }));
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    user.email !== "" && user.password !== ""
      ? handleLogin(user)
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
    // handleLogin(user);
  };

  const showPasswordhandler = () => {
    setShowPassword((curr) => !curr);
  };

  return (
    <>
      <Navbar />
      <div className="login-main-container">
        <div className="login-section">
          <p className="login-heading">Login</p>
          <form onSubmit={handleLoginClick} className="login-form">
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser((curr) => ({ ...curr, password: e.target.value }))
                }
              />

              <div className="show-hide-logo" onClick={showPasswordhandler}>
                {showPassword ? (
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

            <button type="submit" className="login-button">
              LOGIN
            </button>

            <p
              onClick={() => navigate("/signup")}
              className="login-signup-button"
            >
              Sign up
            </p>

            <p className="add-guest-button" onClick={handleGuestCredentials}>
              Add Guest Credentials
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
