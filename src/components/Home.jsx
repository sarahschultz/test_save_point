import { useState, useEffect } from "react";
// import Registration from './registration/Registration';
import SinglePost from "./SinglePost";
import SearchBar from "./searchbar/SearchBar";
import AccountLogin from "./registration/AccountLogin";
import EditPost from "./editanddelete/EditPost";

function Home({ allPosts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedInUser(true);
    }
  }, []);

  const post = allPosts.post;

  return (
    <>
      {isLoggedIn && loggedInUser ? (
        <h1>Welcome Stranger!</h1>
      ) : (
        <h1>Welcome to Stranger's Things!</h1>
      )}
      <div id="search-bar-container">
        <SearchBar key={allPosts._id} allPosts={allPosts} />
      </div>
      <h3>Click anywhere on the post for the full post details.</h3>
      <h3>
        If you are logged-in as a Stranger, you can talk to other Strangers!
      </h3>
      <div>
        {allPosts.length > 1 ? (
          <div>
            {allPosts.map((post) => {
              // console.log(post)
              return (
                <div key={post._id}>
                  <SinglePost post={post} />
                </div>
              );
            })}
          </div>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </>
  );
}

export default Home;
