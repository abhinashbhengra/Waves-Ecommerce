import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLoginClick = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  return (
    <>
      <Navbar />
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
      </form>
    </>
  );
};
