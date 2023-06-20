import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchbar/SearchBar";
import '../index.css'
import AccountLogin from "./registration/AccountLogin";
import { useState, useEffect } from "react";
import Register from "./registration/Registration";
import EditPost from "./editanddelete/EditPost";
import { Route, Routes } from 'react-router-dom';

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const post = props.post;
  // const [loggedIN, setLoggedIN] = useState(localStorage ? true : false )
console.log(props)
  return (
    <div id="navbar-container">
      {
      isLoggedIn ? 
        <>
        <Link id="home-link" to="/">Home</Link>
         <h2>{`Welcome Stranger ${props.loggedInUser}!`}</h2>
         <Link id="edit-post" to="/EditPost">{`Edit ${props.loggedInUser}'s posts`}</Link>
        <button onClick={()=>{
          console.log("logout")
              localStorage.removeItem('token-info');
              setIsLoggedIn(false)
          //  logout()
          // //  localStorage.removeItem("token");
        }}>Logout</button>
        </>
        :
      <>
      <div id="navbar">
        <Link id="home-link" to="/">Home</Link>
        <Link id="stranger-login-link" to="/registration/AccountLogin">My Stranger Login</Link>
       
        </div>
        </>
        }
      </div>
  );
}

export default Navbar;