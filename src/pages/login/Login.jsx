import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { getLoginDetails } from "../../utils/login/getLoginDetails";

export const Login = () => {
  const { authDispatch } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await getLoginDetails(user);
    authDispatch({
      type: "LOGIN",
      payload: {
        user: response.foundUser,
        token: response.encodedToken,
      },
    });
    navigate(location?.state?.from?.pathname);
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleLogin}>
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
      </form>
    </>
  );
};
