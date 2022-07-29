import React from "react";
import styled from "styled-components";
import { blogData } from "assets/test/data/blog";
import { Heading3, Paragraph1 } from "common/TextSlyle";
import { Gray } from "common/Color";
import { device } from "common/ScreenSize";

const BenefitBlog: React.FC = () => {
  return (
    <Box>
      {blogData.map((item) => {
        return (
          <Blog key={item.id}>
            <Img>
              <img src={item.image} alt="" />
            </Img>
            <Heading3>{item.title}</Heading3>
            <Paragraph1 color={Gray}>{item.subtitle}</Paragraph1>
          </Blog>
        );
      })}
    </Box>
  );
};

export default BenefitBlog;

const Box = styled.div`
  display: flex;
  gap: 1.813rem;
  height: fit-content;
  width: fit-content;
  margin-top: 3.125rem;
  @media only screen and (${device.laptop}) {
    flex-direction: column;
  }
`;

const Blog = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 100px rgba(175, 173, 181, 0.1);
  padding: 1.5rem 1.5rem 0;

  /* border: 2px solid black; */
`;

const Img = styled.div`
  width: 62px;
  height: 62px;
  background: #f9f9f9;
  border-radius: 50%;
  display: flex;
  > * {
    margin: auto;
  }
`;
