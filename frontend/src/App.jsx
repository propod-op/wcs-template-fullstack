import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "@components/dashboard/Dashboard";
import Preferences from "@components/preferences/Preferences";
import Login from "@components/login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
