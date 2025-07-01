import React from 'react'
import { LOGO_URL } from './utils/constants';

const Header = () => {
  return (
    <div className="header">
      <img
        src={LOGO_URL}
        alt="food-logo"
        className="logo"
      />
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Cart</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

export default Header;