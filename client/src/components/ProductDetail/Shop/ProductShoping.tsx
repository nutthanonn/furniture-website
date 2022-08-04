import React, { useEffect, useState } from "react";
import styled from "styled-components";
import product2 from "assets/images/product2.png";
import { Heading2, Paragraph1, Heading5 } from "common/TextSlyle";
import { Gray, Green } from "common/Color";
import ProductColor from "./ProductColor";
import { PrimaryButton } from "common/ButtonStyle";

//mock data
const text =
  "Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...";

const ProductShoping: React.FC = () => {
  const [productDescription, setProductDescription] = useState("");

  useEffect(() => {
    setProductDescription(text.slice(0, 180));
  }, [productDescription]);

  return (
    <Box>
      <Img src={product2} alt="" />
      <BoxDetail>
        <Heading2>White Aesthetic Chair</Heading2>
        <Paragraph1 color={Gray}>Combination of wood and wool</Paragraph1>
        <Heading5>Color</Heading5>
        <BoxProductColor>
          <ProductColor color="#151411" />
          <ProductColor color="#314443" />
          <ProductColor color="#C5A26E" />
          <ProductColor color="#D8DBE0" />
        </BoxProductColor>
        <Paragraph1Custom color={Gray}>{productDescription}</Paragraph1Custom>
        <Heading2 style={{ margin: "30px 0 50px 0" }}>$99.98</Heading2>
        <BoxBtn>
          <PrimaryButton>
            <Heading5 color="white">Buy Now</Heading5>
          </PrimaryButton>
          <PrimaryButton
            style={{ backgroundColor: "white", border: "2px solid #F3F3F3" }}
          >
            <Heading5>Add to Cart</Heading5>
          </PrimaryButton>
        </BoxBtn>
      </BoxDetail>
    </Box>
  );
};

export default ProductShoping;

const Box = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  gap: 50px;
  /* border: 2px solid green; */
`;

const Img = styled.img`
  width: 600px;
  height: 100%;
  object-fit: cover;
`;

const BoxDetail = styled.div`
  width: 100%;
  height: 100%;

  /* border: 2px solid blue; */

  > h2 {
    margin-bottom: 0;
  }
  > h5 {
    margin-bottom: 20px;
  }
  > p {
    margin-top: 0.5rem;
  }
`;

const BoxProductColor = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
`;

const Paragraph1Custom = styled(Paragraph1)`
  width: 100%;
  max-height: 100px;
  cursor: pointer;

  /* border: 2px solid black; */

  &:after {
    content: "Read More";
    color: ${Green};
  }
`;

const BoxBtn = styled.div`
  display: flex;
  gap: 20px;
  > * {
    width: calc((100% - 20px) / 2);
  }
`;
