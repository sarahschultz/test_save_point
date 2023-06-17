import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDeets from './components/PostDeets';
import SinglePost from './components/SinglePost';
import AccountLogin from './components/registration/AccountLogin';
import RegisterUser from './components/registration/RegisterUser';
import Registration from './components/registration/Registration'
import './index.css';

const cohort = "2304-FTB-ET-WEB-FT";
const baseURL = `https://strangers-things.herokuapp.com/api/${cohort}`;

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
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

  useEffect(() => {
    console.log(loggedInUser, "is logged in yay")
    if (isLoggedIn === false) {
      setLoggedInUser(undefined)
    }
  },[isLoggedIn, loggedInUser])

  return (
    <>  
    <div id="top-header">
      <div id="dumblogo">
          <img className="actual-logo"></img>
        <h1>Not Stranger Things but Stranger's Things...</h1>
      </div>
        <h3>Buy, Sell, or Trade</h3>
        <Navbar setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser}/>
    </div>

      <Routes>
        <Route path="/" element={<Home allPosts={allPosts} />} />
        
        <Route path="/PostDeets/:id" element={<PostDeets allPosts={allPosts} />} />

        <Route path="/registration/AccountLogin" element={<AccountLogin setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser}/>} />
      </Routes>
    </>
  );
}

export default App;
