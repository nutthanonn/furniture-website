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
  height: 96px;
  display: flex;
  > * {
    margin: 1rem auto;
  }
  height: fit-content;

  /* border: 2px solid black; */
`;

const ParagraphCustom = styled(Paragraph1)`
  text-align: center;
  font-size: 1.5vw;
  width: 55.278vw;
  @media only screen and (${device.tablet}) {
    font-size: 2.5vw;
    width: 80vw;
  }
`;
