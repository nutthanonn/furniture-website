import React from "react";
import CarouselSale from "components/Products/CarouselSale/CarouselSale";
import Search from "components/Products/SearchTab/Search";
import TotalProduct from "components/Products/Total/TotalProduct";
import ProductGrid from "components/Products/ShowProduct/ProductGrid";
import Title from "shared/Title";

const Products: React.FC = () => {
  return (
    <div>
      <Title />
      <CarouselSale />
      <Search />
      <TotalProduct />
      <ProductGrid />
    </div>
  );
};

export default Products;
