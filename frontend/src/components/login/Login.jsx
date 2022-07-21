import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "@services/api";
import "./login.css";

export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [username, setUserName] = useState();
  // eslint-disable-next-line no-unused-vars
  const [pass, setPassword] = useState();
  // eslint-disable-next-line no-unused-vars
  const [loginData, setLoginData] = React.useState({
    email: "olivier.pochic@orange.fr",
    passowrd: "7ipa",
  });

  const handleSubmit = async (e) => {
    const infos = {
      email: username,
      password: pass,
    };

    e.preventDefault();
    api
      .post("/login", infos, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          console.warn("Le login à réussi !");
          return true;
        }
        return false;
      })
      .catch((err) => {
        console.warn("Le login refusé.");
        console.error(err);
      });
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
