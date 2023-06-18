import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditPost() {
    const navigate= useNavigate()
    const loggedInUser=props.loggedInUser;

    useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      loggedInUser(true);
    }
  }, []);
  
  
  
    return (
    <div>Edit My Stranger Post</div>
  )
}

export default EditPost