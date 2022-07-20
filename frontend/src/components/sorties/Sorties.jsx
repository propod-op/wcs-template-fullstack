import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./sorties.css";
import "leaflet/dist/leaflet.css";

//
// import { Icon } from "leaflet";
// import * as walkData from "./lieux.json";
// import Card from "./Card";

export default function Sorties() {
  // const [activePark, setActivePark] = useState(null);
  const position = [47.90472729399751, 1.9038029426086962];

  return (
    <div>
      <MapContainer
        className="map"
        center={position}
        zoom="16"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="propod.net">OpenStreetMap by Propod</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Marche Nordique cardio à : Pont de l'europe</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
