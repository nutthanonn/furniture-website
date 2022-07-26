import React from "react";
import { Heading1 } from "../../common/TextSlyle";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import StarIcon from "../../assets/svg/star.svg";
import ArrowIconImg from "../../assets/svg/arrow.svg";
import { Container } from "../../common/Container";

const Title: React.FC = () => {
  return (
    <BoxHeader>
      <BoxTitle>
        <Heading1>
          Discover Furniture With High Quality Woo
          <img src={StarIcon} alt="star" />
        </Heading1>
      </BoxTitle>
      <SubTitle />
      <ArrowIcon src={ArrowIconImg} />
    </BoxHeader>
  );
};

export default Title;

const BoxHeader = styled(Container)`
  position: relative;
  margin-top: 6.25rem;
`;

const BoxTitle = styled.div`
  width: 45.25rem;
  text-align: center;
  margin-inline: auto;
`;

const ArrowIcon = styled.img`
  position: absolute;
  top: 30%;
  left: 5%;
`;
