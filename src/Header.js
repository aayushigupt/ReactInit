import React, { useState } from "react";
import { LOGO_URL } from "./utils/constants";

const Header = () => {
  const [isLogin, setIsLogin] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="food-logo" className="logo" />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Cart</li>
        <li className="nav-item">Contact</li>
        <button
          className="auth-btn"
          onClick={() => {
            setIsLogin(isLogin === "Login" ? "Logout" : "Login");
          }}
        >
          {isLogin}
        </button>
      </ul>
    </div>
  );
};

export default Header;
