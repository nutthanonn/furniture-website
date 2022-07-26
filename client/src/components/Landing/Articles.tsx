import React from "react";
import styled from "styled-components";
import { Container } from "../../common/Container";
import ArticlesLeftContent from "./ArlicleLeftContent";
import ArticleCarousel from "./ArticleCarousel";

const Articles: React.FC = () => {
  return (
    <Box>
      <div>
        <ArticlesLeftContent />
        <ArticleCarousel />
      </div>
    </Box>
  );
};

export default Articles;

const Box = styled(Container)`
  margin-top: 11.25rem;
  display: flex;
`;
