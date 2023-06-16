import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';
import PostDeets from './components/PostDeets';
import AccountLogin from './components/registration/AccountLogin';

const cohort = "2304-FTB-ET-WEB-FT";
const baseURL = `https://strangers-things.herokuapp.com/api/${cohort}`;

function App() {
  const [allPosts, setAllPosts] = useState([]);
  //set login

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${baseURL}/posts`);
        const data = await response.json();

        setAllPosts(data.data.posts);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>  
    <div id="top-header">
      <div id="dumblogo">
          <img></img>
      </div>
        <h1>Not Stranger Things but Stranger's Things...</h1>
        <h3>Buy, Sell, or Trade</h3>
        <Navbar />
    </div>

      <Routes>
        <Route path="/" element={<Home allPosts={allPosts} />} />
        
        <Route path="/PostDeets/:id" element={<PostDeets allPosts={allPosts} />} />


        <Route path="/registration/AccountLogin" element={<AccountLogin />} />
      </Routes>
    </>
  );
}

export default App;
