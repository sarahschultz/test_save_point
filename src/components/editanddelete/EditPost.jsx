import React, { useState, useEffect, Link } from "react";
import { useNavigate } from "react-router-dom";
import SinglePost from "../SinglePost";
import Navbar from "../Navbar";
import Register from "../registration/Registration";
import SearchBar from "../searchbar/SearchBar";
import { Route, Routes } from 'react-router-dom';

function EditPost() {
  const navigate = useNavigate()
  const loggedInUser = props.loggedInUser;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      loggedInUser(true);
    }
  }, [loggedInUser]);

  return;
  (

    <div>Edit My Stranger Post</div>

  )
}

export default EditPost