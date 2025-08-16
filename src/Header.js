import React, { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./utils/context/UserContext";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header">
      <img src={LOGO_URL} alt="food-logo" className="logo" />
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about"> About </Link>{" "}
        </li>
        <li className="nav-item">
          <Link to="/grocery"> Grocery </Link>{" "}
        </li>
        <li className="nav-item">Cart</li>
        <li className="nav-item">
          <Link to="/contact"> Contact </Link>
        </li>
        <button
          className="auth-btn"
          onClick={() => {
            setIsLogin(isLogin === "Login" ? "Logout" : "Login");
          }}
        >
          {isLogin}
        </button>
        <li className="nav-item">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
