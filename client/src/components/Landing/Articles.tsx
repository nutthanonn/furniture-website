import React from "react";
import styled from "styled-components";
import { Container } from "../../common/Container";
import { device } from "../../common/ScreenSize";
import ArticlesLeftContent from "./ArlicleLeftContent";
import ArticleRightContent from "./ArticleRightContent";

const Articles: React.FC = () => {
  return (
    <Box>
      <ArticlesLeftContent />
      <ArticleRightContent />
    </Box>
  );
};

export default Articles;

const Box = styled(Container)`
  /* width: 100%; */
  margin-top: 11.25rem;
  display: flex;
  justify-content: center;

  gap: 3.125rem;
  @media only screen and (${device.laptop}) {
    flex-direction: column;
    align-items: center;
  }

  /* border: 2px solid black; */
`;
