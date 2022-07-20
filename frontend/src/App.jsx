import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import "./nav.css";
import Dashboard from "@components/dashboard/Dashboard";
import Preferences from "@components/preferences/Preferences";
import Sorties from "@components/sorties/Sorties";
import Login from "@components/login/Login";
import useToken from "@components/app/useToken";
import { FaTimes, FaRegCalendarAlt, FaShoePrints, FaRunning } from "react-icons/fa";


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Hekaxapa</h1>
      <BrowserRouter>
        <div className="nav">
          <Link to="/sorties">
            <FaShoePrints className="icon" /> sorties
          </Link>
          <Link to="/add">
            <FaRegCalendarAlt className="icon" />
            Créer une sortie
          </Link>
          <Link to="/dashboard">Mon compte</Link>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
        <Routes>
          <Route path="/sorties" element={<Sorties />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
