import React from "react";
import styled from "styled-components";
import { Container } from "../../common/Container";
import { Heading2 } from "../../common/TextSlyle";
import { PrimaryButton } from "../../common/ButtonStyle";
import Arrow from "../../assets/svg/arrow-article-right.svg";
import { Heading5 } from "../../common/TextSlyle";
import { device } from "../../common/ScreenSize";

const LearnMore: React.FC = () => {
  return (
    <Box>
      <Heading2>Join with me to get special discount</Heading2>
      <PrimaryButtonAnimation>
        <Heading5 color="white">Learn More</Heading5>
        <img src={Arrow} alt="" />
      </PrimaryButtonAnimation>
    </Box>
  );
};

export default LearnMore;

const Box = styled(Container)`
  margin-top: 11.25rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (${device.laptop}) {
    flex-direction: column;
    align-items: flex-start;
  }

  /* border: 2px solid black; */
`;

const PrimaryButtonAnimation = styled(PrimaryButton)`
  &:hover > img {
    transform: translateX(10px);
    transition: all 0.5s ease;
  }
  > img {
    transition: all 0.5s ease;
  }
`;
