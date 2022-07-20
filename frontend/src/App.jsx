import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "@components/dashboard/Dashboard";
import Preferences from "@components/preferences/Preferences";
import Sorties from "@components/sorties/Sorties";
import Login from "@components/login/Login";
import useToken from "@components/app/useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Hekaxapa</h1>
      <BrowserRouter>
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
