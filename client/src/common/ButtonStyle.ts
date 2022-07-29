import { Gray, Green } from "./Color";
import styled from "styled-components";

interface propsType {
  bgcolor?: string;
  color?: string;
}

export const Button = styled.button`
  font-family: "Exdoxus-regular";
  outline: none;
  border: 0;
  background-color: ${(props: propsType) => props.bgcolor || Gray};
  color: ${(props: propsType) => props.color || Gray};
  display: flex;
  cursor: pointer;
  > * {
    margin: auto;
  }
`;

export const PrimaryButton = styled(Button)`
  width: 10.625rem;
  height: 3.375rem;
  background: ${Green};
`;
