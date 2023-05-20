import "../signup/signup.css";
import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { handleSignup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    handleSignup(user);
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
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser((curr) => ({ ...curr, password: e.target.value }))
              }
            />
            <button type="submit" className="signup-button">
              CREATE ACCOUNT
            </button>

            <p
              onClick={() => navigate("/login")}
              className="signup-login-button"
            >
              Login
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
