import React, { useState, useEffect } from "react";
import api from "@services/api";
import "./dashboard.css";

export default function Dashboard() {
  const [marcheurs, setMarcheursList] = useState("");
  const [marcheur, setMarcheurInfos] = useState({});

  useEffect(() => {
    api
      .get(`/marcheurs`)
      .then((res) => setMarcheursList(res.data.map((e) => e)))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    api
      .get(`/marcheurs/2`)
      .then((res) => setMarcheurInfos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <h2>Les amis de mon groupe</h2>
      <table className="table-moncompte listeAmis">
        {marcheurs &&
          marcheurs.map((element) => (
            <tr>
              <td>{element.nom}</td>
              <td>{element.prenom}</td>
              <td>{element.tel}</td>
              <td>
                <button className="changeInfo" type="button">
                  {" "}
                  +{" "}
                </button>
              </td>
            </tr>
          ))}
      </table>
      <h2>Mes informations</h2>

      <table className="table-moncompte info">
        <tr>
          <td>Pseudo : {marcheur.pseudo}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.nom}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.prenom}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.adresse_rue}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.adresse_cp}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.adresse_ville}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.email}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.tel}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
        <tr>
          <td>{marcheur.femme ? "Femme" : "Homme"}</td>
          <td>
            <button className="changeInfo" type="button">
              ...
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
