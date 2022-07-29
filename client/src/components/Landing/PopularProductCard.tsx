import React from "react";
import styled from "styled-components";
import { Heading5, Heading3, Paragraph1 } from "common/TextSlyle";
import { Gray } from "common/Color";

interface PopularProductCardPropsType {
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
}

const PopularProductCard: React.FC<PopularProductCardPropsType> = (props) => {
  const { image, price, name, description, category } = props;

  return (
    <Box>
      <Img src={image} />
      <TextBox>
        <Heading5 style={{ margin: 0 }} color={Gray}>
          {category}
        </Heading5>
        <CustomHeading3>{name}</CustomHeading3>
        <Paragraph1 style={{ margin: 0 }} color={Gray}>
          {description}
        </Paragraph1>
        <Heading3 style={{ marginTop: "1.125rem" }}>${price}</Heading3>
      </TextBox>
    </Box>
  );
};

export default PopularProductCard;

const Box = styled.div`
  width: 24.625rem;
  height: 34rem;
  margin: auto;
  /* border: 2px solid black; */
`;

const Img = styled.img`
  width: 100%;
  height: 22.5rem;
  object-fit: cover;
`;

const TextBox = styled.div`
  margin-top: 1.625rem;
  width: 100%;
  height: 9.875rem;
  /* border: 2px solid black; */
`;

const CustomHeading3 = styled(Heading3)`
  margin: 0.875rem 0 0.375rem 0;
`;
