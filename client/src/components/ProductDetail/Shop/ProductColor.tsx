import React from "react";
import styled from "styled-components";

interface ProductColorPropsType {
  color: string;
}

const ProductColor: React.FC<ProductColorPropsType> = (props) => {
  const { color } = props;

  return <Box val={color} />;
};

export default ProductColor;

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${(props: { val: string }) => props.val};
`;
