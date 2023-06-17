import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar/SearchBar";
import '../index.css'

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const post = props.post;

  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link id="home-link" to="/">Home</Link>
        <div></div>
        <Link id="stranger-login-link" to="/registration/AccountLogin">My Stranger Login</Link>
        </div>
      </div>
  );
}

export default Navbar;

