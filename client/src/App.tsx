import React from "react";
import Landing from "pages/Landing";
import { Routes, Route } from "react-router-dom";
import Navigation from "shared/Navigation";
import Footer from "shared/Footer";
import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import { ProductStore } from "store/ProductStore";

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="product/*" element={<Products />} />
        <Route
          path="product/details/*"
          element={<ProductDetails store={ProductStore} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
