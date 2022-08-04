import { Container } from "common/Container";
import { DEFAULT_HOME_MARGIN } from "common/Space";
import ProductShoping from "components/ProductDetail/Shop/ProductShoping";
import React from "react";
import styled from "styled-components";

const ProductDetails: React.FC = () => {
  return (
    <Box>
      <ProductShoping />
    </Box>
  );
};

export default ProductDetails;

const Box = styled(Container)`
  margin-top: ${DEFAULT_HOME_MARGIN};
  margin-bottom: ${DEFAULT_HOME_MARGIN};
  /* border: 2px solid black; */
`;
