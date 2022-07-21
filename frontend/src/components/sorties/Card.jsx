import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./card.css";
import "leaflet/dist/leaflet.css";
// import { FaRegCheckCircle, FaTimes, FaRegCalendarAlt, FaThumbsDown, FaThumbsUp, FaSmileWink, FaShoePrints, FaRunning, FaHourglassHalf,FaHeartbeat,FaCommentDots,FaCocktail } from "react-icons/fa";
import {
  FaRegCheckCircle,
  FaRegCalendarAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";

export default function Card() {
  const position = [47.89703659550325, 1.8765192934232038];
  return (
    <div className="card">
      <h3>
        <span className="date-info">
          <FaRegCalendarAlt className="icon" />
          Le 13 aout 2022 à 18h15
        </span>
        Marche Nordique cardio à : Pont de l'europe
      </h3>
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
      <h3>
        <span className="presence-info">
          <FaRegCheckCircle className="icon" />
          Présent
        </span>
        Liste des participants
      </h3>
      <div className="ListeParticipants">
        <span>
          <FaThumbsDown className="icon" />
          Rodolphe
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Christine
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Hélène
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Nomaralonge
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Sophie
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Christine
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Eric
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Mouss
        </span>
        <span>
          <FaThumbsUp className="icon" />
          Helene
        </span>
        <span>
          <FaThumbsDown className="icon" />
          Domi
        </span>
        <span>
          <FaThumbsDown className="icon" />
          Laetitia
        </span>
      </div>
    </div>
  );
}
