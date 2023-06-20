import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SinglePost(props) {
  const navigate = useNavigate();
  const post = props.post;
  const authorObj = props.post.author;
  const authorUsername = Object.values(authorObj)
 // console.log("username" + authorUsername);

  return (
    <>
      <div
        id="single-post-card"
        key={post._id}
        onClick={() => {
          navigate(`components/PostDeets/${props.post._id}`);
        }}
      >
        <div id="single-post-content-details">
          <h2>{`For Sale by Stranger ${authorUsername[1]}`}</h2>
          <h2> Post Id: {props.post._id}</h2>
          <h4>Title: {props.post.title}</h4>
          <h4>Description: {props.post.description}</h4>
          <h4>Price: {props.post.price}</h4>
          <div></div>
        </div>
      </div>
    </>
  );
}
export default SinglePost;
