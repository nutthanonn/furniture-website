import { device } from "./ScreenSize";
import { Black } from "./Color";
import styled from "styled-components";

const fontBold = "Exdoxus-bold";
const fontRegular = "Exdoxus-regular";

const defaultLineHeightHeader = 130;
const defaultLineHeightParagraph = 130;

const defaultHeader = `font-family: "${fontBold}"; line-height: ${defaultLineHeightHeader}%;`;
const defaultParagraph = `font-family: "${fontRegular}"; line-height: ${defaultLineHeightParagraph}%;`;

interface propsType {
  color?: string;
}

export const Heading1 = styled.h1`
  ${defaultHeader}
  font-size: 64px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading2 = styled.h2`
  ${defaultHeader}
  font-size: 44px;
  color: ${(props: propsType) => props.color || Black};

  @media only screen and (${device.mobileL}) {
    font-size: 24px;
  }
`;

export const Heading3 = styled.h3`
  ${defaultHeader}
  font-size: 24px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading4 = styled.h4`
  ${defaultHeader}
  font-size: 20px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Heading5 = styled.h5`
  ${defaultHeader}
  font-size: 18px;
  color: ${(props: propsType) => props.color || Black};

  @media only screen and (${device.mobileL}) {
    font-size: 16px;
  }
`;

export const Heading6 = styled.h6`
  ${defaultHeader}
  font-size: 16px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel1 = styled.p`
  ${defaultHeader}
  font-size: 18px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel2 = styled.p`
  ${defaultHeader}
  font-size: 16px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Ladel3 = styled.p`
  ${defaultHeader}
  font-size: 14px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Paragraph1 = styled.p`
  ${defaultParagraph}
  line-height: 180%;
  font-size: 18px;
  color: ${(props: propsType) => props.color || Black};

  @media only screen and (${device.mobileL}) {
    font-size: 14px;
  }
`;

export const Paragraph2 = styled.p`
  ${defaultParagraph}
  line-height: 180%;
  font-size: 16px;
  color: ${(props: propsType) => props.color || Black};
`;

export const Paragraph3 = styled.p`
  ${defaultParagraph}
  font-size: 14px;
  color: ${(props: propsType) => props.color || Black};
`;
