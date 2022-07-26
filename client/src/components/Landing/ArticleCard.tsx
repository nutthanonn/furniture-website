import React from "react";
import styled from "styled-components";
import { Paragraph1, Heading3 } from "../../common/TextSlyle";

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
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const Bottom = styled.div`
  width: 100%;
  margin: 1.625rem;
  /* border: 2px solid black; */
`;

const CustomHeading3 = styled(Paragraph1)`
  text-overflow: ellipsis;
  width: 30rem;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0.7;
  margin: 0 0 14px 0;
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
