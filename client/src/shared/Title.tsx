import React from "react";
import styled from "styled-components";
import { Heading1, Paragraph1 } from "../common/TextSlyle";
import { Gray } from "../common/Color";

const Title: React.FC = () => {
  return (
    <Box>
      <Heading1>Products</Heading1>
      <Paragraph1 color={Gray}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </Paragraph1>
    </Box>
  );
};

export default Title;

const Box = styled.div`
  margin-top: 6.25rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  > * {
    margin: 0 auto;
  }

  > p {
    width: 37.5rem;
    margin: 2rem auto;
  }
`;
