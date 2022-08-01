import React from "react";
import CarouselSale from "components/Products/CarouselSale/CarouselSale";
import Search from "components/Products/SearchTab/Search";
import TotalProduct from "components/Products/Total/TotalProduct";
import ProductGrid from "components/Products/ShowProduct/ProductGrid";
import Title from "shared/Title";
import Paginate from "components/Products/Pagination/Paginate";
import { ProductStore } from "store/ProductStore";

const Products: React.FC = () => {
  return (
    <div>
      <Title />
      <CarouselSale />
      <Search store={ProductStore} />
      <TotalProduct />
      <ProductGrid store={ProductStore} />
      <Paginate store={ProductStore} />
    </div>
  );
};

export default Products;
