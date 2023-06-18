import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function PostDeets(props) {
  const [post, setPost] = useState({});
  const isLoggedIn = props.isLoggedIn;
  const { _id } = useParams();

  // console.log(_id);

  useEffect(() => {
    const foundPost = props.allPosts.find((p) => p._id === _id);

    console.log(foundPost);

    setPost(foundPost);
  }, [_id, props.post]);

  return (
    <div className="post-card">
      {post ? (
        <>
          <h2>Stranger's Post:</h2>
          <div id="post-card-body">
            <h3>Post Title: {post.title}</h3>
            <h3>Post Description: {post.description}</h3>
            <h3>Price of Thing Posted: {post.price}</h3>
            <h3>Created: {post.createdAt}</h3>
            <h3>Last Updated: {post.updatedAt}</h3>
          </div>
          
          <Link to="/">Go Back to All Stranger's Posts</Link>

          {props.isLoggedIn && (
            <>
              <button>Edit My Post</button>
              <button>Delete My Post</button>
              <button>Talk to Stranger</button>
            </>
          )}{" "}
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default PostDeets;
