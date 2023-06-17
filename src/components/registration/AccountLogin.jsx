import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../index.css';

function AccountLogin(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate()
  const setIsLoggedIn=props.setIsLoggedIn;
  const setLoggedInUser=props.setLoggedInUser;

  const login = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedIn(true);
    setLoggedInUser(username);
    setPassword('');
    navigate('/')
  };

  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
    setLoggedInUser('');
  };

  return (
    <>
      <div className="account-form-container">
        <h1>Login to Stranger Account</h1>
        <>
          <form className="login-form" action="">
            <label htmlFor="username"></label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              placeholder="Your Stranger Username"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Your Stranger Password"
            />
            <button type="submit" onClick={login}>
              Login to My Stranger Account
            </button>
          </form>
        </>
      </div>
    </>
  );
}

export default AccountLogin;
