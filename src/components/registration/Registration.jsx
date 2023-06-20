import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import RegisterUser from "./RegisterUser";

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await RegisterUser(username, password)
      console.log(result)

      localStorage.setItem('token', result.token)
      setIsLoggedIn(true)

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id="home-register-box">
      <h2>Register as a New Stranger</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type='submit'>Submit</button>
        {/* think is in Ed's lecture to update State i think...? */}
      </form>
    </div>
  );
};

export default Register