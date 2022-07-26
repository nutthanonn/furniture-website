import React from "react";
import Navigation from "../shared/Navigation";
import Title from "../components/Landing/Title";
import Furniture from "../components/Landing/Furniture";
import Benefit from "../components/Landing/Benefit";
import PoppularProduct from "../components/Landing/PoppularProduct";
import PoppularProductCarousel from "../components/Landing/PoppularProductCarousel";
import OurProduct from "../components/Landing/OurProduct";
import Testimonials from "../components/Landing/Testimonials";
import TestimonialsCarousel from "../components/Landing/TestimonialsCarousel";
import Articles from "../components/Landing/Articles";
import LearnMore from "../components/Landing/LearnMore";
import Footer from "../shared/Footer";

const Landing: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Title />
      <Furniture />
      <Benefit />
      <PoppularProduct />
      <PoppularProductCarousel />
      <OurProduct />
      <Testimonials />
      <TestimonialsCarousel />
      <Articles />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default Landing;
