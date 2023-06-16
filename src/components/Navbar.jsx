import React from "react";
import { Link } from "react-router-dom";
import AccountLogin from "./registration/AccountLogin";


function Navbar() {
  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link to="/">Home</Link>

        <Link to="/registration/AccountLogin">My Stranger Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
