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
        <form onSubmit={handleLoginClick}>
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
          <button type="submit">LOGIN</button>
          <p onClick={() => navigate("/signup")}>Sign up</p>
        </form>
      </div>
    </>
  );
};
