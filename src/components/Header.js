import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          Flash Study
        </a>
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards">Cards</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
