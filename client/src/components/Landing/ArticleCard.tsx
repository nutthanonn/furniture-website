import React from "react";
import styled from "styled-components";
import { device } from "common/ScreenSize";
import { Paragraph1, Heading3 } from "common/TextSlyle";

interface valTypes {
  id: number;
  categories: string;
  title: string;
  description: string;
}

interface ArticleCardProps {
  image: string;
  val: valTypes;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { image, val } = props;

  return (
    <Img img={image}>
      <Bottom>
        <Paragraph1 color="white" style={{ opacity: 0.7, margin: 0 }}>
          {val.categories}
        </Paragraph1>
        <Heading3 color="white" style={{ margin: "10px 0 6px 0" }}>
          {val.title}
        </Heading3>
        <CustomHeading3 color="white">{val.description}</CustomHeading3>
        <Readmore color="white">Read More</Readmore>
      </Bottom>
    </Img>
  );
};

export default ArticleCard;

const Img = styled.div`
  width: 36.375rem;
  height: 35.313rem;
  background-image: linear-gradient(
      180deg,
      rgba(21, 20, 17, 0) 34.49%,
      #151411 166.09%
    ),
    url(${(props: { img: string }) => props.img});
  background-size: cover;
  display: flex;
  align-items: flex-end;
  @media only screen and (${device.mobileL}) {
    width: 20rem;
    height: 20rem;
  }
`;

const Bottom = styled.div`
  width: 100%;
  margin: 0 0 1.625rem 1.625rem;
  /* border: 2px solid black; */
`;

const CustomHeading3 = styled(Paragraph1)`
  width: 31rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0.7;
  margin: 0 0 14px 0;
  width: calc(100% - 5.4rem);
`;

const Readmore = styled(Paragraph1)`
  margin-bottom: 0;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  /* border: 2px solid black; */
`;
