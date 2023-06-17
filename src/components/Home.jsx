import { useState, useEffect } from "react";
// import Registration from './registration/Registration';
import SinglePost from "./SinglePost";
import SearchBar from "./searchbar/SearchBar";
function Home({ allPosts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  const post = allPosts.post

  return (
    <>
        <div id="search-bar-container">
          <SearchBar key={allPosts._id} allPosts={allPosts} />
        </div>
    <div>
      {isLoggedIn && <h1>Welcome to Stranger's Things</h1>}

      {allPosts.length > 0 ? (
        <div key="single-post-">
          {allPosts.map((post) => {
            // console.log(post)
            return (
              <div>
                <SinglePost key={post._id} post={post} />
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
