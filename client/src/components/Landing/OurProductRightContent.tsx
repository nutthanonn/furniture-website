import React from "react";
import OurProductNumber from "./OurProductNumber";
import Example2 from "../../assets/images/example2.png";
import styled from "styled-components";

const OurProductRightContent: React.FC = () => {
  return (
    <Box>
      <OurProductNumber />
      <Img src={Example2} alt="" />
    </Box>
  );
};

export default OurProductRightContent;

const Box = styled.div`
  /* border: 2px solid black; */
`;

const Img = styled.img`
  margin-top: 3rem;
`;
