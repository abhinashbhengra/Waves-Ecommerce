import "../signup/signup.css";
import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { handleSignup } = useContext(AuthContext);

  const handleSignupClick = (e) => {
    e.preventDefault();
    handleSignup(user);
  };

  return (
    <>
      <Navbar />
      <div className="signup-main-container">
        <h1>Signup Page</h1>
        <form onSubmit={handleSignupClick}>
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
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
};
