import React, { useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/marcheurs")
      .then(function (response) {
        // en cas de réussite de la requête
        console.warn(response);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.warn(error);
      })
      .then(function () {
        // dans tous les cas
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Les amis de mon groupe</h2>
      <table>
        <tr />
      </table>
    </div>
  );
}
