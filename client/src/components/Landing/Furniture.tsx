import React from "react";
import styled from "styled-components";
import Rectangle from "../../assets/images/Rectangle2.png";
import { Container } from "../../common/Container";
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
`;

const Img = styled.img`
  width: 100%;
`;
