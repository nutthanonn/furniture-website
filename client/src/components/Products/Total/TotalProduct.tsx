import React from "react";
import styled from "styled-components";
import { Heading2, Heading6, Paragraph1 } from "../../../common/TextSlyle";
import { Green } from "../../../common/Color";
import { Container } from "../../../common/Container";
import { Button } from "../../../common/ButtonStyle";
import SortIcon from "../../../assets/svg/sort.svg";

const TotalProduct: React.FC = () => {
  return (
    <Box>
      <BoxTotal>
        <Heading2 style={{ margin: 0 }}>Total Product</Heading2>
        <Heading6 color={Green}>123</Heading6>
      </BoxTotal>
      <BoxSort>
        <img src={SortIcon} alt="" />
        <Paragraph1>Sort By</Paragraph1>
      </BoxSort>
    </Box>
  );
};

export default TotalProduct;

const Box = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  /* border: 2px solid black; */
  > h6 {
    padding: 10px 16px;
    background: #f9f9f9;
    border-radius: 20px;
  }
`;

const BoxSort = styled(Button)`
  width: 139px;
  height: 50px;
  background-color: white;
  border: 1.5px solid #f9f9f9;
`;
