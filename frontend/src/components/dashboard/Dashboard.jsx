import React, { useState, useEffect } from "react";
import api from "@services/api";
import "./dashboard.css";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function Dashboard() {
  const [marcheurs, setMarcheursList] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [marcheur, setMarcheurInfos] = useState({});
  const [cookieInfos, setCookieInfos] = useState({});

  useEffect(() => {
    api
      .get(`/marcheurs`)
      .then((res) => setMarcheursList(res.data.map((e) => e)))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const jwt = Cookies.get("cookie_hekaxapa");
    const token = jwt;
    const decoded = jwtDecode(token);
    setCookieInfos(decoded);
    console.warn(decoded);
    api
      .get(`/marcheurs/2`)
      .then((res) => setMarcheurInfos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <h2>Les amis de mon groupe</h2>
      <table className="table-moncompte listeAmis">
        <thead>
          <tr className="entete">
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <h2>Mes informations</h2>

      <table className="table-moncompte info">
        <tbody>
          <tr>
            <td>Pseudo : {cookieInfos.pseudo}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.nom}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.prenom}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.adresse}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.email}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.tel}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
          <tr>
            <td>{cookieInfos.femme ? "Femme" : "Homme"}</td>
            <td>
              <button className="changeInfo" type="button">
                ...
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
