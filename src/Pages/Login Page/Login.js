import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate;

  const login = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      window.alert("Please enter all the fields.");
      return;
    }
    axios
      .post(`${base_url}/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.success === true) {
          window.location.href = "/";
        } else {
          setUserMessage(res.data.message);
          if (res.data.message === "Incorrect username") {
            alert("Please enter correct username.");
          } else if (res.data.message === "Incorrect password") {
            alert("Please enter correct password.");
          } else {
            console.log(res.data.message);
            alert("Incorrect username or password.");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Incorrect username or password.");
      });
  };

  return (
    <div className="login">
      <div className="first">
        <div className="wrapper">
          <span className="logo">FLIXXIT</span>
        </div>
      </div>

      <div className="container-one">
        <form>
          <h1>Sign In</h1>
          <input
            type="username"
            placeholder="username "
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to="/" className="login-btn">
            <button onClick={login}> Sign In</button>
          </Link>

          <span>
            New to Flixxit?{" "}
            <b>
              <Link to="/register">Register Now</Link>
            </b>
            {/* <p>{userMessage}</p> */}
            {userMessage && <div>{userMessage}</div>}
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
