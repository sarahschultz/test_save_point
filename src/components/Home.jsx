import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Registration from "./registration/Registration";
import { Routes, Route } from "react-router-dom";
import App from "../App";


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
   
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Strangers Things</h1>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route
          path="/register"
          element={<Registration setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </div>
  );
}

export default Home;