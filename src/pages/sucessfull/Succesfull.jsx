import { useNavigate } from "react-router-dom";
import "./sucessfull.css";

export const Sucessfull = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="successfull-main-container">
        <div>
          <h1>Your order is placed 🎉</h1>
          <div className="back-to-home">
            <p onClick={() => navigate("/")}>Go back to home</p>
          </div>
        </div>
      </div>
    </>
  );
};
