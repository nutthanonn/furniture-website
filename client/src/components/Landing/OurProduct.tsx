import React from "react";
import styled from "styled-components";
import { Container } from "../../common/Container";
import OurProductLeftContent from "./OurProductLeftContent";
import OurProductRightContent from "./OurProductRightContent";

const OurProduct: React.FC = () => {
  return (
    <Box>
      <OurProductLeftContent />
      <OurProductRightContent />
    </Box>
  );
};

export default OurProduct;

const Box = styled(Container)`
  margin-top: 11.25rem;
  display: flex;
  justify-content: center;
  gap: 3.125rem;
  /* border: 2px solid black; */
`;
