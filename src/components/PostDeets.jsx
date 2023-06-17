import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PostDeets(props) {
  const [post, setPost] = useState();
  const { id } = useParams();

  console.log(post.id);

  useEffect(() => {
    setPost(
      post.find((e) => {
        if (e.id == id) {
          return true;
        }
      })
    );
  }, []);

  return (
    <div className="post-card">
      {post && post.id ? (
        <>
          <h2>Stranger's Post:</h2>
          <div id="post-card-body">
            <h3>Post Title: {post.title}</h3>
            <h3>Post Description: {post.description}</h3>
            <h3>Price of Thing Posted: ${post.price}</h3>
            <h3>Willing to Deliver?: {post.willDeliver}</h3>
          </div>
          <Link to="/">Back to Home</Link>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default PostDeets;
