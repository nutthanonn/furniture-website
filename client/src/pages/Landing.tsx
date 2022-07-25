import React from "react";
import Navigation from "../shared/Navigation";
import Title from "../components/Landing/Title";
import Furniture from "../components/Landing/Furniture";

const Landing: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Title />
      <Furniture />
    </div>
  );
};

export default Landing;
