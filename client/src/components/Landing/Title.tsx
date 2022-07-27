import React from "react";
import { Heading1 } from "../../common/TextSlyle";
import styled from "styled-components";
import SubTitle from "./SubTitle";
import StarIcon from "../../assets/svg/star.svg";
import ArrowIconImg from "../../assets/svg/arrow.svg";
import { Container } from "../../common/Container";
import { device } from "../../common/ScreenSize";

const Title: React.FC = () => {
  return (
    <BoxHeader>
      <BoxTitle>
        <Heading1Impl>
          Discover Furniture With High Quality Woo
          <img src={StarIcon} alt="star" />
        </Heading1Impl>
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

const Heading1Impl = styled(Heading1)`
  @media only screen and (${device.tablet}) {
    font-size: 44px;
  }

  @media only screen and (${device.mobileL}) {
    font-size: 25px;
  }
`;

const BoxTitle = styled.div`
  text-align: center;
  margin-inline: auto;
  padding: 0 15rem;
  @media only screen and (${device.laptop}) {
    padding: 0 3rem;
  }

  @media only screen and (${device.tablet}) {
    padding: 0 2rem;
  }

  @media only screen and (${device.mobileL}) {
    width: 300px;
  }

  @media only screen and (${device.mobileM}) {
    width: 230px;
  }

  /* border: 2px solid black; */
`;

const ArrowIcon = styled.img`
  position: absolute;
  top: 30%;
  left: 5%;
  @media only screen and (${device.laptop}) {
    left: -5%;
  }
  @media only screen and (${device.mobileL}) {
    top: -20%;
    left: -25%;
    transform: scale(0.6);
  }

  @media only screen and (${device.mobileM}) {
    left: -30%;
    transform: scale(0.6);
  }

  @media only screen and (${device.mobileM}) {
    left: -40%;
    transform: scale(0.4);
  }
`;
