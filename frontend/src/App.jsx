import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import "./nav.css";
import Dashboard from "@components/dashboard/Dashboard";
import Preferences from "@components/preferences/Preferences";
import Sorties from "@components/sorties/Sorties";
import Login from "@components/login/Login";
import CreateAccount from "@components/Account/CreateAccount";
import { FaRegCalendarAlt, FaShoePrints, FaRunning } from "react-icons/fa";

function App() {
  return (
    <div className="wrapper">
      <h1>Hekaxapa</h1>
      <BrowserRouter>
        <div className="nav">
          <Link to="/login">
            <FaRunning className="icon" />
            Login
          </Link>
          <Link to="/sorties">
            <FaRunning className="icon" />
            sorties
          </Link>
          <Link to="/add">
            <FaRegCalendarAlt className="icon" />
            Créer une sortie
          </Link>
          <Link to="/dashboard">
            <FaShoePrints className="icon" />
            Mon compte
          </Link>
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
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
