import React, { useState } from "react";
import {Link} from 'react-router-dom';



function SinglePost(props) {
  // console.log(props);
  const post = props.post


//   ((post) => {
//     if (post._id == Number(id)) {
//         return post
//     }
// })[0];
  return (
    <div id="single-post-box">
      <h2>Stranger's Post Details:
      </h2>
    
       <p>Title: {post.title}</p>
       <p>Description: {post.description}</p>
    <div>

       <Link to={`/PostDeets/${post._id}`}>See Stranger Post's Details</Link>
      </div>
    </div>
  );
}
export default SinglePost;
