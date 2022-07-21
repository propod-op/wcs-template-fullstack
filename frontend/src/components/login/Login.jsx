import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "@services/api";
import "./login.css";

export default function Login() {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [message, setMessage] = useState("");
  // const [messageColor, setMessageColor] = useState("");

  const handleSubmit = async (e) => {
    const infos = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    };

    e.preventDefault();
    api
      .post("/login", infos, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          setMessage("Bravo, vous êtes connecté !");
          console.warn("Le login à réussi !");
          return true;
        }
        setMessage("Désolé, nous ne reconnaissons pas vos identifiants...");
        return false;
      })
      .catch((err) => {
        setMessage("Désolé, nous ne reconnaissons pas vos identifiants...");
        console.error(err);
      });
  };

  return (
    <div className="">
      <h1>Merci de vous logger</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" ref={inputEmailRef} />
        </label>
        <label>
          <p>Mot de passe</p>
          <input type="password" ref={inputPasswordRef} />
        </label>
        <button type="submit"> Se logger </button>
        <Link to="/create-account">Créer un compte</Link>
        <p className="loginMessage">{message}</p>
      </form>
    </div>
  );
}
