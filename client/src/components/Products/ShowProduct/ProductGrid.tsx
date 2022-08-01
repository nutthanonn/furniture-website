import { Container } from "common/Container";
import React from "react";
import ProductCard from "shared/ProductCard";
import styled from "styled-components";
import { data } from "assets/test/data/popularProduct";
import { device } from "common/ScreenSize";
import { CARD_HEIGH, CARD_WIDTH, IMAGE_HEIGH } from "common/CardSize";

const ProductGrid: React.FC = () => {
  return (
    <Box>
      {data.map((item, i) => {
        return (
          <ProductCardCustom key={i}>
            <ProductCard {...item} />
          </ProductCardCustom>
        );
      })}
    </Box>
  );
};

export default ProductGrid;

const Box = styled(Container)`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;

  @media only screen and (${device.laptop}) {
    grid-template-columns: auto auto;
  }
`;

const ProductCardCustom = styled.div`
  @media only screen and (${device.laptop}) {
    > div {
      width: calc(${CARD_WIDTH} - 7rem);
      height: calc(${CARD_HEIGH} - 5rem);
      > img {
        height: calc(${IMAGE_HEIGH} - 5rem);
      }
    }
  }
  /* border: 2px solid black; */
`;
