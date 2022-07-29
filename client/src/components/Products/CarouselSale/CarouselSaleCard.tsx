import React from "react";
import styled from "styled-components";
import Chip from "../../../shared/Chip";
import { Heading2, Heading3 } from "../../../common/TextSlyle";

interface CarouselSaleCardPropsType {
  title: string;
  status: string;
  subtitle: string;
  image: string;
}

const CarouselSaleCard: React.FC<CarouselSaleCardPropsType> = (props) => {
  const { image, title, subtitle } = props;

  return (
    <Img img={image}>
      <BoxTitle>
        <Chip title="Discount" />
        <Heading2 style={{ margin: ".1rem 0" }} color="white">
          {title}
        </Heading2>
        <Heading3Custom color="white">{subtitle}</Heading3Custom>
      </BoxTitle>
    </Img>
  );
};

export default CarouselSaleCard;

const Img = styled.div`
  position: relative;
  background-image: linear-gradient(
      360deg,
      #151411 -21.38%,
      rgba(21, 20, 17, 0) 66.65%
    ),
    url(${(props: { img: string }) => props.img});
  height: 500px;
  background-size: cover;
  display: flex;
  background-position: center;
  > * {
    margin: auto 8.25rem;
  }
`;

const BoxTitle = styled.div`
  width: 453px;
  height: 195px;
  /* border: 2px solid black; */
`;

const Heading3Custom = styled(Heading3)`
  opacity: 0.8;
`;
