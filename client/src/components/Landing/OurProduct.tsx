import React from "react";
import styled from "styled-components";
import { Container } from "common/Container";
import OurProductLeftContent from "./OurProductLeftContent";
import OurProductRightContent from "./OurProductRightContent";
import { device } from "common/ScreenSize";
import { DEFAULT_HOME_MARGIN } from "common/Space";

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
  margin-top: ${DEFAULT_HOME_MARGIN};
  display: flex;
  justify-content: center;
  gap: 3.125rem;
  @media only screen and (${device.laptop}) {
    flex-direction: column;
    align-items: center;
  }

  /* border: 2px solid black; */
`;
