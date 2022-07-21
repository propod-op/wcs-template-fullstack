import React, { useState } from "react";
import api from "@services/api";

export default function CreateAccount() {
  const [marcheur, setMarcheur] = useState({
    femme: 0,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMarcheur({
      ...marcheur,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (marcheur.password === marcheur.confirmpassword) {
      api
        .post("/marcheurs", marcheur, { withCredentials: true })
        .then((res) => res.data)
        .then((data) => {
          if (data) {
            console.warn("L'enregistrement à réussi !");
            setMessage("L'enregistrement à réussi !");
          }
        });
    } else {
      setMessage("Merci de saisir des mots de passe identiques.");
      console.warn("Merci de saisir des mots de passe identiques.");
    }
  };

  return (
    <div className="wrapper-create-account">
      <h1>Inscription</h1>
      <form className="" onSubmit={handleRegister}>
        <input
          type="text"
          name="pseudo"
          placeholder="Entrer un pseudo"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nom"
          placeholder="Entrer votre nom"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="prenom"
          placeholder="Entrer votre prénom"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="adresse_rue"
          placeholder="Entrer votre adresse (rue)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="adresse_cp"
          placeholder="Entrer votre code postal (cp)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="adresse_ville"
          placeholder="Entrer votre ville (ville)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Entrer votre email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tel"
          placeholder="Entrer votre telephone"
          onChange={handleChange}
          required
        />
        {/* <div className="radio-wrapper">
          <input type="radio" value="true" name="femme" /> Femme
          <input type="radio" value="false" name="femme" /> Homme
        </div> */}

        <input type="hidden" name="femme" value="0" />
        <input
          name="tel_urgence"
          type="text"
          placeholder="Numéro personne à appeler en cas d'urgence"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={handleChange}
          required
        />
        <input
          name="confirmpassword"
          type="password"
          placeholder="Confirmez votre mot de passe"
          onChange={handleChange}
          required
        />
        <p className="loginMessage">{message}</p>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}
