import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="product" element={<Landing />} />
    </Routes>
  );
};

export default App;
