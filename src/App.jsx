import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// import Home from './components/Home';
// import AllPosts from './components/AllPosts'
import SinglePost from './components/SinglePost';
import Registration from './components/registration/Registration';
import './index.css'

const cohort = "2304-FTB-ET-WEB-FT"
const baseURL = `https://strangers-things.herokuapp.com/api/${cohort}`;


function App() {
  const [allPosts, setAllPosts] = useState([])
  useEffect(() => {

    async function fetchPosts() {

      try {
        const response = await fetch(`${baseURL}/posts`)
        const translateddata = await response.json();

        setAllPosts(translateddata.data.posts)
        console.log(translateddata)
      } catch (error) {
        console.log(error);
      };
    };

    fetchPosts();
  }, []);


  return (
    <>

      <div id="navbar-container">
<Registration />
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/SinglePost">Single Post</Link>
       
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/SinglePost" element={<SinglePost />} />
          </Routes>

        </div>
      </div>
      <div>

        <h1>Not Stranger Things but Stranger's Things...</h1>
        <h3>Buy, Sell, or Trade</h3>
      </div>
      <h2>Stranger's Posts:</h2>
      {allPosts.length ?

        allPosts.map((post) => {

          return (

            <SinglePost key={post._id} setAllPosts={setAllPosts} post={post} />

          )

        }) :
        <p>Loading posts...</p>
      }



      {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
      {/* <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes> */}
    </>
  )
}

export default App