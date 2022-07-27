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
import { device } from "../../common/ScreenSize";

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
              <Heading3Impl style={{ margin: "1rem 0" }}>
                {item.title}
              </Heading3Impl>
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
  height: fit-content;
  width: fit-content;

  /* border: 2px solid black; */
`;

const Img = styled.img`
  width: 16.25rem;
  height: 16.25rem;
  object-fit: cover;
  @media only screen and (${device.mobileL}) {
    width: 210px;
    height: 210px;
  }

  @media only screen and (${device.mobileL}) {
    width: 170px;
    height: 170px;
  }
`;

const BoxTitle = styled.div`
  margin: 1.625rem 1rem;
  width: 100%;
  height: 13rem;
  @media only screen and (${device.mobileL}) {
    margin: auto 1rem;
  }
  /* border: 2px solid black; */
`;

const Heading3Impl = styled(Heading3)`
  width: calc(100% - 1rem);
  height: 4rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (${device.mobileL}) {
    font-size: 24px;
  }

  /* border: 2px solid black; */
`;

const CustomParagraph1 = styled(Paragraph1)`
  width: 20.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media only screen and (${device.mobileL}) {
    display: none;
    visibility: hidden;
  }
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
  > p {
    @media only screen and (${device.mobileL}) {
      display: none;
      visibility: hidden;
    }
  }

  > h6 {
    @media only screen and (${device.mobileL}) {
      font-size: 14px;
    }
  }
`;
