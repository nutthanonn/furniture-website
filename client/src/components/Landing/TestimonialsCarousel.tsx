import React from "react";
import styled, { keyframes } from "styled-components";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsCarousel: React.FC = () => {
  return (
    <Box>
      <SlideBox>
        {[1, 2, 3].map(() => {
          return <TestimonialsCard />;
        })}
      </SlideBox>
      <SlideBox>
        {[1, 2, 3].map(() => {
          return <TestimonialsCard />;
        })}
      </SlideBox>
    </Box>
  );
};

export default TestimonialsCarousel;

const SlideAnimation = keyframes`
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(-100%);
    }
`;

const Box = styled.div`
  padding: 3.125rem 0;
  display: flex;
  overflow: hidden;
`;

const SlideBox = styled.div`
  display: flex;
  animation: ${SlideAnimation} 30s linear infinite;
`;
