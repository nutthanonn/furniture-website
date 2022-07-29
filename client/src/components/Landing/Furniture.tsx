import React from "react";
import styled from "styled-components";
import Rectangle from "assets/images/Rectangle2.png";
import { Container } from "common/Container";
import { device } from "common/ScreenSize";
import Search from "./Search";

const Furniture: React.FC = () => {
  return (
    <Container>
      <BoxImage>
        <Search />
        <Img src={Rectangle} alt="" />
      </BoxImage>
    </Container>
  );
};

export default Furniture;

const BoxImage = styled.div`
  /* border: 2px solid black; */
  position: relative;
  margin-top: 5.75rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media only screen and (${device.mobileL}) {
    align-items: flex-start;
  }
`;

const Img = styled.img`
  width: 100%;
`;
