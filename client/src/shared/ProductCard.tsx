import React from "react";
import styled from "styled-components";
import { Heading5, Heading3, Paragraph1 } from "common/TextSlyle";
import { Gray } from "common/Color";
import {
  CARD_HEIGH,
  CARD_WIDTH,
  IMAGE_HEIGH,
  IMAGE_WIDTH,
} from "common/CardSize";
import { device } from "common/ScreenSize";

interface ProductCardPropsType {
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
}

const ProductCard: React.FC<ProductCardPropsType> = (props) => {
  const { image, price, name, description, category } = props;

  return (
    <Box>
      <Img src={image} />
      <TextBox id="text-box">
        <Heading5 style={{ margin: 0 }} color={Gray}>
          {category}
        </Heading5>
        <CustomHeading3>{name}</CustomHeading3>
        <Paragraph1 style={{ margin: 0 }} color={Gray}>
          {description}
        </Paragraph1>
        <Heading3 style={{ margin: 0, marginTop: ".8rem" }}>${price}</Heading3>
      </TextBox>
    </Box>
  );
};

export default ProductCard;

const Box = styled.div`
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGH};
  margin: auto;
  @media only screen and (${device.tablet}) {
    width: calc(${CARD_WIDTH} - 5rem);
    height: fit-content;
  }
  /* border: 2px solid black; */
`;

const Img = styled.img`
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGH};
  object-fit: cover;
`;

const TextBox = styled.div`
  margin-top: 1.625rem;
  width: 100%;
  height: fit-content;
  > p,
  h5,
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
  /* border: 2px solid green; */
`;

const CustomHeading3 = styled(Heading3)`
  margin: 0.875rem 0 0.375rem 0;

  /* border: 2px solid black; */
`;
