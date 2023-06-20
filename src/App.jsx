import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDeets from "./components/PostDeets";
import SinglePost from "./components/SinglePost";
import AccountLogin from "./components/registration/AccountLogin";
import RegisterUser from "./components/registration/RegisterUser";
import Registration from "./components/registration/Registration";
import EditPost from "./components/editanddelete/EditPost";
import MessageDetails from "./components/messages/MessageDetails";
import MessageForm from "./components/messages/MessageForm";
import AccountMessages from "./components/accounthome/AccountMessages";
import "./index.css";

const cohort = "2304-FTB-ET-WEB-FT";
const baseURL = `https://strangers-things.herokuapp.com/api/${cohort}`;

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [message, setMessage] = useState(null);

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
    console.log(loggedInUser, "is logged in yay");
    if (isLoggedIn === false) {
      setLoggedInUser(undefined);
    }
  }, [isLoggedIn, loggedInUser]);

  return (
    <>
      <div id="top-header">
        <div id="dumblogo">
          <img className="actual-logo"></img>
          <h1>Not Stranger Things but Stranger's Things...</h1>
        </div>
        <h3>Buy, Sell, or Trade</h3>
        <Navbar
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          loggedInUser={loggedInUser}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home allPosts={allPosts} />} />
        <Route
          path="./components/EditPost"
          element={<EditPost allPosts={allPosts} loggedInUser={loggedInUser} />}
        />
        <Route
          path="/components/SinglePost"
          element={<SinglePost allPosts={allPosts} />}
        />

        <Route
          path="/components/PostDeets/:_id"
          element={
            <PostDeets
              allPosts={allPosts}
              isLoggedIn={isLoggedIn}
              loggedInUser={loggedInUser}
            />
          }
        />

        {/* <Route
          path="/message/:messageId"
          element={
            <MessageDetails
              messageId={messageId}
              isLoggedIn={isLoggedIn}
              loggedInUser={loggedInUser}
            />
          }
        /> */}

        <Route
          path="/account"
          element={
            <AccountMessages isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
          }
        />

        <Route
          path="/registration/AccountLogin"
          element={
            <AccountLogin
              setIsLoggedIn={setIsLoggedIn}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
