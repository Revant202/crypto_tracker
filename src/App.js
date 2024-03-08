import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CryptoPage from "./Screens/CryptoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/bitcoin" />} />
        <Route path="/:cryptoId" element={<CryptoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
