import React from "react";
import { Green } from "common/Color";
import styled from "styled-components";
import { Paragraph3 } from "common/TextSlyle";

interface ChipProps {
  title: string;
  color?: string;
  bgcolor?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { title, color, bgcolor } = props;

  return (
    <Box val={bgcolor}>
      <Paragraph3 color={color ? color : "white"}>{title}</Paragraph3>
    </Box>
  );
};

export default Chip;

const Box = styled.span`
  display: block;
  width: fit-content;
  background-color: ${(props: { val?: string }) => props.val || Green};
  padding: 0.7rem 1.2rem;
  border-radius: 20px;
  > p {
    margin: 0;
  }
`;
