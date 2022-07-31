import { Container } from "common/Container";
import React from "react";
import ProductCard from "shared/ProductCard";
import styled from "styled-components";
import { data } from "assets/test/data/popularProduct";

const ProductGrid: React.FC = () => {
  return (
    <Box>
      {data.map((item) => {
        return <ProductCard {...item} />;
      })}
    </Box>
  );
};

export default ProductGrid;

const Box = styled(Container)`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  margin-bottom: 80px; /* mock data */
`;
