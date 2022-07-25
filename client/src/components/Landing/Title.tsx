import React from "react";
import { Heading1 } from "../../common/TextSlyle";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import StarIcon from "../../assets/svg/star.svg";
import ArrowIconImg from "../../assets/svg/arrow.svg";

const Title: React.FC = () => {
  return (
    <BoxHeader>
      <BoxTitle>
        <Heading1>
          Discover Furniture With High Quality Woo
          <img src={StarIcon} />
        </Heading1>
      </BoxTitle>
      <SubTitle />
      <ArrowIcon src={ArrowIconImg} />
    </BoxHeader>
  );
};

export default Title;

const BoxHeader = styled.div`
  padding: 6.25rem;
  position: relative;
`;

const BoxTitle = styled.div`
  width: 45.25rem;
  text-align: center;
  margin-inline: auto;
`;

const ArrowIcon = styled.img`
  position: absolute;
  top: 40%;
  left: 5%;
`;
