import { Black } from "./Color";
import styled from "styled-components";

interface propsType {
  color?: string;
}

export const Heading1 = styled.h1`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 64px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading2 = styled.h2`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 44px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading3 = styled.h3`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 24px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading4 = styled.h4`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 20px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading5 = styled.h5`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 18px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading6 = styled.h6`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 16px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel1 = styled.p`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 18px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel2 = styled.p`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 16px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel3 = styled.p`
  font-family: "Exdoxus-bold";
  line-height: 130%;
  font-size: 14px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Paragraph1 = styled.p`
  font-family: "Exdoxus-regular";
  font-size: 18px;
  line-height: 180%;
  color: ${(props: propsType) => props.color || Black};
`;

export const Paragraph2 = styled.p`
  font-family: "Exdoxus-regular";
  font-size: 16px;
  line-height: 180%;
  color: ${(props: propsType) => props.color || Black};
`;

export const Paragraph3 = styled.p`
  font-family: "Exdoxus-regular";
  line-height: 180%;
  font-size: 14px;
  color: ${(props: propsType) => props.color || Black};
`;
