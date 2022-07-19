import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "@components/dashboard/Dashboard";
import Preferences from "@components/preferences/Preferences";

function App() {
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
