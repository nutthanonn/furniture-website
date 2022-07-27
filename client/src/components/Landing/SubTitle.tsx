import React from "react";
import { Paragraph1 } from "../../common/TextSlyle";
import styled from "styled-components";
import { Gray } from "../../common/Color";
import { device } from "../../common/ScreenSize";

const SubTitle: React.FC = () => {
  return (
    <BoxSubtitle>
      <ParagraphCustom color={Gray}>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
        tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
      </ParagraphCustom>
    </BoxSubtitle>
  );
};

export default SubTitle;

const BoxSubtitle = styled.div`
  width: 49.75rem;
  height: 96px;
  margin-inline: auto;
  height: fit-content;
  @media only screen and (${device.laptop}) {
    width: 40rem;
  }

  @media only screen and (${device.mobileL}) {
    width: 16rem;
  }

  /* border: 2px solid black; */
`;

const ParagraphCustom = styled(Paragraph1)`
  text-align: center;
  padding-inline: 1rem;
  @media only screen and (${device.laptop}) {
    font-size: 18px;
  }

  @media only screen and (${device.mobileL}) {
    font-size: 14px;
  }

  @media only screen and (${device.mobileL}) {
    font-size: 12px;
  }
`;
