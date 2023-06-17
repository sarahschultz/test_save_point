import React, { useState } from "react";
import {useNavigate, Link} from 'react-router-dom';
import PostDeets from "./PostDeets";


function SinglePost(props) {
  const navigate = useNavigate();
  const post = props.post
  // console.log(props);

  return (
    <div id="single-post-card" key={props.post._id}
      onClick={() => {
        navigate(`/SinglePost`);
      }}
    >
      <h2>Thing Posted by Stranger:
      </h2>
       <p>Title: {props.post.title}</p>
       <p>Description: {props.post.description}</p>
    <div>
      <h4>Click post for additional details</h4>
    </div>
    </div>
  );
}
export default SinglePost;
