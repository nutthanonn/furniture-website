import React from "react";
import styled from "styled-components";
import { Yellow, Gray } from "common/Color";
import { device } from "common/ScreenSize";
import { Heading5, Heading2, Paragraph1 } from "common/TextSlyle";
import ArticleCarousel from "./ArticleCarousel";

const ArticlesLeftContent: React.FC = () => {
  return (
    <Box>
      <BoxTitle>
        <Heading5 color={Yellow} style={{ margin: 0 }}>
          Articles
        </Heading5>
        <Heading2 style={{ margin: "0.875rem 0 0 0" }}>
          The best furniture comes from Lalasia
        </Heading2>
      </BoxTitle>
      <BoxSubTitle>
        <Paragraph1 color={Gray} style={{ margin: 0 }}>
          Pellentesque etiam blandit in tincidunt at donec.
        </Paragraph1>
      </BoxSubTitle>
      <ArticleCarousel />
    </Box>
  );
};

export default ArticlesLeftContent;

const Box = styled.div`
  /* border: 2px solid black; */
`;

const BoxTitle = styled.div`
  width: 36rem;

  @media only screen and (${device.mobileL}) {
    width: 20rem;
  }
  /* border: 2px solid black; */
`;

const BoxSubTitle = styled.div`
  width: 34rem;
  margin: 1.875rem 0 3.125rem 0;
  @media only screen and (${device.mobileL}) {
    width: 20rem;
  }

  /* border: 2px solid black; */
`;
