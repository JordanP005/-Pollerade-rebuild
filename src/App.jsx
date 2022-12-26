import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Terms&Conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default App;
