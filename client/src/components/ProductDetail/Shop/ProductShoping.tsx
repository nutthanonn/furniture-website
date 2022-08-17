import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Heading2, Paragraph1, Heading5 } from "common/TextSlyle";
import { Gray, Green } from "common/Color";
import ProductColor from "./ProductColor";
import { PrimaryButton } from "common/ButtonStyle";
import type { ProductShopingPropsType } from "pages/ProductDetails";

//mock data
const ProductShoping: React.FC<ProductShopingPropsType> = (props) => {
  const { name, detail, image, price, full_detail, color } = props;
  const [productDescription, setProductDescription] = useState("");

  useEffect(() => {
    setProductDescription(full_detail.slice(0, 180));
  }, [productDescription, full_detail]);

  return (
    <Box>
      <Img src={image} alt="" />
      <BoxDetail>
        <Heading2>{name}</Heading2>
        <Paragraph1 color={Gray}>{detail}</Paragraph1>
        <Heading5>Color</Heading5>
        <BoxProductColor>
          {color.map((item, key) => {
            return <ProductColor color={item} key={key} />;
          })}
        </BoxProductColor>
        <Paragraph1Custom color={Gray}>{productDescription}</Paragraph1Custom>
        <Heading2 style={{ margin: "30px 0 50px 0" }}>${price}</Heading2>
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
  width: 100%;
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
