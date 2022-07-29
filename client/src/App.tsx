import React from "react";
import Landing from "pages/Landing";
import { Routes, Route } from "react-router-dom";
import Navigation from "shared/Navigation";
import Footer from "shared/Footer";
import Products from "pages/Products";

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="product" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
