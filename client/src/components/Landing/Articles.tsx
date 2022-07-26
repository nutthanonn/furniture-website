import React from "react";
import styled from "styled-components";
import { Container } from "../../common/Container";
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
  margin-top: 11.25rem;
  display: flex;
  justify-content: center;
  gap: 3.125rem;
  /* border: 2px solid black; */
`;
