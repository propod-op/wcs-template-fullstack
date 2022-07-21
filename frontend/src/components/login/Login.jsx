import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "@services/api";
import "./login.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [loginData, setLoginData] = React.useState({
    email: "olivier.pochic@orange.fr",
    passowrd: "7ipa",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .post("/marcheurs", loginData, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          console.warn("L'enregistrement à réussi !");
        }
      });

    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="">
      <h1>Merci de vous logger</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit"> Se logger </button>
        <Link to="/create-account">Créer un compte</Link>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
