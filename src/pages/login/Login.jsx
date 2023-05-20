import "../login/login.css";

import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    handleLogin(user);
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
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser((curr) => ({ ...curr, password: e.target.value }))
              }
            />
            <button type="submit" className="login-button">
              LOGIN
            </button>

            <p onClick={() => navigate("/signup")} className="signup-button">
              Sign up
            </p>

            <p className="add-guest-button">Add Guest Credentials</p>
          </form>
        </div>
      </div>
    </>
  );
};
