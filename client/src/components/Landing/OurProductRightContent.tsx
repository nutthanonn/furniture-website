import React from "react";
import OurProductNumber from "./OurProductNumber";
import Example2 from "../../assets/images/example2.png";
import styled from "styled-components";
import { device } from "../../common/ScreenSize";

const OurProductRightContent: React.FC = () => {
  return (
    <Box>
      <OurProductNumberImpl>
        <OurProductNumber />
      </OurProductNumberImpl>
      <Img src={Example2} alt="" />
    </Box>
  );
};

export default OurProductRightContent;

const Box = styled.div`
  /* border: 2px solid black; */
`;

const Img = styled.img`
  margin-top: 5.25rem;
  @media only screen and (${device.laptop}) {
    margin-top: 0;
    width: 595px;
    height: 260px;
  }

  @media only screen and (${device.mobileL}) {
    margin-top: 0;
    width: 327px;
    height: 200px;
  }

  object-fit: cover;
`;

const OurProductNumberImpl = styled.div`
  @media only screen and (${device.laptop}) {
    display: none;
    visibility: hidden;
  }
`;
