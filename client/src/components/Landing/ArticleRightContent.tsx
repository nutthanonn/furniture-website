import React from "react";
import styled from "styled-components";
import {
  Paragraph1,
  Heading3,
  Heading6,
  Paragraph3,
} from "../../common/TextSlyle";
import { data } from "../../assets/test/data/articleBlog";
import { Gray } from "../../common/Color";

const ArticleRightContent: React.FC = () => {
  return (
    <Box>
      {data.map((item) => {
        return (
          <BoxContent key={item.id}>
            <Img src={item.image} alt="" />
            <BoxTitle>
              <Paragraph1 color={Gray} style={{ margin: 0 }}>
                {item.categories}
              </Paragraph1>
              <Heading3 style={{ margin: "1rem 0" }}>{item.title}</Heading3>
              <CustomParagraph1 color={Gray}>
                {item.description}
              </CustomParagraph1>
              <BoxUser>
                <img src={item.avatar} alt="" />
                <Heading6 style={{ flexGrow: 1 }}>By {item.createby}</Heading6>
                <Paragraph3 color={Gray}>{item.createDate}</Paragraph3>
              </BoxUser>
            </BoxTitle>
          </BoxContent>
        );
      })}
    </Box>
  );
};

export default ArticleRightContent;

const Box = styled.div`
  width: fit-content;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: calc(1.875rem / 2);

  /* border: 2px solid green; */
`;

const BoxContent = styled.div`
  display: flex;
  height: 16.25rem;
  width: fit-content;
  /* border: 2px solid black; */
`;

const Img = styled.img`
  width: 16.25rem;
  height: 16.25rem;
  object-fit: cover;
`;

const BoxTitle = styled.div`
  margin: 1.625rem 1rem;
  width: 20.5rem;
  height: 13rem;
  /* border: 2px solid black; */
`;

const CustomParagraph1 = styled(Paragraph1)`
  width: 20.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const BoxUser = styled.div`
  display: flex;
  align-items: center;
  /* border: 2px solid black; */
  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 0.5rem;
    object-fit: cover;
  }
  > * {
    margin: 0;
  }
`;
