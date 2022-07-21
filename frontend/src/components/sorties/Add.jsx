import React from "react";

export default function Add() {
  return (
    <div className="dashboard">
      <h2>Ajouter une nouvelle sortie</h2>
      <table className="table-nouvelle-sortie table-moncompte">
        <tr>
          <td>Jour et heure :</td>
          <td>
            <input
              type="datetime-local"
              name="datetime"
              placeholder="Choisir la date et heure de la sortie"
            />
          </td>
        </tr>
        <tr>
          <td>Lieux</td>
          <td>
            <input
              type="text"
              name="lieux"
              placeholder="Ville et lieux de la sortie"
            />
          </td>
        </tr>
        <tr>
          <td>GPS lat</td>
          <td>
            <input
              type="number"
              step="0.01"
              name="gps_lat"
              placeholder="Coordoonées GPS (latitude)"
            />
          </td>
        </tr>
        <tr>
          <td>GPS long</td>
          <td>
            <input
              type="number"
              step="0.01"
              name="gps_long"
              placeholder="Coordoonées GPS (longitude)"
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
