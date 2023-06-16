import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Registration from './registration/Registration';
import SinglePost from './SinglePost';
function Home({ allPosts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>

    {isLoggedIn && <h1>Welcome to Strangers Things</h1>}

    
      {allPosts.length > 0 ? (
        <div>
          {allPosts.map((post) => {
            // console.log(post)
            return (
            

            <SinglePost key={post._id} post={post}/>
              

            )
          })}
        </div>



      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default Home;
